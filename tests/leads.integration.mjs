// Integration check against a running local Next server and the local MySQL DB.
import assert from 'node:assert/strict';
import { randomBytes } from 'node:crypto';
import nextEnv from '@next/env';
const { loadEnvConfig } = nextEnv;
import { hash } from 'bcryptjs';
import { SignJWT } from 'jose';

loadEnvConfig(process.cwd(), true);
const base = process.env.TEST_APP_URL || process.env.NEXT_PUBLIC_APP_URL;
if (process.env.NODE_ENV === 'production' || !['localhost', '127.0.0.1'].includes(new URL(base).hostname) ||
    !['localhost', '127.0.0.1'].includes(new URL(process.env.DATABASE_URL).hostname)) {
  throw new Error('Run only against a local app and database.');
}
const { PrismaClient } = await import('@prisma/client');
const prisma = new PrismaClient();
const marker = randomBytes(10).toString('hex');
const email = `integration-${marker}@example.com`;
const password = `${randomBytes(20).toString('hex')}!aA1`;
const leadEmail = `lead-${marker}@example.com`;
let user;
let checks = 0;
function check(actual, expected) { assert.equal(actual, expected); checks++; }
async function send(path, { method = 'GET', data, cookie, origin = base, raw } = {}) {
  return fetch(`${base}${path}`, {
    method, redirect: 'manual',
    headers: { Origin: origin, ...(data || raw !== undefined ? { 'Content-Type': 'application/json' } : {}), ...(cookie ? { Cookie: cookie } : {}) },
    body: raw !== undefined ? raw : data ? JSON.stringify(data) : undefined,
  });
}
try {
  user = await prisma.user.create({ data: { name: 'Integration test', email, password: await hash(password, 12) } });
  for (const path of ['/admin', '/admin/leads']) {
    const response = await send(path);
    check(response.status, 307); check(new URL(response.headers.get('location'), base).pathname, '/admin-login');
  }
  check((await send('/admin-login')).status, 200);
  check((await send('/')).status, 200);
  check((await send('/api/auth/login', { method: 'POST', origin: 'https://evil.example', data: { email, password } })).status, 403);
  check((await send('/api/auth/login', { method: 'POST', data: { email, password: 'WrongPassword123!' } })).status, 401);
  const missing = await send('/api/auth/login', { method: 'POST', data: { email: `missing-${email}`, password } });
  check(missing.status, 401); check((await missing.json()).message, 'Correo o contraseña incorrectos.');
  const login = await send('/api/auth/login', { method: 'POST', data: { email: email.toUpperCase(), password } });
  check(login.status, 200);
  const setCookie = login.headers.get('set-cookie');
  assert.match(setCookie, /HttpOnly/i); assert.match(setCookie, /SameSite=lax/i); assert.match(setCookie, /Max-Age=28800/i);
  const cookie = setCookie.split(';')[0];
  check((await send('/admin/leads', { cookie })).status, 200);
  const signedIn = await send('/admin-login', { cookie });
  check(signedIn.status, 307); check(new URL(signedIn.headers.get('location'), base).pathname, '/admin/leads');
  check((await send('/api/leads', { method: 'POST', raw: '{invalid' })).status, 400);
  check((await send('/api/leads', { method: 'POST', raw: 'x'.repeat(17000) })).status, 413);
  check((await send('/api/leads', { method: 'POST', data: { fullName: 'x' } })).status, 400);
  const lead = { fullName: 'Prospecto de prueba', phone: '+57 305-397 1539', email: leadEmail.toUpperCase(), message: '<script>alert("test")</script> Solicito información.', website: '' };
  check((await send('/api/leads', { method: 'POST', data: { ...lead, website: 'spam.example' } })).status, 201);
  check(await prisma.lead.count({ where: { email: leadEmail } }), 0);
  check((await send('/api/leads', { method: 'POST', data: lead })).status, 201);
  const saved = await prisma.lead.findFirstOrThrow({ where: { email: leadEmail } });
  check(saved.status, 'NUEVO'); check(saved.email, leadEmail);
  const route = `/api/leads/${saved.id}/status`;
  check((await send(route, { method: 'PATCH', data: { status: 'CONTACTADO' } })).status, 401);
  check((await send(route, { method: 'PATCH', cookie, origin: 'https://evil.example', data: { status: 'CONTACTADO' } })).status, 403);
  for (const id of ['0', '-1', 'abc', '2147483648', '1.5']) {
    check((await send(`/api/leads/${id}/status`, { method: 'PATCH', cookie, data: { status: 'CONTACTADO' } })).status, 400);
  }
  check((await send(route, { method: 'PATCH', cookie, data: { status: 'INVALID' } })).status, 400);
  check((await send('/api/leads/2147483647/status', { method: 'PATCH', cookie, data: { status: 'CONTACTADO' } })).status, 404);
  for (const status of ['CONTACTADO', 'INTERESADO', 'SEGUIMIENTO', 'CITA_AGENDADA', 'NO_INTERESADO', 'CERRADO', 'SPAM', 'NUEVO']) {
    check((await send(route, { method: 'PATCH', cookie, data: { status } })).status, 200);
    check((await prisma.lead.findUniqueOrThrow({ where: { id: saved.id } })).status, status);
  }
  const html = await (await send('/admin/leads', { cookie })).text();
  assert.ok(html.includes('&lt;script&gt;')); assert.ok(html.includes('https://wa.me/573053971539'));
  for (const [role, expires] of [['VISITANTE', '8h'], ['ADMINISTRADOR', '-1s']]) {
    const token = await new SignJWT({ userId: user.id, email, role }).setProtectedHeader({ alg: 'HS256' }).setIssuedAt().setExpirationTime(expires).setIssuer('gestor-negocios').setAudience('gestor-admin').sign(new TextEncoder().encode(process.env.AUTH_SECRET));
    check((await send(route, { method: 'PATCH', cookie: `gestor_admin_session=${token}`, data: { status: 'SPAM' } })).status, 401);
  }
  check((await send(route, { method: 'PATCH', cookie: 'gestor_admin_session=invalid', data: { status: 'SPAM' } })).status, 401);
  await prisma.user.update({ where: { id: user.id }, data: { active: false } });
  check((await send(route, { method: 'PATCH', cookie, data: { status: 'SPAM' } })).status, 401);
  check((await send('/api/auth/login', { method: 'POST', data: { email, password } })).status, 401);
  const logout = await send('/api/auth/logout', { method: 'POST', cookie });
  check(logout.status, 200); assert.match(logout.headers.get('set-cookie'), /Max-Age=0/i);
  console.log(`OK: ${checks} integration assertions; cookie flags, escaped HTML and WhatsApp checked.`);
} finally {
  await prisma.lead.deleteMany({ where: { email: leadEmail } });
  if (user) await prisma.user.delete({ where: { id: user.id } });
  await prisma.$disconnect();
}

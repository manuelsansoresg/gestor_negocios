import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SignJWT, jwtVerify, type JWTPayload } from "jose";
import { prisma } from "@/lib/prisma";

const COOKIE_NAME = "gestor_admin_session";
const SESSION_SECONDS = 8 * 60 * 60;
const issuer = "gestor-negocios";
const audience = "gestor-admin";
type Session = { userId: number; email: string; role: "ADMINISTRADOR" };

function signingKey() {
  const secret = process.env.AUTH_SECRET;
  if (!secret || new TextEncoder().encode(secret).length < 32) {
    throw new Error("AUTH_SECRET debe configurarse en el servidor con al menos 32 bytes aleatorios.");
  }
  return new TextEncoder().encode(secret);
}

const cookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
};

export async function createSession(session: Session) {
  const token = await new SignJWT({ ...session })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setIssuedAt().setExpirationTime(`${SESSION_SECONDS}s`)
    .setIssuer(issuer).setAudience(audience)
    .sign(signingKey());
  (await cookies()).set(COOKIE_NAME, token, {
    ...cookieOptions, maxAge: SESSION_SECONDS,
    expires: new Date(Date.now() + SESSION_SECONDS * 1000),
  });
}

export const getSession = cache(async (): Promise<Session | null> => {
  const key = signingKey();
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  if (!token) return null;
  let payload: JWTPayload;
  try {
    ({ payload } = await jwtVerify(token, key, {
      algorithms: ["HS256"], issuer, audience,
      requiredClaims: ["iat", "exp", "userId", "email", "role"],
      maxTokenAge: `${SESSION_SECONDS}s`,
    }));
  } catch { return null; }
  if (typeof payload.userId !== "number" || !Number.isSafeInteger(payload.userId) ||
      payload.userId <= 0 || payload.userId > 2147483647 ||
      typeof payload.email !== "string" || payload.role !== "ADMINISTRADOR") return null;

  // Recheck the account so deleted or deactivated administrators lose access.
  const user = await prisma.user.findUnique({
    where: { id: payload.userId },
    select: { id: true, email: true, role: true, active: true },
  });
  if (!user?.active || user.role !== "ADMINISTRADOR" || user.email !== payload.email) return null;
  return { userId: user.id, email: user.email, role: user.role };
});

export async function requireAdmin() {
  const session = await getSession();
  if (!session) redirect("/admin-login");
  if (session.role !== "ADMINISTRADOR") redirect("/");
  return session;
}

export async function destroySession() {
  (await cookies()).set(COOKIE_NAME, "", { ...cookieOptions, maxAge: 0, expires: new Date(0) });
}

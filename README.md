This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Leads y administración

El formulario existente de contacto guarda prospectos en MySQL mediante Prisma.
Acceso: `/admin-login`; panel: `/admin/leads`; `/admin` redirige al panel.
Los administradores se crean exclusivamente mediante un script privado; no hay registro público.

### Configuración local

Requisitos: Node.js compatible con Next.js 16 (20.9 o superior), npm y MySQL en ejecución.
Se conservó el `.env` existente. Next y Prisma cargan `.env.local` con prioridad sobre `.env`;
las variables ya definidas por el proceso tienen prioridad sobre los archivos.
No copies `.env.local` al servidor de producción.

1. Configura `.env.local` siguiendo `.env.example`, con la conexión de tu MySQL local y
   `NEXT_PUBLIC_APP_URL="http://localhost:3000"`. Usa el mismo origen y puerto al abrir el sitio.
2. Genera un secreto distinto en cada entorno: `openssl rand -hex 48`.
3. Crea la base si no existe, desde una sesión MySQL autenticada (`mysql -u root -p`):

```sql
CREATE DATABASE IF NOT EXISTS gestor CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

```bash
npm install
npx prisma generate
npx prisma migrate dev --name create_users_and_leads
npm run admin:create
npm run dev
```

La migración inicial es `20260902191505_create_users_and_leads` y solo crea `users` y `leads`.
Los cambios futuros del esquema se realizan con nuevas migraciones. No ejecutes `migrate reset`
ni aceptes un reinicio de la base si contiene información que debas conservar.
Si ya existen tablas ajenas a Prisma, revisa primero cómo incorporar su esquema e historial.

### Administradores locales

Archivo privado: `scripts/local/create-user.ts` (ignorado por Git, permisos de archivo 600).

```bash
npx tsx scripts/local/create-user.ts
# Equivalente:
npm run admin:create
```

Incluye David Aldana (`davidaldana97@hotmail.com`) y Manuel Sansores (`manuelsansoresg@gmail.com`).
Las contraseñas aleatorias iniciales están solamente en ese archivo local y se entregan
al propietario del proyecto; no están en esta documentación ni en archivos versionados.
`createUser(name, email, password)` normaliza el correo, valida la contraseña,
genera bcrypt con coste 12 y hace upsert. Al volver a ejecutar el script se reemplazan
las contraseñas de esos usuarios por las que contiene el archivo y se activan sus cuentas.
Para cambiar una contraseña, actualiza el archivo privado y vuelve a ejecutarlo.

El script no se incluye al clonar Git. Para provisionar AWS, transfiérelo por un canal
privado autorizado, cambia las contraseñas por valores nuevos exclusivos de producción
mínimo de 16 caracteres, y ejecútalo allí con `NODE_ENV=production` después de migrar.
Puede retirarse del servidor una vez provisionados los usuarios. No lo sirvas como archivo público.

### Producción en AWS Lightsail

Configura `.env` en la raíz (no subirlo a Git):

```dotenv
DATABASE_URL="mysql://USUARIO:PASSWORD@HOST:3306/gestor"
AUTH_SECRET="REEMPLAZAR_POR_LA_SALIDA_DE_OPENSSL_RAND_HEX_48"
NEXT_PUBLIC_APP_URL="https://gestordenegocios.com"
```

Usa el host real de MySQL; codifica los caracteres especiales del usuario o contraseña
para una URL. Mantén `.env.local` fuera del despliegue y protege `.env` con `chmod 600 .env`.
Configura `NODE_ENV=production` para el proceso y usa HTTPS: las cookies de producción
son `Secure`. `NEXT_PUBLIC_APP_URL` debe coincidir exactamente con el origen público
(protocolo, dominio y puerto); se usa para comprobar el origen de las solicitudes.
Redirige los dominios alternativos al dominio canónico. El proxy no debe eliminar el header `Origin`.

Después de copiar el código y configurar el entorno:

```bash
npm install
npx prisma generate
NODE_ENV=production npx prisma migrate deploy
npm run build
pm2 restart gestor-negocios --update-env
```

Para el primer arranque, si aún no existe el proceso PM2:

```bash
NODE_ENV=production pm2 start npm --name gestor-negocios -- start
pm2 save
```

La aplicación escucha mediante `npm start`; configura el proxy HTTPS de Lightsail
hacia ese proceso y el acceso privado a MySQL. Aplica migraciones antes de reiniciar.
No se realizó ningún despliegue remoto desde esta implementación.

El build usa `next build --webpack`: Turbopack encontró un error de permisos al abrir
un puerto interno en el entorno de trabajo. No se cambió la versión de Next.js ni React.
La fuente Geist ya existente requiere acceso a Google Fonts durante el build.

### Comprobaciones

```bash
npm run lint
npm run typecheck
npm run build
# Con npm run dev y MySQL local activos:
node tests/leads.integration.mjs
# Si usas otro origen local, configúralo también al arrancar Next:
# TEST_APP_URL=http://localhost:3001 node tests/leads.integration.mjs
```

La prueba crea datos propios identificados aleatoriamente y los elimina al terminar.
Verifica rutas protegidas, login, cookie, logout, validaciones, honeypot, persistencia,
los ocho estados, IDs inválidos, inexistentes, sesiones expiradas/alteradas,
cuentas inactivas, HTML escapado y enlaces de WhatsApp. Solo admite entorno y MySQL locales.

Seguridad implementada: JWT HS256 con emisor, audiencia y caducidad de ocho horas;
cookie HttpOnly, SameSite=Lax y Secure en producción; cuentas activas comprobadas
contra MySQL; autorización junto a la consulta y en la API; origen exacto para evitar CSRF;
JSON limitado a 16 KiB; validaciones Zod y errores públicos genéricos.
Logout elimina la cookie de ese navegador. Una copia robada del JWT sigue siendo válida
hasta su expiración salvo que se desactive/elimine el usuario o se rote `AUTH_SECRET`.
No hay revocación por dispositivo ni rate limiting distribuido; las APIs indican dónde agregarlo.
El listado no está paginado por ahora. WhatsApp utiliza los dígitos del teléfono recibido;
para que el enlace funcione, el prospecto debe proporcionar su código de país.

`npm audit` reportó tres entradas de severidad alta de una misma dependencia transitiva:
`deepmerge-ts`, propagada a `@prisma/config` y `prisma`. La sugerencia automática implicaba
cambiar la versión principal de Prisma; no se aplicó una actualización incompatible.

### Archivos de esta implementación

- Base y migraciones: `prisma/schema.prisma`, `prisma.config.ts`,
  `prisma/migrations/20260902191505_create_users_and_leads/migration.sql`, `prisma/migrations/migration_lock.toml`.
- Servidor: `src/lib/prisma.ts`, `src/lib/auth.ts`, `src/lib/http.ts`,
  `src/lib/validations/lead.ts`, `src/lib/validations/auth.ts`.
- APIs: `src/app/api/leads/route.ts`, `src/app/api/leads/[id]/status/route.ts`,
  `src/app/api/auth/login/route.ts`, `src/app/api/auth/logout/route.ts`.
- Formularios: `src/components/forms/LeadForm.tsx`, `src/components/forms/LoginForm.tsx`.
- Panel: `src/components/admin/LeadTable.tsx`, `src/components/admin/LogoutButton.tsx`,
  `src/app/admin-login/page.tsx`, `src/app/admin/layout.tsx`, `src/app/admin/page.tsx`,
  `src/app/admin/leads/page.tsx`, `src/app/admin/error.tsx`.
- Integración existente: `src/components/sections/Contact.tsx`, `src/components/layout/Header.tsx`,
  `src/components/ui/ScrollReveal.tsx`, `src/app/robots.ts`.
- Configuración y verificación: `.gitignore`, `.env.example`, `package.json`,
  `package-lock.json`, `tests/leads.integration.mjs`, este README.
- Privados: `.env.local`, `scripts/local/create-user.ts`; `.env` existente conservado.

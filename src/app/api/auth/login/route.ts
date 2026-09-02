import { compare, hash } from "bcryptjs";
import { randomBytes } from "node:crypto";
import { prisma } from "@/lib/prisma";
import { createSession } from "@/lib/auth";
import { loginSchema } from "@/lib/validations/auth";
import { handleApiError, json, readJson, verifyOrigin } from "@/lib/http";

let dummyHash: Promise<string> | undefined;
const invalid = () => json({ ok: false, message: "Correo o contraseña incorrectos." }, 401);

export async function POST(request: Request) {
  try {
    verifyOrigin(request);
    // Add shared IP/account rate limiting here before enabling high-volume access.
    const result = loginSchema.safeParse(await readJson(request));
    if (!result.success) return invalid();
    const { email, password } = result.data;
    const user = await prisma.user.findUnique({ where: { email } });
    // Perform bcrypt even for unknown accounts to avoid a fast enumeration path.
    dummyHash ??= hash(randomBytes(32).toString("hex"), 12);
    const matches = await compare(password, user?.password ?? await dummyHash);
    if (!user?.active || !matches || user.role !== "ADMINISTRADOR") return invalid();
    await createSession({ userId: user.id, email: user.email, role: user.role });
    return json({ ok: true });
  } catch (error) { return handleApiError(error, "login"); }
}

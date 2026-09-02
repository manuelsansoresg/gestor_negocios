import { LeadStatus, Prisma } from "@prisma/client";
import { z } from "zod";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { handleApiError, json, readJson, verifyOrigin } from "@/lib/http";

const statusSchema = z.object({ status: z.enum(LeadStatus) });

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    verifyOrigin(request);
    const session = await getSession();
    if (!session) return json({ ok: false, message: "Inicia sesión para continuar." }, 401);
    if (session.role !== "ADMINISTRADOR") return json({ ok: false, message: "Acceso no autorizado." }, 403);
    const { id } = await params;
    if (!/^[1-9]\d*$/.test(id) || !Number.isSafeInteger(Number(id)) || Number(id) > 2147483647) {
      return json({ ok: false, message: "Identificador inválido." }, 400);
    }
    const result = statusSchema.safeParse(await readJson(request));
    if (!result.success) return json({ ok: false, message: "Estado inválido." }, 400);
    await prisma.lead.update({ where: { id: Number(id) }, data: result.data, select: { id: true } });
    return json({ ok: true });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
      return json({ ok: false, message: "El prospecto ya no existe." }, 404);
    }
    return handleApiError(error, "lead-status");
  }
}

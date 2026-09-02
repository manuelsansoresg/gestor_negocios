import { prisma } from "@/lib/prisma";
import { leadSchema } from "@/lib/validations/lead";
import { handleApiError, json, readJson, verifyOrigin } from "@/lib/http";

export async function POST(request: Request) {
  try {
    verifyOrigin(request);
    // Future rate limiting belongs here, before validation and database writes.
    const result = leadSchema.safeParse(await readJson(request));
    if (!result.success) return json({ ok: false, message: "Revisa los campos del formulario." }, 400);
    const { website, ...data } = result.data;
    if (!website) await prisma.lead.create({ data: { ...data, status: "NUEVO" }, select: { id: true } });
    // Honeypot submissions receive the same response without persisting anything.
    return json({ ok: true, message: "Gracias. Tu información fue enviada correctamente." }, 201);
  } catch (error) { return handleApiError(error, "create-lead"); }
}

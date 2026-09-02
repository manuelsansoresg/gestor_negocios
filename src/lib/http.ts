import "server-only";

export class RequestError extends Error {
  constructor(message: string, public status: number) { super(message); }
}

export function json(data: object, status = 200) {
  return Response.json(data, { status, headers: { "Cache-Control": "no-store" } });
}

export function verifyOrigin(request: Request) {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  if (!appUrl) throw new Error("NEXT_PUBLIC_APP_URL no está configurada.");
  const expected = new URL(appUrl);
  if (process.env.NODE_ENV === "production" &&
      (expected.protocol !== "https:" || ["localhost", "127.0.0.1", "[::1]"].includes(expected.hostname))) {
    throw new Error("NEXT_PUBLIC_APP_URL debe ser el dominio HTTPS de producción.");
  }
  // Do not trust Host or forwarded headers for CSRF protection behind a proxy.
  if (request.headers.get("origin") !== expected.origin || request.headers.get("sec-fetch-site") === "cross-site") {
    throw new RequestError("Origen de solicitud no permitido.", 403);
  }
}

export async function readJson(request: Request): Promise<unknown> {
  if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") {
    throw new RequestError("Envía la información en formato JSON.", 415);
  }
  const reader = request.body?.getReader();
  if (!reader) throw new RequestError("Solicitud vacía.", 400);
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 16_384) {
        await reader.cancel();
        throw new RequestError("Solicitud demasiado grande.", 413);
      }
      chunks.push(value);
    }
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch (error) {
    if (error instanceof RequestError) throw error;
    throw new RequestError("JSON inválido.", 400);
  } finally { reader.releaseLock(); }
}

export function handleApiError(error: unknown, context: string) {
  if (error instanceof RequestError) return json({ ok: false, message: error.message }, error.status);
  // Never log request payloads, credentials, database URLs or Prisma query details.
  console.error(`[${context}] Error interno`, error instanceof Error ? error.name : "UnknownError");
  return json({ ok: false, message: "No pudimos completar la solicitud. Inténtalo de nuevo más tarde." }, 500);
}

import { destroySession } from "@/lib/auth";
import { handleApiError, json, verifyOrigin } from "@/lib/http";

export async function POST(request: Request) {
  try {
    verifyOrigin(request);
    await destroySession();
    return json({ ok: true });
  } catch (error) { return handleApiError(error, "logout"); }
}

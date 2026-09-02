import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().email("Escribe un correo válido.").max(160).toLowerCase(),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres.")
    .refine((value) => new TextEncoder().encode(value).length <= 72, "La contraseña es demasiado larga."),
});

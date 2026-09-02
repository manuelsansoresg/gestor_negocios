import { z } from "zod";

export const leadSchema = z.object({
  fullName: z.string().trim().min(3, "Escribe al menos 3 caracteres.").max(120, "Máximo 120 caracteres."),
  phone: z.string().trim().min(7, "Escribe al menos 7 caracteres.").max(30, "Máximo 30 caracteres."),
  email: z.string().trim().email("Escribe un correo válido.").max(160, "Máximo 160 caracteres.").toLowerCase(),
  message: z.string().trim().min(10, "Escribe al menos 10 caracteres.").max(2000, "Máximo 2000 caracteres."),
  website: z.string().trim().max(2000).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

import { z } from "zod";
import { leadActions, opportunityTypes } from "@/lib/lead-options";

export const leadSchema = z
  .object({
    action: z.enum(leadActions, { error: "Selecciona qué quieres hacer." }),
    opportunityType: z.enum(opportunityTypes, { error: "Selecciona el tipo de oportunidad." }),
    customOpportunityType: z.string().trim().max(160, "Máximo 160 caracteres.").optional(),
    fullName: z.string().trim().min(3, "Escribe al menos 3 caracteres.").max(120, "Máximo 120 caracteres."),
    city: z.string().trim().min(2, "Escribe tu ciudad.").max(120, "Máximo 120 caracteres."),
    valueRange: z.string().trim().max(120, "Máximo 120 caracteres.").optional(),
    message: z.string().trim().min(10, "Escribe al menos 10 caracteres.").max(2000, "Máximo 2000 caracteres."),
    phone: z.string().trim().min(7, "Escribe al menos 7 caracteres.").max(30, "Máximo 30 caracteres."),
    email: z.string().trim().email("Escribe un correo válido.").max(160, "Máximo 160 caracteres.").toLowerCase(),
    website: z.string().trim().max(2000).optional(),
  })
  .superRefine((data, context) => {
    if (data.opportunityType === "Otra" && !data.customOpportunityType) {
      context.addIssue({
        code: "custom",
        path: ["customOpportunityType"],
        message: "Especifica el tipo de oportunidad.",
      });
    }
  });

export type LeadInput = z.infer<typeof leadSchema>;

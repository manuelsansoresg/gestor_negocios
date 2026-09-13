export const leadActions = ["Comprar", "Vender", "Invertir", "Explorar"] as const;

export const opportunityTypes = [
  "Inmuebles",
  "Empresas y negocios",
  "Franquicias",
  "Maquinaria y equipos",
  "Vehículos",
  "Inventarios / mercancía",
  "Proyectos inmobiliarios",
  "Otra",
] as const;

export type LeadAction = (typeof leadActions)[number];
export type OpportunityType = (typeof opportunityTypes)[number];

export const actionLabels: Record<LeadAction, string> = {
  Comprar: "Comprar",
  Vender: "Vender",
  Invertir: "Invertir",
  Explorar: "Explorar / aún no lo defino",
};

export const submitLabels: Record<LeadAction, string> = {
  Vender: "Quiero vender esta oportunidad",
  Comprar: "Quiero que me ayudes a comprar",
  Invertir: "Quiero encontrar una oportunidad",
  Explorar: "Quiero recibir orientación",
};

const actionSlugs: Record<LeadAction, string> = {
  Comprar: "comprar",
  Vender: "vender",
  Invertir: "invertir",
  Explorar: "explorar",
};

const opportunitySlugs: Record<OpportunityType, string> = {
  Inmuebles: "inmueble",
  "Empresas y negocios": "empresa",
  Franquicias: "franquicia",
  "Maquinaria y equipos": "maquinaria",
  Vehículos: "vehiculo",
  "Inventarios / mercancía": "inventario",
  "Proyectos inmobiliarios": "proyecto_inmobiliario",
  Otra: "otra",
};

export function getLeadTag(action: string | null, opportunityType: string | null) {
  if (!action || !opportunityType) return "sin_clasificar";
  const actionSlug = actionSlugs[action as LeadAction] ?? action.toLowerCase();
  const opportunitySlug = opportunitySlugs[opportunityType as OpportunityType] ?? opportunityType.toLowerCase();
  return `${actionSlug}_${opportunitySlug}`;
}


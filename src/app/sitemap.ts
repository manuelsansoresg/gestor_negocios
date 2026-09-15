import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    ["", "monthly", 1],

    ["/comprar", "monthly", 0.9],
    ["/vender", "monthly", 0.9],

    ["/conoceme", "monthly", 0.7],
    ["/servicios", "monthly", 0.8],

    ["/venta-de-empresas-colombia", "monthly", 0.8],
    ["/inmuebles-comerciales", "monthly", 0.8],
    ["/maquinaria-y-equipos", "monthly", 0.8],

    ["/terminos-y-condiciones", "yearly", 0.3],
    ["/politica-de-privacidad", "yearly", 0.3],
  ] as const;

  return pages.map(([path, changeFrequency, priority]) => ({
    url: `${site.url}${path}`,
    changeFrequency,
    priority,
  }));
}
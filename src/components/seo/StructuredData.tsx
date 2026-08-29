import { site } from "@/data/site";

const serviceArea = {
  "@type": "City",
  name: site.location.city,
  containedInPlace: {
    "@type": "AdministrativeArea",
    name: site.location.region,
    containedInPlace: {
      "@type": "Country",
      name: site.location.country,
    },
  },
};

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#david-aldana`,
        name: site.ownerName,
        jobTitle: site.title,
        url: site.url,
        telephone: site.phone,
        email: site.email,
        description:
          "Gestor de negocios que identifica prospectos, conecta compradores, vendedores e inversionistas, y acompaña procesos comerciales.",
      },
      {
        "@type": "Service",
        "@id": `${site.url}/#gestion-de-negocios`,
        name: "Gestión de negocios en Tuluá",
        serviceType: [
          "Consecución e identificación de prospectos",
          "Conexión entre compradores, vendedores e inversionistas",
          "Seguimiento y acompañamiento comercial",
        ],
        description: site.description,
        url: site.url,
        provider: {
          "@id": `${site.url}/#david-aldana`,
        },
        areaServed: serviceArea,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

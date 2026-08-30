import { site } from "@/data/site";

const serviceArea = [
  {
    "@type": "City",
    name: site.location.city,
  },
  {
    "@type": "AdministrativeArea",
    name: site.location.region,
  },
  {
    "@type": "Country",
    name: site.location.country,
  },
];

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: `${site.ownerName} | ${site.title}`,
        description: site.description,
        inLanguage: "es-CO",
      },
      {
        "@type": "WebPage",
        "@id": `${site.url}/#webpage`,
        url: site.url,
        name: `Gestor de Negocios en Tuluá y Colombia | ${site.ownerName}`,
        description: site.description,
        inLanguage: "es-CO",
        isPartOf: {
          "@id": `${site.url}/#website`,
        },
        about: [
          {
            "@id": `${site.url}/#david-aldana`,
          },
          {
            "@id": `${site.url}/#gestion-de-negocios`,
          },
        ],
      },
      {
        "@type": "Person",
        "@id": `${site.url}/#david-aldana`,
        name: site.ownerName,
        jobTitle: site.title,
        url: site.url,
        telephone: site.phone,
        email: site.email,
        description:
          "Gestor de negocios en Tuluá que identifica prospectos, conecta compradores, vendedores e inversionistas, y acompaña oportunidades comerciales en Colombia.",
        knowsAbout: [
          "Gestión comercial",
          "Intermediación comercial",
          "Compra y venta de negocios",
          "Búsqueda de compradores e inversionistas",
        ],
      },
      {
        "@type": "Service",
        "@id": `${site.url}/#gestion-de-negocios`,
        name: "Gestión de oportunidades comerciales en Tuluá y Colombia",
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
        audience: [
          {
            "@type": "BusinessAudience",
            audienceType: "Propietarios y vendedores",
          },
          {
            "@type": "BusinessAudience",
            audienceType: "Compradores e inversionistas",
          },
        ],
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

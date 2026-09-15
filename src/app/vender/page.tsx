import type { Metadata } from "next";
import IntentLanding from "@/components/landing/IntentLanding";

export const metadata: Metadata = {
  title: "Vender empresas y oportunidades en Colombia",
  description:
    "Gestión comercial para propietarios que buscan vender empresas, inmuebles, maquinaria, franquicias y otras oportunidades en Colombia.",
  alternates: {
    canonical: "/vender",
  },
};

const categories = [
  {
    title: "Empresas y negocios",
    description:
      "Presentación comercial de empresas y negocios en funcionamiento ante posibles interesados.",
  },
  {
    title: "Inmuebles",
    description:
      "Gestión de oportunidades inmobiliarias y búsqueda de posibles compradores.",
  },
  {
    title: "Maquinaria y equipos",
    description:
      "Presentación y gestión comercial de maquinaria, equipos y activos productivos.",
  },
  {
    title: "Franquicias",
    description:
      "Búsqueda de interesados en oportunidades y modelos de franquicia.",
  },
  {
    title: "Vehículos",
    description:
      "Gestión comercial de vehículos relacionados con operaciones empresariales.",
  },
  {
    title: "Inventarios y mercancía",
    description:
      "Presentación de inventarios y mercancía a posibles compradores o interesados.",
  },
];

const steps = [
  "Conozco la oportunidad y qué quieres vender.",
  "Organizo la información comercial disponible.",
  "Defino el perfil de los posibles compradores o interesados.",
  "Presento la oportunidad de forma ordenada y con discreción.",
  "Facilito el acercamiento entre las partes.",
  "Doy seguimiento comercial durante el proceso.",
];

export default function Page() {
  return (
    <IntentLanding
      action="Vender"
      eyebrow="Vender · Colombia"
      title="¿Quieres vender una empresa, inmueble u otra oportunidad?"
      description="Te ayudo a organizar la oportunidad, presentarla ante posibles interesados y mantener el seguimiento comercial durante el proceso."
      highlight="Cuéntame qué quieres vender y revisamos cómo presentar la oportunidad."
      categories={categories}
      steps={steps}
      sectionTitle="¿Qué tipo de oportunidad quieres vender?"
      sectionDescription="Puedo gestionar distintos tipos de activos y oportunidades comerciales, siempre dentro del alcance acordado."
      formTitle="Cuéntame sobre tu oportunidad"
      formDescription="Completa la información inicial para conocer qué quieres vender y determinar cómo puedo ayudarte."
      source="vender"
      whatsappMessage="Hola David, quiero vender una oportunidad y quisiera contarte más detalles."
    />
  );
}
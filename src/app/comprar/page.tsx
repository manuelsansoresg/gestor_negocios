import type { Metadata } from "next";
import IntentLanding from "@/components/landing/IntentLanding";

export const metadata: Metadata = {
  title: "Comprar oportunidades de negocio en Colombia",
  description:
    "Gestión comercial para personas que buscan comprar empresas, inmuebles, maquinaria, franquicias y otras oportunidades en Colombia.",
  alternates: {
    canonical: "/comprar",
  },
};

const categories = [
  {
    title: "Empresas y negocios",
    description:
      "Oportunidades de negocios en funcionamiento y empresas que buscan compradores o inversionistas.",
  },
  {
    title: "Inmuebles",
    description:
      "Inmuebles comerciales y oportunidades inmobiliarias según el perfil de búsqueda.",
  },
  {
    title: "Maquinaria y equipos",
    description:
      "Equipos y maquinaria para actividades productivas, comerciales o industriales.",
  },
  {
    title: "Franquicias",
    description:
      "Oportunidades para ingresar o expandirse mediante modelos de franquicia.",
  },
  {
    title: "Vehículos",
    description:
      "Vehículos relacionados con operaciones comerciales o necesidades empresariales.",
  },
  {
    title: "Inventarios y mercancía",
    description:
      "Inventarios, mercancía y oportunidades comerciales disponibles para negociación.",
  },
];

const steps = [
  "Me cuentas qué estás buscando y cuál es tu objetivo.",
  "Definimos el tipo de oportunidad y el perfil que tendría sentido para ti.",
  "Reviso o busco posibles oportunidades compatibles.",
  "Organizo y filtro la información comercial disponible.",
  "Facilito el acercamiento con propietarios o responsables de la oportunidad.",
  "Doy seguimiento comercial dentro del alcance acordado.",
];

export default function Page() {
  return (
    <IntentLanding
      action="Comprar"
      eyebrow="Comprar · Colombia"
      title="¿Buscas comprar una empresa, inmueble u otra oportunidad?"
      description="Te ayudo a definir lo que buscas, identificar posibles oportunidades y facilitar conversaciones con propietarios o responsables comerciales."
      highlight="Cuéntame qué estás buscando y revisamos cómo puedo ayudarte."
      categories={categories}
      steps={steps}
      sectionTitle="¿Qué tipo de oportunidad estás buscando?"
      sectionDescription="Puedo gestionar diferentes tipos de oportunidades comerciales según tus objetivos, ubicación y rango de valor."
      formTitle="Cuéntame qué quieres comprar"
      formDescription="Completa la información inicial para conocer tu búsqueda y entender qué tipo de oportunidad puede ser adecuada."
      source="comprar"
      whatsappMessage="Hola David, estoy buscando comprar una oportunidad y quisiera contarte qué necesito."
    />
  );
}
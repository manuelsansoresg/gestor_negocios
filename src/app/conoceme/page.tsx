import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conoce a David Aldana",
  description:
    "David Aldana, Gestor de Negocios en Colombia: enfoque comercial, forma de trabajo y confidencialidad.",
  alternates: {
    canonical: "/conoceme",
  },
};

const principles = [
  {
    title: "Enfoque comercial",
    description:
      "Identifico posibles interesados, facilito el acercamiento entre las partes y mantengo el seguimiento de la oportunidad.",
  },
  {
    title: "Forma de trabajo",
    description:
      "Primero conozco el objetivo y la información disponible; después defino el alcance y coordino la gestión acordada.",
  },
  {
    title: "Confidencialidad",
    description:
      "Manejo las oportunidades y su información con discreción durante los acercamientos comerciales.",
  },
  {
    title: "Cobertura",
    description:
      "Gestiono oportunidades comerciales en Colombia.",
  },
  {
    title: "Honorarios claros",
    description:
      "Los honorarios se acuerdan por escrito antes de iniciar, según el tipo de operación, su valor, complejidad y alcance.",
  },
];

const categories = [
  "Empresas",
  "Inmuebles",
  "Maquinaria",
  "Franquicias",
  "Inversión",
];

export default function Page() {
  return (
    <>
      <section
        id="inicio"
        className="bg-[#05070b] py-20 text-white md:py-28"
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            items-center
            gap-12
            px-6
            md:px-10
            lg:grid-cols-[1.1fr_0.9fr]
            lg:px-12
          "
        >
          {/* CONTENIDO IZQUIERDO */}
          <div>
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#68a0ff]
              "
            >
              David Aldana
            </p>

            <h1
              className="
                mt-6
                text-5xl
                font-semibold
                tracking-[-0.045em]
                sm:text-6xl
              "
            >
              Gestor de Negocios
            </h1>

            <p
              className="
                mt-7
                max-w-2xl
                text-lg
                leading-8
                text-white/60
              "
            >
              Ayudo a conectar oportunidades con posibles compradores,
              vendedores e inversionistas y acompaño el proceso comercial
              dentro del alcance acordado.
            </p>

            <Link
              href="/#contacto"
              className="
                mt-9
                inline-flex
                min-h-12
                items-center
                rounded-full
                bg-[#1668ff]
                px-7
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-[#347cff]
              "
            >
              Agendar una primera conversación
            </Link>
          </div>

          {/* TARJETA CORPORATIVA SIN FOTO */}
          <div
            className="
              relative
              min-h-[360px]
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-gradient-to-br
              from-[#0d1b30]
              via-[#0a1728]
              to-[#07111f]
              p-8
              md:p-10
            "
          >
            {/* Efecto azul superior */}
            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-64
                w-64
                rounded-full
                bg-[#1668ff]/10
                blur-3xl
              "
            />

            {/* Efecto dorado inferior */}
            <div
              className="
                pointer-events-none
                absolute
                -bottom-24
                -left-20
                h-64
                w-64
                rounded-full
                bg-[#d4af37]/10
                blur-3xl
              "
            />

            {/* Líneas decorativas */}
            <div
              className="
                pointer-events-none
                absolute
                right-8
                top-8
                h-24
                w-24
                rounded-full
                border
                border-[#68a0ff]/10
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                right-14
                top-14
                h-12
                w-12
                rounded-full
                border
                border-[#d4af37]/10
              "
            />

            <div
              className="
                relative
                flex
                min-h-[290px]
                flex-col
                justify-between
              "
            >
              <div>
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#68a0ff]
                  "
                >
                  Gestor de Negocios
                </p>

                <h2
                  className="
                    mt-5
                    max-w-md
                    text-3xl
                    font-semibold
                    leading-tight
                    tracking-[-0.03em]
                    text-white
                  "
                >
                  Conectando oportunidades con personas que buscan hacer
                  negocios.
                </h2>

                <p
                  className="
                    mt-5
                    max-w-md
                    text-sm
                    leading-6
                    text-white/45
                  "
                >
                  Compra, venta e inversión de oportunidades comerciales
                  gestionadas con seguimiento y comunicación directa.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.05]
                        px-4
                        py-2
                        text-sm
                        text-white/65
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div
                  className="
                    mt-8
                    border-t
                    border-white/10
                    pt-6
                  "
                >
                  <p
                    className="
                      text-xl
                      font-semibold
                      text-white
                    "
                  >
                    David Aldana
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-[#68a0ff]
                    "
                  >
                    Gestor de Negocios · Colombia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJO */}
      <section className="bg-white py-20 md:py-28">
        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            md:px-10
            lg:px-12
          "
        >
          <div className="max-w-3xl">
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#1668ff]
              "
            >
              Cómo trabajo
            </p>

            <h2
              className="
                mt-4
                text-4xl
                font-semibold
                tracking-[-0.04em]
                text-[#0a0d12]
              "
            >
              Una gestión comercial ordenada y directa
            </h2>

            <p
              className="
                mt-6
                text-lg
                leading-8
                text-[#5b6472]
              "
            >
              Mi trabajo parte de entender cada oportunidad, organizar la
              información comercial disponible y facilitar conversaciones con
              personas que puedan tener un interés real.
            </p>
          </div>

          <div
            className="
              mt-12
              grid
              gap-5
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {principles.map((item, index) => (
              <article
                key={item.title}
                data-reveal="scale"
                data-delay={String((index % 3) + 1)}
                className="
                  rounded-[1.75rem]
                  border
                  border-[#e1e7f0]
                  bg-[#f8fafc]
                  p-7
                "
              >
                <span
                  className="
                    text-sm
                    font-semibold
                    text-[#1668ff]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3
                  className="
                    mt-4
                    text-2xl
                    font-semibold
                    text-[#0a0d12]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3
                    leading-7
                    text-[#5b6472]
                  "
                >
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
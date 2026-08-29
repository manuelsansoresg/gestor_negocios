const benefits = [
  {
    title: "Gestión personalizada",
    description:
      "Cada oportunidad se analiza de forma individual, considerando sus características, alcance y posibilidades reales.",
  },
  {
    title: "Búsqueda de oportunidades",
    description:
      "Se identifican espacios de negocio y posibles conexiones que puedan generar interés comercial.",
  },
  {
    title: "Identificación de interesados",
    description:
      "Se buscan compradores, inversionistas, empresas o contrapartes que puedan tener interés en la oportunidad.",
  },
  {
    title: "Conexión entre las partes",
    description:
      "Se facilita el acercamiento entre propietarios, compradores, inversionistas y empresas.",
  },
  {
    title: "Acompañamiento comercial",
    description:
      "Se apoya la comunicación y el proceso de acercamiento durante la gestión de la oportunidad.",
  },
  {
    title: "Confidencialidad",
    description:
      "La información compartida se maneja con discreción y de acuerdo con el alcance acordado con el cliente.",
  },
  {
    title: "Enfoque en operaciones concretas",
    description:
      "La gestión está orientada a generar conexiones con posibilidades reales de convertirse en negocios.",
  },
  {
    title: "Honorarios vinculados a la operación",
    description:
      "Los honorarios se establecen previamente y se relacionan con el valor y las condiciones de la operación concretada.",
  },
];

export default function ValueProposition() {
  return (
    <section
      id="propuesta-de-valor"
      className="relative overflow-hidden bg-[#f5f7fb] py-20 md:py-28"
    >
      {/* Fondo decorativo */}
      <div
        aria-hidden="true"
        className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#1668ff]/5 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#0b4dcc]/5 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        {/* Encabezado */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#1668ff]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#1668ff]">
              Mi propuesta de valor
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-[#0a0d12] sm:text-5xl md:text-6xl">
            ¿Por qué trabajar con David Aldana?
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#5b6472] sm:text-lg">
            La gestión se enfoca en identificar oportunidades, generar
            conexiones comerciales y facilitar el acercamiento entre personas y
            empresas con intereses compatibles.
          </p>
        </div>

        {/* Beneficios */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="group rounded-[1.75rem] border border-[#e1e7f0] bg-white p-6 shadow-[0_15px_40px_rgba(17,24,39,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#1668ff]/25 hover:shadow-[0_20px_55px_rgba(17,24,39,0.07)]"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1668ff]/10 text-sm font-semibold text-[#1668ff]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="h-2.5 w-2.5 rounded-full bg-[#1668ff]/25 transition group-hover:bg-[#1668ff]" />
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-[#0a0d12]">
                {benefit.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#667085]">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

        {/* Bloque destacado */}
        <div className="mt-14 overflow-hidden rounded-[2rem] bg-[#07111f] text-white">
          <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="p-7 sm:p-9 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5f94ff]">
                Enfoque
              </p>

              <p className="mt-4 max-w-3xl text-2xl font-medium leading-9 tracking-[-0.02em] sm:text-3xl">
                La gestión no consiste únicamente en presentar una oportunidad,
                sino en buscar la conexión adecuada para cada caso.
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                Propietarios, empresarios, compradores e inversionistas pueden
                tener intereses distintos. El objetivo es facilitar el
                acercamiento cuando existe una oportunidad que puede resultar
                relevante para ambas partes.
              </p>
            </div>

            <div className="flex items-center border-t border-white/10 bg-[#0a1628] p-7 sm:p-9 lg:border-l lg:border-t-0 lg:p-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#68a0ff]">
                  Gestión de Negocios
                </p>

                <p className="mt-4 text-xl font-medium leading-8 text-white">
                  Compra · Vende · Invierte · Conecta
                </p>

                <p className="mt-4 text-sm leading-7 text-white/50">
                  Conectando oportunidades con personas que buscan hacer
                  negocios.
                </p>

                <a
                  href="#contacto"
                  className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#1668ff] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#347cff]"
                >
                  Tengo una oportunidad
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
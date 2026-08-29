const steps = [
  {
    number: "01",
    title: "Recibo la oportunidad",
    description:
      "El propietario, empresario o interesado presenta la información del negocio u oportunidad que desea gestionar.",
  },
  {
    number: "02",
    title: "Conozco la oportunidad",
    description:
      "Analizo la información comercial proporcionada, sus características y las condiciones generales de la operación.",
  },
  {
    number: "03",
    title: "Identifico potenciales interesados",
    description:
      "Busco compradores, inversionistas, empresas o contrapartes que puedan tener interés real en la oportunidad.",
  },
  {
    number: "04",
    title: "Genero la conexión",
    description:
      "Facilito el contacto entre las partes interesadas para que puedan conocer la oportunidad y evaluar la operación.",
  },
  {
    number: "05",
    title: "Acompaño la gestión comercial",
    description:
      "Apoyo la comunicación y el acercamiento comercial, sin sustituir a los profesionales o entidades que correspondan.",
  },
  {
    number: "06",
    title: "Negocio concretado",
    description:
      "Cuando las partes concretan la operación bajo las condiciones acordadas, se causan los honorarios de gestión establecidos.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-trabajo"
      className="relative overflow-hidden bg-[#f5f7fb] py-20 md:py-28"
    >
      {/* Fondo decorativo */}
      <div
        aria-hidden="true"
        className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#1668ff]/5 blur-[90px]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#0b4dcc]/5 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        {/* Encabezado */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#1668ff]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#1668ff]">
              Cómo trabajo
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-[#0a0d12] sm:text-5xl md:text-6xl">
            Un proceso claro, paso a paso
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#5b6472] sm:text-lg">
            Cada oportunidad se gestiona de forma organizada, buscando generar
            conexiones comerciales reales entre las partes interesadas.
          </p>
        </div>

        {/* Pasos */}
        <div className="relative mt-16">
          {/* Línea vertical desktop */}
          <div
            aria-hidden="true"
            className="absolute left-[31px] top-8 hidden h-[calc(100%-4rem)] w-px bg-[#d8e1ee] lg:block"
          />

          <div className="space-y-6">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="group relative grid gap-5 rounded-[1.75rem] border border-[#e1e7f0] bg-white p-6 shadow-[0_15px_45px_rgba(17,24,39,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#1668ff]/25 hover:shadow-[0_20px_60px_rgba(17,24,39,0.07)] sm:p-7 lg:grid-cols-[64px_1fr] lg:gap-7"
              >
                {/* Número */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#cdd8e8] bg-[#f8fbff] text-sm font-semibold tracking-[0.12em] text-[#1668ff] transition group-hover:border-[#1668ff]/40 group-hover:bg-[#1668ff] group-hover:text-white">
                  {step.number}
                </div>

                {/* Contenido */}
                <div className="lg:pt-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a8494]">
                    Paso {index + 1}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-[#0a0d12]">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-[#626b79] sm:text-base">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Mensaje de cierre */}
        <div className="mt-14 rounded-[2rem] bg-[#07111f] p-7 text-white sm:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5f94ff]">
                Gestión comercial
              </p>

              <p className="mt-3 max-w-3xl text-xl font-medium leading-8">
                El objetivo no es solo presentar una oportunidad, sino acercarla
                a personas o empresas con posibilidades reales de interés.
              </p>
            </div>

            <a
              href="#contacto"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1668ff] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#347cff]"
            >
              Tengo una oportunidad
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
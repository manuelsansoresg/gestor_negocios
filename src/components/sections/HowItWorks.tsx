const steps = [
  {
    number: "01",
    title: "Analizo tu oportunidad",
    description:
      "Conozco lo que quieres comprar, vender o gestionar y reviso la información comercial disponible.",
  },
  {
    number: "02",
    title: "Identifico posibles interesados",
    description:
      "Defino qué perfil de comprador, vendedor, inversionista o empresa puede tener mayor afinidad con la oportunidad.",
  },
  {
    number: "03",
    title: "Busco y filtro prospectos",
    description:
      "Busco posibles interesados y priorizo aquellos que pueden tener una relación real con la operación.",
  },
  {
    number: "04",
    title: "Genero la conexión",
    description:
      "Facilito el contacto y el acercamiento para que las partes puedan conocer y evaluar la oportunidad.",
  },
  {
    number: "05",
    title: "Coordino el acercamiento",
    description:
      "Apoyo la comunicación y la coordinación necesaria mientras las partes avanzan en el proceso comercial.",
  },
  {
    number: "06",
    title: "Doy seguimiento",
    description:
      "Mantengo continuidad y acompaño la gestión comercial hasta el punto previamente acordado con el cliente.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-trabajo"
      className="relative overflow-hidden bg-[#f5f7fb] py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#1668ff]/5 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#0b4dcc]/5 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div data-reveal className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#1668ff]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#1668ff]">
              Cómo trabajo
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-[#0a0d12] sm:text-5xl md:text-6xl">
            Una gestión clara, paso a paso
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#5b6472] sm:text-lg">
            Cada oportunidad tiene condiciones diferentes, pero la gestión
            mantiene un proceso definido para buscar, conectar y dar
            seguimiento.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.number}
              data-reveal="scale"
              data-delay={String((index % 3) + 1)}
              className="rounded-[1.75rem] border border-[#e1e7f0] bg-white p-6 shadow-[0_15px_40px_rgba(17,24,39,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#1668ff]/25 hover:shadow-[0_20px_55px_rgba(17,24,39,0.07)] sm:p-7"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1668ff]/10 text-sm font-semibold text-[#1668ff]">
                {step.number}
              </span>

              <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-[#0a0d12]">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#667085] sm:text-base">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div
          data-reveal
          className="mt-14 rounded-[2rem] bg-[#07111f] p-7 text-white sm:p-9"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#68a0ff]">
                Seguimiento comercial
              </p>

              <p className="mt-3 max-w-3xl text-xl font-medium leading-8">
                La gestión no termina cuando aparece un contacto. El seguimiento
                y la coordinación continúan dentro del alcance acordado para
                mantener activa la oportunidad.
              </p>
            </div>

            <a
              href="#contacto"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1668ff] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#347cff]"
            >
              Consultar una oportunidad
            </a>
          </div>
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-[#dbe3f0] bg-white p-6">
          <p className="text-sm leading-7 text-[#667085]">
            La revisión de información corresponde a la información comercial
            disponible. Las verificaciones jurídicas, financieras, contables,
            técnicas, notariales o especializadas corresponden a las partes y a
            los profesionales o entidades competentes.
          </p>
        </div>
      </div>
    </section>
  );
}
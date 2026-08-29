const steps = [
  {
    number: "01",
    title: "Recibo la oportunidad",
    description:
      "Me compartes la información inicial sobre lo que quieres comprar, vender o gestionar.",
  },
  {
    number: "02",
    title: "Reviso la información",
    description:
      "Analizo la información comercial disponible para entender mejor la oportunidad, sus condiciones y el perfil de posibles interesados.",
  },
  {
    number: "03",
    title: "Identifico prospectos",
    description:
      "Busco compradores, vendedores, inversionistas, empresas u otras partes que puedan tener interés real en la oportunidad.",
  },
  {
    number: "04",
    title: "Genero la conexión",
    description:
      "Facilito el contacto y el acercamiento entre las partes para que puedan conocer la oportunidad y evaluar si existe interés.",
  },
  {
    number: "05",
    title: "Coordino el proceso comercial",
    description:
      "Apoyo la comunicación entre las partes y coordino los acercamientos necesarios durante la negociación.",
  },
  {
    number: "06",
    title: "Doy seguimiento y acompañamiento",
    description:
      "Mantengo continuidad en el proceso y acompaño la gestión comercial hasta el punto previamente acordado con el cliente.",
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
        <div  data-reveal className="max-w-3xl">
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
            Cada oportunidad puede ser distinta, pero el proceso busca mantener
            claridad desde el inicio y facilitar el avance comercial entre las
            partes.
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

        <div className="mt-14 rounded-[2rem] bg-[#07111f] p-7 text-white sm:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#68a0ff]">
                Acompañamiento comercial
              </p>

              <p className="mt-3 max-w-3xl text-xl font-medium leading-8">
                La gestión no termina al generar un contacto. El seguimiento,
                la coordinación y el acompañamiento forman parte del servicio
                cuando así se haya definido en el alcance acordado.
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
            La revisión de información dentro de la gestión corresponde a la
            información comercial disponible. Las verificaciones jurídicas,
            financieras, contables, técnicas, notariales o especializadas deben
            ser realizadas por las partes y por los profesionales o entidades
            competentes.
          </p>
        </div>
      </div>
    </section>
  );
}
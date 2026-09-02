const managementIncludes = [
  {
    number: "01",
    title: "Consecución de prospectos",
    description:
      "Búsqueda e identificación de posibles compradores, vendedores, inversionistas o empresas interesadas según la oportunidad.",
  },
  {
    number: "02",
    title: "Conexión entre las partes",
    description:
      "Facilito el acercamiento y el contacto entre quienes tienen una oportunidad y quienes pueden estar interesados en ella.",
  },
  {
    number: "03",
    title: "Revisión de información",
    description:
      "Reviso la información comercial disponible para entender mejor la oportunidad y presentarla de forma clara.",
  },
  {
    number: "04",
    title: "Coordinación comercial",
    description:
      "Apoyo la comunicación y coordino los acercamientos necesarios durante el proceso.",
  },
  {
    number: "05",
    title: "Seguimiento",
    description:
      "Doy continuidad a las conversaciones para mantener activa la oportunidad.",
  },
  {
    number: "06",
    title: "Acompañamiento",
    description:
      "Acompaño la gestión hasta el punto previamente acordado con el cliente.",
  },
];

export default function Fees() {
  return (
    <section
      id="honorarios"
      className="relative overflow-hidden bg-[#05070b] py-20 text-white md:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-8rem] top-10 h-80 w-80 rounded-full bg-[#1668ff]/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div data-reveal className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#2878ff]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#68a0ff]">
              Honorarios
            </span>
          </div>

          <h2 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Honorarios personalizados
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            Cada operación tiene un porcentaje definido previamente según su
            valor, complejidad, tiempo y alcance de la gestión. 8% sobre el
            valor de la transacción.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/50">
            Antes de iniciar, acordamos las condiciones para que tengas
            claridad sobre el servicio y los honorarios.
          </p>
        </div>

        <div className="mt-20">
          <div data-reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#68a0ff]">
              Qué incluye
            </p>

            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              El honorario corresponde a una gestión.
            </h3>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {managementIncludes.map((item, index) => (
              <article
                key={item.number}
                data-reveal="scale"
                data-delay={String((index % 3) + 1)}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-[#2878ff]/35 hover:bg-[#0d1627]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1668ff]/10 text-sm font-semibold text-[#68a0ff]">
                  {item.number}
                </span>

                <h4 className="mt-5 text-xl font-semibold">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-white/50">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
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
      "Reviso la información comercial disponible para entender mejor la oportunidad y presentarla de forma clara a los posibles interesados.",
  },
  {
    number: "04",
    title: "Coordinación de negociaciones",
    description:
      "Apoyo la comunicación entre las partes y coordino los acercamientos necesarios durante el proceso de negociación.",
  },
  {
    number: "05",
    title: "Seguimiento",
    description:
      "Doy continuidad a las conversaciones y al proceso comercial para mantener activa la oportunidad.",
  },
  {
    number: "06",
    title: "Acompañamiento comercial",
    description:
      "Acompaño la gestión hasta el punto acordado con el cliente, facilitando la comunicación y el avance de la operación.",
  },
];

const factors = [
  "Tipo de operación",
  "Valor de la operación",
  "Complejidad",
  "Tiempo de gestión",
  "Alcance acordado",
  "Condiciones particulares",
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

      <div
        aria-hidden="true"
        className="absolute bottom-0 right-[-10rem] h-96 w-96 rounded-full bg-[#0b4dcc]/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#2878ff]" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#68a0ff]">
                Honorarios
              </span>
            </div>

            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Honorarios calculados sobre el valor de la operación concretada
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              El porcentaje y las condiciones de la gestión se acuerdan
              previamente con el cliente, de acuerdo con el tipo de operación,
              su valor, complejidad y alcance.
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#68a0ff]">
                Importante
              </p>

              <p className="mt-3 text-sm leading-7 text-white/55">
                Los honorarios corresponden al servicio de gestión comercial
                acordado y no únicamente a presentar o poner en contacto a las
                partes.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#0a0f18] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#68a0ff]">
              Ejemplo
            </p>

            <p className="mt-3 text-sm leading-6 text-white/45">
              Si se concreta una operación por:
            </p>

            <div className="mt-5 rounded-2xl border border-white/10 bg-[#07111f] p-5">
              <p className="text-sm text-white/45">
                Valor de la operación
              </p>

              <p className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-white">
                $100.000.000
              </p>

              <p className="mt-1 text-sm text-white/40">
                COP
              </p>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-sm text-white/40">
                  Honorario acordado
                </p>

                <p className="mt-2 text-3xl font-semibold text-[#68a0ff]">
                  8%
                </p>
              </div>

              <div className="rounded-2xl border border-[#2878ff]/25 bg-[#0b1628] p-5">
                <p className="text-sm text-white/40">
                  Honorarios de gestión
                </p>

                <p className="mt-2 text-3xl font-semibold text-white">
                  $8.000.000
                </p>

                <p className="mt-1 text-sm text-white/40">
                  COP
                </p>
              </div>
            </div>

            <p className="mt-5 text-xs leading-6 text-white/35">
              Este ejemplo es ilustrativo. El porcentaje puede variar según las
              condiciones de cada oportunidad y el alcance de la gestión.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#68a0ff]">
              Qué incluye la gestión
            </p>

            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Un servicio comercial más completo que una simple conexión
            </h3>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/55">
              Dependiendo de la oportunidad y del alcance acordado, la gestión
              puede incluir las siguientes actividades:
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {managementIncludes.map((item) => (
              <article
                key={item.number}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-[#2878ff]/35 hover:bg-[#0d1627]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1668ff]/10 text-sm font-semibold text-[#68a0ff]">
                  {item.number}
                </span>

                <h4 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-white">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-white/50">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#68a0ff]">
              El porcentaje puede variar
            </p>

            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">
              Cada operación tiene condiciones diferentes
            </h3>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {factors.map((factor) => (
              <div
                key={factor}
                className="rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4"
              >
                <p className="text-sm font-medium text-white/65">
                  {factor}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-[2rem] border border-[#2878ff]/20 bg-[#0a1220] p-7 sm:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#68a0ff]">
                Antes de iniciar
              </p>

              <p className="mt-3 max-w-3xl text-xl font-medium leading-8 text-white">
                El porcentaje, el alcance del servicio y las condiciones de la
                gestión se definen previamente para que ambas partes tengan
                claridad desde el inicio.
              </p>
            </div>

            <a
              href="#contacto"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1668ff] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#347cff]"
            >
              Consultar mi caso
            </a>
          </div>
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-6">
          <p className="text-sm leading-7 text-white/40">
            La revisión de información dentro de la gestión corresponde a la
            información comercial suministrada y disponible para conocer la
            oportunidad. Las verificaciones jurídicas, financieras, contables,
            técnicas, notariales, peritajes o demás estudios especializados
            corresponden a las partes y a los profesionales o entidades
            competentes.
          </p>
        </div>
      </div>
    </section>
  );
}
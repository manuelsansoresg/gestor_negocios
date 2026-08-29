const scopeItems = [
  {
    title: "Sí hago gestión comercial",
    description:
      "Busco prospectos, facilito el contacto entre las partes, reviso la información comercial disponible, coordino acercamientos, doy seguimiento y acompaño el proceso dentro del alcance acordado.",
  },
  {
    title: "No realizo trámites especializados",
    description:
      "No sustituyo a abogados, contadores, peritos, notarios, entidades financieras, autoridades de tránsito ni otros profesionales o entidades competentes.",
  },
  {
    title: "La verificación especializada corresponde a las partes",
    description:
      "Las verificaciones jurídicas, financieras, contables, técnicas, notariales, peritajes y demás estudios especializados deben ser realizados directamente por las partes con los profesionales correspondientes.",
  },
];

export default function Scope() {
  return (
    <section
      id="alcance"
      className="relative overflow-hidden bg-[#f5f7fb] py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#1668ff]/5 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#0b4dcc]/5 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#1668ff]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#1668ff]">
              Alcance de mi gestión
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-[#0a0d12] sm:text-5xl md:text-6xl">
            Qué incluye mi participación y qué corresponde a terceros
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#5b6472] sm:text-lg">
            Mi trabajo se enfoca en la gestión y conexión comercial. Acompaño el
            proceso dentro del alcance acordado, sin reemplazar a los
            profesionales o entidades que deben intervenir en verificaciones o
            trámites especializados.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {scopeItems.map((item, index) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-[#e1e7f0] bg-white p-6 shadow-[0_15px_40px_rgba(17,24,39,0.04)] sm:p-7"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1668ff]/10 text-sm font-semibold text-[#1668ff]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-[#0a0d12]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#667085] sm:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] bg-[#07111f] p-7 text-white sm:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#68a0ff]">
            Importante
          </p>

          <p className="mt-3 max-w-3xl text-xl font-medium leading-8">
            La revisión de información dentro de la gestión se refiere a la
            información comercial suministrada y disponible para conocer la
            oportunidad. No constituye una certificación jurídica, financiera,
            contable, técnica o notarial.
          </p>
        </div>
      </div>
    </section>
  );
}
const differences = [
  {
    title: "Identifico",
    description:
      "Quién puede tener interés real según el tipo de oportunidad.",
  },
  {
    title: "Busco",
    description:
      "Posibles prospectos dentro de la gestión.",
  },
  {
    title: "Conecto",
    description:
      "El acercamiento con contexto para que ambas partes puedan evaluar.",
  },
  {
    title: "Doy seguimiento",
    description:
      "Mantengo continuidad durante el proceso dentro del alcance acordado.",
  },
];

export default function Differentiation() {
  return (
    <section className="relative overflow-hidden bg-[#05070b] py-20 text-white md:py-28">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1668ff]/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div data-reveal className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#68a0ff]">
            La diferencia
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-5xl md:text-6xl">
            No vendo contactos.
            <span className="block text-[#68a0ff]">
              Gestiono oportunidades.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            Mi trabajo no se limita a presentar personas, sino que identifico
            prospectos, facilito conexiones, coordino el proceso comercial y
            doy seguimiento hasta el alcance previamente acordado.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {differences.map((item, index) => (
            <article
              key={item.title}
              data-reveal="scale"
              data-delay={String(index + 1)}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 text-center"
            >
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#1668ff]/10 text-sm font-semibold text-[#68a0ff]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/50">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
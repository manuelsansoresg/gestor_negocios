const benefits = [
  {
    number: "01",
    title: "Ahorras tiempo",
    description:
      "No tienes que dedicar todo tu tiempo a buscar personas interesadas mientras atiendes tus propias actividades.",
  },
  {
    number: "02",
    title: "Amplías tu alcance",
    description:
      "La oportunidad deja de depender únicamente de tus contactos o de las personas que ya conoces.",
  },
  {
    number: "03",
    title: "Tienes seguimiento",
    description:
      "Hay una persona dedicada a mover la oportunidad, dar continuidad a conversaciones y facilitar el proceso.",
  },
];

export default function WhyPay() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div
        aria-hidden="true"
        className="absolute right-[-8rem] top-0 h-80 w-80 rounded-full bg-[#1668ff]/5 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div
          data-reveal
          className="rounded-[2.25rem] bg-[#07111f] px-7 py-10 text-white sm:px-10 lg:px-12 lg:py-14"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#68a0ff]">
                ¿Por qué trabajar con un gestor?
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.06] tracking-[-0.04em] sm:text-5xl">
                Tú tienes la oportunidad.
                <span className="mt-2 block text-[#68a0ff]">
                  Yo busco a quién puede interesarle.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              Ahorras tiempo, amplías tu alcance comercial y tienes una persona
              dedicada a buscar, conectar y dar seguimiento a posibles
              interesados en tu operación.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.number}
              data-reveal="scale"
              data-delay={String(index + 1)}
              className="rounded-[1.75rem] border border-[#e2e8f0] bg-[#f8fafc] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#1668ff]/25"
            >
              <span className="text-sm font-semibold tracking-[0.16em] text-[#1668ff]">
                {benefit.number}
              </span>

              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.025em] text-[#0a0d12]">
                {benefit.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#667085] sm:text-base">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
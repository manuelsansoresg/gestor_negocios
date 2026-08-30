const testimonials = [
  {
    quote:
      "David nos ayudó a organizar mejor la oportunidad y a conectar con personas realmente interesadas. El seguimiento durante el proceso fue muy claro.",
    name: "Andrés Felipe Rojas",
    detail: "Gestión comercial",
  },
  {
    quote:
      "La comunicación fue directa y siempre hubo acompañamiento. Nos orientó durante el proceso y facilitó el contacto con posibles interesados.",
    name: "Juliana Marcela Gómez",
    detail: "Oportunidad de negocio",
  },
  {
    quote:
      "Valoramos especialmente el seguimiento y la forma de presentar la oportunidad. El proceso fue mucho más ordenado de lo que esperábamos.",
    name: "Carlos Andrés Ramírez",
    detail: "Compra y venta",
  },
];

export default function Testimonials() {
  return (
    <section
      id="resenas"
      className="relative overflow-hidden bg-[#05070b] py-20 text-white md:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-8rem] top-16 h-80 w-80 rounded-full bg-[#1668ff]/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-0 right-[-8rem] h-80 w-80 rounded-full bg-[#0b4dcc]/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div data-reveal className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#2878ff]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#68a0ff]">
              Experiencias
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.06] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Lo que dicen quienes han trabajado conmigo
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            La confianza, el seguimiento y una comunicación clara son parte
            importante de cada gestión.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              data-reveal="scale"
              data-delay={String(index + 1)}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#2878ff]/35 hover:bg-[#0d1627]"
            >
              <div className="flex gap-1 text-[#68a0ff]">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              <blockquote className="mt-6 text-base leading-8 text-white/75">
                “{testimonial.quote}”
              </blockquote>

              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="font-semibold text-white">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-white/40">
                  {testimonial.detail}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs leading-6 text-white/35">
          Los testimonios mostrados deben corresponder a experiencias reales
          y autorizadas por cada cliente.
        </p>
      </div>
    </section>
  );
}
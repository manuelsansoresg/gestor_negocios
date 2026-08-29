const categories = [
  {
    number: "01",
    title: "Inmuebles",
    description:
      "Casas, apartamentos, lotes, fincas, locales comerciales, bodegas y otras propiedades comerciales.",
  },
  {
    number: "02",
    title: "Empresas y negocios",
    description:
      "Empresas y negocios en funcionamiento, oportunidades de compra y negocios en venta.",
  },
  {
    number: "03",
    title: "Franquicias",
    description:
      "Franquicias disponibles, negocios franquiciables y oportunidades de expansión.",
  },
  {
    number: "04",
    title: "Maquinaria y equipos",
    description:
      "Maquinaria industrial, agrícola, comercial, especializada y equipos de trabajo.",
  },
  {
    number: "05",
    title: "Vehículos",
    description:
      "Automóviles, camionetas, camiones, flotas y vehículos comerciales o de trabajo.",
  },
  {
    number: "06",
    title: "Muebles",
    description:
      "Mobiliario para hogar, empresas, oficinas, comercios, hoteles y restaurantes.",
  },
  {
    number: "07",
    title: "Inventarios y mercancía",
    description:
      "Inventarios empresariales, liquidaciones, excedentes y lotes de mercancía.",
  },
  {
    number: "08",
    title: "Proyectos inmobiliarios",
    description:
      "Proyectos de vivienda, construcción, loteos y oportunidades para inversionistas.",
  },
  {
    number: "09",
    title: "Servicios profesionales",
    description:
      "Conexiones entre empresas, profesionales, proveedores y posibles clientes.",
  },
];

export default function BusinessCategories() {
  return (
    <section
      id="portafolio"
      className="relative overflow-hidden bg-[#05070b] py-20 text-white md:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-8rem] top-20 h-80 w-80 rounded-full bg-[#1668ff]/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-20 right-[-10rem] h-96 w-96 rounded-full bg-[#0b4dcc]/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div data-reveal className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#2878ff]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#68a0ff]">
              Qué puedo ayudarte a comprar o vender
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.06] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Una oportunidad puede estar en cualquier sector
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            Puedo ayudarte a gestionar oportunidades de compra, venta o
            inversión en Tuluá y el Valle del Cauca, en diferentes tipos de
            activos, empresas y negocios.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => (
            <article
              key={category.number}
              data-reveal="scale"
              data-delay={String((index % 3) + 1)}
              className="group rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#2878ff]/40 hover:bg-[#0d1627]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-sm font-semibold tracking-[0.18em] text-[#4f8cff]">
                  {category.number}
                </span>

                <span className="h-2.5 w-2.5 rounded-full bg-[#1668ff] opacity-50 transition group-hover:opacity-100" />
              </div>

              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-white">
                {category.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/55">
                {category.description}
              </p>
            </article>
          ))}
        </div>

        <div
          data-reveal
          className="mt-12 rounded-[2rem] border border-[#2878ff]/20 bg-[#0a1220] p-7 sm:p-9"
        >
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#68a0ff]">
                ¿No ves lo que buscas en la lista?
              </p>

              <p className="mt-3 max-w-2xl text-xl font-medium leading-8 text-white">
                Estas son solo algunas de las oportunidades que puedo gestionar.
                Si tienes algo diferente para comprar o vender, cuéntame y
                revisamos el caso.
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
      </div>
    </section>
  );
}

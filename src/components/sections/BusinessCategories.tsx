const categories = [
  {
    number: "01",
    title: "Muebles",
    description: "Gestión de oportunidades de compra y venta de:",
    items: [
      "Muebles para hogar",
      "Mobiliario empresarial",
      "Muebles de oficina",
      "Mobiliario comercial",
      "Muebles para hoteles y restaurantes",
      "Lotes de muebles",
      "Liquidaciones de mobiliario",
    ],
  },
  {
    number: "02",
    title: "Maquinaria y equipos",
    description: "Gestión de oportunidades relacionadas con:",
    items: [
      "Maquinaria industrial",
      "Maquinaria agrícola",
      "Equipos de construcción",
      "Maquinaria especializada",
      "Equipos comerciales",
      "Maquinaria nueva o usada",
      "Lotes de maquinaria",
    ],
  },
  {
    number: "03",
    title: "Vehículos",
    description: "Gestión de oportunidades para:",
    items: [
      "Automóviles",
      "Camionetas",
      "Camiones",
      "Vehículos comerciales",
      "Vehículos de trabajo",
      "Flotas",
      "Vehículos especializados",
    ],
    note:
      "La gestión se concentra en la oportunidad comercial y la conexión entre las partes. Los trámites de tránsito, peritajes, transferencias y demás procedimientos corresponden a las partes y a las entidades o profesionales competentes.",
  },
  {
    number: "04",
    title: "Inmuebles urbanos",
    description: "Gestión de oportunidades inmobiliarias:",
    items: [
      "Casas",
      "Apartamentos",
      "Lotes urbanos",
      "Edificios",
      "Oficinas",
      "Locales",
      "Bodegas",
      "Propiedades comerciales",
    ],
    note:
      "Conectamos propietarios con potenciales compradores e inversionistas.",
  },
  {
    number: "05",
    title: "Proyectos inmobiliarios",
    description: "Gestión comercial de oportunidades relacionadas con:",
    items: [
      "Proyectos de vivienda",
      "Proyectos de apartamentos",
      "Proyectos comerciales",
      "Proyectos de construcción",
      "Loteos",
      "Proyectos en desarrollo",
      "Proyectos dirigidos a inversionistas",
    ],
  },
  {
    number: "06",
    title: "Negocios en funcionamiento",
    description:
      "Si tienes un negocio funcionando y estás buscando comprador, podemos gestionar la oportunidad.",
    items: [
      "Restaurantes",
      "Hoteles",
      "Tiendas",
      "Comercios",
      "Negocios de servicios",
      "Negocios digitales",
      "Negocios con inventario",
      "Negocios con activos",
      "Negocios con operación establecida",
    ],
  },
  {
    number: "07",
    title: "Empresas",
    description: "Gestión de oportunidades empresariales:",
    items: [
      "Empresas en funcionamiento",
      "Empresas familiares",
      "Empresas con activos",
      "Empresas con operaciones establecidas",
      "Participaciones empresariales",
      "Oportunidades de inversión",
      "Empresas en búsqueda de compradores estratégicos",
    ],
    note:
      "Las condiciones jurídicas, financieras, contables y corporativas deben ser verificadas por las partes y sus asesores correspondientes.",
  },
  {
    number: "08",
    title: "Franquicias",
    description: "Gestión de oportunidades relacionadas con:",
    items: [
      "Franquicias disponibles",
      "Franquicias en expansión",
      "Unidades franquiciadas",
      "Oportunidades de inversión",
      "Expansión territorial",
      "Modelos de negocio franquiciables",
    ],
    note:
      "Conectamos oportunidades de franquicia con potenciales inversionistas.",
  },
  {
    number: "09",
    title: "Inventario y lotes comerciales",
    description: "Gestión de oportunidades para la venta de:",
    items: [
      "Inventarios empresariales",
      "Liquidaciones",
      "Excedentes",
      "Saldos comerciales",
      "Lotes de mercancía",
      "Activos empresariales",
      "Inventarios por cierre de negocio",
      "Compras al por mayor",
    ],
  },
  {
    number: "10",
    title: "Servicios profesionales",
    description:
      "Gestión de conexiones comerciales entre clientes y proveedores de servicios:",
    items: [
      "Abogados",
      "Contadores",
      "Ingenieros",
      "Arquitectos",
      "Consultores",
      "Diseñadores",
      "Empresas tecnológicas",
      "Agencias",
      "Servicios empresariales",
      "Servicios especializados",
    ],
    note:
      "El profesional o empresa contratada será responsable de prestar directamente el servicio.",
  },
];

const additionalRealEstate = [
  {
    title: "Inmuebles rurales",
    items: [
      "Fincas",
      "Haciendas",
      "Parcelas",
      "Lotes rurales",
      "Predios agrícolas",
      "Propiedades productivas",
    ],
  },
  {
    title: "Locales y bodegas",
    items: [
      "Locales comerciales",
      "Bodegas",
      "Centros logísticos",
      "Espacios industriales",
      "Inmuebles para almacenamiento",
      "Propiedades comerciales",
    ],
  },
];

export default function BusinessCategories() {
  return (
    <section
      id="portafolio"
      className="relative overflow-hidden bg-[#05070b] py-20 text-white md:py-28"
    >
      {/* Fondo decorativo */}
      <div
        aria-hidden="true"
        className="absolute left-[-8rem] top-20 h-80 w-80 rounded-full bg-[#1668ff]/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-20 right-[-10rem] h-96 w-96 rounded-full bg-[#0b4dcc]/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        {/* Encabezado */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#2878ff]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#68a0ff]">
              Portafolio de negocios
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.06] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Oportunidades que puedo gestionar
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            Gestión y conexión comercial en distintas categorías, desde
            inmuebles y empresas hasta maquinaria, vehículos, inventarios y
            servicios profesionales.
          </p>
        </div>

        {/* Grid principal */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <article
              key={category.number}
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

              <p className="mt-3 text-sm leading-6 text-white/55">
                {category.description}
              </p>

              <ul className="mt-5 space-y-2.5">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-white/75"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2878ff]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {category.note && (
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-xs leading-5 text-white/40">
                    {category.note}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Oportunidades inmobiliarias adicionales */}
        <div className="mt-20">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#68a0ff]">
              Oportunidades inmobiliarias adicionales
            </span>

            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Más opciones dentro del sector inmobiliario
            </h3>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {additionalRealEstate.map((group) => (
              <div
                key={group.title}
                className="rounded-[1.75rem] border border-white/10 bg-[#0a0f18] p-6 sm:p-7"
              >
                <h4 className="text-xl font-semibold text-white">
                  {group.title}
                </h4>

                <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-white/65"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2878ff]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cierre */}
        <div className="mt-16 rounded-[2rem] border border-[#2878ff]/20 bg-[#0a1220] p-7 sm:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#68a0ff]">
                ¿Tienes una oportunidad?
              </p>

              <p className="mt-3 max-w-2xl text-xl font-medium leading-8 text-white">
                Si tienes un activo, negocio, empresa o proyecto que necesita
                llegar a posibles compradores o inversionistas, podemos revisar
                la oportunidad.
              </p>
            </div>

            <a
              href="#contacto"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1668ff] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#347cff]"
            >
              Quiero gestionar una oportunidad
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
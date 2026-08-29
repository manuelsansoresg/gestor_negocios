const opportunities = [
  "Inmuebles",
  "Empresas",
  "Negocios",
  "Maquinaria",
  "Vehículos",
  "Inventarios",
  "Franquicias",
  "Proyectos inmobiliarios",
  "Muebles",
  "Locales",
  "Bodegas",
  "Servicios profesionales",
];

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#05070b] py-20 text-white md:py-28"
    >
      {/* Fondos decorativos */}
      <div
        aria-hidden="true"
        className="absolute left-[-10rem] top-10 h-80 w-80 rounded-full bg-[#1668ff]/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-[-10rem] right-[-8rem] h-96 w-96 rounded-full bg-[#0b4dcc]/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20">
          {/* Columna izquierda */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#2878ff]" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#68a0ff]">
                Contacto
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              ¿Tienes una oportunidad de negocio?
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              Si tienes un activo, empresa, negocio, proyecto o servicio que
              necesitas conectar con posibles compradores, inversionistas o
              empresas interesadas, podemos revisar la oportunidad.
            </p>

            {/* Tipos de oportunidades */}
            <div className="mt-8 flex flex-wrap gap-3">
              {opportunities.map((opportunity) => (
                <span
                  key={opportunity}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/65"
                >
                  {opportunity}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <p className="max-w-2xl text-xl font-medium leading-8 text-white">
                Puedo ayudarte a gestionar la oportunidad y conectarla con
                potenciales interesados.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-[#0a0f18] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.4)] sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#68a0ff]">
                David Aldana
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white">
                Gestor de Negocios
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/55 sm:text-base">
                Cuéntame brevemente qué oportunidad tienes, qué estás buscando
                y cuál es el objetivo de la gestión.
              </p>

              <div className="mt-8 space-y-3">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/57XXXXXXXXXX"
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-14 w-full items-center justify-center rounded-full bg-[#1668ff] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#347cff]"
                >
                  Contactar por WhatsApp
                </a>

                {/* Correo */}
                <a
                  href="mailto:contacto@negociosenlinea.co"
                  className="flex min-h-14 w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition hover:border-[#2878ff]/50 hover:bg-[#2878ff]/10"
                >
                  Enviar correo
                </a>
              </div>

              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="text-xs leading-6 text-white/40">
                  La información inicial permite conocer mejor la oportunidad
                  antes de definir el alcance de la gestión.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Marca */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#68a0ff]">
                NEGOCIOSENLINEA.CO
              </p>

              <p className="mt-3 max-w-2xl text-2xl font-medium leading-9 text-white">
                Conectando oportunidades con personas que buscan hacer
                negocios.
              </p>
            </div>

            <p className="text-sm text-white/40">
              Compra · Vende · Invierte · Conecta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
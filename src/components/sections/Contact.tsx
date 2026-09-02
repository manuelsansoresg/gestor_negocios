import LeadForm from "@/components/forms/LeadForm";

const opportunities = [
  "Inmuebles",
  "Empresas",
  "Negocios",
  "Franquicias",
  "Maquinaria",
  "Vehículos",
  "Muebles",
  "Inventarios",
  "Proyectos",
];

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#05070b] py-14 text-white md:py-16"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-10rem] top-10 h-80 w-80 rounded-full bg-[#1668ff]/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-[-10rem] right-[-8rem] h-96 w-96 rounded-full bg-[#0b4dcc]/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-10 xl:gap-14">
          <div data-reveal="left" className="min-w-0">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#2878ff]" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#68a0ff]">
                Contacto · Colombia
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              ¿Qué quieres comprar o vender?
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              Gestiono oportunidades comerciales en Colombia. Cuéntame qué
              estás buscando o qué quieres vender y revisamos cómo conectar con
              posibles interesados.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {opportunities.map((opportunity) => (
                <span
                  key={opportunity}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/65"
                >
                  {opportunity}
                </span>
              ))}
            </div>

            <p className="mt-7 max-w-2xl text-xl font-medium leading-8 text-white">
              Si tienes una oportunidad, hablemos.
            </p>
            <a
              href="https://wa.me/573053971539?text=Hola%20David,%20quisiera%20consultarte%20sobre%20una%20oportunidad%20de%20negocio."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[#1668ff]/50 bg-[#1668ff]/10 px-6 py-2.5 text-sm font-semibold text-white transition hover:border-[#347cff] hover:bg-[#1668ff]/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#68a0ff] sm:w-auto"
            >
              WhatsApp
            </a>
          </div>

          <div data-reveal="right" data-delay="1" className="relative min-w-0">
            <div className="rounded-[2rem] border border-white/10 bg-[#0a0f18] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.4)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#68a0ff]">
                David Aldana
              </p>

              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                Gestor de Negocios
              </h3>

              <p className="mt-1 text-sm font-medium text-[#68a0ff]">
                Colombia
              </p>

              <p className="mt-3 text-sm leading-6 text-white/55">
                Escríbeme y cuéntame brevemente qué quieres comprar, vender o
                qué tipo de oportunidad estás buscando.
              </p>

              <LeadForm />

              {/* Horario de atención */}
              <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1668ff]/10 text-[#68a0ff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#68a0ff]">
                      Horario de atención
                    </p>

                    <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs leading-5 text-white/55">
                      <span className="font-medium text-white/85">Lunes a viernes</span>
                      <span aria-hidden="true">·</span>
                      <span>9:00 a. m. – 5:00 p. m.</span>
                      <span aria-hidden="true" className="hidden sm:inline">·</span>
                      <span className="basis-full text-white/45 sm:basis-auto">Hora de Colombia</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 border-t border-white/10 pt-3">
                <p className="text-xs leading-5 text-white/55">
                  La información inicial me permite conocer la oportunidad y
                  determinar cómo puedo ayudarte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

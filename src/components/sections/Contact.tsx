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
      className="relative overflow-hidden bg-[#05070b] py-20 text-white md:py-24"
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
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20">
          <div data-reveal="left">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#2878ff]" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#68a0ff]">
                Contacto · Tuluá
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              ¿Qué quieres comprar o vender?
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              Si estás en Tuluá, Valle del Cauca, cuéntame qué estás buscando o
              qué oportunidad quieres ofrecer. Revisamos el caso y vemos cómo
              puedo ayudarte a conectar con posibles interesados.
            </p>

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

            <p className="mt-10 max-w-2xl text-xl font-medium leading-8 text-white">
              Si tienes una oportunidad, hablemos.
            </p>
          </div>

          <div data-reveal="right" data-delay="1" className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-[#0a0f18] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.4)] sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#68a0ff]">
                David Aldana
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white">
                Gestor de Negocios
              </h3>

              <p className="mt-2 text-sm font-medium text-[#68a0ff]">
                Tuluá · Valle del Cauca
              </p>

              <p className="mt-4 text-sm leading-7 text-white/55 sm:text-base">
                Escríbeme y cuéntame brevemente qué quieres comprar, vender o
                qué tipo de oportunidad estás buscando.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href="https://wa.me/573053971539?text=Hola%20David,%20quisiera%20consultarte%20sobre%20una%20oportunidad%20de%20negocio%20en%20Tulu%C3%A1."
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-14 w-full items-center justify-center rounded-full bg-[#1668ff] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#347cff]"
                >
                  Hablar con David por WhatsApp
                </a>

                <a
                  href="mailto:davidaldana97@hotmail.com"
                  className="flex min-h-14 w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition hover:border-[#2878ff]/50 hover:bg-[#2878ff]/10"
                >
                  Enviar correo
                </a>
              </div>

              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="text-xs leading-6 text-white/40">
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

const factors = [
  "Tipo de negocio",
  "Valor de la operación",
  "Complejidad",
  "Tiempo requerido",
  "Alcance de la gestión",
  "Características particulares de la oportunidad",
];

export default function Fees() {
  return (
    <section
      id="honorarios"
      className="relative overflow-hidden bg-[#05070b] py-20 text-white md:py-28"
    >
      {/* Fondos decorativos */}
      <div
        aria-hidden="true"
        className="absolute left-[-8rem] top-10 h-80 w-80 rounded-full bg-[#1668ff]/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-[-8rem] right-[-10rem] h-96 w-96 rounded-full bg-[#0b4dcc]/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Columna izquierda */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#2878ff]" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#68a0ff]">
                Honorarios de gestión
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-semibold leading-[1.06] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Honorarios calculados sobre el valor de la operación concretada
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              El servicio de gestión se remunera mediante honorarios calculados
              sobre el valor total de la operación concretada, conforme al
              porcentaje y las condiciones previamente acordadas con el cliente.
            </p>

            <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#68a0ff]">
                Importante
              </p>

              <p className="mt-3 text-sm leading-7 text-white/60">
                El porcentaje no es fijo para todos los casos. Se define de
                acuerdo con las características y alcance de cada oportunidad.
              </p>
            </div>
          </div>

          {/* Ejemplo visual */}
          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-[#0a0f18] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.4)] sm:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#68a0ff]">
                    Ejemplo
                  </p>

                  <p className="mt-2 text-sm text-white/45">
                    Operación comercial concretada
                  </p>
                </div>

                <span className="rounded-full border border-[#2878ff]/30 bg-[#1668ff]/10 px-4 py-2 text-xs font-semibold text-[#79a8ff]">
                  COP
                </span>
              </div>

              <div className="mt-7 space-y-5">
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                    Valor total de la operación
                  </p>

                  <p className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                    $100.000.000
                  </p>

                  <p className="mt-1 text-sm text-white/40">
                    Pesos colombianos
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                      Honorarios acordados
                    </p>

                    <p className="mt-2 text-3xl font-semibold text-[#6da0ff]">
                      8%
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#2878ff]/20 bg-[#0d1a2f] p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#79a8ff]">
                      Honorarios de gestión
                    </p>

                    <p className="mt-2 text-3xl font-semibold tracking-[-0.02em] text-white">
                      $8.000.000
                    </p>

                    <p className="mt-1 text-xs text-white/40">
                      COP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Factores */}
        <div className="mt-16 border-t border-white/10 pt-12">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#68a0ff]">
                El porcentaje puede variar según
              </p>

              <p className="mt-3 max-w-md text-xl font-medium leading-8 text-white">
                Cada operación se evalúa de forma individual antes de definir
                los honorarios.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {factors.map((factor, index) => (
                <div
                  key={factor}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1668ff]/10 text-xs font-semibold text-[#68a0ff]">
                      {index + 1}
                    </span>

                    <p className="text-sm font-medium text-white/75">
                      {factor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cierre */}
        <div className="mt-14 rounded-[2rem] border border-[#2878ff]/20 bg-[#0a1220] p-7 sm:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#68a0ff]">
                Antes de comenzar
              </p>

              <p className="mt-3 max-w-2xl text-xl font-medium leading-8 text-white">
                El porcentaje y las condiciones de la gestión se acuerdan
                previamente con el cliente.
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
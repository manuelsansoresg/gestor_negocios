export default function About() {
  return (
    <section
      id="que-es-la-gestion"
      className="relative overflow-hidden bg-[#f5f7fb] py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#1668ff]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#0b3f91]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#1668ff]" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#1668ff]">
                Gestión de negocios en Tuluá
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#0a0d12] sm:text-5xl">
              Te ayudo a conectar una oportunidad con la persona indicada
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#5b6472] sm:text-lg">
              Si estás en Tuluá, Valle del Cauca, y quieres vender un inmueble,
              negocio, empresa, vehículo, maquinaria, franquicia u otro activo,
              puedo ayudarte a buscar posibles interesados.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#5b6472] sm:text-lg">
              Y si estás buscando comprar o invertir, también puedo ayudarte a
              identificar oportunidades y generar el contacto entre las partes.
            </p>

            <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-[#0a0d12]">
              Mi objetivo es generar conexiones que puedan convertirse en
              negocios concretados.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-[#dbe3f0] bg-white p-6 shadow-[0_20px_60px_rgba(17,24,39,0.06)] sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#e6ebf3] bg-[#f9fbff] p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1668ff]/10 text-sm font-semibold text-[#1668ff]">
                    01
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-[#0a0d12]">
                    Cuéntame qué buscas
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#667085]">
                    Puede ser algo que quieres vender, comprar o una oportunidad
                    de inversión.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#e6ebf3] bg-[#f9fbff] p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1668ff]/10 text-sm font-semibold text-[#1668ff]">
                    02
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-[#0a0d12]">
                    Reviso la oportunidad
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#667085]">
                    Conozco sus características y las condiciones principales
                    del negocio.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#e6ebf3] bg-[#f9fbff] p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1668ff]/10 text-sm font-semibold text-[#1668ff]">
                    03
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-[#0a0d12]">
                    Busco interesados
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#667085]">
                    Compradores, vendedores, inversionistas o empresas según la
                    oportunidad.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#e6ebf3] bg-[#f9fbff] p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1668ff]/10 text-sm font-semibold text-[#1668ff]">
                    04
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-[#0a0d12]">
                    Genero la conexión
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#667085]">
                    Facilito el acercamiento para que las partes puedan evaluar
                    y negociar.
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-[#07111f] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5f94ff]">
                  David Aldana · Tuluá
                </p>

                <p className="mt-3 text-lg font-medium leading-7 text-white">
                  Conectando personas que tienen una oportunidad con personas
                  que están buscando una.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
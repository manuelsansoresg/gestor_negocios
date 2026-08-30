export default function Results() {
  return (
    <section
      id="resultados"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#1668ff]/5 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div
          data-reveal
          className="grid gap-10 rounded-[2.25rem] border border-[#dfe6f0] bg-[#f7f9fc] p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-12"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1668ff]">
              Resultados
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-[#0a0d12] sm:text-5xl">
              Una gestión orientada a oportunidades reales
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#5b6472] sm:text-lg">
              Cada nueva gestión busca generar relaciones comerciales reales,
              procesos claros y oportunidades que puedan convertirse en
              negocios concretados.
            </p>

            <div className="mt-7 rounded-2xl bg-[#07111f] p-6 text-white">
              <p className="text-sm leading-7 text-white/60">
                A medida que existan resultados verificables, esta sección
                mostrará información real sobre operaciones gestionadas,
                compradores conectados, vendedores atendidos y casos de éxito.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

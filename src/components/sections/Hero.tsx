import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#05070b] text-white"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-10rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[#0b5cff]/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-[-12rem] right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-[#0047ab]/10 blur-[120px]"
      />

      <div className="mx-auto grid min-h-[calc(100vh-78px)] max-w-7xl items-center gap-12 px-6 py-14 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-12 lg:py-16">
        {/* Contenido */}
        <div className="hero-content relative z-10 max-w-2xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-9 bg-[#2878ff]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#68a0ff]">
              Gestor de Negocios en Tuluá
            </span>
          </div>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-white/45">
            David Aldana
          </p>

          <h1 className="text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[4rem]">
            ¿Quieres comprar o vender?
          </h1>

          <p className="mt-4 max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#68a0ff] sm:text-4xl lg:text-[3.25rem]">
            Te ayudo a encontrar la conexión adecuada.
          </p>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
            Inmuebles, empresas, franquicias, maquinaria, vehículos y más.
          </p>

          <p className="mt-4 text-sm font-semibold tracking-[0.04em] text-[#68a0ff]">
            Tuluá · Valle del Cauca
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1668ff] px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#347cff]"
            >
              Quiero comprar o vender
            </a>

            <a
              href="#portafolio"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.02] px-7 py-3 text-sm font-medium text-white transition duration-300 hover:border-[#2878ff]/50 hover:bg-[#2878ff]/10"
            >
              Ver oportunidades
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className="hero-image relative z-10 mx-auto w-full max-w-[560px]">
          <div
            aria-hidden="true"
            className="absolute inset-10 rounded-[2rem] bg-[#1265ff]/15 blur-[70px]"
          />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0e16] p-2 shadow-[0_35px_100px_rgba(0,0,0,0.5)]">
            <Image
              src="/images/gestion-negocios-hero.jpg"
              alt="Gestor de negocios en Tuluá conectando compradores, vendedores e inversionistas"
              width={1100}
              height={1400}
              priority
              className="h-auto w-full rounded-[1.6rem] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#1b65dd]/30 to-transparent" />
    </section>
  );
}
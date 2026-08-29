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

      <div className="mx-auto grid min-h-[calc(100vh-78px)] max-w-7xl items-center gap-12 px-6 py-16 md:px-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:px-12 lg:py-20">
        <div className="relative z-10 max-w-3xl">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-9 bg-[#2878ff]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#68a0ff]">
              Gestión de Negocios
            </span>
          </div>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-white/55">
            David Aldana
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[4.2rem]">
            ¿Quieres comprar o vender?
            <span className="mt-2 block text-[#68a0ff]">
              Te ayudo a encontrar la conexión adecuada.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
            Inmuebles, empresas, franquicias, maquinaria, vehículos, muebles,
            inventarios y otras oportunidades de negocio.
          </p>

          <p className="mt-3 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Conecto compradores, vendedores e inversionistas para facilitar
            oportunidades comerciales.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1668ff] px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#347cff]"
            >
              Quiero comprar o vender
            </a>

            <a
              href="#portafolio"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-7 py-3 text-sm font-medium text-white transition duration-300 hover:border-[#2878ff]/60 hover:bg-[#2878ff]/10"
            >
              Ver oportunidades
            </a>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="max-w-2xl text-sm leading-7 text-white/45">
              Compra · Vende · Invierte · Conecta
            </p>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[520px]">
          <div
            aria-hidden="true"
            className="absolute inset-10 rounded-[2rem] bg-[#1265ff]/20 blur-[70px]"
          />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0e16] p-2 shadow-[0_35px_100px_rgba(0,0,0,0.55)]">
            <Image
              src="/images/gestion-negocios-hero.jpg"
              alt="Gestión de negocios para conectar compradores, vendedores e inversionistas"
              width={1100}
              height={1400}
              priority
              className="h-auto w-full rounded-[1.6rem] object-cover"
            />
          </div>

          <div className="absolute -bottom-5 left-5 right-5 hidden rounded-2xl border border-white/10 bg-[#080b11]/90 p-5 shadow-2xl backdrop-blur-xl sm:block lg:left-[-2rem] lg:right-auto lg:w-[310px]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5c96ff]">
              Gestión comercial
            </p>

            <p className="mt-2 text-sm font-medium text-white">
              ¿Tienes algo para comprar o vender?
            </p>

            <p className="mt-2 text-xs leading-5 text-white/50">
              Te ayudo a conectar con personas interesadas en la oportunidad.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#1b65dd]/40 to-transparent" />
    </section>
  );
}
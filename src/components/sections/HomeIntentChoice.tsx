import Link from "next/link";

export default function HomeIntentChoice() {
  return (
    <section className="bg-[#f5f7fb] py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1668ff]">
            Elige tu objetivo
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#0a0d12] sm:text-4xl">
            ¿Qué quieres hacer?
          </h2>

          <p className="mt-4 text-base leading-7 text-[#5b6472] sm:text-lg">
            Selecciona la opción que mejor describe lo que necesitas y te
            mostraré cómo funciona el proceso.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Link
            href="/comprar"
            className="group rounded-[2rem] border border-[#dce4f0] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#1668ff]/30 hover:shadow-lg sm:p-9"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1668ff]/10 text-[#1668ff]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  d="M12 3v18M7 8l5-5 5 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#1668ff]">
              Comprar
            </p>

            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#0a0d12]">
              Busco una oportunidad
            </h3>

            <p className="mt-4 leading-7 text-[#5b6472]">
              Si estás buscando una empresa, inmueble, maquinaria, franquicia u
              otra oportunidad, te ayudo a definir qué necesitas y buscar
              opciones compatibles.
            </p>

            <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#1668ff]">
              Ver cómo comprar
              <span className="transition group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>

          <Link
            href="/vender"
            className="group rounded-[2rem] border border-[#dce4f0] bg-[#07111f] p-7 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#d4af37]/30 hover:shadow-lg sm:p-9"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d4af37]/10 text-[#e7c95b]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  d="M12 21V3M7 16l5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#e7c95b]">
              Vender
            </p>

            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
              Tengo una oportunidad
            </h3>

            <p className="mt-4 leading-7 text-white/55">
              Si quieres vender una empresa, inmueble, maquinaria, franquicia u
              otro activo, te ayudo a organizar la oportunidad y buscar posibles
              interesados.
            </p>

            <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#e7c95b]">
              Ver cómo vender
              <span className="transition group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
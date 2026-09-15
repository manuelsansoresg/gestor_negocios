"use client";

import Image from "next/image";
import Link from "next/link";

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

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-12 lg:py-16">
        <div className="hero-content relative z-10 max-w-2xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-9 bg-[#2878ff]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#68a0ff]">
              David Aldana · Gestor de Negocios
            </span>
          </div>

          <h1 className="text-4xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[4rem]">
            Gestor de negocios para comprar, vender o invertir
          </h1>

          <p className="mt-5 max-w-xl text-2xl font-semibold leading-[1.15] tracking-[-0.03em] text-[#68a0ff] sm:text-3xl lg:text-[2.6rem]">
            Conecto oportunidades con posibles compradores, vendedores e
            inversionistas en Colombia.
          </p>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
            Empresas · Inmuebles · Maquinaria · Franquicias · Vehículos ·
            Inventarios · Proyectos
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/comprar"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1668ff] px-8 py-3 text-sm font-semibold uppercase tracking-[0.04em] text-white transition duration-300 hover:bg-[#347cff]"
            >
              Quiero comprar
            </Link>

            <Link
              href="/vender"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d4af37]/35 bg-[#d4af37]/10 px-8 py-3 text-sm font-semibold uppercase tracking-[0.04em] text-[#f0d16c] transition duration-300 hover:border-[#d4af37]/60 hover:bg-[#d4af37]/15"
            >
              Quiero vender
            </Link>
          </div>

          <p className="mt-5 text-sm leading-6 text-white/40">
            Elige una opción y te explico cómo puedo ayudarte según tu objetivo.
          </p>

          <div className="mt-8 border-t border-white/10 pt-5">
            <p className="text-sm font-semibold text-white">
              David Aldana
            </p>

            <p className="mt-1 text-sm text-white/55">
              Gestión de oportunidades comerciales en Colombia
            </p>
          </div>
        </div>

        <div className="hero-image relative z-10 mx-auto w-full max-w-[560px]">
          <div
            aria-hidden="true"
            className="absolute inset-10 rounded-[2rem] bg-[#1265ff]/15 blur-[70px]"
          />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0e16] p-2 shadow-[0_35px_100px_rgba(0,0,0,0.5)]">
            <Image
              src="/images/gestion-negocios-hero.jpg"
              alt="Gestión de negocios conectando propietarios, compradores, inversionistas y empresas"
              width={1122}
              height={1402}
              sizes="(max-width: 640px) calc(100vw - 48px), 560px"
              preload
              className="h-auto w-full rounded-[1.6rem] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#1b65dd]/30 to-transparent" />
    </section>
  );
}
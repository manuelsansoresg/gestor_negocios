"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Qué hago", href: "#que-es-la-gestion" },
  { label: "Oportunidades", href: "#portafolio" },
  { label: "Cómo trabajo", href: "#como-trabajo" },
  { label: "Honorarios", href: "#honorarios" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070b]/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-6 md:px-10 lg:px-12">
        {/* Marca */}
        <a
          href="#inicio"
          aria-label="Ir al inicio"
          className="group flex items-center gap-3"
        >
          <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white">
            <Image
              src="/images/gestor de negocio colombia.png"
              alt=""
              width={56}
              height={56}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="leading-none">
            <p className="text-base font-bold tracking-[0.08em] text-[#3b82f6]">
              GESTOR
            </p>
            <p className="mt-1 text-[10px] font-medium tracking-[0.2em] text-[#f2b719]">
              DE NEGOCIOS
            </p>
          </div>
        </a>

        {/* Menú desktop */}
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-7 lg:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/60 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden lg:block">
          <a
            href="#contacto"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1668ff] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#347cff]"
          >
            Consultar una oportunidad
          </a>
        </div>

        {/* Botón móvil */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] lg:hidden"
        >
          <div className="relative h-5 w-5">
            <span
              className={`absolute left-0 top-1 h-[2px] w-5 bg-white transition-all duration-300 ${
                isOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[9px] h-[2px] w-5 bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[15px] h-[2px] w-5 bg-white transition-all duration-300 ${
                isOpen ? "-translate-y-[8px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Menú móvil */}
      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`overflow-hidden border-t border-white/10 bg-[#05070b] transition-all duration-300 lg:hidden ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav
          aria-label="Navegación móvil"
          className="mx-auto flex max-w-7xl flex-col px-6 py-5"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-white/[0.06] py-4 text-base font-medium text-white/70 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="mt-5 flex min-h-12 items-center justify-center rounded-full bg-[#1668ff] px-6 text-sm font-semibold text-white"
          >
            Consultar una oportunidad
          </a>
        </nav>
      </div>
    </header>
  );
}

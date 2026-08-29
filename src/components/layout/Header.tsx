"use client";

import { useState } from "react";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#que-es-la-gestion" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Cómo trabajo", href: "#como-trabajo" },
  { label: "Honorarios", href: "#honorarios" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070b]/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-6 md:px-10 lg:px-12">
        {/* Marca */}
        <a href="#inicio" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1668ff] text-sm font-bold text-white">
            DA
          </div>

          <div className="leading-tight">
            <p className="text-base font-semibold tracking-[-0.02em] text-white">
              David Aldana
            </p>
            <p className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-white/40">
              Gestor de Negocios
            </p>
          </div>
        </a>

        {/* Menú desktop */}
        <nav className="hidden items-center gap-7 lg:flex">
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
            Tengo una oportunidad
          </a>
        </div>

        {/* Botón móvil */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
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
        className={`overflow-hidden border-t border-white/10 bg-[#05070b] transition-all duration-300 lg:hidden ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-6 py-5">
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
            Tengo una oportunidad
          </a>
        </nav>
      </div>
    </header>
  );
}
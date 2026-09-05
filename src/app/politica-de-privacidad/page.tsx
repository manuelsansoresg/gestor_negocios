import type { Metadata } from "next";
import Link from "next/link";
import { privacyPolicy } from "@/data/privacyPolicy";

export const metadata: Metadata = {
  title: "Política de Privacidad | Gestor de Negocios",
  description:
    "Política de privacidad y tratamiento de datos personales de Gestor de Negocios.",
  alternates: {
    canonical: "/politica-de-privacidad",
  },
};

function isSectionHeading(line: string) {
  return /^\d+\.\s+[A-ZÁÉÍÓÚÜÑ0-9\s,()/-]+$/.test(line);
}

function isSubheading(line: string) {
  return /^\d+\.\d+\.\s+/.test(line);
}

export default function PrivacyPolicyPage() {
  const lines = privacyPolicy.split("\n");

  return (
    <section className="relative overflow-hidden bg-[#05070b] py-16 text-white md:py-20">
      <div
        aria-hidden="true"
        className="absolute left-[-9rem] top-10 h-80 w-80 rounded-full bg-[#1668ff]/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="absolute right-[-10rem] top-[36rem] h-96 w-96 rounded-full bg-[#0b4dcc]/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-5xl px-6 md:px-10 lg:px-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#68a0ff] transition hover:text-white"
        >
          <span aria-hidden="true">←</span>
          Volver al inicio
        </Link>

        <header className="mt-8 border-b border-white/10 pb-10">
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#2878ff]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#68a0ff]">
              Privacidad y datos personales
            </span>
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Política de Privacidad
          </h1>

          <p className="mt-5 text-sm text-white/50">
            Última actualización: 5 de septiembre de 2026
          </p>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">
            Esta política explica cómo Gestor de Negocios recopila, utiliza,
            almacena y protege la información personal relacionada con sus
            servicios y canales de contacto.
          </p>
        </header>

        <article className="pt-8">
          {lines.map((rawLine, index) => {
            const line = rawLine.trim();

            if (!line) {
              return <div key={index} className="h-4" />;
            }

            if (
              line ===
              "POLÍTICA DE PRIVACIDAD Y TRATAMIENTO DE DATOS PERSONALES"
            ) {
              return null;
            }

            if (line === "GESTOR DE NEGOCIOS") {
              return null;
            }

            if (line.startsWith("Última actualización:")) {
              return null;
            }

            if (line === "AUTORIZACIÓN PARA EL TRATAMIENTO DE DATOS PERSONALES") {
              return (
                <h2
                  key={index}
                  className="mt-14 border-t border-white/10 pt-10 text-2xl font-semibold tracking-[-0.025em] text-white sm:text-3xl"
                >
                  Autorización para el tratamiento de datos personales
                </h2>
              );
            }

            if (isSectionHeading(line)) {
              return (
                <h2
                  key={index}
                  className="mt-10 scroll-mt-28 text-xl font-semibold tracking-[-0.02em] text-white sm:text-2xl"
                >
                  {line}
                </h2>
              );
            }

            if (isSubheading(line)) {
              return (
                <h3
                  key={index}
                  className="mt-7 text-lg font-semibold text-[#8ab7ff]"
                >
                  {line}
                </h3>
              );
            }

            if (line.startsWith("• ")) {
              return (
                <div
                  key={index}
                  className="mt-2 flex gap-3 pl-1 text-[15px] leading-7 text-white/65 sm:text-base"
                >
                  <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#1668ff]" />

                  <span>{line.replace(/^•\s*/, "")}</span>
                </div>
              );
            }

            if (/^\d+\.\s+/.test(line)) {
              const match = line.match(/^(\d+)\.\s+(.*)$/);

              if (match) {
                return (
                  <div
                    key={index}
                    className="mt-2 flex gap-3 text-[15px] leading-7 text-white/65 sm:text-base"
                  >
                    <span className="min-w-6 font-semibold text-[#68a0ff]">
                      {match[1]}.
                    </span>

                    <span>{match[2]}</span>
                  </div>
                );
              }
            }

            if (
              line.startsWith("Responsable:") ||
              line.startsWith("Marca:") ||
              line.startsWith("Ciudad:") ||
              line.startsWith("Fecha de actualización:")
            ) {
              const [label, ...rest] = line.split(":");

              return (
                <p
                  key={index}
                  className="mt-2 text-sm leading-7 text-white/60"
                >
                  <span className="font-semibold text-white/80">
                    {label}:
                  </span>{" "}
                  {rest.join(":").trim()}
                </p>
              );
            }

            return (
              <p
                key={index}
                className="mt-4 text-[15px] leading-7 text-white/65 sm:text-base sm:leading-8"
              >
                {line}
              </p>
            );
          })}
        </article>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-white">
              David Stiveen Aldana Posso
            </p>

            <p className="mt-1 text-sm text-white/50">
              Gestor de Negocios · Tuluá, Valle del Cauca, Colombia
            </p>
          </div>

          <Link
            href="/#contacto"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1668ff] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#347cff]"
          >
            Contactar
          </Link>
        </div>
      </div>
    </section>
  );
}
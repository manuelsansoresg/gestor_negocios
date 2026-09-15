import Link from "next/link";
import LeadForm from "@/components/forms/LeadForm";
import type { LeadAction } from "@/lib/lead-options";

type Category = {
  title: string;
  description: string;
};

type IntentLandingProps = {
  action: LeadAction;
  eyebrow: string;
  title: string;
  description: string;
  highlight: string;
  categories: Category[];
  steps: string[];
  sectionTitle: string;
  sectionDescription: string;
  formTitle: string;
  formDescription: string;
  source: string;
  whatsappMessage: string;
};

export default function IntentLanding({
  action,
  eyebrow,
  title,
  description,
  highlight,
  categories,
  steps,
  sectionTitle,
  sectionDescription,
  formTitle,
  formDescription,
  source,
  whatsappMessage,
}: IntentLandingProps) {
  const whatsappUrl = `https://wa.me/573053971539?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      <section
        id="inicio"
        className="relative overflow-hidden bg-[#05070b] py-20 text-white md:py-28"
      >
        <div
          aria-hidden="true"
          className="absolute left-[-10rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[#1668ff]/10 blur-[120px]"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-[-10rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[#d4af37]/5 blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#68a0ff]">
            {eyebrow}
          </p>

          <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-5xl md:text-6xl">
            {title}
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">
            {description}
          </p>

          <p className="mt-5 max-w-3xl text-xl font-semibold leading-8 text-[#68a0ff]">
            {highlight}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1668ff] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#347cff]"
            >
              Comenzar
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1668ff]">
              Oportunidades
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#0a0d12]">
              {sectionTitle}
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#5b6472]">
              {sectionDescription}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <article
                key={category.title}
                className="rounded-[1.75rem] border border-[#e1e7f0] bg-[#f8fafc] p-7"
              >
                <h3 className="text-xl font-semibold text-[#0a0d12]">
                  {category.title}
                </h3>

                <p className="mt-3 leading-7 text-[#5b6472]">
                  {category.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7fb] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1668ff]">
            Proceso
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#0a0d12]">
            Cómo funciona
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step}
                className="rounded-[1.75rem] border border-[#e1e7f0] bg-white p-7"
              >
                <span className="text-sm font-semibold text-[#1668ff]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-4 leading-7 text-[#5b6472]">
                  {step}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-[#e1e7f0] bg-[#f8fafc] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1668ff]">
                Gestión comercial
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#0a0d12]">
                No se trata solo de encontrar un contacto
              </h2>

              <p className="mt-5 leading-8 text-[#5b6472]">
                La gestión parte de entender la oportunidad, organizar la
                información y facilitar conversaciones con personas que puedan
                tener un interés real.
              </p>
            </article>

            <article className="rounded-[2rem] bg-[#07111f] p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#68a0ff]">
                Acompañamiento
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">
                Seguimiento durante el proceso
              </h2>

              <p className="mt-5 leading-8 text-white/60">
                Mantengo comunicación con las partes y doy seguimiento
                comercial dentro del alcance previamente acordado.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="scroll-mt-[78px] bg-[#05070b] py-20 text-white md:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#68a0ff]">
              Contacto
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              {formTitle}
            </h2>

            <p className="mt-5 leading-8 text-white/60">
              {formDescription}
            </p>

            <div className="mt-6 flex flex-wrap gap-5 text-sm">
              <Link
                href="/politica-de-privacidad"
                className="text-[#68a0ff] hover:underline"
              >
                Política de Privacidad
              </Link>

              <Link
                href="/terminos-y-condiciones"
                className="text-[#68a0ff] hover:underline"
              >
                Términos y Condiciones
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#0a0f18] p-6 sm:p-8">
            <LeadForm
              initialAction={action}
              source={source}
            />
          </div>
        </div>
      </section>
    </>
  );
}
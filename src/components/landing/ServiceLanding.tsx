import Link from "next/link";
import LeadForm from "@/components/forms/LeadForm";
import type { LeadAction, OpportunityType } from "@/lib/lead-options";

type ServiceLandingProps = {
  eyebrow: string;
  title: string;
  introduction: string;
  problem: string;
  approach: string;
  steps: string[];
  faqs: Array<{ question: string; answer: string }>;
  opportunityType: OpportunityType;
  action?: LeadAction;
  source: string;
  whatsappMessage: string;
};

export default function ServiceLanding({ eyebrow, title, introduction, problem, approach, steps, faqs, opportunityType, action, source, whatsappMessage }: ServiceLandingProps) {
  const whatsappUrl = `https://wa.me/573053971539?text=${encodeURIComponent(whatsappMessage)}`;
  return <>
    <section id="inicio" className="relative overflow-hidden bg-[#05070b] py-20 text-white md:py-28">
      <div aria-hidden="true" className="absolute left-[-10rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[#1668ff]/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#68a0ff]">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-5xl md:text-6xl">{title}</h1>
        <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">{introduction}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#contacto" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1668ff] px-7 py-3 text-sm font-semibold text-white hover:bg-[#347cff]">Consultar esta oportunidad</a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white hover:bg-white/5">Hablar por WhatsApp</a></div>
      </div>
    </section>

    <section className="bg-white py-20 md:py-28"><div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-2 lg:px-12">
      <article data-reveal className="rounded-[2rem] border border-[#e1e7f0] bg-[#f8fafc] p-7 sm:p-9"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1668ff]">El reto</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#0a0d12]">El problema que ayudo a resolver</h2><p className="mt-5 leading-8 text-[#5b6472]">{problem}</p></article>
      <article data-reveal="right" className="rounded-[2rem] bg-[#07111f] p-7 text-white sm:p-9"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#68a0ff]">Mi enfoque</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">Cómo trabajo en esta operación</h2><p className="mt-5 leading-8 text-white/60">{approach}</p></article>
    </div></section>

    <section className="bg-[#f5f7fb] py-20 md:py-28"><div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1668ff]">Proceso</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#0a0d12]">Pasos de la gestión</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{steps.map((step, index) => <article key={step} className="rounded-[1.75rem] border border-[#e1e7f0] bg-white p-7"><span className="text-sm font-semibold text-[#1668ff]">{String(index + 1).padStart(2, "0")}</span><p className="mt-4 leading-7 text-[#5b6472]">{step}</p></article>)}</div></div></section>

    <section className="bg-white py-20 md:py-28"><div className="mx-auto max-w-4xl px-6 md:px-10"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1668ff]">Preguntas frecuentes</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#0a0d12]">Antes de conversar</h2><div className="mt-10 divide-y divide-[#e1e7f0] border-y border-[#e1e7f0]">{faqs.map((faq) => <details key={faq.question} className="group py-5"><summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-[#0a0d12]">{faq.question}</summary><p className="mt-3 max-w-3xl leading-7 text-[#5b6472]">{faq.answer}</p></details>)}</div></div></section>

    <section id="contacto" className="bg-[#05070b] py-20 text-white md:py-28"><div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-12"><div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#68a0ff]">Contacto</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Cuéntame sobre la oportunidad</h2><p className="mt-5 leading-8 text-white/60">Completa la información inicial para que pueda conocer el caso y definir cómo puedo ayudarte.</p><div className="mt-6 flex gap-5 text-sm"><Link href="/politica-de-privacidad" className="text-[#68a0ff] hover:underline">Política de Privacidad</Link><Link href="/terminos-y-condiciones" className="text-[#68a0ff] hover:underline">Términos</Link></div></div><div className="rounded-[2rem] border border-white/10 bg-[#0a0f18] p-6 sm:p-8"><LeadForm initialAction={action} initialOpportunityType={opportunityType} source={source} /></div></div></section>
  </>;
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Servicios de gestión de negocios", description: "Áreas de gestión comercial para empresas, inmuebles, maquinaria y otras oportunidades en Colombia.", alternates: { canonical: "/servicios" } };

const mainServices = [
  { title: "Empresas y negocios", description: "Gestión de oportunidades de venta y conexión con posibles compradores e inversionistas.", href: "/venta-de-empresas-colombia" },
  { title: "Inmuebles comerciales", description: "Conexión de propietarios, compradores e inversionistas alrededor de oportunidades inmobiliarias.", href: "/inmuebles-comerciales" },
  { title: "Maquinaria y equipos", description: "Presentación y seguimiento comercial de activos para posibles compradores o vendedores.", href: "/maquinaria-y-equipos" },
];
const additional = ["Franquicias", "Vehículos", "Inventarios"];

export default function Page() {
  return <>
    <section id="inicio" className="bg-[#05070b] py-20 text-white md:py-28"><div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12"><p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#68a0ff]">Servicios</p><h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-5xl md:text-6xl">Gestión de oportunidades comerciales en Colombia</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">Ayudo a presentar oportunidades, identificar posibles interesados, facilitar conexiones y dar seguimiento comercial.</p></div></section>
    <section className="bg-white py-20 md:py-28"><div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1668ff]">Áreas principales</p><div className="mt-8 grid gap-5 md:grid-cols-3">{mainServices.map((service, index) => <article key={service.title} data-reveal="scale" data-delay={String(index + 1)} className="flex flex-col rounded-[1.75rem] border border-[#e1e7f0] bg-[#f8fafc] p-7"><h2 className="text-2xl font-semibold text-[#0a0d12]">{service.title}</h2><p className="mt-4 flex-1 leading-7 text-[#5b6472]">{service.description}</p><Link href={service.href} className="mt-7 font-semibold text-[#1668ff] hover:underline">Conocer el servicio →</Link></article>)}</div></div></section>
    <section className="bg-[#f5f7fb] py-20"><div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1668ff]">Servicios adicionales</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#0a0d12]">Otras oportunidades que gestiono</h2><div className="mt-8 flex flex-wrap gap-3">{additional.map((item) => <span key={item} className="rounded-full border border-[#dbe3f0] bg-white px-5 py-3 font-medium text-[#344054]">{item}</span>)}</div><Link href="/#contacto" className="mt-9 inline-flex min-h-12 items-center rounded-full bg-[#1668ff] px-7 text-sm font-semibold text-white hover:bg-[#347cff]">Consultar una oportunidad</Link></div></section>
  </>;
}

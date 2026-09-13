const principles = [
  { title: "Filtrado de interesados", description: "Reviso el perfil y el interés comercial antes de facilitar acercamientos entre las partes." },
  { title: "Información organizada", description: "Ayudo a presentar la información comercial disponible de forma clara y útil para la conversación." },
  { title: "Seguimiento comercial", description: "Doy continuidad a las conversaciones y coordino los siguientes pasos dentro del alcance acordado." },
];

export default function Testimonials() {
  return <section id="confianza" className="relative overflow-hidden bg-[#05070b] py-20 text-white md:py-28">
    <div aria-hidden="true" className="absolute left-[-8rem] top-16 h-80 w-80 rounded-full bg-[#1668ff]/10 blur-[120px]" />
    <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
      <div data-reveal className="max-w-3xl">
        <div className="mb-5 flex items-center gap-3"><span className="h-px w-9 bg-[#2878ff]" /><span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#68a0ff]">Confianza y confidencialidad</span></div>
        <h2 className="text-4xl font-semibold leading-[1.06] tracking-[-0.04em] sm:text-5xl md:text-6xl">Operaciones y oportunidades se manejan con discreción y confidencialidad.</h2>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">Cada gestión requiere cuidar la información, ordenar el proceso y mantener una comunicación clara.</p>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-3">{principles.map((item, index) => <article key={item.title} data-reveal="scale" data-delay={String(index + 1)} className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-7"><span className="text-sm font-semibold text-[#68a0ff]">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-5 text-2xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-7 text-white/60 sm:text-base">{item.description}</p></article>)}</div>
    </div>
  </section>;
}

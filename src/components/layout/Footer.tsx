export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030508] text-white">
      <div
        data-reveal="fade"
        className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-12"
      >
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#68a0ff]">
              GESTORDENEGOCIOS.COM
            </p>

            <p className="mt-3 max-w-xl text-xl font-medium leading-8 text-white">
              Conectando oportunidades con personas que buscan hacer negocios.
            </p>

            <p className="mt-3 text-sm text-white/55">
              Compra · Vende · Invierte · Conecta
            </p>

            <p className="mt-2 text-sm text-white/55">
              Gestor de Negocios en Tuluá, Valle del Cauca, con alcance en
              Colombia
            </p>
          </div>

          <div className="md:text-right">
            <p className="text-sm font-medium text-white/70">
              David Aldana
            </p>

            <p className="mt-1 text-sm text-white/55">
              Gestor de Negocios
            </p>

            <p className="mt-1 text-sm text-white/50">
              Tuluá · Valle del Cauca
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} David Aldana — Gestor de Negocios
          </p>
        </div>
      </div>
    </footer>
  );
}

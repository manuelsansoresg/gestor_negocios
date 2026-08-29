export default function LegalNotice() {
  return (
    <section
      id="aviso"
      className="border-t border-white/10 bg-[#08101c] py-7 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div
          data-reveal="fade"
          className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5 sm:p-6"
        >
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1668ff]/15 text-sm font-semibold text-[#68a0ff]">
              i
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#68a0ff]">
                Aviso
              </p>

              <div className="mt-3 space-y-3 text-sm leading-7 text-white/45">
                <p>
                  El servicio corresponde a gestión y conexión comercial. Las
                  partes son responsables de verificar la información,
                  condiciones, titularidad y el estado jurídico, financiero,
                  técnico y comercial de cualquier oportunidad antes de
                  concretar una operación.
                </p>

                <p>
                  Los trámites, estudios, peritajes, asesorías jurídicas,
                  financieras, contables, tributarias, técnicas y demás
                  actuaciones que requieran profesionales o entidades
                  competentes deberán ser realizados directamente por las partes
                  con los profesionales o entidades correspondientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

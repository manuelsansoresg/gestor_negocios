const actions = [
  {
    number: "01",
    title: "Analizo tu oportunidad",
    description:
      "Conozco qué quieres comprar, vender o gestionar y reviso la información comercial disponible.",
  },
  {
    number: "02",
    title: "Identifico el perfil adecuado",
    description:
      "Defino qué tipo de comprador, vendedor, inversionista o empresa puede tener interés.",
  },
  {
    number: "03",
    title: "Busco posibles interesados",
    description:
      "Amplío el alcance de la oportunidad buscando prospectos que puedan encajar con la operación.",
  },
  {
    number: "04",
    title: "Genero la conexión",
    description:
      "Facilito el acercamiento para que las partes puedan conocer, evaluar y avanzar en la oportunidad.",
  },
];

export default function About() {
  return (
    <section
      id="que-es-la-gestion"
      className="relative overflow-hidden bg-[#f5f7fb] py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#1668ff]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#0b3f91]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div data-reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#1668ff]" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#1668ff]">
                Gestión de oportunidades
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#0a0d12] sm:text-5xl">
              Tú tienes la oportunidad. Mi trabajo es ayudar a moverla.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#5b6472] sm:text-lg">
              Vendes un inmueble, negocio, empresa, vehículo,
              maquinaria, franquicia u otro activo, puedo ayudarte a buscar
              posibles compradores en Colombia.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#5b6472] sm:text-lg">
              ¿Buscas comprar o invertir? puedo ayudarte a
              identificar empresas, negocios en funcionamiento y oportunidades
              que correspondan con lo que necesitas.
            </p>

            <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-[#0a0d12]">
              El objetivo no es entregar un contacto, sino gestionar una
              oportunidad comercial con seguimiento y claridad.
            </p>
          </div>

          <div data-reveal="right" data-delay="1" className="relative">
            <div className="rounded-[2rem] border border-[#dbe3f0] bg-white p-6 shadow-[0_20px_60px_rgba(17,24,39,0.06)] sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {actions.map((action) => (
                  <article
                    key={action.number}
                    className="rounded-2xl border border-[#e6ebf3] bg-[#f9fbff] p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1668ff]/10 text-sm font-semibold text-[#1668ff]">
                      {action.number}
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-[#0a0d12]">
                      {action.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#667085]">
                      {action.description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-[#07111f] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5f94ff]">
                  David Aldana · Gestor de Negocios
                </p>

                <p className="mt-3 text-lg font-medium leading-7 text-white">
                  Conectando oportunidades con personas que pueden tener un
                  interés real en ellas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

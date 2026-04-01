import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const differentiators = [
  {
    number: "01",
    title: "Vivimos acá.",
    description:
      "No trabajamos con guías de internet. Conocemos cada sendero, cada parador y cada atajo que no aparece en ningún mapa.",
  },
  {
    number: "02",
    title: "Tu viaje, no el nuestro.",
    description:
      "Armamos cada itinerario desde cero. Sin paquetes enlatados, sin fechas fijas. Todo se moldea a cómo vos querés viajar.",
  },
  {
    number: "03",
    title: "Presentes antes, durante y después.",
    description:
      "Estamos disponibles mientras estás en ruta. Si algo cambia, lo resolvemos. No dejamos a nadie librado a su suerte.",
  },
  {
    number: "04",
    title: "Experiencias que se cuentan.",
    description:
      "No buscamos que hagas el viaje típico. Buscamos que vuelvas con algo que no esperabas encontrar.",
  },
];

export function ValuePropSection() {
  return (
    <section
      id="propuesta"
      aria-label="Propuesta de valor"
      className="relative overflow-hidden bg-[var(--neutral-50)] px-5 py-[var(--home-section-y)] md:px-10 md:py-[var(--home-section-y-lg)]"
    >
      {/* Decorative vertical rule */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 top-0 hidden w-px bg-[var(--border-default)] md:block"
      />

      <div className="relative mx-auto w-full max-w-[1200px]">

        {/* Header — editorial rhythm aligned with nearby sections */}
        <div className="mb-[var(--home-section-header-gap)] grid gap-10 border-b border-[var(--border-default)] pb-[var(--home-section-header-pad)] md:mb-[var(--home-section-header-gap-lg)] md:grid-cols-2 md:gap-16 md:pb-[var(--home-section-header-pad-lg)]">
          <div>
            <div data-reveal>
              <SectionEyebrow>Lo que nos hace diferentes</SectionEyebrow>
            </div>
            <h2
              className="mt-5 max-w-[11ch] font-display text-[44px] font-normal leading-[0.98] tracking-tight text-[var(--text-primary)] md:text-[64px]"
              data-reveal
            >
              No somos una agencia.{" "}
              <em className="italic text-[var(--brand-primary)]">
                Somos los que vivimos acá.
              </em>
            </h2>
          </div>

          <div className="flex items-end" data-reveal>
            <p className="max-w-[38ch] text-[12px] font-light leading-[1.95] text-[var(--text-secondary)] md:text-[13px]">
              Conocemos cada ruta, cada atractivo y cada detalle que convierte
              una excursión normal en algo que después contás. Armamos tu
              experiencia con vos, no para vos.
            </p>
          </div>
        </div>

        {/* Differentiators — numbered list with oversized index */}
        <ul className="divide-y divide-[var(--border-default)]">
          {differentiators.map((item, i) => (
            <li
              key={item.number}
              className="group relative isolate grid grid-cols-[44px_1fr] gap-x-5 gap-y-3 overflow-hidden py-8 transition-colors duration-300 md:grid-cols-[72px_minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start md:gap-x-8 md:gap-y-0 md:py-10"
              data-reveal
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-3 inset-y-1 -z-10 rounded-[22px] bg-white/90 opacity-0 shadow-[0_18px_50px_rgba(19,31,26,0.05)] transition-all duration-300 ease-out motion-safe:group-hover:inset-x-0 motion-safe:group-hover:inset-y-0 motion-safe:group-hover:opacity-100"
              />

              {/* Index number */}
              <span className="pt-1 font-display text-[11px] font-normal tabular-nums tracking-[0.14em] text-[var(--text-muted)] md:text-[13px]">
                {item.number}
              </span>

              {/* Title */}
              <h3 className="max-w-[12ch] font-display text-[28px] font-normal leading-[1.02] tracking-tight text-[var(--text-primary)] transition-colors duration-300 motion-safe:group-hover:text-[var(--brand-primary)] md:text-[34px]">
                {item.title}
              </h3>

              {/* Description — third column on desktop, hidden column on mobile */}
              <p className="col-start-2 max-w-[34ch] text-[12px] font-light leading-[1.95] text-[var(--text-secondary)] md:col-start-3 md:pt-1 md:text-[13px]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

        {/* Bottom accent line */}
        <div
          aria-hidden="true"
          className="mt-0 h-px w-full bg-[var(--border-default)]"
        />
      </div>
    </section>
  );
}

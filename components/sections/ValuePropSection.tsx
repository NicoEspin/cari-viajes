import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import valueImage from "@/public/value.webp";

const differentiators = [
  {
    number: "01",
    title: "Vivimos acá.",
    description:
      "Conocemos rutas, horarios y rincones que no aparecen en una búsqueda rápida.",
  },
  {
    number: "02",
    title: "Tu viaje, no el nuestro.",
    description:
      "Ajustamos cada plan a tu ritmo, tu grupo y el tiempo que realmente tenés.",
  },
  {
    number: "03",
    title: "Presentes cuando hace falta.",
    description:
      "Te respondemos antes de salir y seguimos cerca si algo cambia en el camino.",
  },
  {
    number: "04",
    title: "Experiencias con criterio.",
    description:
      "Curamos salidas para que vuelvas con algo más que fotos lindas.",
  },
];

export function ValuePropSection() {
  return (
    <section
      id="propuesta"
      aria-label="Propuesta de valor"
      className="relative overflow-hidden bg-[var(--neutral-50)] px-5 py-[var(--home-section-y)] md:px-10 md:py-[var(--home-section-y-lg)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[var(--border-default)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-16 h-56 w-56 rounded-full opacity-70 blur-3xl md:-right-12 md:h-72 md:w-72"
        style={{ background: "rgba(4, 139, 114, 0.08)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[28%] h-48 w-48 rounded-full opacity-80 blur-3xl md:h-64 md:w-64"
        style={{ background: "rgba(252, 203, 62, 0.12)" }}
      />

      <div className="relative mx-auto w-full max-w-[1200px]">
        <div className="grid gap-10 border-b border-[var(--border-default)] pb-[var(--home-section-header-pad)] md:gap-12 md:pb-[var(--home-section-header-pad-lg)] lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-center">
          <div className="max-w-[34rem]">
            <div data-reveal>
              <SectionEyebrow>Lo que nos hace diferentes</SectionEyebrow>
            </div>

            <h2
              className="mt-5 max-w-[11ch] font-display text-[42px] font-normal leading-[0.98] tracking-tight text-[var(--text-primary)] md:text-[60px]"
              data-reveal
            >
              Vivimos Carlos Paz,{" "}
              <em className="italic text-[var(--brand-primary)]">
                por eso te guiamos mejor
              </em>
            </h2>

            <p
              className="mt-6 max-w-[38ch] text-[12px] font-light leading-[1.9] text-[var(--text-secondary)] md:text-[13px]"
              data-reveal
            >
              Diseñamos cada salida con mirada local, respuesta rápida y un plan
              claro para que viajar por Carlos Paz se sienta simple, cuidado y
              con intención.
            </p>

            <div
              className="mt-8 grid gap-3 text-[0.68rem] tracking-[0.18em] uppercase text-[var(--text-muted)] sm:grid-cols-2"
              data-reveal
            >
              <p className="rounded-[1.4rem] border border-[var(--border-default)] bg-white/70 px-4 py-3 backdrop-blur-sm">
                Rutas curadas según tu plan
              </p>
              <p className="rounded-[1.4rem] border border-[var(--border-default)] bg-white/70 px-4 py-3 backdrop-blur-sm">
                Atención real por WhatsApp
              </p>
            </div>
          </div>

          <figure
            className="group relative overflow-hidden rounded-[2rem] border border-[rgba(19,31,26,0.08)] bg-[var(--neutral-100)] p-3 shadow-[0_28px_80px_rgba(19,31,26,0.08)] lg:ml-auto lg:w-full lg:max-w-[34rem]"
            data-reveal
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] bg-[var(--neutral-200)] lg:aspect-[5/4] xl:aspect-[4/3]">
              <Image
                src={valueImage}
                alt="Viajera disfrutando una experiencia en el entorno serrano de Carlos Paz"
                placeholder="blur"
                sizes="(min-width: 1024px) 42vw, (min-width: 768px) 50vw, 100vw"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03]"
              />
            </div>

            <div className="pointer-events-none absolute inset-x-3 bottom-3 rounded-[1.4rem] border border-white/40 bg-[linear-gradient(180deg,rgba(247,244,236,0.72)_0%,rgba(247,244,236,0.94)_100%)] p-5 shadow-[0_18px_40px_rgba(19,31,26,0.08)] backdrop-blur-md md:inset-x-auto md:bottom-6 md:right-6 md:max-w-[17rem]">
              <p className="text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-[var(--brand-primary)]">
                Carlos Paz, bien guiado
              </p>
              <figcaption className="mt-2 max-w-[22ch] font-display text-[1.5rem] leading-[1.02] tracking-tight text-[var(--text-primary)]">
                El viaje arranca cuando alguien te entiende rápido.
              </figcaption>
            </div>
          </figure>
        </div>

        <ul className="mt-[var(--home-section-inner-gap)] grid gap-3 md:mt-[var(--home-section-inner-gap-lg)] md:grid-cols-2">
          {differentiators.map((item) => (
            <li
              key={item.number}
              className="group relative isolate overflow-hidden rounded-[1.7rem] border border-[var(--border-default)] bg-white/78 p-6 shadow-[0_18px_40px_rgba(19,31,26,0.04)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_rgba(19,31,26,0.08)] md:min-h-[214px] md:p-7"
              data-reveal
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 motion-safe:group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(4,139,114,0.06) 0%, rgba(252,203,62,0.12) 100%)",
                }}
              />

              <div className="flex items-start justify-between gap-4">
                <span className="pt-1 font-display text-[11px] font-normal tabular-nums tracking-[0.14em] text-[var(--text-muted)] md:text-[13px]">
                  {item.number}
                </span>
                <span className="rounded-full border border-[rgba(4,139,114,0.15)] bg-[rgba(4,139,114,0.06)] px-3 py-1 text-[0.58rem] font-semibold tracking-[0.18em] uppercase text-[var(--brand-primary)]">
                  Cari Turismo
                </span>
              </div>

              <h3 className="mt-7 max-w-[12ch] font-display text-[28px] font-normal leading-[1.02] tracking-tight text-[var(--text-primary)] transition-colors duration-300 motion-safe:group-hover:text-[var(--brand-primary)] md:text-[32px]">
                {item.title}
              </h3>

              <p className="mt-4 max-w-[31ch] text-[12px] font-light leading-[1.9] text-[var(--text-secondary)] md:text-[13px]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

        <div
          aria-hidden="true"
          className="mt-[var(--home-section-footer-gap)] h-px w-full bg-[var(--border-default)] md:mt-[var(--home-section-footer-gap-lg)]"
        />
      </div>
    </section>
  );
}

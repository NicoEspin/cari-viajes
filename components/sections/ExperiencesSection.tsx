import Link from "next/link";
import {
  excursionCategoryLabels,
  excursions,
  getFeaturedExcursions,
  type Excursion,
} from "@/content/excursions";
import { SectionEyebrow } from "../ui/SectionEyebrow";

const routeModes = [
  "Aventura de sierra",
  "Ciudad y laguna",
  "Escapadas icónicas",
  "Planes para grupos",
];

export function ExperiencesSection() {
  const experiences = getFeaturedExcursions().slice(0, 5);

  return (
    <section
      id="excursiones"
      aria-label="Excursiones destacadas"
      className="relative overflow-hidden bg-[var(--neutral-50)]"
    >
      {/* Noise texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Vertical rule */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[var(--home-section-y)] left-5 top-[var(--home-section-y)] z-10 hidden w-px md:block md:left-10"
        style={{
          background:
            "linear-gradient(to bottom, var(--brand-primary) 0%, var(--gold) 40%, transparent 100%)",
          opacity: 0.2,
        }}
      />

        <div className="relative z-20 mx-auto max-w-[1200px] px-5 py-[var(--home-section-y)] md:px-10 md:py-[var(--home-section-y-lg)]">

        {/* ── Header ─────────────────────────────────────────── */}
        <div
          className="mb-[var(--home-section-header-gap)] grid grid-cols-1 gap-10 border-b border-[var(--border-default)] pb-[var(--home-section-header-pad)] md:mb-[var(--home-section-header-gap-lg)] md:pb-[var(--home-section-header-pad-lg)] lg:grid-cols-2 lg:items-end lg:gap-16"
          data-reveal
        >
          {/* Left: heading */}
          <div>
            <SectionEyebrow>Excursiones Destacadas</SectionEyebrow>

            <h2
              className="font-display mt-5 text-[56px] leading-none font-light tracking-tight text-[var(--text-primary)] md:text-[72px]"
            >
              Cada salida,{" "}
              <em className="italic text-[var(--brand-primary)]">curada</em>
              <br />
              al detalle.
            </h2>
          </div>

          {/* Right: description + tags + CTA */}
          <div className="flex flex-col gap-6">
            <p className="text-[11.5px] leading-[2] text-[var(--text-secondary)] max-w-[42ch]">
              Una guía de ritmo pensada para no perder tiempo.
              <br />
              Sierra, ciudad, íconos y grupos — todo en un lugar,
              <br />
              sin comparar veinte opciones iguales.
            </p>

            <ul className="flex flex-wrap gap-2">
              {routeModes.map((mode) => (
                <li
                  key={mode}
                  className="border border-[var(--border-default)] px-3 py-1.5 text-[9px] font-normal tracking-[0.18em] uppercase text-[var(--text-muted)] transition-colors hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]"
                  style={{ borderRadius: 0 }}
                >
                  {mode}
                </li>
              ))}
            </ul>

            <Link
              href="/excursiones"
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-[var(--brand-primary)] transition-[gap] duration-300 hover:gap-3.5"
            >
              Ver mapa completo -&gt;
            </Link>
          </div>
        </div>

        {/* ── Cards Grid ─────────────────────────────────────── */}
        <div className="grid gap-0.5 lg:grid-cols-[2fr_1fr_1fr] lg:grid-rows-2">

          {/* Hero card */}
          <ExcursionCardHero experience={experiences[0]} index={0} />

          {/* Small cards */}
          {experiences.slice(1, 5).map((exp, i) => (
            <ExcursionCardSmall key={exp.slug} experience={exp} index={i + 1} />
          ))}
        </div>

        {/* ── Bottom bar ─────────────────────────────────────── */}
        <div className="mt-[var(--home-section-footer-gap)] flex items-center justify-between bg-[var(--text-primary)] px-7 py-5 md:mt-[var(--home-section-footer-gap-lg)]">
          <span className="text-[10px] tracking-[0.16em] uppercase text-white/50">
            {excursions.length} experiencias curadas en la data central
          </span>
          <Link
            href="/excursiones"
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-[var(--gold)] transition-[gap] duration-300 hover:gap-3.5"
          >
            Ver todos los recorridos -&gt;
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Sub-components ──────────────────────────────────────── */

function ExcursionCardHero({
  experience,
  index,
}: {
  experience: Excursion;
  index: number;
}) {
  return (
    <Link
      href={`/excursiones/${experience.slug}`}
      className="group relative overflow-hidden bg-white transition-colors hover:bg-[#FAFAF8] lg:row-span-2"
    >
      {/* Top accent line */}
      <div
        className="absolute inset-x-0 top-0 h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "linear-gradient(to right, var(--brand-primary), var(--gold))" }}
      />

      <div className="flex flex-col p-12 min-h-[520px]">
        <p className="mb-7 text-[10px] tracking-[0.2em] uppercase text-[var(--text-muted)]">
          {String(index + 1).padStart(2, "0")} — Destacada
        </p>

        <span
          className="mb-4 inline-block self-start border border-[var(--border-default)] px-3 py-1.5 text-[9px] tracking-[0.16em] uppercase text-[var(--text-muted)]"
          style={{ borderRadius: 0 }}
        >
          {excursionCategoryLabels[experience.category]}
        </span>

        <h3
          className="font-display mb-5 flex-1 text-[42px] leading-[1.02] font-light text-[var(--text-primary)]"
        >
          {experience.title}
        </h3>

        <p className="mb-6 text-[11px] leading-[1.9] text-[var(--text-secondary)] max-w-[38ch]">
          {experience.teaser}
        </p>

        <div className="mt-auto flex items-center gap-3 border-t border-[var(--border-default)] pt-5">
          <span className="bg-[rgba(4,139,114,0.08)] px-2.5 py-1 text-[9px] tracking-[0.16em] uppercase text-[var(--brand-primary)]">
            {excursionCategoryLabels[experience.category]}
          </span>
          <span className="bg-[rgba(200,168,75,0.1)] px-2.5 py-1 text-[9px] tracking-[0.16em] uppercase text-[#9A7A28]">
            {experience.badge ?? "Curada por Cari"}
          </span>
          <span className="ml-auto text-[10px] tracking-[0.08em] text-[var(--text-muted)]">
            {experience.duration}
          </span>
          <div className="flex h-7 w-7 items-center justify-center border border-[var(--border-default)] text-xs text-[var(--text-muted)] transition-all duration-200 group-hover:border-[var(--brand-primary)] group-hover:text-[var(--brand-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </div>
        </div>
      </div>
    </Link>
  );
}

function ExcursionCardSmall({
  experience,
  index,
}: {
  experience: Excursion;
  index: number;
}) {
  return (
    <Link
      href={`/excursiones/${experience.slug}`}
      className="group relative overflow-hidden bg-white transition-colors hover:bg-[#FAFAF8]"
    >
      <div
        className="absolute inset-x-0 top-0 h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "linear-gradient(to right, var(--brand-primary), var(--gold))" }}
      />

      <div className="flex flex-col p-7 min-h-[200px]">
        <p className="mb-6 text-[10px] tracking-[0.2em] uppercase text-[var(--text-muted)]">
          {String(index + 1).padStart(2, "0")}
        </p>

        <h3
          className="font-display mb-3 flex-1 text-[22px] leading-[1.05] font-light text-[var(--text-primary)]"
        >
          {experience.shortTitle}
        </h3>

        <p className="mb-4 text-[11px] leading-[1.8] text-[var(--text-secondary)]">
          {experience.teaser}
        </p>

        <div className="mt-auto flex items-center gap-3 border-t border-[var(--border-default)] pt-4">
          <span className="bg-[rgba(4,139,114,0.08)] px-2.5 py-1 text-[9px] tracking-[0.16em] uppercase text-[var(--brand-primary)]">
            {excursionCategoryLabels[experience.category]}
          </span>
          <span className="ml-auto text-[10px] tracking-[0.08em] text-[var(--text-muted)]">
            {experience.duration}
          </span>
          <div className="flex h-7 w-7 items-center justify-center border border-[var(--border-default)] text-xs text-[var(--text-muted)] transition-all duration-200 group-hover:border-[var(--brand-primary)] group-hover:text-[var(--brand-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </div>
        </div>
      </div>
    </Link>
  );
}

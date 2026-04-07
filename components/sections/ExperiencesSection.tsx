import Image from "next/image";
import Link from "next/link";
import {
  excursionCategoryLabels,
  excursions,
  getFeaturedExcursions,
  type Excursion,
} from "@/content/excursions";
import { getExcursionAssetBySlug } from "@/lib/excursion-assets";
import {
  editorialSquareDarkGhostCtaClassName,
  editorialSquarePrimaryCtaClassName,
  editorialSquarePrimaryStaticChipClassName,
} from "../ui/buttonStyles";
import { SectionEyebrow } from "../ui/SectionEyebrow";

const routeModes = [
  "Aventura de sierra",
  "Ciudad y laguna",
  "Escapadas icónicas",
  "Planes para grupos",
];

function getExperienceImage(experience: Excursion) {
  return getExcursionAssetBySlug(experience.slug)?.image;
}

function getExperienceAlt(experience: Excursion) {
  return `${experience.title} en ${experience.location}`;
}

export function ExperiencesSection() {
  const experiences = getFeaturedExcursions().slice(0, 5);

  return (
    <section
      id="excursiones"
      aria-label="Excursiones destacadas"
      className="relative scroll-mt-24 overflow-hidden bg-[var(--neutral-50)] md:scroll-mt-28"
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
        className="pointer-events-none absolute bottom-[var(--home-section-y)] left-5 top-0 z-10 hidden w-px md:block md:left-10"
        style={{
          background:
            "linear-gradient(to bottom, var(--brand-primary) 0%, var(--gold) 40%, transparent 100%)",
          opacity: 0.2,
        }}
      />

        <div className="relative z-20 mx-auto max-w-[1200px] px-5 pb-[var(--home-section-y)] md:px-10 md:pb-[var(--home-section-y-lg)]">

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
             Salidas bien elegidas,{" "}
              <em className="italic text-[var(--brand-primary)]">para viajar mejor</em>
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
              className={`${editorialSquarePrimaryCtaClassName} w-fit px-6 text-[0.72rem]`}
            >
              Ver mapa completo
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
        <div className="mt-[var(--home-section-footer-gap)] flex flex-col items-start gap-4 bg-[var(--text-primary)] px-7 py-5 md:mt-[var(--home-section-footer-gap-lg)] md:flex-row md:items-center md:justify-between">
          <span className="text-[10px] tracking-[0.16em] uppercase text-white/50">
            {excursions.length} experiencias únicas
          </span>
          <Link
            href="/excursiones"
            className={`${editorialSquareDarkGhostCtaClassName} px-6 text-[0.72rem]`}
          >
            Ver todos los recorridos
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
  const image = getExperienceImage(experience);
  const mobileCardCtaClassName = `${editorialSquarePrimaryStaticChipClassName} px-4 py-2 text-[0.62rem] tracking-[0.14em] group-hover:-translate-y-0.5 group-hover:border-[color-mix(in_srgb,var(--brand-accent-1)_82%,var(--text-primary))] group-hover:bg-[color-mix(in_srgb,var(--brand-accent-1)_82%,var(--text-primary))] group-hover:shadow-[0_0_24px_rgba(236,249,62,0.2)] group-focus-visible:-translate-y-0.5 group-focus-visible:border-[color-mix(in_srgb,var(--brand-accent-1)_82%,var(--text-primary))] group-focus-visible:bg-[color-mix(in_srgb,var(--brand-accent-1)_82%,var(--text-primary))] group-focus-visible:shadow-[0_0_24px_rgba(236,249,62,0.2)]`;

  return (
    <Link
      href={`/excursiones/${experience.slug}`}
      className="experience-card group relative overflow-hidden bg-white transition-[transform,box-shadow,background-color] duration-500 hover:bg-[#FAFAF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--neutral-50)] lg:row-span-2"
      aria-label={`Ver excursion ${experience.title}`}
    >
      <div
        className="absolute inset-x-0 top-0 z-30 h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        style={{ background: "linear-gradient(to right, var(--brand-primary), var(--gold))" }}
      />

      <div className="relative min-h-[520px] lg:min-h-[620px]">
        <div className="relative flex min-h-[520px] flex-col lg:hidden">
          {image ? (
            <div className="relative aspect-[5/4] overflow-hidden bg-[var(--neutral-200)]">
              <Image
                src={image}
                alt={getExperienceAlt(experience)}
                fill
                sizes="(max-width: 1023px) 100vw, 0px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            </div>
          ) : null}

          <div className="flex flex-1 flex-col p-7">
            <p className="mb-5 text-[10px] tracking-[0.2em] uppercase text-[var(--text-muted)]">
              {String(index + 1).padStart(2, "0")} - Destacada
            </p>

            <div className="mb-4 flex flex-wrap gap-2">
              <span className="bg-[rgba(4,139,114,0.08)] px-2.5 py-1 text-[9px] tracking-[0.16em] uppercase text-[var(--brand-primary)]">
                {excursionCategoryLabels[experience.category]}
              </span>
              <span className="bg-[rgba(200,168,75,0.1)] px-2.5 py-1 text-[9px] tracking-[0.16em] uppercase text-[#9A7A28]">
                {experience.badge ?? "Curada por Cari"}
              </span>
            </div>

            <h3 className="font-display mb-3 text-[34px] leading-[1.02] font-light text-[var(--text-primary)]">
              {experience.title}
            </h3>

            <p className="mb-5 text-[11px] leading-[1.85] text-[var(--text-secondary)]">
              {experience.teaser}
            </p>

            <div className="mt-auto flex items-center justify-between gap-4 border-t border-[var(--border-default)] pt-4">
              <div>
                <p className="text-[9px] tracking-[0.16em] uppercase text-[var(--text-muted)]">
                  {experience.duration}
                </p>
                <p className="mt-1 text-[10px] text-[var(--text-secondary)]">{experience.location}</p>
              </div>

              <span className={mobileCardCtaClassName}>
                Ver excursion
              </span>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 hidden lg:block">
          {image ? (
            <>
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={image}
                  alt={getExperienceAlt(experience)}
                  fill
                  sizes="(min-width: 1024px) 66vw, 0px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04] group-focus-visible:scale-[1.04]"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,18,20,0.58)] via-[rgba(14,18,20,0.12)] to-transparent transition-opacity duration-500 group-hover:opacity-0 group-focus-visible:opacity-0" />
              <div className="absolute inset-x-0 bottom-0 z-10 p-10 transition-all duration-500 group-hover:translate-y-3 group-hover:opacity-0 group-focus-visible:translate-y-3 group-focus-visible:opacity-0">
                <p className="mb-4 text-[10px] tracking-[0.2em] uppercase text-white/70">
                  {String(index + 1).padStart(2, "0")} - Destacada
                </p>
                <h3 className="font-display max-w-[9ch] text-[48px] leading-[0.98] font-light text-white">
                  {experience.shortTitle}
                </h3>
              </div>
            </>
          ) : null}

          <div className="absolute inset-0 z-20 flex translate-y-8 flex-col justify-end bg-[linear-gradient(180deg,rgba(250,250,248,0.1)_0%,rgba(250,250,248,0.96)_28%,#FAFAF8_100%)] p-12 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
            <p className="mb-7 text-[10px] tracking-[0.2em] uppercase text-[var(--text-muted)]">
              {String(index + 1).padStart(2, "0")} - Destacada
            </p>

            <span
              className="mb-4 inline-block self-start border border-[var(--border-default)] px-3 py-1.5 text-[9px] tracking-[0.16em] uppercase text-[var(--text-muted)]"
              style={{ borderRadius: 0 }}
            >
              {excursionCategoryLabels[experience.category]}
            </span>

            <p className="mb-3 text-[10px] tracking-[0.18em] uppercase text-[var(--brand-primary)]">
              {experience.heroKicker}
            </p>

            <h3 className="font-display mb-5 max-w-[10ch] text-[42px] leading-[1.02] font-light text-[var(--text-primary)]">
              {experience.editorialTitle}
            </h3>

            <p className="mb-6 max-w-[38ch] text-[11px] leading-[1.9] text-[var(--text-secondary)]">
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
              <div className="flex h-7 w-7 items-center justify-center border border-[var(--border-default)] text-xs text-[var(--text-muted)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-[var(--brand-primary)] group-hover:text-[var(--brand-primary)] group-focus-visible:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:border-[var(--brand-primary)] group-focus-visible:text-[var(--brand-primary)]">
                ↗
              </div>
            </div>
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
  const image = getExperienceImage(experience);
  const mobileCardCtaClassName = `${editorialSquarePrimaryStaticChipClassName} px-4 py-2 text-[0.62rem] tracking-[0.14em] group-hover:-translate-y-0.5 group-hover:border-[color-mix(in_srgb,var(--brand-accent-1)_82%,var(--text-primary))] group-hover:bg-[color-mix(in_srgb,var(--brand-accent-1)_82%,var(--text-primary))] group-hover:shadow-[0_0_24px_rgba(236,249,62,0.2)] group-focus-visible:-translate-y-0.5 group-focus-visible:border-[color-mix(in_srgb,var(--brand-accent-1)_82%,var(--text-primary))] group-focus-visible:bg-[color-mix(in_srgb,var(--brand-accent-1)_82%,var(--text-primary))] group-focus-visible:shadow-[0_0_24px_rgba(236,249,62,0.2)]`;

  return (
    <Link
      href={`/excursiones/${experience.slug}`}
      className="experience-card group relative overflow-hidden bg-white transition-[transform,box-shadow,background-color] duration-500 hover:bg-[#FAFAF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--neutral-50)]"
      aria-label={`Ver excursion ${experience.title}`}
    >
      <div
        className="absolute inset-x-0 top-0 z-30 h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        style={{ background: "linear-gradient(to right, var(--brand-primary), var(--gold))" }}
      />

      <div className="relative min-h-[200px] lg:min-h-[310px]">
        <div className="relative flex min-h-[200px] flex-col lg:hidden">
          {image ? (
            <div className="relative aspect-[16/11] overflow-hidden bg-[var(--neutral-200)]">
              <Image
                src={image}
                alt={getExperienceAlt(experience)}
                fill
                sizes="(max-width: 1023px) 100vw, 0px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            </div>
          ) : null}

          <div className="flex flex-1 flex-col p-6">
            <p className="mb-4 text-[10px] tracking-[0.2em] uppercase text-[var(--text-muted)]">
              {String(index + 1).padStart(2, "0")}
            </p>

            <div className="mb-3 flex flex-wrap gap-2">
              <span className="bg-[rgba(4,139,114,0.08)] px-2.5 py-1 text-[9px] tracking-[0.16em] uppercase text-[var(--brand-primary)]">
                {excursionCategoryLabels[experience.category]}
              </span>
              <span className="text-[9px] tracking-[0.16em] uppercase text-[var(--text-muted)]">
                {experience.duration}
              </span>
            </div>

            <h3 className="font-display mb-3 text-[24px] leading-[1.05] font-light text-[var(--text-primary)]">
              {experience.shortTitle}
            </h3>

            <p className="mb-4 text-[11px] leading-[1.8] text-[var(--text-secondary)]">
              {experience.teaser}
            </p>

            <div className="mt-auto flex items-center justify-between gap-4 border-t border-[var(--border-default)] pt-4">
              <span className="text-[10px] text-[var(--text-secondary)]">{experience.heroKicker}</span>
              <span className={mobileCardCtaClassName}>
                Ver excursion
              </span>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 hidden lg:block">
          {image ? (
            <>
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={image}
                  alt={getExperienceAlt(experience)}
                  fill
                  sizes="(min-width: 1024px) 22vw, 0px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05] group-focus-visible:scale-[1.05]"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,18,20,0.6)] via-[rgba(14,18,20,0.16)] to-transparent transition-opacity duration-500 group-hover:opacity-0 group-focus-visible:opacity-0" />
              <div className="absolute inset-x-0 bottom-0 z-10 p-7 transition-all duration-500 group-hover:translate-y-3 group-hover:opacity-0 group-focus-visible:translate-y-3 group-focus-visible:opacity-0">
                <p className="mb-3 text-[10px] tracking-[0.2em] uppercase text-white/70">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display max-w-[10ch] text-[26px] leading-[1.02] font-light text-white">
                  {experience.shortTitle}
                </h3>
              </div>
            </>
          ) : null}

          <div className="absolute inset-0 z-20 flex translate-y-8 flex-col justify-end bg-[linear-gradient(180deg,rgba(250,250,248,0.08)_0%,rgba(250,250,248,0.96)_38%,#FAFAF8_100%)] p-7 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
            <p className="mb-5 text-[10px] tracking-[0.2em] uppercase text-[var(--text-muted)]">
              {String(index + 1).padStart(2, "0")}
            </p>

            <p className="mb-2 text-[9px] tracking-[0.18em] uppercase text-[var(--brand-primary)]">
              {experience.heroKicker}
            </p>

            <h3 className="font-display mb-3 text-[24px] leading-[1.03] font-light text-[var(--text-primary)]">
              {experience.editorialTitle}
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
              <div className="flex h-7 w-7 items-center justify-center border border-[var(--border-default)] text-xs text-[var(--text-muted)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-[var(--brand-primary)] group-hover:text-[var(--brand-primary)] group-focus-visible:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:border-[var(--brand-primary)] group-focus-visible:text-[var(--brand-primary)]">
                ↗
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

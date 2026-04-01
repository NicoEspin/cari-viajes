import { testimonials, trustMetrics } from "@/content/testimonials";
import { SectionEyebrow } from "../ui/SectionEyebrow";

export function SocialProofSection() {
  const featured = testimonials[0];
  const rest = testimonials.slice(1, 3);

  return (
    <section
      id="testimonios"
      aria-label="Testimonios"
      className="relative overflow-hidden bg-[var(--neutral-50)] px-5 py-[var(--home-section-y)] md:px-10 md:py-[var(--home-section-y-lg)]"
    >
      {/* Decorative oversized quote mark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 right-0 select-none font-display text-[400px] leading-none text-[var(--border-default)] opacity-40 md:text-[600px]"
      >
        &quot;
      </span>

      <div className="relative mx-auto w-full max-w-[1200px]">

        {/* Header */}
        <div className="mb-[var(--home-section-header-gap)] max-w-2xl md:mb-[var(--home-section-header-gap-lg)]" data-reveal>
          <SectionEyebrow>Lo que dicen los que ya fueron</SectionEyebrow>
          <h2 className="mt-5 font-display text-5xl font-normal leading-[1.05] text-[var(--text-primary)] md:text-7xl">
            Lo dicen mejor{" "}
            <em className="italic text-[var(--brand-primary)]">ellos.</em>
          </h2>
        </div>

        {/* Testimonials grid — featured left, two stacked right */}
        <ul className="mb-[var(--home-section-header-pad)] grid gap-4 md:mb-[var(--home-section-header-pad-lg)] md:grid-cols-2">

          {/* Featured card — dark */}
          <li
            className="flex flex-col rounded-2xl bg-[var(--text-primary)] p-9 md:row-span-2"
            data-reveal
          >
            <span
              aria-hidden="true"
              className="mb-5 block font-display text-6xl leading-none text-white/20"
            >
              &quot;
            </span>
            <blockquote className="mb-auto pb-7 text-lg font-light leading-[1.8] text-white/80">
              {featured.text}
            </blockquote>
            <div className="flex items-center gap-3 border-t border-white/15 pt-5">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-sm font-medium text-white/80">
                {featured.author.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
              </div>
              <div>
                <p className="text-sm font-medium text-white">{featured.author}</p>
                <p className="text-xs text-white/50">{featured.detail}</p>
              </div>
              <div className="ml-auto h-1.5 w-1.5 rounded-full bg-white/25" />
            </div>
          </li>

          {/* Secondary cards */}
          {rest.map((t) => (
            <li
              key={t.author}
              className="flex flex-col rounded-2xl border border-[var(--border-default)] bg-white p-9 transition-colors hover:border-[var(--border-hover)]"
              data-reveal
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1" aria-label="5 estrellas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-3 w-3" viewBox="0 0 12 12" fill="#f4a623">
                    <path d="M6 0l1.5 4H12L8.5 6.5 10 11 6 8.5 2 11l1.5-4.5L0 4h4.5z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mb-auto pb-7 text-sm font-light leading-[1.8] text-[var(--text-secondary)]">
                {t.text}
              </blockquote>
              <div className="flex items-center gap-3 border-t border-[var(--border-default)] pt-5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--neutral-100)] text-sm font-medium text-[var(--text-secondary)]">
                  {t.author.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--text-primary)]">{t.author}</p>
                  <p className="text-xs text-[var(--text-muted)]">{t.detail}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="mb-[var(--home-section-inner-gap)] flex items-center gap-4 md:mb-[var(--home-section-inner-gap-lg)]">
          <div className="h-px flex-1 bg-[var(--border-default)]" />
          <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
            En números
          </span>
          <div className="h-px flex-1 bg-[var(--border-default)]" />
        </div>

        {/* Metrics */}
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {trustMetrics.map((metric) => (
            <li
              key={metric.label}
              className="group rounded-xl border border-[var(--border-default)] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-hover)]"
            >
              <p className="font-display text-4xl font-bold leading-none text-[var(--text-primary)]">
                {metric.value}
              </p>
              <p className="mt-2 text-xs leading-snug text-[var(--text-muted)]">
                {metric.label}
              </p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}

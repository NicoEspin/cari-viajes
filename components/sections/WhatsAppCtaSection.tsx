import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { whatsappMessages } from "@/lib/whatsapp";

export function WhatsAppCtaSection() {
  return (
    <section
      id="contacto"
      aria-label="Contacto por WhatsApp"
      className="relative overflow-hidden bg-[var(--brand-primary)] px-5 py-[var(--home-section-y-loose)] text-white md:px-8 md:py-[var(--home-section-y-loose-lg)]"
      style={{ fontFamily: "'DM Mono', monospace" }}
    >
      {/* Noise */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Large ghost text */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none overflow-hidden text-center"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(80px, 18vw, 220px)",
          fontWeight: 300,
          lineHeight: 1,
          color: "rgba(255,255,255,0.04)",
          letterSpacing: "-0.03em",
          whiteSpace: "nowrap",
        }}
      >
        Contacto
      </div>

      {/* Horizontal rules */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" aria-hidden="true" />

      {/* Gold dot top-center */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full"
        style={{ background: "var(--gold, #C8A84B)" }}
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 h-1.5 w-1.5 rounded-full"
        style={{ background: "var(--gold, #C8A84B)" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1200px]">

        {/* ── Top label ──────────────────────────────────────── */}
        <div className="mb-[var(--home-section-header-gap)] flex items-center justify-between border-b border-white/15 pb-6 md:mb-[var(--home-section-header-gap-lg)] md:pb-7">
          <p className="text-[10px] tracking-[0.22em] uppercase text-white/40">
            Contacto directo
          </p>
          <p className="text-[10px] tracking-[0.22em] uppercase text-white/40">
            Sin formularios. Sin esperas.
          </p>
        </div>

        {/* ── Main content ───────────────────────────────────── */}
        <div className="grid gap-14 md:gap-16 lg:grid-cols-[1fr_auto] lg:items-end">
          <div data-reveal>
            <h2
              className="text-[clamp(44px,7vw,88px)] font-light leading-[0.95] tracking-tight"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              ¿Estás en Carlos Paz
              <br />o{" "}
              <em
                className="italic"
                style={{ color: "var(--gold, #C8A84B)" }}
              >
                planeando venir?
              </em>
            </h2>

            <p className="mt-8 max-w-[44ch] text-[11.5px] leading-[2] text-white/55">
              Escribinos y en minutos te contamos qué hay disponible,
              qué conviene para tu plan y cómo lo organizamos.
              Es gratis consultar, sin ningún compromiso.
            </p>
          </div>

          {/* CTA block */}
          <div className="flex flex-col items-start gap-6 lg:items-end" data-reveal>
            <WhatsAppButton
              message={whatsappMessages.cta}
              className="cta-main-button group inline-flex items-center gap-4 border border-white/30 px-8 py-5 text-[10px] tracking-[0.2em] uppercase text-white transition-all duration-300 hover:border-[var(--gold,#C8A84B)] hover:text-[var(--gold,#C8A84B)]"
              style={{ borderRadius: 0, background: "transparent" }}
            >
              Escribinos por WhatsApp
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </WhatsAppButton>

            <p className="text-[9px] tracking-[0.14em] uppercase text-white/30">
              Respondemos tu consulta en el mismo dia
            </p>
          </div>
        </div>

        {/* ── Bottom stat row ─────────────────────────────────── */}
        <div
          className="mt-[calc(var(--home-section-footer-gap)+1.5rem)] grid grid-cols-3 border-t border-white/10 pt-9 md:mt-[calc(var(--home-section-footer-gap-lg)+2rem)] md:pt-11"
        >
          {[
            { value: "< 24 hs", label: "tiempo de respuesta" },
            { value: "Gratis", label: "consultar siempre" },
            { value: "Todo", label: "por WhatsApp" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1.5 text-center">
              <span
                className="text-[28px] font-light leading-none"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  color: "var(--gold, #C8A84B)",
                }}
              >
                {stat.value}
              </span>
              <span className="text-[9px] tracking-[0.16em] uppercase text-white/30">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

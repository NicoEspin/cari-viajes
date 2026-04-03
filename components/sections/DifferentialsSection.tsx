import { Handshake, Sparkles, MapPinned } from "lucide-react";
import { differentials } from "@/content/differentials";
import { whatsappMessages } from "@/lib/whatsapp";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { WhatsAppButton } from "../ui/WhatsAppButton";

const icons = [Handshake, MapPinned, Sparkles];

export function DifferentialsSection() {
  return (
    <section
      id="diferenciales"
      aria-label="Nuestros diferenciales"
      className="relative scroll-mt-24 overflow-hidden bg-[var(--neutral-950)] px-5 py-[var(--home-section-y)] text-[var(--text-on-dark)] md:px-8 md:py-[var(--home-section-y-lg)] md:scroll-mt-28"
    >
      {/* Noise texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Gold radial glow top-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 z-0 h-[480px] w-[480px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, var(--gold, #C8A84B) 0%, transparent 70%)",
        }}
      />

      {/* Brand radial glow bottom-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 z-0 h-[360px] w-[360px] rounded-full opacity-8"
        style={{
          background:
            "radial-gradient(circle, var(--brand-primary, #048B72) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        {/* ── Header ─────────────────────────────────────────── */}
        <div className="flex flex-col gap-12 border-b border-white/10 pb-[var(--home-section-header-pad)] md:pb-[var(--home-section-header-pad-lg)] lg:flex-row lg:items-end lg:justify-between">
          <div data-reveal>
            <SectionEyebrow>Por qué elegirnos</SectionEyebrow>
            <h2
              className="font-display mt-5 text-[56px] font-light leading-none tracking-tight md:text-[72px]"
            >
              Hay razones{" "}
              <em className="italic" style={{ color: "var(--gold, #C8A84B)" }}>
                reales
              </em>
              <br />
              para elegir Cari.
            </h2>
          </div>

          <p
            className="max-w-[38ch] text-[11.5px] leading-[2] text-white/50 lg:text-right"
            data-reveal
          >
            No vendemos paquetes genéricos. Cada detalle está pensado para que
            tu viaje sea tuyo — desde la primera consulta hasta el último
            kilómetro.
          </p>
        </div>

        {/* ── Cards ──────────────────────────────────────────── */}
        <ul className="mt-[var(--home-section-inner-gap)] grid gap-0.5 md:mt-[var(--home-section-inner-gap-lg)] md:grid-cols-3">
          {differentials.map((item, index) => {
            const Icon = icons[index];
            return (
              <li
                key={item.title}
                className="group relative overflow-hidden bg-[var(--neutral-900)] p-8 transition-colors duration-300 hover:bg-[#1a1a17]"
                data-reveal
                style={{ borderRadius: 0 }}
              >
                {/* Top accent */}
                <div
                  className="absolute inset-x-0 top-0 h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(to right, var(--brand-primary, #048B72), var(--gold, #C8A84B))",
                  }}
                />

                {/* Large index number */}
                <span
                  aria-hidden="true"
                  className="font-display pointer-events-none absolute -right-2 -top-6 select-none text-[96px] font-light leading-none tracking-tighter"
                  style={{
                    color: "rgba(200,168,75,0.07)",
                  }}
                >
                  {item.number}
                </span>

                {/* Index label */}
                <p
                  className="mb-8 text-[10px] tracking-[0.2em] uppercase"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  {String(index + 1).padStart(2, "0")} — Diferencial
                </p>

                {/* Icon */}
                <div
                  className="mb-6 flex h-10 w-10 items-center justify-center border"
                  style={{
                    borderColor: "rgba(200,168,75,0.3)",
                    color: "var(--gold, #C8A84B)",
                    borderRadius: 0,
                  }}
                >
                  <Icon size={18} strokeWidth={1.25} />
                </div>

                {/* Title */}
                <h3
                  className="font-display mb-4 text-[26px] font-light leading-[1.05]"
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="mb-8 text-[11px] leading-[2]"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {item.description}
                </p>

                {/* CTA */}
                <div
                  className="mt-auto border-t pt-6"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <WhatsAppButton
                    message={whatsappMessages.fallback}
                    ariaLabel={`Preguntar por ${item.title} en WhatsApp`}
                    className="inline-flex items-center gap-2 text-[9px] tracking-[0.18em] uppercase transition-[gap] duration-300 hover:gap-3"
                    style={{
                      background: "transparent",
                      border: "none",
                      padding: 0,
                      color: "var(--gold, #C8A84B)",
                    }}
                  >
                    Preguntanos →
                  </WhatsAppButton>
                </div>
              </li>
            );
          })}
        </ul>

        {/* ── Bottom stat bar ─────────────────────────────────── */}
        <div
          className="mt-[var(--home-section-footer-gap)] grid grid-cols-3 border-t md:mt-[var(--home-section-footer-gap-lg)]"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          {[
            { value: "+500", label: "viajeros este año" },
            { value: "100%", label: "atención personalizada" },
            { value: "5★", label: "valoración promedio" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1 px-6 py-7 text-center"
            >
              <span
                className="font-display text-[32px] font-light leading-none"
                style={{
                  color: "var(--gold, #C8A84B)",
                }}
              >
                {stat.value}
              </span>
              <span
                className="text-[9px] tracking-[0.18em] uppercase"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

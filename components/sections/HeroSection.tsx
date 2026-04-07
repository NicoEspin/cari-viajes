import Image from "next/image";
import { editorialSquareWhatsAppButtonClassName } from "@/components/ui/buttonStyles";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import heroImage from "@/public/hero-image.webp";
import { whatsappMessages } from "@/lib/whatsapp";

function GeometricShapes() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[42%] top-[10%] z-[1] h-24 w-24 animate-[floatA_6s_ease-in-out_infinite] rounded-full border-2 border-[rgba(4,139,114,0.55)] max-md:left-[70%] max-md:top-[6%] max-md:h-14 max-md:w-14"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[16%] top-[17%] z-[1] h-7 w-7 animate-[floatB_7s_ease-in-out_infinite] bg-[var(--brand-accent-1)] opacity-90 max-md:right-[8%] max-md:top-[22%] max-md:h-5 max-md:w-5"
        style={{ transform: "rotate(18deg)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[26%] left-[3%] z-[1] h-14 w-14 animate-[floatC_8s_ease-in-out_infinite] rounded-full border-[1.5px] border-[var(--gold)] max-md:bottom-[12%] max-md:left-[2%] max-md:h-9 max-md:w-9"
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-[40%] top-[56%] z-[1] animate-[floatA_5s_ease-in-out_1.5s_infinite] opacity-60 max-md:left-[12%] max-md:top-[44%]"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <line
          x1="9"
          y1="0"
          x2="9"
          y2="18"
          stroke="rgba(236,249,62,0.6)"
          strokeWidth="1.5"
        />
        <line
          x1="0"
          y1="9"
          x2="18"
          y2="9"
          stroke="rgba(236,249,62,0.6)"
          strokeWidth="1.5"
        />
      </svg>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[33%] right-[14%] z-[1] h-2.5 w-2.5 animate-[floatB_4.5s_ease-in-out_0.8s_infinite] rounded-full bg-[var(--brand-accent-1)] max-md:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[20%] left-[7%] z-[1] animate-[floatC_9s_ease-in-out_2s_infinite] max-md:hidden"
        style={{
          width: 0,
          height: 0,
          borderLeft: "13px solid transparent",
          borderRight: "13px solid transparent",
          borderBottom: "22px solid rgba(4,139,114,0.5)",
        }}
      />
    </>
  );
}

function RouteIndicator() {
  return (
    <div
      className="route-indicator mb-5 flex items-center gap-0 md:mb-7"
      aria-hidden="true"
    >
      <span className="h-[9px] w-[9px] flex-shrink-0 rounded-full bg-[var(--brand-primary)]" />
      <svg
        className="h-5 flex-1 overflow-visible"
        viewBox="0 0 200 20"
        preserveAspectRatio="none"
      >
        <line
          x1="4"
          y1="10"
          x2="180"
          y2="10"
          stroke="rgba(4,139,114,0.65)"
          strokeWidth="1.5"
          strokeDasharray="6 5"
          fill="none"
          style={{ animation: "dash-flow 1.6s linear infinite" }}
        />
      </svg>
      <svg
        width="34"
        height="34"
        viewBox="0 0 44 44"
        fill="none"
        style={{ marginLeft: "-4px", overflow: "visible" }}
      >
        <g style={{ transformOrigin: "22px 36px" }}>
          <path
            d="M22 6C16.48 6 12 10.48 12 16c0 8.25 10 22 10 22s10-13.75 10-22c0-5.52-4.48-10-10-10z"
            fill="var(--brand-primary)"
          />
          <circle cx="22" cy="16" r="4" fill="var(--brand-accent-1)" />
        </g>
      </svg>
      <style>{`
        @keyframes dash-flow { to { stroke-dashoffset: -22; } }
        @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0) rotate(18deg)} 50%{transform:translateY(-8px) rotate(28deg)} }
        @keyframes floatC { 0%,100%{transform:translateY(0)} 50%{transform:translateY(7px)} }
        @keyframes rotarc { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      `}</style>
    </div>
  );
}

function ImageDecorations() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 top-0 w-[58%]"
        style={{
          background:
            "linear-gradient(180deg, rgba(4,139,114,0.14) 0%, rgba(4,139,114,0.34) 100%)",
        }}
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[-28px] z-[1] opacity-50"
        width="360"
        height="360"
        viewBox="0 0 360 360"
        fill="none"
        style={{ animation: "rotarc 28s linear infinite" }}
      >
        <circle
          cx="180"
          cy="180"
          r="162"
          stroke="rgba(4,139,114,0.32)"
          strokeWidth="1"
          strokeDasharray="8 9"
          fill="none"
        />
        <circle
          cx="180"
          cy="180"
          r="126"
          stroke="rgba(236,249,62,0.18)"
          strokeWidth="1"
          strokeDasharray="5 12"
          fill="none"
        />
      </svg>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-7 top-7 z-[2] h-12 w-12 border-r-[3px] border-t-[3px] border-[var(--brand-accent-1)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-7 left-5 z-[2] h-9 w-9 border-b-[3px] border-l-[3px] border-[var(--brand-primary)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-[-10px] top-12 z-[5] bg-[var(--brand-accent-1)] px-4 py-2.5"
      >
        <span className="block font-display text-[1.6rem] font-black leading-none tracking-[-0.04em] text-[var(--ink)]">
          +10
        </span>
        <span className="block text-[0.58rem] font-medium uppercase tracking-[0.14em] text-[rgba(7,11,10,0.72)]">
          excursiones
          <br />
          disponibles
        </span>
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-20 right-[-2px] z-[5] max-w-[152px] border border-[rgba(4,139,114,0.3)] bg-[rgba(249,251,250,0.9)] p-3 shadow-[0_18px_40px_rgba(13,13,11,0.12)] backdrop-blur-sm"
      >
        <svg
          className="mb-1.5"
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 3.5v5l3 1.8-.7 1.2-3.8-2.2V5.5h1.5z"
            fill="var(--brand-primary)"
          />
        </svg>
        <p className="text-[0.66rem] leading-[1.55] text-[var(--text-secondary)]">
          <span className="text-[var(--brand-primary)]">
            Respuesta en minutos
          </span>{" "}
          — primera excursión lista en un mensaje
        </p>
      </div>
    </>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Inicio"
      className="hero-section relative isolate overflow-hidden scroll-mt-24
        flex h-[100svh] flex-col
        md:flex-row md:min-h-screen md:h-auto md:items-end md:px-10 md:pb-20 md:pt-28 md:scroll-mt-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 border border-[rgba(13,13,11,0.08)] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.7),transparent_78%)]"
      />

      <GeometricShapes />

      {/* ═══════════════════ MOBILE ═══════════════════ */}
      <div className="flex h-full flex-col md:hidden">
        {/* Image block — altura fija controlada */}
        <div
          className="relative mx-5 mt-16 flex-shrink-0"
          style={{ height: "42svh" }}
        >
          {/* Rotating rings */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-8 -left-8 z-[1] opacity-35"
            width="200"
            height="200"
            viewBox="0 0 360 360"
            fill="none"
            style={{ animation: "rotarc 28s linear infinite" }}
          >
            <circle
              cx="180"
              cy="180"
              r="162"
              stroke="rgba(4,139,114,0.4)"
              strokeWidth="1"
              strokeDasharray="8 9"
              fill="none"
            />
            <circle
              cx="180"
              cy="180"
              r="126"
              stroke="rgba(236,249,62,0.22)"
              strokeWidth="1"
              strokeDasharray="5 12"
              fill="none"
            />
          </svg>

          {/* Corner brackets — encuadran la imagen */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 z-[4] h-8 w-8 border-r-[2.5px] border-t-[2.5px] border-[var(--brand-accent-1)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 z-[4] h-8 w-8 border-b-[2.5px] border-l-[2.5px] border-[var(--brand-primary)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 z-[4] h-8 w-8 border-l-[2.5px] border-t-[2.5px] border-[var(--brand-primary)] opacity-40"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 z-[4] h-8 w-8 border-b-[2.5px] border-r-[2.5px] border-[var(--brand-accent-1)] opacity-40"
          />

          {/* Teal wash */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[2]"
            style={{
              background:
                "linear-gradient(135deg, rgba(4,139,114,0.10) 0%, transparent 60%)",
            }}
          />

          {/* La imagen centrada, con padding para respetar los marcos */}
          <div className="absolute inset-3 z-[3] flex items-end justify-center overflow-hidden">
            <Image
              src={heroImage}
              alt="Viajera sonriendo sentada sobre una valija lista para salir de excursion"
              priority
              placeholder="blur"
              quality={96}
              fill
              sizes="90vw"
              className="object-contain object-bottom"
            />
          </div>

          {/* Badge +10 — anclado al borde izquierdo de la imagen, centrado verticalmente */}
          <div
            aria-hidden="true"
            className="absolute -left-3 top-1/2 z-[6] -translate-y-1/2 bg-[var(--brand-accent-1)] px-2.5 py-2"
          >
            <span className="block font-display text-[1.15rem] font-black leading-none tracking-[-0.04em] text-[var(--ink)]">
              +10
            </span>
            <span className="block text-[0.48rem] font-medium uppercase tracking-[0.12em] text-[rgba(7,11,10,0.72)]">
              excursiones
              <br />
              disponibles
            </span>
          </div>
        </div>

        {/* Copy block — ocupa el resto de la pantalla */}
        <div className="relative z-10 flex flex-1 flex-col justify-between px-5 pb-8 pt-5">
          {/* eyebrow */}
          <div className="hero-eyebrow mb-4 flex items-center gap-3">
            <span className="h-px w-6 bg-[rgba(4,139,114,0.42)]" />
            <span className="text-[0.58rem] font-medium uppercase tracking-[0.22em] text-[color-mix(in_srgb,var(--brand-primary)_82%,var(--ink))]">
              Villa Carlos Paz · Córdoba
            </span>
          </div>

          <div className="flex-1">
            <h1 className="hero-heading font-display text-[clamp(1.9rem,8.5vw,2.6rem)] font-normal leading-[0.97] tracking-[-0.03em] text-[var(--ink)]">
              Carlos Paz se vive mejor
              <span className="block text-[var(--brand-primary)]">
                cuando te guían bien.
              </span>
            </h1>

            <RouteIndicator />

            <p className="hero-support-copy text-[0.84rem] leading-[1.65] text-[var(--text-secondary)]">
              Excursiones, city tours y traslados con guía clara desde el primer
              mensaje. Menos vueltas, mejor plan y salida rápida por WhatsApp.
            </p>
          </div>

          {/* CTAs */}
          <div className="hero-actions flex flex-col gap-3">
            <WhatsAppButton
              message={whatsappMessages.hero}
              className={`${editorialSquareWhatsAppButtonClassName} w-full justify-center px-7 text-[0.82rem] tracking-[0.08em]`}
            >
              Escribinos por WhatsApp
            </WhatsAppButton>

            <a
              href="#excursiones"
              className="group inline-flex min-h-11 w-full items-center justify-center gap-3 rounded-none border border-[rgba(13,13,11,0.14)] bg-white/88 px-6 py-3 text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-[var(--ink)] shadow-[0_10px_30px_rgba(13,13,11,0.08)] transition-all duration-200 active:scale-[0.98] hover:border-[rgba(4,139,114,0.45)] hover:bg-[rgba(4,139,114,0.06)] hover:text-[var(--brand-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)]"
            >
              Ver excursiones
            </a>
          </div>
        </div>
      </div>

      {/* ═══════════════════ DESKTOP (intacto) ═══════════════════ */}
      <div className="relative z-10 mx-auto hidden w-full max-w-[1280px] flex-col gap-10 md:flex lg:gap-12">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(440px,0.95fr)] lg:gap-8">
          <div className="max-w-[760px]">
            <div className="hero-eyebrow mb-6 flex items-center gap-3 md:mb-7">
              <span className="h-px w-8 bg-[rgba(4,139,114,0.42)]" />
              <span className="text-[0.62rem] font-medium uppercase tracking-[0.22em] text-[color-mix(in_srgb,var(--brand-primary)_82%,var(--ink))]">
                Villa Carlos Paz · Córdoba
              </span>
            </div>
            <h1 className="hero-heading max-w-[12ch] font-display text-[clamp(2.7rem,8vw,5.4rem)] font-normal leading-[0.97] tracking-[-0.03em] text-[var(--ink)]">
              Carlos Paz se vive mejor
              <span className="block text-[var(--brand-primary)]">
                {" "}
                cuando te guían bien.
              </span>
            </h1>
            <RouteIndicator />
            <p className="hero-support-copy mt-2 max-w-[52ch] text-[0.98rem] leading-7 text-[var(--text-secondary)] md:text-[1.03rem] md:leading-8">
              Excursiones en Carlos Paz, city tours y traslados especiales con
              una guía clara desde el primer mensaje. Menos vueltas, mejor plan
              y salida rápida por WhatsApp.
            </p>
            <div className="hero-actions mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center md:mt-9">
              <WhatsAppButton
                message={whatsappMessages.hero}
                className={`${editorialSquareWhatsAppButtonClassName} px-7 text-[0.82rem] tracking-[0.08em]`}
              >
                Escribinos por WhatsApp
              </WhatsAppButton>

              <a
                href="#excursiones"
                className="group inline-flex min-h-11 items-center justify-center gap-3 rounded-none border border-[rgba(13,13,11,0.14)] bg-white/88 px-6 py-3 text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-[var(--ink)] shadow-[0_10px_30px_rgba(13,13,11,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(4,139,114,0.45)] hover:bg-[rgba(4,139,114,0.06)] hover:text-[var(--brand-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)]"
              >
                Ver excursiones
              </a>
            </div>
          </div>

          <div className="relative min-h-[380px] sm:min-h-[480px] lg:min-h-[680px]">
            <ImageDecorations />
            <Image
              src={heroImage}
              alt="Viajera sonriendo sentada sobre una valija lista para salir de excursion"
              priority
              placeholder="blur"
              quality={96}
              sizes="(min-width: 1280px) 600px, (min-width: 1024px) 48vw, (min-width: 768px) 72vw, 94vw"
              className="absolute bottom-0 left-1/2 z-[3] w-full max-w-[720px] -translate-x-1/2 object-contain drop-shadow-[0_28px_64px_rgba(0,0,0,0.32)] lg:left-auto lg:right-[-4%] lg:translate-x-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

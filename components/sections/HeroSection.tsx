"use client";

import Image from "next/image";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { excursions } from "@/content/excursions";
import heroImage from "@/public/hero.webp";
import { whatsappMessages } from "@/lib/whatsapp";

const TICKER_ITEMS = [
  "Villa Carlos Paz",
  "Sierras Chicas",
  "Valle de Punilla",
  "Córdoba Argentina",
  "Excursiones",
  "City Tour",
  "Traslados",
];

const STATS = [
  { number: String(excursions.length), suffix: "", label: "Experiencias" },
  { number: "5", suffix: "★", label: "Valoración" },
  { number: "1K", suffix: "", label: "Viajeros" },
  { number: "10", suffix: "+", label: "Años de experiencia" },
];

export function HeroSection() {
  const renderTickerItems = (keyPrefix: string) =>
    TICKER_ITEMS.map((item, i) => (
      <span key={`${keyPrefix}-${item}-${i}`} className="shrink-0">
        {item}
      </span>
    ));

  return (
    <section
      id="hero"
      aria-label="Inicio"
      className="hero-section relative flex min-h-[88svh] items-end overflow-hidden bg-[var(--ink)] px-5 pb-16 pt-24 text-[var(--sand)] sm:min-h-[92svh] md:min-h-[100dvh] md:px-10 md:pb-20 md:pt-28"
    >
      <div aria-hidden="true" className="hero-media absolute inset-0">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          placeholder="blur"
          quality={96}
          sizes="100vw"
          className="object-cover object-[72%_center] contrast-[1.03] md:object-center"
        />
      </div>

      <div
        aria-hidden="true"
        className="hero-overlay pointer-events-none absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg, rgba(7,11,10,0.2) 0%, rgba(7,11,10,0.34) 24%, rgba(7,11,10,0.72) 100%),
            linear-gradient(90deg, rgba(7,11,10,0.82) 0%, rgba(7,11,10,0.56) 36%, rgba(7,11,10,0.22) 72%, rgba(7,11,10,0.52) 100%),
            radial-gradient(circle at 18% 34%, rgba(252,203,62,0.14) 0%, transparent 28%),
            radial-gradient(circle at 78% 20%, rgba(4,139,114,0.2) 0%, transparent 34%)
          `,
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 border border-[rgba(245,240,232,0.08)] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.7),transparent_78%)]"
      />

      {/* Scrolling ticker */}
      <div
        aria-hidden="true"
        className="hero-ticker pointer-events-none absolute inset-x-0 top-[61%] -translate-y-1/2 overflow-hidden border-y border-[rgba(245,240,232,0.06)] py-2 opacity-[0.09]"
      >
        <div className="relative overflow-hidden whitespace-nowrap text-[0.58rem] font-light tracking-[0.2em] uppercase text-[var(--sand)]">
          <div className="ticker-track animate-ticker flex w-max will-change-transform">
            <div className="flex shrink-0 items-center gap-20 pr-20">{renderTickerItems("a")}</div>
            <div className="flex shrink-0 items-center gap-20 pr-20">{renderTickerItems("b")}</div>
          </div>
        </div>
      </div>

      {/* Main content grid */}
      <div className="hero-content relative z-10 mx-auto grid w-full max-w-[1200px] grid-cols-1 items-end gap-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-14">

        {/* Left column */}
        <div className="max-w-[640px]">
          {/* Eyebrow */}
          <div className="hero-eyebrow mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--gold)]" />
            <span className="text-[0.68rem] font-normal tracking-[0.2em] uppercase text-[var(--gold)]">
              Villa Carlos Paz · Córdoba
            </span>
          </div>

          {/* Heading */}
          <h1 className="hero-heading mb-8 font-display text-[clamp(2.3rem,5.1vw,4.8rem)] font-normal leading-[1.06] tracking-[-0.015em] text-[var(--sand)]">
            Carlos Paz tiene<br />
            mucho{" "}
            <em className="italic text-[var(--gold)]">más</em>{" "}
            de lo
            que te contaron.
          </h1>

          <p className="hero-support-copy mb-8 max-w-[54ch] text-[0.95rem] leading-7 text-[rgba(245,240,232,0.74)] md:text-base">
            Excursiones, city tours y traslados especiales con atencion
            personalizada para que viajes con plan claro desde el primer mensaje.
          </p>

          {/* Actions */}
          <div className="hero-actions-desktop hidden w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center md:flex">
            <WhatsAppButton
              message={whatsappMessages.hero}
              className="justify-center px-7 py-3 text-[0.82rem] tracking-[0.02em]"
            >
              Escribinos por WhatsApp
            </WhatsAppButton>
            <a
              href="#excursiones"
              className="group inline-flex min-h-11 items-center justify-center gap-3 rounded-full border border-[var(--brand-accent-1)] bg-[rgba(252,204,62,0.47)] px-6 text-[0.72rem] font-semibold tracking-[0.1em] uppercase text-[var(--brand-accent-1)] transition-all duration-200 hover:border-[var(--brand-accent-1)] hover:bg-[rgba(252,203,62,0.2)]"
            >
              Ver excursiones
              <span className="grid size-7 place-items-center rounded-full  transition-all duration-200 group-hover:translate-y-0.5">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M6 2v8M2 6l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>

        </div>

        {/* Right column */}
        <div className="hero-right rounded-[1.75rem] border border-[rgba(245,240,232,0.14)] bg-[linear-gradient(180deg,rgba(7,11,10,0.84)_0%,rgba(7,11,10,0.76)_100%)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.34)] backdrop-blur-md md:p-7">
          <p className="max-w-[38ch] text-[0.88rem] leading-7 text-[rgba(245,240,232,0.68)] md:text-[0.92rem]">
            Te ayudamos a elegir rapido segun tu plan, tus tiempos y con quien
            viajas. Sin vueltas. Sin listas eternas.
          </p>

          {/* Stats grid */}
          <div className="mt-8 grid grid-cols-2 border border-[rgba(245,240,232,0.1)]">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`stat-cell px-5 py-4 ${
                  i % 2 === 0 ? "border-r border-[rgba(245,240,232,0.08)]" : ""
                } ${i < 2 ? "border-b border-[rgba(245,240,232,0.08)]" : ""}`}
              >
                <div className="mb-1 font-display text-[1.8rem] font-bold leading-none text-[var(--sand)]">
                  {stat.number}
                  <span className="text-[1.2rem] text-[var(--gold)]">{stat.suffix}</span>
                </div>
                <div className="text-[0.65rem] tracking-[0.14em] uppercase text-[rgba(245,240,232,0.32)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-actions-mobile col-span-full mt-2 flex w-full flex-col items-stretch gap-3 md:hidden">
          <WhatsAppButton
            message={whatsappMessages.hero}
            className="justify-center px-6 py-3 text-[0.82rem] tracking-[0.02em]"
          >
            Escribinos por WhatsApp
          </WhatsAppButton>
          <a
            href="#excursiones"
            className="inline-flex min-h-11 items-center justify-center gap-3 rounded-full border border-[rgba(252,203,62,0.4)] bg-[rgba(252,203,62,0.12)] px-6 text-[0.72rem] font-semibold tracking-[0.1em] uppercase text-[var(--brand-accent-1)]"
          >
            Ver excursiones
            <span className="grid size-7 place-items-center rounded-full border border-[rgba(252,203,62,0.45)]">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M6 2v8M2 6l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Bottom gold line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(200,168,75,0.3) 30%, rgba(200,168,75,0.3) 70%, transparent 100%)",
        }}
      />
    </section>
  );
}

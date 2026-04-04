import Image from "next/image";
import {
  editorialSquareDarkGhostCtaClassName,
  editorialSquareWhatsAppButtonClassName,
} from "@/components/ui/buttonStyles";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import heroImage from "@/public/hero.webp";
import { whatsappMessages } from "@/lib/whatsapp";

const HERO_PILLS = [
  "Excursiones curadas para cada plan",
  "Respuesta rapida por WhatsApp",
  "City tours, grupos y traslados",
];

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Inicio"
      className="hero-section relative flex min-h-[100dvh] scroll-mt-24 items-end overflow-hidden bg-[var(--ink)] px-5 pb-14 pt-24 text-[var(--sand)] md:min-h-screen md:px-10 md:pb-20 md:pt-28 md:scroll-mt-28"
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

      <div className="hero-content relative z-10 mx-auto flex w-full max-w-[1180px] flex-col justify-end gap-10 lg:gap-12">
        <div className="max-w-[760px]">
          <div className="hero-eyebrow mb-6 flex items-center gap-3 md:mb-7">
            <span className="h-px w-8 bg-[var(--gold)]" />
            <span className="text-[0.68rem] font-normal tracking-[0.2em] uppercase text-[var(--gold)]">
              Villa Carlos Paz · Córdoba
            </span>
          </div>

          <h1 className="hero-heading max-w-[12ch] font-display text-[clamp(2.7rem,8vw,5.4rem)] font-normal leading-[0.98] tracking-[-0.03em] text-[var(--sand)]">
            Carlos Paz se vive mejor
            <span className="block text-[var(--gold)]"> cuando te guian bien.</span>
          </h1>

          <p className="hero-support-copy mt-6 max-w-[56ch] text-[0.98rem] leading-7 text-[rgba(245,240,232,0.76)] md:mt-7 md:text-[1.03rem] md:leading-8">
            Excursiones en Carlos Paz, city tours y traslados especiales con una guia clara desde el primer mensaje. Menos vueltas, mejor plan y salida rapida por WhatsApp.
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
              className={`group ${editorialSquareDarkGhostCtaClassName}`}
            >
              Ver excursiones
              <span className="grid size-7 place-items-center rounded-none border border-[rgba(245,240,232,0.16)] transition-all duration-200 group-hover:translate-y-0.5 group-hover:border-[rgba(236,249,62,0.5)]">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M6 2v8M2 6l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div className="hero-lower grid gap-4 border-t border-[rgba(245,240,232,0.12)] pt-5 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-end md:gap-6 md:pt-7">
          <p className="hero-note max-w-[38ch] text-[0.9rem] leading-7 text-[rgba(245,240,232,0.68)] md:text-[0.95rem]">
            Te ayudamos a elegir segun tu plan, tus tiempos y con quien viajas. Una recomendacion clara, sin listas eternas ni ruido innecesario.
          </p>

          <div className="hero-pills flex flex-wrap gap-2.5 md:justify-end">
            {HERO_PILLS.map((item) => (
              <span
                key={item}
                className="hero-pill inline-flex min-h-10 items-center rounded-full border border-[rgba(245,240,232,0.14)] bg-[rgba(7,11,10,0.42)] px-4 py-2 text-[0.68rem] font-medium tracking-[0.12em] uppercase text-[rgba(245,240,232,0.72)] backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>
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

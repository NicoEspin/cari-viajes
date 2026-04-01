import { faqItems } from "@/content/faq";
import { whatsappMessages } from "@/lib/whatsapp";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { WhatsAppButton } from "../ui/WhatsAppButton";

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-label="Preguntas frecuentes"
      className="relative overflow-hidden bg-[var(--neutral-50)] px-5 py-[var(--home-section-y)] md:px-10 md:py-[var(--home-section-y-lg)]"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Header — full width, generous */}
        <div className="mb-[var(--home-section-header-gap)] grid gap-8 md:mb-[var(--home-section-header-gap-lg)] md:grid-cols-2 md:gap-16">
          <div>
            <div data-reveal>
              <SectionEyebrow>Preguntas frecuentes</SectionEyebrow>
            </div>
            <h2
              className="mt-5 font-display text-5xl font-normal leading-[1.05] text-[var(--text-primary)] md:text-7xl"
              data-reveal
            >
              Lo que más{" "}
              <em className="italic text-[var(--brand-primary)]">
                nos preguntan.
              </em>
            </h2>
          </div>

          <div className="flex items-end" data-reveal>
            <p className="text-base font-light leading-[1.85] text-[var(--text-secondary)]">
              Si no encontrás lo que buscás, escribinos por WhatsApp.
              Respondemos en minutos y sin vueltas.
            </p>
          </div>
        </div>

        {/* FAQ list — two column on desktop */}
        <div className="grid gap-px bg-[var(--border-default)] overflow-hidden rounded-2xl md:grid-cols-2">
          {faqItems.map((item, i) => (
            <details
              key={item.question}
              className="group bg-white p-8 transition-colors duration-200 open:bg-[var(--neutral-50)] hover:bg-[var(--neutral-50)]"
              data-reveal
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 marker:content-none">
                <span className="font-display text-lg font-normal leading-snug text-[var(--text-primary)] md:text-xl">
                  {item.question}
                </span>

                {/* Animated +/× indicator */}
                <span
                  aria-hidden="true"
                  className="relative mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center"
                >
                  <span className="absolute h-px w-3.5 bg-[var(--text-muted)] transition-all duration-300 group-open:rotate-45 group-open:bg-[var(--brand-primary)]" />
                  <span className="absolute h-px w-3.5 rotate-90 bg-[var(--text-muted)] transition-all duration-300 group-open:rotate-45 group-open:opacity-0" />
                </span>
              </summary>

              <p className="mt-5 text-sm font-light leading-[1.85] text-[var(--text-secondary)]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        {/* CTA — inline, quiet */}
        <div
          className="mt-[var(--home-section-footer-gap)] flex flex-col items-start gap-4 border-t border-[var(--border-default)] pt-8 md:mt-[var(--home-section-footer-gap-lg)] md:pt-10 sm:flex-row sm:items-center sm:justify-between"
          data-reveal
        >
          <p className="text-sm text-[var(--text-muted)]">
            ¿No encontraste lo que buscabas?
          </p>
          <WhatsAppButton message={whatsappMessages.faq}>
            Escribinos por WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

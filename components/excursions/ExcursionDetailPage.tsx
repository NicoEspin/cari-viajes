import Image from "next/image";
import Link from "next/link";
import {
  excursionCategoryLabels,
  excursionRhythmLabels,
  getRelatedExcursions,
  type Excursion,
} from "@/content/excursions";
import { ExcursionEditorialGallery } from "@/components/excursions/ExcursionEditorialGallery";
import {
  editorialSquareDarkGhostCtaClassName,
  editorialSquareWhatsAppButtonClassName,
  excursionDetailCtaClassName,
} from "@/components/ui/buttonStyles";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { getExcursionMediaBySlug } from "@/lib/excursion-media";

function InfoColumn({ title, items }: { title: string; items: string[] }) {
  if (!items.length) {
    return null;
  }

  return (
    <div className="border border-[var(--border-default)] bg-white p-5 md:p-6">
      <h3 className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-[var(--brand-primary)]">
        {title}
      </h3>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--text-secondary)]">
        {items.map((item) => (
          <li key={item} className="border-t border-[var(--border-default)] pt-3 first:border-t-0 first:pt-0">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ExcursionDetailPage({ excursion }: { excursion: Excursion }) {
  const related = getRelatedExcursions(excursion.relatedSlugs).slice(0, 3);
  const media =
    getExcursionMediaBySlug(excursion.slug) ?? getExcursionMediaBySlug("traslados-especiales")!;
  const heroAsset = media.hero;

  return (
    <main className="bg-[var(--neutral-50)]">
      <section className="relative flex min-h-[100dvh] items-end overflow-hidden border-b border-[var(--border-default)] bg-[var(--neutral-950)] px-5 py-14 text-white md:min-h-screen md:px-10 md:py-18">
        <Image
          src={heroAsset.image}
          alt={heroAsset.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: heroAsset.objectPosition ?? "center center" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,8,7,0.18) 0%, rgba(5,8,7,0.42) 30%, rgba(5,8,7,0.72) 72%, rgba(5,8,7,0.9) 100%), radial-gradient(circle at 14% 22%, rgba(4,139,114,0.28) 0%, transparent 28%), radial-gradient(circle at 82% 18%, rgba(252,203,62,0.16) 0%, transparent 24%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "100% 96px",
            maskImage: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.5) 28%, rgba(0,0,0,0.9) 100%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-[1200px]">
          <div className="flex flex-wrap items-center gap-3 text-[0.66rem] tracking-[0.2em] uppercase text-white/55">
            <Link href="/" className="transition-colors hover:text-[var(--gold)]">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/excursiones" className="transition-colors hover:text-[var(--gold)]">
              Excursiones
            </Link>
            <span>/</span>
            <span className="text-white/82">{excursion.shortTitle}</span>
          </div>

          <div className="mt-8 max-w-[720px] rounded-[28px] border border-white/12 bg-[rgba(5,8,7,0.3)] p-6 backdrop-blur-[6px] md:p-8 lg:p-10">
            <SectionEyebrow>{excursion.heroKicker}</SectionEyebrow>
            <h1 className="mt-5 max-w-[11ch] font-display text-[clamp(3rem,7vw,6rem)] leading-[0.94] tracking-[-0.03em] text-white">
              {excursion.shortTitle}
            </h1>
            <p className="mt-6 max-w-[56ch] text-[1rem] leading-8 text-white/80">{excursion.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="border border-white/14 bg-white/6 px-3 py-1 text-[0.62rem] tracking-[0.2em] uppercase text-white/70">
                {excursionCategoryLabels[excursion.category]}
              </span>
              <span className="border border-white/14 bg-white/6 px-3 py-1 text-[0.62rem] tracking-[0.2em] uppercase text-white/70">
                {excursionRhythmLabels[excursion.rhythm]}
              </span>
              <span className="border border-white/14 bg-white/6 px-3 py-1 text-[0.62rem] tracking-[0.2em] uppercase text-white/70">
                {excursion.duration}
              </span>
              {excursion.badge ? (
                <span className="border border-[rgba(252,203,62,0.42)] bg-[rgba(252,203,62,0.12)] px-3 py-1 text-[0.62rem] tracking-[0.2em] uppercase text-[var(--gold)]">
                  {excursion.badge}
                </span>
              ) : null}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton
              message={excursion.whatsappMessage}
              className={`${editorialSquareWhatsAppButtonClassName} px-6 text-[0.72rem]`}
              ariaLabel={`Consultar ${excursion.shortTitle} por WhatsApp`}
            >
              Reservar o consultar por WhatsApp
            </WhatsAppButton>
            <Link
              href="/excursiones"
              className={editorialSquareDarkGhostCtaClassName}
            >
              Volver al listado
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[0.84fr_1.16fr]">
          <div className="space-y-5">
            <SectionEyebrow withLine>Resumen</SectionEyebrow>
            <h2 className="font-display text-[2.2rem] leading-[1.02] text-[var(--text-primary)] md:text-[3rem]">
              {excursion.manifest}
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden border border-[var(--border-default)] bg-[var(--border-default)] md:grid-cols-2">
            {excursion.highlights.map((highlight) => (
              <article key={highlight} className="bg-white p-5 md:p-6">
                <p className="text-[0.62rem] tracking-[0.22em] uppercase text-[var(--brand-primary)]">Highlight</p>
                <p className="mt-4 text-[0.96rem] leading-7 text-[var(--text-secondary)]">{highlight}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border-default)] bg-white px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1200px] space-y-8">
          <div className="grid gap-6 border-b border-[var(--border-default)] pb-8 lg:grid-cols-[0.64fr_1.36fr] lg:items-end">
            <div>
              <SectionEyebrow>Recorrido</SectionEyebrow>
              <h2 className="mt-4 font-display text-[2rem] leading-[1.02] text-[var(--text-primary)] md:text-[2.8rem]">
                Itinerario, incluye y notas utiles.
              </h2>
            </div>
            <div className="grid gap-3 text-[0.68rem] tracking-[0.18em] uppercase text-[var(--text-muted)] sm:grid-cols-2 lg:grid-cols-4">
              <div className="border border-[var(--border-default)] px-4 py-3">{excursion.departure}</div>
              <div className="border border-[var(--border-default)] px-4 py-3">{excursion.availability}</div>
              <div className="border border-[var(--border-default)] px-4 py-3">{excursion.duration}</div>
              <div className="border border-[var(--border-default)] px-4 py-3">{excursion.location}</div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <ol className="space-y-4">
              {excursion.itinerary.map((stop, index) => (
                <li key={stop.title} className="grid gap-px overflow-hidden border border-[var(--border-default)] bg-[var(--border-default)] md:grid-cols-[88px_1fr]">
                  <div className="bg-[var(--neutral-50)] px-5 py-5 text-[0.68rem] tracking-[0.24em] uppercase text-[var(--text-muted)] md:px-6">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="bg-white px-5 py-5 md:px-6">
                    <h3 className="font-display text-[1.7rem] leading-[1.02] text-[var(--text-primary)]">{stop.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{stop.detail}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="grid gap-4">
              <InfoColumn title="Incluye" items={excursion.includes} />
              <InfoColumn title="Opcionales" items={excursion.optional} />
              <InfoColumn title="Notas" items={excursion.notes} />
            </div>
          </div>
        </div>
      </section>

      <ExcursionEditorialGallery excursion={excursion} media={media} />

      <section className="border-y border-[var(--border-default)] bg-white px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-px overflow-hidden border border-[var(--border-default)] bg-[var(--border-default)] md:grid-cols-3">
          {excursion.usefulInfo.map((item) => (
            <article key={item.label} className="bg-[var(--neutral-50)] p-6 md:p-8">
              <p className="text-[0.62rem] tracking-[0.22em] uppercase text-[var(--brand-primary)]">{item.label}</p>
              <p className="mt-4 font-display text-[1.8rem] leading-[1.06] text-[var(--text-primary)]">{item.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1200px] space-y-8">
          <div className="grid gap-6 border-b border-[var(--border-default)] pb-8 lg:grid-cols-[0.62fr_1.38fr] lg:items-end">
            <div>
              <SectionEyebrow>Relacionadas</SectionEyebrow>
              <h2 className="mt-4 font-display text-[2rem] leading-[1.02] text-[var(--text-primary)] md:text-[2.8rem]">
                Segui el viaje por otro frente.
              </h2>
            </div>
            <p className="max-w-[48ch] text-[0.96rem] leading-8 text-[var(--text-secondary)]">
              Si esta salida te calza, estas otras suelen cerrar bien por ritmo, geografia o tipo de viajero.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden border border-[var(--border-default)] bg-[var(--border-default)] md:grid-cols-3">
            {related.map((item) => (
              <article key={item.slug} className="bg-white p-5 md:p-6">
                <p className="text-[0.62rem] tracking-[0.22em] uppercase text-[var(--text-muted)]">
                  {excursionCategoryLabels[item.category]} · {item.duration}
                </p>
                <h3 className="mt-4 font-display text-[1.8rem] leading-[1.04] text-[var(--text-primary)]">
                  {item.shortTitle}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{item.teaser}</p>
                <Link
                  href={`/excursiones/${item.slug}`}
                  className={`mt-6 ${excursionDetailCtaClassName}`}
                >
                  Ver detalle
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 pt-2 md:px-10 md:pb-20">
        <div className="mx-auto grid max-w-[1200px] gap-8 border border-[var(--border-default)] bg-[var(--neutral-950)] px-6 py-8 text-white md:px-10 md:py-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <SectionEyebrow>CTA Final</SectionEyebrow>
            <h2 className="mt-4 font-display text-[2.2rem] leading-[1.02] md:text-[3.2rem]">
              Si esta salida va, la reserva se termina en WhatsApp.
            </h2>
            <p className="mt-4 max-w-[50ch] text-[0.96rem] leading-8 text-white/72">
              Te pasamos disponibilidad, detalles finos, opcionales y la mejor combinacion segun tu viaje real.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <WhatsAppButton
              message={excursion.whatsappMessage}
              className={`${editorialSquareWhatsAppButtonClassName} px-6 text-[0.72rem]`}
              ariaLabel={`Escribir por WhatsApp sobre ${excursion.shortTitle}`}
            >
              Consultar disponibilidad
            </WhatsAppButton>
            <Link
              href="/excursiones"
              className={editorialSquareDarkGhostCtaClassName}
            >
              Ver mas salidas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

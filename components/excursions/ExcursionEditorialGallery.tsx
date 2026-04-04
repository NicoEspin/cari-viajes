import type { ReactNode } from "react";
import Image from "next/image";
import type { Excursion } from "@/content/excursions";
import type { ExcursionMedia } from "@/lib/excursion-media";
import { ExcursionGalleryMobileTrack } from "@/components/excursions/ExcursionGalleryMobileTrack";
import { editorialSquareWhatsAppButtonClassName } from "@/components/ui/buttonStyles";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

type ExcursionEditorialGalleryProps = {
  excursion: Excursion;
  media: ExcursionMedia;
};

type GalleryCopy = {
  kicker: string;
  title: string;
  description: string;
  meta: string;
};

const galleryOrderLabels = ["Escena 01", "Escena 02", "Escena 03", "Escena 04"] as const;

export function ExcursionEditorialGallery({ excursion, media }: ExcursionEditorialGalleryProps) {
  const galleryCopy = buildGalleryCopy(excursion);
  const sourceNote =
    media.gallerySource === "real"
      ? "Postales reales del recorrido"
      : media.gallerySource === "partial-fallback"
        ? "Visuales reales del recorrido con apoyo editorial en escenas puntuales"
        : "Visuales editoriales para presentar este servicio mientras se completa la galeria real";

  return (
    <section className="px-5 py-16 md:px-10 md:py-20" aria-labelledby="excursion-gallery-title">
      <div className="mx-auto max-w-[1280px] space-y-8 md:space-y-10 xl:max-w-[1340px]">
        <div className="grid gap-6 border-b border-[var(--border-default)] pb-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
          <div>
            <SectionEyebrow>Galeria Editorial</SectionEyebrow>
            <h2
              id="excursion-gallery-title"
              className="mt-4 max-w-[10ch] font-display text-[2rem] leading-[1.02] text-[var(--text-primary)] md:text-[2.8rem]"
            >
              Asi se vive {excursion.shortTitle}.
            </h2>
          </div>

          <div className="space-y-4">
            <p className="max-w-[58ch] text-[0.98rem] leading-8 text-[var(--text-secondary)]">
              Un vistazo rapido para sentir el ritmo, el paisaje y la energia de la salida antes de pasar a disponibilidad, pickup y detalles finos por WhatsApp.
            </p>
            <p className="text-[0.66rem] tracking-[0.18em] uppercase text-[var(--text-muted)]">{sourceNote}</p>
          </div>
        </div>

        <div className="space-y-6 lg:hidden">
          <ExcursionGalleryMobileTrack excursionTitle={excursion.shortTitle}>
              {media.gallery.map((item, index) => (
                <article
                  key={`${excursion.slug}-mobile-${galleryOrderLabels[index]}`}
                  data-gallery-slide
                  className="min-w-[89vw] snap-center overflow-hidden border border-[var(--border-strong)] bg-white first:ml-1 last:mr-1"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[var(--neutral-200)]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="88vw"
                      className="object-cover"
                      style={{ objectPosition: item.objectPosition ?? "center center" }}
                    />
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/28 to-transparent" />
                    <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3 text-[0.62rem] tracking-[0.18em] uppercase text-white/78">
                      <span>{galleryOrderLabels[index]}</span>
                      <span>{galleryCopy[index].kicker}</span>
                    </div>
                  </div>

                  <div className="space-y-3 border-t border-[var(--border-default)] px-5 py-5">
                    <p className="text-[0.62rem] tracking-[0.2em] uppercase text-[var(--brand-primary)]">
                      {galleryCopy[index].meta}
                    </p>
                    <h3 className="max-w-[11ch] font-display text-[2rem] leading-[0.98] text-[var(--text-primary)]">
                      {galleryCopy[index].title}
                    </h3>
                    <p className="max-w-[34ch] text-sm leading-7 text-[var(--text-secondary)]">
                      {galleryCopy[index].description}
                    </p>
                  </div>
                </article>
              ))}
          </ExcursionGalleryMobileTrack>

          <GalleryCtaBar excursion={excursion} />
        </div>

        <div className="hidden lg:block">
          <div className="grid gap-0.5 lg:grid-cols-[1.92fr_1fr_1fr] lg:grid-rows-2">
            <DesktopGalleryCard
              item={media.gallery[0]}
              orderLabel={galleryOrderLabels[0]}
              copy={galleryCopy[0]}
              hero
              sizes="(min-width: 1440px) 58vw, (min-width: 1024px) 60vw, 0px"
            />
            <DesktopGalleryCard
              item={media.gallery[1]}
              orderLabel={galleryOrderLabels[1]}
              copy={galleryCopy[1]}
              sizes="(min-width: 1440px) 21vw, (min-width: 1024px) 23vw, 0px"
            />
            <DesktopGalleryCard
              item={media.gallery[2]}
              orderLabel={galleryOrderLabels[2]}
              copy={galleryCopy[2]}
              sizes="(min-width: 1440px) 21vw, (min-width: 1024px) 23vw, 0px"
            />
            <DesktopGalleryCard
              item={media.gallery[3]}
              orderLabel={galleryOrderLabels[3]}
              copy={galleryCopy[3]}
              sizes="(min-width: 1440px) 21vw, (min-width: 1024px) 23vw, 0px"
            />
          </div>

          <GalleryCtaBar excursion={excursion} className="mt-5" />
        </div>
      </div>
    </section>
  );
}

function DesktopGalleryCard({
  item,
  orderLabel,
  copy,
  sizes,
  hero = false,
}: {
  item: ExcursionMedia["gallery"][number];
  orderLabel: string;
  copy: GalleryCopy;
  sizes: string;
  hero?: boolean;
}) {
  return (
    <article
      tabIndex={0}
      aria-label={`${orderLabel}: ${copy.title}`}
      className={`group relative overflow-hidden bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--neutral-50)] ${hero ? "lg:row-span-2 min-h-[700px] xl:min-h-[760px]" : "min-h-[340px] xl:min-h-[370px]"}`}
    >
      <div
        className="absolute inset-x-0 top-0 z-30 h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        style={{ background: "linear-gradient(to right, var(--brand-primary), var(--gold))" }}
      />

      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04] group-focus-visible:scale-[1.04]"
          style={{ objectPosition: item.objectPosition ?? "center center" }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,18,20,0.62)] via-[rgba(14,18,20,0.16)] to-transparent transition-opacity duration-500 group-hover:opacity-0 group-focus-visible:opacity-0" />

      <div className={`absolute inset-x-0 bottom-0 z-10 transition-all duration-500 group-hover:translate-y-3 group-hover:opacity-0 group-focus-visible:translate-y-3 group-focus-visible:opacity-0 ${hero ? "p-10" : "p-7"}`}>
        <p className="mb-3 text-[10px] tracking-[0.2em] uppercase text-white/72">{orderLabel}</p>
        <h3 className={`font-display font-light leading-[0.98] text-white ${hero ? "max-w-[9ch] text-[50px]" : "max-w-[10ch] text-[28px]"}`}>
          {copy.title}
        </h3>
      </div>

      <div className={`absolute inset-0 z-20 flex translate-y-8 flex-col justify-end bg-[linear-gradient(180deg,rgba(250,250,248,0.08)_0%,rgba(250,250,248,0.96)_34%,#FAFAF8_100%)] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 ${hero ? "p-12" : "p-7"}`}>
        <p className="mb-5 text-[10px] tracking-[0.2em] uppercase text-[var(--text-muted)]">{orderLabel}</p>
        <p className="mb-3 text-[10px] tracking-[0.18em] uppercase text-[var(--brand-primary)]">{copy.kicker}</p>
        <h3 className={`font-display font-light leading-[1.02] text-[var(--text-primary)] ${hero ? "mb-5 max-w-[10ch] text-[42px]" : "mb-3 text-[24px]"}`}>
          {copy.title}
        </h3>
        <p className={`text-[var(--text-secondary)] ${hero ? "mb-6 max-w-[38ch] text-[11px] leading-[1.9]" : "mb-4 text-[11px] leading-[1.8]"}`}>
          {copy.description}
        </p>

        <div className="mt-auto flex items-center gap-3 border-t border-[var(--border-default)] pt-4">
          <span className="bg-[rgba(4,139,114,0.08)] px-2.5 py-1 text-[9px] tracking-[0.16em] uppercase text-[var(--brand-primary)]">
            {copy.meta}
          </span>
          <div className="ml-auto flex h-7 w-7 items-center justify-center border border-[var(--border-default)] text-xs text-[var(--text-muted)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-[var(--brand-primary)] group-hover:text-[var(--brand-primary)] group-focus-visible:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:border-[var(--brand-primary)] group-focus-visible:text-[var(--brand-primary)]">
            ↗
          </div>
        </div>
      </div>
    </article>
  );
}

function GalleryCtaBar({ excursion, className }: { excursion: Excursion; className?: string }) {
  return (
    <aside className={`border border-[var(--border-default)] bg-[var(--neutral-950)] px-5 py-6 text-white md:px-7 md:py-7 ${className ?? ""}`}>
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="text-[0.62rem] tracking-[0.22em] uppercase text-[var(--gold)]">Salida elegida</p>
          <h3 className="mt-4 max-w-[15ch] font-display text-[2rem] leading-[0.98] md:text-[2.5rem]">
            Si te cierra {excursion.shortTitle}, lo seguimos por WhatsApp.
          </h3>
          <p className="mt-4 max-w-[46ch] text-sm leading-7 text-white/72">
            Te contamos horarios, punto de salida, opcionales y todo lo que necesitás para reservar esta experiencia con la data justa y sin vueltas.
          </p>
        </div>

        <div className="space-y-3 lg:min-w-[320px]">
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
            <MetaPill>{excursion.duration}</MetaPill>
            <MetaPill>{excursion.availability}</MetaPill>
            <MetaPill>{excursion.departure}</MetaPill>
          </div>
          <WhatsAppButton
            message={excursion.whatsappMessage}
            className={`${editorialSquareWhatsAppButtonClassName} w-full px-6 text-[0.72rem]`}
            ariaLabel={`Consultar ${excursion.shortTitle} debajo de la galeria editorial por WhatsApp`}
          >
            Hablar por WhatsApp sobre esta salida
          </WhatsAppButton>
        </div>
      </div>
    </aside>
  );
}

function MetaPill({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white/5 px-4 py-3 text-[0.62rem] tracking-[0.18em] uppercase text-white/66">
      {children}
    </div>
  );
}

function buildGalleryCopy(excursion: Excursion): GalleryCopy[] {
  return [
    {
      kicker: excursion.heroKicker,
      title: excursion.shortTitle,
      description: excursion.summary,
      meta: `${excursionCategoryLabel(excursion)} · ${excursion.duration}`,
    },
    {
      kicker: "Lo mejor del recorrido",
      title: excursion.highlights[0] ?? excursion.shortTitle,
      description: excursion.manifest,
      meta: excursion.location,
    },
    {
      kicker: "Por que vale la pena",
      title: excursion.highlights[1] ?? excursion.heroKicker,
      description: excursion.highlights[2] ?? excursion.summary,
      meta: excursion.departure,
    },
    {
      kicker: "Antes de reservar",
      title: excursion.badge ?? excursion.highlights[2] ?? excursion.duration,
      description:
        excursion.notes[0] ?? excursion.optional[0] ?? "Te ayudamos a definir la opcion que mejor calza con tu viaje antes de confirmar la reserva.",
      meta: excursion.availability,
    },
  ];
}

function excursionCategoryLabel(excursion: Excursion) {
  if (excursion.category === "atraccion") {
    return "Atraccion";
  }

  if (excursion.category === "traslado") {
    return "Traslado";
  }

  return "Excursion";
}

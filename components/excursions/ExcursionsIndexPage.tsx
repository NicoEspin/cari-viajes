import Image from "next/image";
import Link from "next/link";
import excursionsHeroImage from "@/app/assets/excurciones-hero.webp";
import {
  excursionCategoryFilters,
  excursionCategoryLabels,
  excursionRhythmFilters,
  excursionRhythmLabels,
  getFilteredExcursions,
  type Excursion,
} from "@/content/excursions";
import { whatsappMessages } from "@/lib/whatsapp";
import { getExcursionAssetBySlug } from "@/lib/excursion-assets";
import {
  editorialSquareDarkGhostCtaClassName,
  editorialSquareWhatsAppButtonClassName,
  excursionDetailCtaClassName,
} from "@/components/ui/buttonStyles";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { EditorialVisual } from "@/components/ui/EditorialVisual";

const BENEFITS = [
  {
    title: "Asesoria real, no catalogo frio",
    description:
      "Cada salida esta curada para que el viaje arranque con criterio y no con veinte opciones iguales compitiendo por atencion.",
  },
  {
    title: "Puerta a puerta cuando suma valor",
    description:
      "Varias salidas salen desde tu hotel o suman traslado opcional para que el plan siga liviano de punta a punta.",
  },
  {
    title: "Beneficios cruzados en ciudad",
    description:
      "Comprando excursiones de medio dia o dia completo accedes a ventajas exclusivas en actividades urbanas seleccionadas.",
  },
];

function getExcursionAsset(excursion: Excursion) {
  return getExcursionAssetBySlug(excursion.slug);
}

function getExcursionAlt(excursion: Excursion) {
  return `${excursion.title} en ${excursion.location}`;
}

function ExcursionAssetImage({
  excursion,
  sizes,
  imageClassName,
  priority,
}: {
  excursion: Excursion;
  sizes: string;
  imageClassName?: string;
  priority?: boolean;
}) {
  const asset = getExcursionAsset(excursion);

  if (!asset) {
    return null;
  }

  return (
    <Image
      src={asset.image}
      alt={getExcursionAlt(excursion)}
      fill
      priority={priority}
      sizes={sizes}
      className={`object-cover ${imageClassName ?? ""}`}
      style={{ objectPosition: asset.objectPosition ?? "center center" }}
    />
  );
}

function buildFilterHref(category: string, rhythm: string) {
  const params = new URLSearchParams();

  if (category !== "all") {
    params.set("categoria", category);
  }

  if (rhythm !== "all") {
    params.set("ritmo", rhythm);
  }

  const query = params.toString();

  return query ? `/excursiones?${query}` : "/excursiones";
}

function FilterPill({ href, active, label }: { href: string; active: boolean; label: string }) {
  return (
    <Link
      href={href}
      replace
      scroll={false}
      className={`inline-flex min-h-11 items-center border px-4 py-2 text-[0.68rem] font-semibold tracking-[0.18em] uppercase transition-all duration-200 ${
        active
          ? "border-[var(--brand-primary)] bg-[var(--brand-primary)] text-white"
          : "border-[var(--border-default)] bg-white text-[var(--text-muted)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]"
      }`}
    >
      {label}
    </Link>
  );
}

function ExcursionMediaPanel({
  excursion,
  title,
  meta,
  sizes,
  className,
  imageClassName,
  overlayContentClassName,
  priority,
}: {
  excursion: Excursion;
  title: string;
  meta: string;
  sizes: string;
  className?: string;
  imageClassName?: string;
  overlayContentClassName?: string;
  priority?: boolean;
}) {
  const asset = getExcursionAsset(excursion);

  if (!asset) {
    return (
      <EditorialVisual
        visual={excursion.visual}
        title={title}
        meta={meta}
        className={className}
      />
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[var(--neutral-200)] ${className ?? ""}`}>
      <ExcursionAssetImage
        excursion={excursion}
        sizes={sizes}
        imageClassName={imageClassName}
        priority={priority}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,12,17,0.08)_0%,rgba(7,12,17,0.2)_35%,rgba(7,12,17,0.68)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(252,203,62,0.85),rgba(4,139,114,0.75),transparent)]" />
      <div
        className={`absolute inset-x-0 bottom-0 p-5 text-white md:p-6 ${overlayContentClassName ?? ""}`}
      >
        <p className="text-[0.58rem] tracking-[0.24em] uppercase text-white/72">{meta}</p>
        <h3 className="mt-3 max-w-[12ch] font-display text-[1.8rem] leading-[0.98] md:text-[2.3rem]">
          {title}
        </h3>
      </div>
    </div>
  );
}

function ExcursionEditorialCard({
  excursion,
  priority,
}: {
  excursion: Excursion;
  priority: string;
}) {
  const asset = getExcursionAsset(excursion);

  return (
    <article className="grid gap-px overflow-hidden border border-[var(--border-default)] bg-[var(--border-default)] lg:grid-cols-[1.16fr_0.84fr]">
      <div className="relative min-h-[320px] overflow-hidden bg-[var(--neutral-950)] md:min-h-[420px] lg:min-h-[600px]">
        {asset ? (
          <>
            <div className="absolute inset-0 bg-[var(--neutral-200)]">
              <Image
                src={asset.image}
                alt={getExcursionAlt(excursion)}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 56vw"
                className="object-cover"
                style={{ objectPosition: asset.objectPosition ?? "center center" }}
              />
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(252,203,62,0.85),rgba(4,139,114,0.75),transparent)]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(7,12,17,0.62)] via-[rgba(7,12,17,0.18)] to-transparent p-6 text-white lg:hidden md:p-7">
              <p className="text-[0.58rem] tracking-[0.24em] uppercase text-white/72">{priority}</p>
              <h2 className="mt-3 max-w-[11ch] font-display text-[2rem] leading-[0.98] md:text-[2.6rem]">
                {excursion.shortTitle}
              </h2>
            </div>
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
          </>
        ) : (
          <EditorialVisual
            visual={excursion.visual}
            title={excursion.shortTitle}
            meta={priority}
            className="absolute inset-0"
          />
        )}
      </div>
      <div className="bg-white p-6 md:p-8">
        <p className="text-[0.62rem] tracking-[0.24em] uppercase text-[var(--brand-primary)]">{priority}</p>
        <h2 className="mt-4 font-display text-[2rem] leading-[1.02] text-[var(--text-primary)] md:text-[2.6rem]">
          {excursion.shortTitle}
        </h2>
        <p className="mt-4 max-w-[52ch] text-sm leading-7 text-[var(--text-secondary)] md:text-[0.96rem]">
          {excursion.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="border border-[var(--border-default)] px-3 py-1 text-[0.62rem] tracking-[0.18em] uppercase text-[var(--text-muted)]">
            {excursionCategoryLabels[excursion.category]}
          </span>
          <span className="border border-[var(--border-default)] px-3 py-1 text-[0.62rem] tracking-[0.18em] uppercase text-[var(--text-muted)]">
            {excursionRhythmLabels[excursion.rhythm]}
          </span>
          <span className="border border-[var(--border-default)] px-3 py-1 text-[0.62rem] tracking-[0.18em] uppercase text-[var(--text-muted)]">
            {excursion.duration}
          </span>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={`/excursiones/${excursion.slug}`}
            className={excursionDetailCtaClassName}
          >
            Ver detalle
          </Link>
          <WhatsAppButton
            message={excursion.whatsappMessage}
            className={editorialSquareWhatsAppButtonClassName}
            ariaLabel={`Consultar ${excursion.shortTitle} por WhatsApp`}
          >
            Consultar esta salida
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}

function ExcursionRailCard({ excursion, index }: { excursion: Excursion; index: number }) {
  const asset = getExcursionAsset(excursion);

  return (
    <article className="flex h-full flex-col bg-white">
      <div className="relative min-h-[240px] overflow-hidden border-b border-[var(--border-default)] md:min-h-[280px] lg:min-h-[320px]">
        {asset ? (
          <>
            <div className="absolute inset-0 bg-[var(--neutral-200)]">
              <Image
                src={asset.image}
                alt={getExcursionAlt(excursion)}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                className="object-cover"
                style={{ objectPosition: asset.objectPosition ?? "center center" }}
              />
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(252,203,62,0.85),rgba(4,139,114,0.75),transparent)]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(7,12,17,0.6)] via-[rgba(7,12,17,0.16)] to-transparent p-5 text-white md:hidden">
              <p className="text-[0.58rem] tracking-[0.22em] uppercase text-white/72">
                {String(index + 2).padStart(2, "0")}
              </p>
              <h3 className="mt-3 max-w-[12ch] font-display text-[1.85rem] leading-[1.02]">
                {excursion.shortTitle}
              </h3>
            </div>
          </>
        ) : (
          <EditorialVisual
            visual={excursion.visual}
            title={excursion.shortTitle}
            meta={String(index + 2).padStart(2, "0")}
            className="absolute inset-0"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="text-[0.62rem] tracking-[0.22em] uppercase text-[var(--text-muted)]">
          {String(index + 2).padStart(2, "0")}
        </p>
        <h3 className="mt-4 font-display text-[1.8rem] leading-[1.04] text-[var(--text-primary)]">
          {excursion.shortTitle}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{excursion.teaser}</p>
        <div className="mt-5 flex flex-wrap gap-2 text-[0.62rem] tracking-[0.18em] uppercase text-[var(--text-muted)]">
          <span className="border border-[var(--border-default)] px-3 py-1">
            {excursionCategoryLabels[excursion.category]}
          </span>
          <span className="border border-[var(--border-default)] px-3 py-1">{excursion.duration}</span>
        </div>
        <div className="mt-6 flex flex-col gap-3">
          <Link
            href={`/excursiones/${excursion.slug}`}
            className={excursionDetailCtaClassName}
          >
            Ver recorrido
          </Link>
          <WhatsAppButton
            message={excursion.whatsappMessage}
            className={editorialSquareWhatsAppButtonClassName}
            ariaLabel={`Consultar ${excursion.shortTitle} por WhatsApp`}
          >
            Consultar por WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}

function ExcursionSplitCard({ excursion, mirrored }: { excursion: Excursion; mirrored: boolean }) {
  return (
    <article className="grid gap-px overflow-hidden border border-[var(--border-default)] bg-[var(--border-default)] lg:grid-cols-[0.96fr_1.04fr] lg:items-stretch">
      <div className={`relative min-h-[320px] bg-[var(--neutral-950)] ${mirrored ? "lg:order-2" : ""}`}>
        <ExcursionMediaPanel
          excursion={excursion}
          title={excursion.editorialTitle}
          meta={excursion.location}
          sizes="(max-width: 1023px) 100vw, 50vw"
          className="h-full min-h-[320px] lg:min-h-full"
          imageClassName="lg:scale-[1.01]"
        />
      </div>
      <div className={`bg-white p-6 md:p-8 ${mirrored ? "lg:order-1" : ""}`}>
        <div className="flex flex-wrap items-center gap-2 text-[0.62rem] tracking-[0.2em] uppercase text-[var(--text-muted)]">
          <span>{excursionCategoryLabels[excursion.category]}</span>
          <span>•</span>
          <span>{excursionRhythmLabels[excursion.rhythm]}</span>
          <span>•</span>
          <span>{excursion.duration}</span>
        </div>
        <h3 className="mt-5 font-display text-[2rem] leading-[1.02] text-[var(--text-primary)] md:text-[2.5rem]">
          {excursion.shortTitle}
        </h3>
        <p className="mt-4 max-w-[56ch] text-sm leading-7 text-[var(--text-secondary)] md:text-[0.95rem]">
          {excursion.summary}
        </p>
        <ul className="mt-6 grid gap-3 text-sm leading-6 text-[var(--text-secondary)] md:grid-cols-2">
          {excursion.highlights.slice(0, 4).map((item) => (
            <li key={item} className="border-t border-[var(--border-default)] pt-3">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={`/excursiones/${excursion.slug}`}
            className={excursionDetailCtaClassName}
          >
            Abrir ficha completa
          </Link>
          <WhatsAppButton
            message={excursion.whatsappMessage}
            className={editorialSquareWhatsAppButtonClassName}
            ariaLabel={`Consultar ${excursion.shortTitle} por WhatsApp`}
          >
            Ir a WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}

export function ExcursionsIndexPage({
  category,
  rhythm,
}: {
  category: string;
  rhythm: string;
}) {
  const filtered = getFilteredExcursions(category, rhythm);
  const lead = filtered[0];
  const rail = filtered.slice(1, 4);
  const editorial = filtered.slice(4);

  return (
    <main className="bg-[var(--neutral-50)]">
      <section className="relative isolate flex min-h-[100dvh] items-start overflow-hidden border-b border-[var(--border-default)] bg-[var(--neutral-950)] px-5 pb-12 pt-24 text-[var(--text-on-dark)] md:min-h-screen md:px-10 md:pb-16 md:pt-28">
        <Image
          src={excursionsHeroImage}
          alt="Vista panoramica de excursiones en Carlos Paz y las sierras de Cordoba"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,12,17,0.34) 0%, rgba(7,12,17,0.54) 42%, rgba(7,12,17,0.8) 100%), radial-gradient(circle at 16% 24%, rgba(252,203,62,0.14) 0%, transparent 24%), radial-gradient(circle at 78% 18%, rgba(4,139,114,0.2) 0%, transparent 30%), linear-gradient(180deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "auto, auto, 100% 92px",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] bg-[linear-gradient(180deg,rgba(7,12,17,0)_0%,rgba(7,12,17,0.34)_42%,rgba(7,12,17,0.74)_100%)]"
        />
        <div className="relative mx-auto grid w-full max-w-[1200px] gap-10 lg:grid-cols-[minmax(0,1.04fr)_minmax(320px,0.78fr)] lg:items-start lg:gap-14">
          <div className="max-w-[720px] self-start">
            <SectionEyebrow>Experiencias únicas</SectionEyebrow>
            <h2 className="mt-5 max-w-[12ch] font-display text-[clamp(3rem,7vw,6rem)] leading-[0.96] tracking-[-0.03em] text-white">
              Excursiones en Córdoba con criterio local.
            </h2>
          </div>

          <div className="grid gap-4 lg:justify-items-end">
            <div className="w-full max-w-[420px] space-y-6 border border-white/12 bg-[linear-gradient(180deg,rgba(7,12,17,0.84)_0%,rgba(7,12,17,0.72)_100%)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-[14px] md:p-7">
              <p className="max-w-[34ch] text-[0.98rem] leading-8 text-[rgba(245,240,232,0.76)]">
                No armamos una grilla plana de salidas. Armamos una coleccion de experiencias,
                atractivos y traslados para explorar Carlos Paz, la sierra y sus alrededores.
              </p>
              <div className="flex flex-wrap gap-3 text-[0.66rem] tracking-[0.2em] uppercase text-[rgba(245,240,232,0.52)]">
                <span>{filtered.length} experiencias activas</span>
                <span aria-hidden="true">•</span>
                <span>Curaduria local</span>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <WhatsAppButton
                  message={whatsappMessages.cta}
                  className={`${editorialSquareWhatsAppButtonClassName} px-6 text-[0.72rem]`}
                  ariaLabel="Armar itinerario por WhatsApp"
                >
                  Armar itinerario por WhatsApp
                </WhatsAppButton>
                <a
                  href="#listado"
                  className={editorialSquareDarkGhostCtaClassName}
                >
                  Explorar el mapa completo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

  

      <section id="listado" className="scroll-mt-24 px-5 py-16 md:scroll-mt-28 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1200px] space-y-8">
          <div className="grid gap-6 border-b border-[var(--border-default)] pb-8 lg:grid-cols-[0.55fr_1.45fr] lg:items-start">
            <div>
              <SectionEyebrow>Filtros de búsqueda</SectionEyebrow>
              <h2 className="mt-4 font-display text-[2rem] leading-[1.02] text-[var(--text-primary)] md:text-[2.8rem]">
                Elegi por tipo de salida o por ritmo.
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {excursionCategoryFilters.map((filter) => (
                  <FilterPill
                    key={filter.value}
                    href={buildFilterHref(filter.value, rhythm)}
                    label={filter.label}
                    active={category === filter.value}
                  />
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {excursionRhythmFilters.map((filter) => (
                  <FilterPill
                    key={filter.value}
                    href={buildFilterHref(category, filter.value)}
                    label={filter.label}
                    active={rhythm === filter.value}
                  />
                ))}
              </div>
            </div>
          </div>

          {lead ? (
            <div className="space-y-8">
              <ExcursionEditorialCard excursion={lead} priority="Entrada principal" />

              {rail.length ? (
                <div className="grid gap-px overflow-hidden border border-[var(--border-default)] bg-[var(--border-default)] md:grid-cols-3">
                  {rail.map((excursion, index) => (
                    <ExcursionRailCard key={excursion.slug} excursion={excursion} index={index} />
                  ))}
                </div>
              ) : null}

              {editorial.map((excursion, index) => {
                const mirrored = index % 2 === 1;

                return (
                  <ExcursionSplitCard
                    key={excursion.slug}
                    excursion={excursion}
                    mirrored={mirrored}
                  />
                );
              })}
            </div>
          ) : (
            <div className="border border-[var(--border-default)] bg-white p-8 text-center">
              <p className="font-display text-[2rem] text-[var(--text-primary)]">No encontramos una salida para ese cruce.</p>
              <p className="mx-auto mt-3 max-w-[44ch] text-sm leading-7 text-[var(--text-secondary)]">
                Probemos otra combinacion de filtros o escribinos por WhatsApp y lo resolvemos con una recomendacion a medida.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/excursiones"
                  className="inline-flex min-h-11 items-center justify-center border border-[var(--text-primary)] px-5 py-3 text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-[var(--text-primary)]"
                >
                  Limpiar filtros
                </Link>
                <WhatsAppButton
                  message={whatsappMessages.cta}
                  className={editorialSquareWhatsAppButtonClassName}
                  ariaLabel="Consultar por WhatsApp"
                >
                  Pedir recomendacion
                </WhatsAppButton>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="border-y border-[var(--border-default)] bg-white px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 border-b border-[var(--border-default)] pb-8 lg:grid-cols-[0.62fr_1.38fr] lg:items-end">
            <div>
              <SectionEyebrow>Beneficios</SectionEyebrow>
              <h2 className="mt-4 font-display text-[2rem] leading-[1.02] text-[var(--text-primary)] md:text-[2.8rem]">
                La diferencia esta en como se arma el plan.
              </h2>
            </div>
            <p className="max-w-[52ch] text-[0.96rem] leading-8 text-[var(--text-secondary)]">
              La data sale del documento comercial original, pero ahora vive ordenada en una sola fuente tipada para que home, listado y detalle hablen el mismo idioma.
            </p>
          </div>
          <div className="mt-8 grid gap-px overflow-hidden border border-[var(--border-default)] bg-[var(--border-default)] md:grid-cols-3">
            {BENEFITS.map((benefit) => (
              <article key={benefit.title} className="bg-[var(--neutral-50)] p-6 md:p-8">
                <h3 className="font-display text-[1.65rem] leading-[1.04] text-[var(--text-primary)]">
                  {benefit.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-8 border border-[var(--border-default)] bg-[var(--neutral-950)] px-6 py-8 text-white md:px-10 md:py-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <SectionEyebrow>WhatsApp Primero</SectionEyebrow>
            <h2 className="mt-4 font-display text-[2.2rem] leading-[1.02] md:text-[3.3rem]">
              Si ya viste lo suficiente, lo resolvemos en un mensaje.
            </h2>
            <p className="mt-4 max-w-[52ch] text-[0.96rem] leading-8 text-[rgba(245,240,232,0.74)]">
              Te recomendamos una combinacion segun cantidad de dias, con quien viajas, tu energia y si queres ciudad, sierra o logistica especial.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <WhatsAppButton
              message={whatsappMessages.cta}
              className={`${editorialSquareWhatsAppButtonClassName} px-6 text-[0.72rem]`}
              ariaLabel="Escribir por WhatsApp para armar plan"
            >
              Armar plan por WhatsApp
            </WhatsAppButton>
            <Link
              href="/"
              className={editorialSquareDarkGhostCtaClassName}
            >
              Volver a la home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

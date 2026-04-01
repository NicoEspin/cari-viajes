import Link from "next/link";
import {
  excursionCategoryFilters,
  excursionCategoryLabels,
  excursionRhythmFilters,
  excursionRhythmLabels,
  getFilteredExcursions,
  type Excursion,
} from "@/content/excursions";
import { whatsappMessages } from "@/lib/whatsapp";
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
      className={`inline-flex min-h-11 items-center border px-4 py-2 text-[0.68rem] font-semibold tracking-[0.18em] uppercase transition-all duration-200 ${
        active
          ? "border-[var(--text-primary)] bg-[var(--text-primary)] text-white"
          : "border-[var(--border-default)] bg-white text-[var(--text-muted)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]"
      }`}
    >
      {label}
    </Link>
  );
}

function ExcursionEditorialCard({
  excursion,
  priority,
}: {
  excursion: Excursion;
  priority: string;
}) {
  return (
    <article className="grid gap-px overflow-hidden border border-[var(--border-default)] bg-[var(--border-default)] lg:grid-cols-[1.1fr_0.9fr]">
      <EditorialVisual
        visual={excursion.visual}
        title={excursion.editorialTitle}
        meta={excursion.heroKicker}
        className="min-h-[320px]"
      />
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
            className="inline-flex min-h-11 items-center justify-center border border-[var(--text-primary)] px-5 py-3 text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-[var(--text-primary)] transition-colors hover:bg-[var(--text-primary)] hover:text-white"
          >
            Ver detalle
          </Link>
          <WhatsAppButton
            message={excursion.whatsappMessage}
            className="justify-center rounded-none px-5 py-3 text-[0.68rem] tracking-[0.12em] uppercase"
            ariaLabel={`Consultar ${excursion.shortTitle} por WhatsApp`}
          >
            Consultar esta salida
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
    <main className="bg-[var(--neutral-50)] pt-24 md:pt-28">
      <section className="relative overflow-hidden border-b border-[var(--border-default)] bg-[var(--neutral-950)] px-5 py-20 text-[var(--text-on-dark)] md:px-10 md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 16% 24%, rgba(252,203,62,0.16) 0%, transparent 24%), radial-gradient(circle at 78% 18%, rgba(4,139,114,0.24) 0%, transparent 30%), linear-gradient(180deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "auto, auto, 100% 92px",
          }}
        />
        <div className="relative mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <SectionEyebrow>Mapa Curado</SectionEyebrow>
            <h1 className="mt-5 max-w-[12ch] font-display text-[clamp(3rem,7vw,6rem)] leading-[0.96] tracking-[-0.03em] text-white">
              Excursiones en Carlos Paz con criterio local.
            </h1>
          </div>

          <div className="space-y-6">
            <p className="max-w-[54ch] text-[0.98rem] leading-8 text-[rgba(245,240,232,0.76)]">
              No armamos una grilla plana de salidas. Armamos una coleccion de experiencias,
              atractivos y traslados para leer Carlos Paz, la sierra y sus alrededores con un tono
              mas editorial, directo y facil de convertir en WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3 text-[0.66rem] tracking-[0.2em] uppercase text-[rgba(245,240,232,0.52)]">
              <span>{filtered.length} experiencias activas</span>
              <span>•</span>
              <span>Fuente unica normalizada desde el brief comercial</span>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppButton
                message={whatsappMessages.cta}
                className="justify-center rounded-none px-6 py-3 text-[0.72rem] tracking-[0.12em] uppercase"
                ariaLabel="Armar itinerario por WhatsApp"
              >
                Armar itinerario por WhatsApp
              </WhatsAppButton>
              <a
                href="#listado"
                className="inline-flex min-h-11 items-center justify-center border border-white/18 px-6 py-3 text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-white/84 transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
              >
                Explorar el mapa completo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border-default)] px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="space-y-4">
            <SectionEyebrow withLine>Manifiesto</SectionEyebrow>
            <h2 className="font-display text-[2.3rem] leading-[1.02] text-[var(--text-primary)] md:text-[3.4rem]">
              Menos catalogo. Mas lectura del viaje.
            </h2>
          </div>
          <div className="grid gap-6 text-[0.96rem] leading-8 text-[var(--text-secondary)] md:grid-cols-2">
            <p>
              Cari Turismo trabaja la ciudad como base, la sierra como narrativa y WhatsApp como el
              canal donde se termina de afinar el plan. Por eso cada ficha ya nace con logistica,
              tono, ritmo y CTA claros.
            </p>
            <p>
              Tenes atracciones urbanas, recorridos de medio dia, full days, turismo aventura,
              formatos para grupos y traslados especiales sin romper la identidad premium que ya vive
              en la home.
            </p>
          </div>
        </div>
      </section>

      <section id="listado" className="px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1200px] space-y-8">
          <div className="grid gap-6 border-b border-[var(--border-default)] pb-8 lg:grid-cols-[0.55fr_1.45fr] lg:items-start">
            <div>
              <SectionEyebrow>Filtros Visuales</SectionEyebrow>
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
                    <article key={excursion.slug} className="bg-white p-5 md:p-6">
                      <p className="text-[0.62rem] tracking-[0.22em] uppercase text-[var(--text-muted)]">
                        {String(index + 2).padStart(2, "0")}
                      </p>
                      <h3 className="mt-4 font-display text-[1.8rem] leading-[1.04] text-[var(--text-primary)]">
                        {excursion.shortTitle}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{excursion.teaser}</p>
                      <div className="mt-5 border-t border-[var(--border-default)] pt-4 text-[0.66rem] tracking-[0.18em] uppercase text-[var(--text-muted)]">
                        {excursionCategoryLabels[excursion.category]} · {excursion.duration}
                      </div>
                      <Link
                        href={`/excursiones/${excursion.slug}`}
                        className="mt-5 inline-flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-[var(--brand-primary)] transition-[gap] hover:gap-3"
                      >
                        Ver recorrido
                        <span aria-hidden="true">-&gt;</span>
                      </Link>
                    </article>
                  ))}
                </div>
              ) : null}

              {editorial.map((excursion, index) => {
                const mirrored = index % 2 === 1;

                return (
                  <article
                    key={excursion.slug}
                    className="grid gap-px overflow-hidden border border-[var(--border-default)] bg-[var(--border-default)] lg:grid-cols-2"
                  >
                    <div className={mirrored ? "lg:order-2" : ""}>
                      <EditorialVisual
                        visual={excursion.visual}
                        title={excursion.editorialTitle}
                        meta={excursion.location}
                        className="min-h-[280px]"
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
                          className="inline-flex min-h-11 items-center justify-center border border-[var(--text-primary)] px-5 py-3 text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-[var(--text-primary)] transition-colors hover:bg-[var(--text-primary)] hover:text-white"
                        >
                          Abrir ficha completa
                        </Link>
                        <WhatsAppButton
                          message={excursion.whatsappMessage}
                          className="justify-center rounded-none px-5 py-3 text-[0.68rem] tracking-[0.12em] uppercase"
                          ariaLabel={`Consultar ${excursion.shortTitle} por WhatsApp`}
                        >
                          Ir a WhatsApp
                        </WhatsAppButton>
                      </div>
                    </div>
                  </article>
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
                  className="justify-center rounded-none px-5 py-3 text-[0.68rem] tracking-[0.12em] uppercase"
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
              className="justify-center rounded-none px-6 py-3 text-[0.72rem] tracking-[0.12em] uppercase"
              ariaLabel="Escribir por WhatsApp para armar plan"
            >
              Armar plan por WhatsApp
            </WhatsAppButton>
            <Link
              href="/"
              className="inline-flex min-h-11 items-center justify-center border border-white/18 px-6 py-3 text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-white/84 transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              Volver a la home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import Image, { type StaticImageData } from "next/image";
import { GalleryMarqueeViewport } from "@/components/motion/GalleryMarqueeViewport";
import { excursions } from "@/content/excursions";
import { getExcursionMediaBySlug } from "@/lib/excursion-media";
import { SectionEyebrow } from "../ui/SectionEyebrow";

type GallerySlide = {
  id: string;
  slug: string;
  title: string;
  label: string;
  location: string;
  alt: string;
  image: StaticImageData;
  objectPosition: string;
};

const galleryExcursions = excursions
  .filter((excursion) => excursion.slug !== "traslados-especiales")
  .map((excursion) => {
    const media = getExcursionMediaBySlug(excursion.slug);

    if (!media) {
      throw new Error(`Missing gallery media for ${excursion.slug}`);
    }

    return { excursion, media };
  });

const gallerySlides = Array.from({ length: 4 }, (_, galleryIndex) =>
  galleryExcursions.flatMap(({ excursion, media }) => {
    const image = media.gallery[galleryIndex];

    if (!image || image.image.src === media.hero.image.src) {
      return [];
    }

    return {
      id: `${excursion.slug}-gallery-${galleryIndex + 1}`,
      slug: excursion.slug,
      label: excursion.visual.eyebrow,
      title: excursion.shortTitle,
      location: excursion.location,
      alt: image.alt,
      image: image.image,
      objectPosition: image.objectPosition ?? "center center",
    } satisfies GallerySlide;
  }),
).flat();

const desktopTrackLeft = gallerySlides.filter((_, index) => index % 2 === 0);
const desktopTrackRight = gallerySlides.filter((_, index) => index % 2 === 1);

function getGalleryDuration(slideCount: number, size: "mobile" | "desktop") {
  const secondsPerSlide = size === "mobile" ? 3.2 : 4;

  return Math.max(
    size === "mobile" ? 28 : 30,
    Math.round(slideCount * secondsPerSlide),
  );
}

export function GallerySection() {
  return (
    <section
      id="galeria"
      aria-label="Galeria de experiencias"
      className="relative flex min-h-screen scroll-mt-24 overflow-hidden bg-[var(--neutral-950)] text-[var(--text-on-dark)] min-[0px]:min-h-[100svh] md:scroll-mt-28 lg:min-h-[118vh] xl:min-h-[124vh]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[44%]"
        style={{
          background:
            "linear-gradient(180deg, rgba(200,168,75,0.18) 0%, rgba(200,168,75,0.06) 28%, transparent 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-[360px] w-[360px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(4,139,114,0.92) 0%, rgba(4,139,114,0) 72%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col px-5 py-8 md:px-8 md:py-10 lg:max-w-none lg:px-0 lg:py-14 xl:py-16">
        <div className="flex flex-col gap-7 border-b border-white/10 pb-7 md:pb-9 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.7fr)] lg:items-end lg:gap-12 lg:px-10 xl:px-12">
          <div data-reveal>
            <SectionEyebrow>Galeria visual</SectionEyebrow>
            <h2 className="font-display mt-5 max-w-[10ch] text-[46px] font-light leading-none tracking-tight md:text-[72px]">
              Conoce lugares
              <br />
              <em className="italic text-[var(--gold)]">unicos</em>
              <span className="text-white/72"> con Cari.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-5 lg:items-end" data-reveal>
            <p className="max-w-[40ch] text-[11.5px] leading-[2] text-white/58 lg:text-right">
              Una selección de paisajes, escapadas y experiencias que invitan a
              imaginar el viaje antes de vivirlo. Lugares con identidad, vistas
              que quedan y planes que vale la pena descubrir.
            </p>
          </div>
        </div>

        <div className="relative flex flex-1 flex-col justify-center gap-4 py-6 md:gap-5 md:py-8 lg:gap-5 lg:py-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-20 lg:block"
            style={{
              background:
                "linear-gradient(90deg, var(--neutral-950) 0%, rgba(8,10,12,0) 100%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-20 lg:block"
            style={{
              background:
                "linear-gradient(270deg, var(--neutral-950) 0%, rgba(8,10,12,0) 100%)",
            }}
          />

          <GalleryMarqueeViewport
            className="lg:hidden"
            dataReveal
            direction="left"
            duration={getGalleryDuration(gallerySlides.length, "mobile")}
          >
            <GalleryMarquee
              slides={gallerySlides}
              direction="left"
              duration={getGalleryDuration(gallerySlides.length, "mobile")}
              size="mobile"
            />
          </GalleryMarqueeViewport>

          <div className="hidden flex-1 flex-col justify-center gap-5 lg:flex">
            <GalleryMarqueeViewport
              dataReveal
              direction="left"
              duration={getGalleryDuration(desktopTrackLeft.length, "desktop")}
            >
              <GalleryMarquee
                slides={desktopTrackLeft}
                direction="left"
                duration={getGalleryDuration(
                  desktopTrackLeft.length,
                  "desktop",
                )}
                size="desktop"
              />
            </GalleryMarqueeViewport>

            <GalleryMarqueeViewport
              dataReveal
              direction="right"
              duration={getGalleryDuration(desktopTrackRight.length, "desktop")}
            >
              <GalleryMarquee
                slides={desktopTrackRight}
                direction="right"
                duration={getGalleryDuration(
                  desktopTrackRight.length,
                  "desktop",
                )}
                size="desktop"
              />
            </GalleryMarqueeViewport>
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryMarquee({
  slides,
  direction,
  duration,
  size,
}: {
  slides: readonly GallerySlide[];
  direction: "left" | "right";
  duration: number;
  size: "mobile" | "desktop";
}) {
  return (
    <div
      className="gallery-marquee flex w-max gap-3 will-change-transform md:gap-4"
      data-direction={direction}
      data-duration={duration}
      data-gallery-track
    >
      {[...slides, ...slides].map((slide, index) => (
        <GalleryCard
          key={`${direction}-${slide.id}-${index}`}
          slide={slide}
          size={size}
        />
      ))}
    </div>
  );
}

function GalleryCard({
  slide,
  size,
}: {
  slide: GallerySlide;
  size: "mobile" | "desktop";
}) {
  const sizeClassName =
    size === "mobile"
      ? "h-[clamp(24rem,60svh,38rem)] w-[82vw] min-w-[82vw]"
      : "h-[clamp(300px,36vh,420px)] w-[36vw] min-w-[36vw] max-w-[680px]";

  return (
    <article
      className={`gallery-card group relative overflow-hidden border border-white/10 bg-black/20 ${sizeClassName}`}
    >
      <Image
        src={slide.image}
        alt={slide.alt}
        fill
        sizes={size === "mobile" ? "82vw" : "(min-width: 1024px) 30vw, 0px"}
        loading="lazy"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        style={{ objectPosition: slide.objectPosition }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,15,18,0.04)_0%,rgba(12,15,18,0.08)_34%,rgba(7,9,10,0.72)_100%)]" />
      <div className="absolute inset-x-4 top-4 flex items-center justify-between text-[8px] uppercase tracking-[0.18em] text-white/72 md:inset-x-6 md:top-5 md:text-[9px]">
        <span>{slide.label}</span>
        <span className="text-[var(--gold)]">Cari Turismo</span>
      </div>

      <div className="absolute inset-x-4 bottom-4 md:inset-x-6 md:bottom-6">
        <div className="mb-3 h-px w-full bg-gradient-to-r from-[var(--gold)]/85 via-white/24 to-transparent" />
        <h3 className="font-display max-w-[10ch] text-[28px] font-light leading-[0.96] text-white md:text-[36px]">
          {slide.title}
        </h3>
        <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-white/64 md:text-[11px]">
          {slide.location}
        </p>
      </div>
    </article>
  );
}

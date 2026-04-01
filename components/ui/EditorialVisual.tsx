import type { ExcursionVisual } from "@/content/excursions";

type EditorialVisualProps = {
  visual: ExcursionVisual;
  title: string;
  meta?: string;
  className?: string;
  density?: "compact" | "regular" | "cinematic";
  imageSrc?: string;
  imageAlt?: string;
};

export function EditorialVisual({
  visual,
  title,
  meta,
  className,
  density = "regular",
  imageSrc,
  imageAlt,
}: EditorialVisualProps) {
  const padding =
    density === "compact"
      ? "p-5"
      : density === "cinematic"
        ? "p-6 md:p-8"
        : "p-6";

  const titleSize =
    density === "compact"
      ? "text-2xl"
      : density === "cinematic"
        ? "text-3xl md:text-5xl"
        : "text-[1.9rem] md:text-[2.4rem]";

  return (
    <div
      className={`relative overflow-hidden border border-white/10 bg-[var(--neutral-950)] text-white ${padding} ${className ?? ""}`}
      aria-label={imageAlt ?? visual.alt}
      role="img"
      style={{
        background: `
          radial-gradient(circle at 18% 18%, ${visual.palette.glow} 0%, transparent 34%),
          radial-gradient(circle at 84% 16%, rgba(252, 203, 62, 0.16) 0%, transparent 24%),
          linear-gradient(160deg, ${visual.palette.base} 0%, #0a0f0d 72%)
        `,
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(140deg, rgba(255,255,255,0.18) 0%, transparent 18%, transparent 64%, rgba(255,255,255,0.12) 100%), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "auto, 88px 88px, 88px 88px",
        }}
      />
      {imageSrc ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-78 mix-blend-screen"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      ) : null}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5, 8, 7, 0.08) 0%, rgba(5, 8, 7, 0.38) 55%, rgba(5, 8, 7, 0.7) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="absolute left-5 top-5 h-20 w-20 rounded-full border border-white/12"
      />
      <div className="relative z-10 flex h-full flex-col justify-between gap-8">
        <div className="flex items-center justify-between gap-4 text-[0.62rem] font-semibold tracking-[0.24em] uppercase text-white/68">
          <span>{visual.eyebrow}</span>
          <span className="text-right text-white/52">{visual.scene}</span>
        </div>

        <div className="space-y-3">
          {meta ? (
            <p style={{ color: visual.palette.accent }} className="text-[0.68rem] tracking-[0.22em] uppercase">
              {meta}
            </p>
          ) : null}
          <p className={`font-display leading-[0.98] tracking-[-0.02em] ${titleSize}`}>{title}</p>
        </div>

        <div className="flex items-center justify-between gap-3 text-[0.68rem] text-white/55">
          <span className="h-px flex-1 bg-white/18" />
          <span>{imageSrc ? "Asset conectado con fallback editorial" : "Placeholder editorial listo para reemplazar"}</span>
        </div>
      </div>
    </div>
  );
}

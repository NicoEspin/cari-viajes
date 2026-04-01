import { Clock3, Route } from "lucide-react";
import type { Experience } from "@/content/experiences";
import { whatsappMessages } from "@/lib/whatsapp";
import { WhatsAppButton } from "./WhatsAppButton";

type ExperienceCardProps = {
  experience: Experience;
  index: number;
  highlight?: boolean;
};

const posterPalettes = [
  {
    main: "#2f5a4c",
    accent: "#c8a84b",
    glow: "rgba(200,168,75,0.32)",
  },
  {
    main: "#0b3f48",
    accent: "#48b4a3",
    glow: "rgba(72,180,163,0.3)",
  },
  {
    main: "#3c435d",
    accent: "#c7a4e0",
    glow: "rgba(199,164,224,0.34)",
  },
];

function getTripFocus(category: Experience["category"]) {
  if (category === "Excursion") return "Naturaleza activa";
  if (category === "Atractivo") return "Ciudad y plan social";
  return "Logistica flexible";
}

export function ExperienceCard({ experience, index, highlight }: ExperienceCardProps) {
  const sequence = `${String(index + 1).padStart(2, "0")}`;
  const palette = posterPalettes[index % posterPalettes.length];

  return (
    <article className="experience-card group relative pl-8 md:pl-10">
      <span
        className={`experience-node absolute left-0 top-8 z-20 size-4 rounded-full border-2 border-[var(--neutral-50)] bg-[var(--brand-primary)] shadow-[0_0_0_4px_rgba(4,139,114,0.15)] ${
          highlight ? "bg-[var(--gold)] shadow-[0_0_0_5px_rgba(200,168,75,0.18)]" : ""
        }`}
        aria-hidden="true"
      />

      <div
        className={`relative overflow-hidden rounded-[18px] border border-[var(--border-default)] bg-white px-5 py-5 shadow-[0_10px_35px_rgba(13,13,11,0.06)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_16px_46px_rgba(13,13,11,0.12)] md:px-6 md:py-6 ${
          highlight ? "border-[var(--gold)]/35" : ""
        }`}
      >
        <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_220px] md:items-stretch">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[var(--neutral-950)] px-3 py-1 text-[10px] font-semibold tracking-[0.14em] uppercase text-white">
                Ruta {sequence}
              </span>
              <span className="rounded-full border border-[var(--border-default)] px-3 py-1 text-[10px] font-semibold tracking-[0.12em] uppercase text-[var(--text-muted)]">
                {experience.category}
              </span>
              <span className="rounded-full bg-[var(--brand-primary)]/12 px-3 py-1 text-[10px] font-semibold tracking-[0.12em] uppercase text-[var(--brand-primary)]">
                {getTripFocus(experience.category)}
              </span>
              {experience.badge ? (
                <span className="rounded-full bg-[var(--brand-accent-2)]/30 px-3 py-1 text-[10px] font-semibold tracking-[0.12em] uppercase text-[var(--neutral-950)]">
                  {experience.badge}
                </span>
              ) : null}
            </div>

            <h3 className="text-xl leading-tight font-semibold text-[var(--text-primary)] md:text-2xl">
              {experience.title}
            </h3>

            <p className="text-sm leading-7 text-[var(--text-secondary)] md:text-[15px]">
              {experience.description}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-default)] pt-4">
              <p className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-muted)]">
                <Clock3 className="size-3.5" />
                {experience.duration}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-muted)]">
                <Route className="size-3.5" />
                Plan curado por Cari
              </span>
            </div>

            <WhatsAppButton
              message={whatsappMessages.byExperience(experience.title)}
              className="px-4 py-2 text-xs"
              ariaLabel={`Consultar por ${experience.title} en WhatsApp`}
            >
              Quiero esta experiencia
            </WhatsAppButton>
          </div>

          <aside
            className="experience-poster relative overflow-hidden rounded-[14px] p-4 text-white"
            style={{
              background: `
                radial-gradient(circle at 78% 18%, ${palette.glow} 0%, transparent 44%),
                linear-gradient(165deg, ${palette.main} 0%, #111816 78%)
              `,
            }}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(125deg, rgba(255,255,255,0.18) 0%, transparent 32%, transparent 70%, rgba(255,255,255,0.12) 100%)",
              }}
            />
            <div className="relative z-10 flex h-full flex-col justify-between gap-6">
              <span
                className="text-[10px] font-semibold tracking-[0.14em] uppercase"
                style={{ color: palette.accent }}
              >
                Edicion destacada
              </span>
              <p className="font-display text-2xl leading-[1.04]">{experience.editorialTitle}</p>
              <span className="h-px w-full bg-white/20" />
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}

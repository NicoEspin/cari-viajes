type SectionEyebrowProps = {
  children: string;
  withLine?: boolean;
};

export function SectionEyebrow({ children, withLine = false }: SectionEyebrowProps) {
  if (withLine) {
    return (
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-[var(--brand-primary)]" />
        <p className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[var(--brand-primary)]">
          {children}
        </p>
      </div>
    );
  }

  return (
    <p className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[var(--brand-primary)]">
      {children}
    </p>
  );
}
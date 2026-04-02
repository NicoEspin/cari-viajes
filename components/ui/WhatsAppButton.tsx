import Link from "next/link";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { generateWhatsAppLink } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  message: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export function WhatsAppButton({
  message,
  children,
  className,
  ariaLabel,
  style,
  onClick,
}: WhatsAppButtonProps) {
  return (
    <Link
      href={generateWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      style={style}
      onClick={onClick}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[var(--whatsapp)] bg-[var(--whatsapp)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200
        hover:-translate-y-0.5 hover:border-[var(--whatsapp-dark)] hover:bg-[var(--whatsapp-dark)] hover:shadow-[0_0_24px_rgba(37,211,102,0.3)]
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-accent-1)] ${className ?? ""}`}
    >
      <WhatsAppIcon className="size-4" />
      <span>{children}</span>
    </Link>
  );
}

import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/content/navigation";
import { generateWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-[var(--neutral-950)] px-5 py-16 text-[var(--text-on-dark)] md:px-8">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 md:grid-cols-3">
        <div>
          <Image
            src="/logo2.png"
            alt="Logo secundario de Cari Turismo"
            width={120}
            height={180}
            className="h-auto w-20"
          />
          <p className="mt-4 max-w-xs text-sm text-[var(--text-on-dark-secondary)]">
            Tu guia local en Villa Carlos Paz para excursiones, city tours y
            experiencias con criterio.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.12em] uppercase text-[var(--brand-accent-1)]">
            Navegacion
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[var(--brand-accent-1)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.12em] uppercase text-[var(--brand-accent-1)]">
            Contacto
          </h3>
          <div className="mt-4 space-y-3 text-sm">
            <a
              href={generateWhatsAppLink(whatsappMessages.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[var(--brand-accent-1)]"
            >
              WhatsApp
            </a>
            <Link
              href="https://instagram.com/cariturismo"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[var(--brand-accent-1)]"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 w-full max-w-[1200px] border-t border-white/10 pt-6 text-xs text-[var(--text-on-dark-secondary)]">
        <p>Villa Carlos Paz, Cordoba, Argentina · {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

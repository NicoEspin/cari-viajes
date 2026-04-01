"use client";

import { useEffect, useState } from "react";
import { generateWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 1800);

    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) {
        setVisible(true);
        return;
      }

      const progress = window.scrollY / maxScroll;
      if (progress >= 0.12) setVisible(true);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <a
      href={generateWhatsAppLink(whatsappMessages.fab)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp para consultar excursiones"
      className="fixed right-5 bottom-5 z-[70] inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-4 py-3 text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-accent-1)] animate-[fab-enter_420ms_cubic-bezier(0.22,1,0.36,1)] md:right-7 md:bottom-7"
    >
      <WhatsAppIcon className="size-6 animate-[pulse_2.4s_infinite]" />
      <span className="hidden text-sm font-semibold lg:inline">WhatsApp</span>
    </a>
  );
}

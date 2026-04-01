"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/content/navigation";
import { whatsappMessages } from "@/lib/whatsapp";
import { WhatsAppButton } from "../ui/WhatsAppButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[var(--nav-border)] bg-[rgba(13,13,11,0.93)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2"
          aria-label="Volver al inicio"
        >
          <Image
            src="/logo.png"
            alt="Cari Turismo — agencia de turismo en Villa Carlos Paz"
            width={200}
            height={72}
            priority
            className="h-auto w-32 md:w-40"
          />
        </Link>

        {/* Links */}
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="nav-link relative text-[0.72rem] font-normal tracking-[0.16em] uppercase text-[var(--text-muted)] transition-colors duration-250 hover:text-[var(--sand)]
                  after:absolute after:bottom-[-3px] after:left-0 after:h-px after:w-0 after:bg-[var(--gold)] after:transition-[width] after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <WhatsAppButton
          message={whatsappMessages.hero}
          className="px-5 py-2.5 text-[0.72rem]"
          ariaLabel="Escribir por WhatsApp"
        >
          <span className="hidden tracking-[0.1em] uppercase md:inline">
            Escribinos
          </span>
          <span className="tracking-[0.1em] uppercase md:hidden">WhatsApp</span>
        </WhatsAppButton>
      </nav>
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";
import { socialLinks } from "@/content/social";

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

const INSTAGRAM_POSTS = [
  "https://www.instagram.com/p/DWjfj8mkQSO/",
  "https://www.instagram.com/p/DS-86HlkYHv/",
  "https://www.instagram.com/p/DSTBygKkXCk/",
  "https://www.instagram.com/p/DR3Bg4yjc_Z/",
  "https://www.instagram.com/p/DQYE7v5DXvc/",
  "https://www.instagram.com/p/DRcMt0ADTto/?img_index=1",
] as const;

// Instagram logo SVG
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export function InstagramSection() {
  useEffect(() => {
    window.instgrm?.Embeds?.process();
  }, []);

  return (
    <section
      id="instagram"
      aria-label="Instagram"
      className="bg-[var(--neutral-50)] px-5 py-[var(--home-section-y)] md:px-10 md:py-[var(--home-section-y-lg)]"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div
          className="mb-[var(--home-section-header-gap)] flex flex-col items-start gap-6 rounded-2xl border border-[var(--border-default)] bg-white p-6 md:mb-[var(--home-section-header-gap-lg)] sm:flex-row sm:items-center sm:justify-between"
          data-reveal
        >
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 shrink-0 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 p-[2px]">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-[var(--neutral-100)]">
                <Image
                  src="/logo-instagram.jpg"
                  alt="Perfil de Instagram de Cari Turismo"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-lg font-normal text-[var(--text-primary)]">
                  {socialLinks.instagram.handle}
                </span>
                <span className="rounded-full bg-[var(--neutral-100)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-[var(--text-muted)]">
                  Oficial
                </span>
              </div>
              <p className="mt-0.5 text-sm text-[var(--text-muted)]">
                Agencia de viajes · Córdoba, Argentina
              </p>
            </div>
          </div>

          <p className="max-w-[32rem] text-sm leading-relaxed text-[var(--text-secondary)] sm:text-right">
            Mirá salidas reales, experiencias y novedades de Cari Turismo directo desde
            Instagram.
          </p>
        </div>

        <div
          className="instagram-feed-track -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-2 md:items-start md:gap-6 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-3"
        >
          {INSTAGRAM_POSTS.map((postUrl) => (
            <div
              key={postUrl}
              className="insta-item instagram-embed-card flex w-[min(24rem,calc(100vw-3rem))] shrink-0 snap-center justify-center py-2 first:snap-start last:snap-end md:w-auto md:shrink md:snap-none"
              data-reveal
            >
              <blockquote
                className="instagram-media !m-0 !min-w-0 w-full"
                data-instgrm-permalink={postUrl}
                data-instgrm-version="14"
              >
                <a href={postUrl} target="_blank" rel="noopener noreferrer">
                  Ver publicación en Instagram
                </a>
              </blockquote>
            </div>
          ))}
        </div>

        <div
          className="mt-[var(--home-section-footer-gap)] flex flex-col items-center gap-3 text-center md:mt-[var(--home-section-footer-gap-lg)]"
          data-reveal
        >
          <p className="text-sm text-[var(--text-muted)]">
            Seguinos para ver cada destino antes de decidir.
          </p>
          <Link
            href={socialLinks.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <InstagramIcon className="h-4 w-4" />
            Seguir en Instagram
          </Link>
        </div>

        <Script
          id="instagram-embed-script"
          src="https://www.instagram.com/embed.js"
          strategy="lazyOnload"
          onLoad={() => {
            window.instgrm?.Embeds?.process();
          }}
        />
      </div>
    </section>
  );
}

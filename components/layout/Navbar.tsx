"use client";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { editorialSquareWhatsAppButtonClassName } from "@/components/ui/buttonStyles";
import { navbarLinks } from "@/content/navigation";
import { whatsappMessages } from "@/lib/whatsapp";
import { WhatsAppButton } from "../ui/WhatsAppButton";

function getClipValues(originX: number, originY: number) {
  const maxX = Math.max(originX, window.innerWidth - originX);
  const maxY = Math.max(originY, window.innerHeight - originY);
  const radius = Math.hypot(maxX, maxY) + 28;

  return {
    closedClip: `circle(20px at ${originX}px ${originY}px)`,
    openClip: `circle(${radius}px at ${originX}px ${originY}px)`,
  };
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();

  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuLayerRef = useRef<HTMLDivElement>(null);
  const menuRevealRef = useRef<HTMLDivElement>(null);
  const menuBackdropRef = useRef<HTMLButtonElement>(null);
  const menuCopyRef = useRef<HTMLDivElement>(null);
  const menuCtaRef = useRef<HTMLDivElement>(null);
  const lineTopRef = useRef<HTMLSpanElement>(null);
  const lineMiddleRef = useRef<HTMLSpanElement>(null);
  const lineBottomRef = useRef<HTMLSpanElement>(null);
  const mobileLinkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const hasSyncedInitialMenuStateRef = useRef(false);

  const restoreMenuTriggerFocus = useCallback(() => {
    if (document.activeElement instanceof HTMLElement && menuLayerRef.current?.contains(document.activeElement)) {
      menuButtonRef.current?.focus();
    }
  }, []);

  const closeMenu = useCallback(() => {
    restoreMenuTriggerFocus();
    setIsMenuOpen(false);
  }, [restoreMenuTriggerFocus]);

  const getMenuOrigin = () => {
    const rect = menuButtonRef.current?.getBoundingClientRect();
    if (!rect) {
      return { x: window.innerWidth - 34, y: 36 };
    }
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (isMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = previousOverflow || "";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [closeMenu, isMenuOpen]);

  useEffect(() => {
    const layer = menuLayerRef.current;
    if (!layer) return;

    layer.inert = !isMenuOpen;
  }, [closeMenu, isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeMenu, isMenuOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const onViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) closeMenu();
    };
    mediaQuery.addEventListener("change", onViewportChange);
    return () => mediaQuery.removeEventListener("change", onViewportChange);
  }, [closeMenu]);

  // FIX 1: Inicializar el estado cerrado del menú una sola vez al montar
  useLayoutEffect(() => {
    const layer = menuLayerRef.current;
    const reveal = menuRevealRef.current;
    const backdrop = menuBackdropRef.current;
    const copy = menuCopyRef.current;
    const cta = menuCtaRef.current;

    if (!layer || !reveal || !backdrop || !copy || !cta) return;

    const linkTargets = mobileLinkRefs.current.filter(
      (link): link is HTMLAnchorElement => Boolean(link),
    );

    // Estado inicial cerrado usando coordenadas del botón
    const setClosedState = () => {
      const { x, y } = getMenuOrigin();
      const { closedClip } = getClipValues(x, y);
      gsap.set(layer, { autoAlpha: 0, pointerEvents: "none" });
      gsap.set(reveal, { clipPath: closedClip, webkitClipPath: closedClip });
      gsap.set(backdrop, { autoAlpha: 0 });
      gsap.set([copy, cta, ...linkTargets], { autoAlpha: 0, y: 12 });
    };

    setClosedState();

    // FIX 2: Crear el timeline sin calcular el origen todavía —
    // se recalcula al momento de ejecutar con funciones lazy de GSAP
    const tl = gsap.timeline({
      paused: true,
      defaults: { ease: "power3.out" },
      onComplete: () => {
        mobileLinkRefs.current[0]?.focus();
      },
      onReverseComplete: () => {
        setClosedState();
        menuButtonRef.current?.focus();
      },
    });

    tl.set(layer, { autoAlpha: 1, pointerEvents: "auto" }, 0)
      .fromTo(
        reveal,
        {
          // FIX 3: Usar funciones para que GSAP recalcule el origen
          // en el momento exacto de la ejecución, no al crear el timeline
          clipPath: () => {
            const { x, y } = getMenuOrigin();
            return getClipValues(x, y).closedClip;
          },
          webkitClipPath: () => {
            const { x, y } = getMenuOrigin();
            return getClipValues(x, y).closedClip;
          },
        },
        {
          clipPath: () => {
            const { x, y } = getMenuOrigin();
            return getClipValues(x, y).openClip;
          },
          webkitClipPath: () => {
            const { x, y } = getMenuOrigin();
            return getClipValues(x, y).openClip;
          },
          duration: 0.5,
          ease: "power3.inOut",
        },
        0,
      )
      .fromTo(backdrop, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.24 }, 0)
      .fromTo(copy, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.24 }, 0.1)
      .fromTo(
        linkTargets,
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, stagger: 0.06, duration: 0.24 },
        0.16,
      )
      .fromTo(cta, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.26 }, 0.24);

    timelineRef.current = tl;

    return () => {
      timelineRef.current = null;
      tl.kill();
      gsap.killTweensOf([layer, reveal, backdrop, copy, cta, ...linkTargets]);
    };
  }, []);

  // Animación del ícono hamburguesa y control del timeline
  useEffect(() => {
    const lineTop = lineTopRef.current;
    const lineMiddle = lineMiddleRef.current;
    const lineBottom = lineBottomRef.current;
    const tl = timelineRef.current;

    if (!lineTop || !lineMiddle || !lineBottom) return;

    if (!tl) return;

    if (!hasSyncedInitialMenuStateRef.current) {
      hasSyncedInitialMenuStateRef.current = true;
      gsap.set(lineTop, { y: 0, rotation: 0, transformOrigin: "center center" });
      gsap.set(lineMiddle, { autoAlpha: 1, x: 0 });
      gsap.set(lineBottom, { y: 0, rotation: 0, transformOrigin: "center center" });
      tl.pause(0);
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const iconDuration = reducedMotion ? 0 : 0.24;
    const closeIconOffset = 7.25;

    gsap.to(lineTop, {
      y: isMenuOpen ? closeIconOffset : 0,
      rotation: isMenuOpen ? 45 : 0,
      duration: iconDuration,
      ease: "power2.out",
      transformOrigin: "center center",
    });

    gsap.to(lineMiddle, {
      autoAlpha: isMenuOpen ? 0 : 1,
      x: isMenuOpen ? 8 : 0,
      duration: iconDuration,
      ease: "power2.out",
    });

    gsap.to(lineBottom, {
      y: isMenuOpen ? -closeIconOffset : 0,
      rotation: isMenuOpen ? -45 : 0,
      duration: iconDuration,
      ease: "power2.out",
      transformOrigin: "center center",
    });

    if (reducedMotion) {
      const layer = menuLayerRef.current;
      const reveal = menuRevealRef.current;
      const backdrop = menuBackdropRef.current;
      const copy = menuCopyRef.current;
      const cta = menuCtaRef.current;
      const linkTargets = mobileLinkRefs.current.filter(
        (link): link is HTMLAnchorElement => Boolean(link),
      );

      if (!layer || !reveal || !backdrop || !copy || !cta) return;

      const { x, y } = getMenuOrigin();
      const { closedClip, openClip } = getClipValues(x, y);

      if (isMenuOpen) {
        gsap.set(layer, { autoAlpha: 1, pointerEvents: "auto" });
        gsap.set(reveal, { clipPath: openClip, webkitClipPath: openClip });
        gsap.set(backdrop, { autoAlpha: 1 });
        gsap.set([copy, cta, ...linkTargets], { autoAlpha: 1, y: 0 });
        window.requestAnimationFrame(() => {
          mobileLinkRefs.current[0]?.focus();
        });
      } else {
        gsap.set(layer, { autoAlpha: 0, pointerEvents: "none" });
        gsap.set(reveal, { clipPath: closedClip, webkitClipPath: closedClip });
        gsap.set(backdrop, { autoAlpha: 0 });
        gsap.set([copy, cta, ...linkTargets], { autoAlpha: 0, y: 0 });
        menuButtonRef.current?.focus();
      }

      tl.pause(isMenuOpen ? tl.duration() : 0);
      return;
    }

    if (isMenuOpen) {
      // FIX 4: invalidate() antes de play() para que GSAP recalcule
      // los valores lazy (el origen del clip-path) con las coordenadas actuales
      tl.invalidate().play();
    } else {
      tl.reverse();
    }
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || isMenuOpen
            ? "border-b border-white/10 bg-[rgba(13,13,11,0.93)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between px-6 md:px-12">
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-2"
            aria-label="Volver al inicio"
            onClick={closeMenu}
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

          <ul className="hidden items-center gap-10 md:flex">
            {navbarLinks.map((link) => (
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
          <div className="hidden md:block">
            {/* FIX 5: WhatsApp button solo en desktop — en mobile vive dentro del menú */}
            <WhatsAppButton
              message={whatsappMessages.nav}
              className={`${editorialSquareWhatsAppButtonClassName} px-6`}
              ariaLabel="Escribir por WhatsApp"
            >
              <span>Escribinos</span>
            </WhatsAppButton>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/12 bg-[linear-gradient(145deg,rgba(244,247,246,0.14),rgba(17,24,22,0.88))] shadow-[0_20px_45px_rgba(7,10,9,0.32)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-accent-1)] md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            aria-label={isMenuOpen ? "Cerrar menu de navegacion" : "Abrir menu de navegacion"}
            onClick={() => setIsMenuOpen((previous) => !previous)}
          >
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,249,62,0.22),transparent_58%)]" />
            <span className="sr-only">Menu</span>
            <span className="relative flex h-5 w-5 flex-col items-center justify-center">
              <span
                ref={lineTopRef}
                className="absolute block h-[1.5px] w-5 rounded-full bg-[var(--sand)]"
                style={{ top: 2 }}
              />
              <span
                ref={lineMiddleRef}
                className="absolute block h-[1.5px] w-5 rounded-full bg-[var(--brand-accent-1)]"
              />
              <span
                ref={lineBottomRef}
                className="absolute block h-[1.5px] w-5 rounded-full bg-[var(--sand)]"
                style={{ bottom: 2 }}
              />
            </span>
          </button>
        </nav>
      </header>

      {/*
        FIX 6: El layer del menú va DENTRO del flujo del header con z-index menor,
        para que el clip-path parta desde las coordenadas reales del botón.
        Usamos `fixed` con `inset-0` pero el reveal tiene [will-change:clip-path]
        y el origen se recalcula dinámicamente en cada play().
      */}
      <div
        ref={menuLayerRef}
        id={menuId}
        className="pointer-events-none fixed inset-0 z-40 h-[100dvh] w-full opacity-0 md:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegacion"
      >
        <div
          ref={menuRevealRef}
          className="absolute inset-0 h-[100dvh] overflow-hidden [will-change:clip-path]"
        >
          {/* Backdrop clickeable para cerrar */}
          <button
            ref={menuBackdropRef}
            type="button"
            className="absolute inset-0 w-full cursor-default bg-[rgba(7,10,9,0.72)] backdrop-blur-sm"
            aria-label="Cerrar menu"
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          />

          {/* Capas decorativas */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(11,16,14,0.98),rgba(8,11,10,0.98))]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_10%,rgba(236,249,62,0.18),transparent_28%),radial-gradient(circle_at_18%_86%,rgba(4,139,114,0.2),transparent_34%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-[72px] h-px bg-[linear-gradient(90deg,transparent,rgba(236,249,62,0.7),transparent)]" />

          {/* Contenido del menú — pointer-events-none en el wrapper,
              pointer-events-auto en los elementos interactivos */}
          <div
            className="pointer-events-none relative flex h-[100dvh] flex-col px-6"
            style={{
              paddingTop: "calc(env(safe-area-inset-top, 0px) + 98px)",
              paddingBottom: "max(1.75rem, env(safe-area-inset-bottom, 0px))",
            }}
          >
            {/* Bloque de copy introductorio */}
            <div ref={menuCopyRef} className="max-w-[20rem] space-y-3">

              <h2
                id={`${menuId}-title`}
                className="font-display text-[2.2rem] leading-[0.96] text-[var(--sand)]"
              >
                Tu viaje arranca aca.
              </h2>

            </div>

            <div className="mt-8 flex min-h-0 flex-1 flex-col gap-4">
              {/* Links de navegación */}
              <nav
                className="pointer-events-auto min-h-0 flex-1 overflow-y-auto pr-1"
                aria-labelledby={`${menuId}-title`}
              >
                <ul className="space-y-3" aria-label="Navegacion principal en mobile">
                  {navbarLinks.map((link, index) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        ref={(element) => {
                          mobileLinkRefs.current[index] = element;
                        }}
                        onClick={closeMenu}
                        tabIndex={isMenuOpen ? 0 : -1}
                        className="group flex items-center justify-between rounded-[22px] border border-white/10 bg-white/6 px-4 py-4 transition-all duration-300 hover:border-[rgba(236,249,62,0.4)] hover:bg-white/9 focus-visible:outline-[var(--brand-accent-1)]"
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-[0.68rem] font-semibold tracking-[0.22em] uppercase text-[var(--brand-accent-1)]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-base font-semibold tracking-[0.05em] uppercase text-[var(--sand)]">
                            {link.label}
                          </span>
                        </span>
                        <span className="text-xs tracking-[0.22em] uppercase text-[var(--text-on-dark-secondary)] transition-transform duration-300 group-hover:translate-x-1">
                          Ir
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* FIX 7: CTA de WhatsApp dentro del menú mobile con pointer-events-auto */}
              <div
                ref={menuCtaRef}
                className="pointer-events-auto rounded-[26px] border border-[rgba(4,139,114,0.42)] bg-[linear-gradient(145deg,rgba(4,139,114,0.18),rgba(15,25,21,0.94))] p-4 shadow-[0_24px_70px_rgba(4,139,114,0.2)]"
              >
                <div className="mb-4 space-y-2">
                  <p className="text-[0.68rem] font-semibold tracking-[0.24em] uppercase text-[var(--brand-accent-1)]">
                    WhatsApp directo
                  </p>
                  <p className="text-sm leading-6 text-[var(--text-on-dark-secondary)]">
                    Te asesoramos al toque para elegir excursiones, city tours o traslados sin
                    perder tiempo.
                  </p>
                </div>

                <WhatsAppButton
                  message={whatsappMessages.nav}
                  onClick={closeMenu}
                  ariaLabel="Escribir por WhatsApp desde el menu"
                  className="w-full justify-center bg-[var(--sand)] text-[var(--ink)] hover:border-[var(--brand-accent-1)] hover:bg-[var(--brand-accent-1)] hover:text-[var(--ink)] hover:shadow-[0_0_24px_rgba(236,249,62,0.24)]"
                >
                  <span className="tracking-[0.12em] uppercase">Quiero asesoramiento</span>
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

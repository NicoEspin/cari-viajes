"use client";

import { useEffect } from "react";
import { LANDING_MOTION_REFRESH_EVENT } from "@/lib/landing-motion";

export function LandingMotion() {
  useEffect(() => {
    let mounted = true;
    let dispose: (() => void) | undefined;

    async function init() {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (!mounted) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      const root = document.getElementById("landing-root");

      if (!root) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          desktop: "(min-width: 768px)",
        },
        (context) => {
          const { reduceMotion, desktop } = context.conditions as {
            reduceMotion: boolean;
            desktop: boolean;
          };

          let refreshFrame = 0;
          let lastViewportWidth = window.innerWidth;

          const queryAll = (selector: string) =>
            Array.from(root.querySelectorAll<HTMLElement>(selector));

          const queryOne = (selector: string) => root.querySelector<HTMLElement>(selector);

          const queryWithin = (sectionSelector: string, selector: string) => {
            const section = queryOne(sectionSelector);

            if (!section) {
              return [] as HTMLElement[];
            }

            return Array.from(section.querySelectorAll<HTMLElement>(selector));
          };

          const queueScrollRefresh = () => {
            if (refreshFrame) {
              cancelAnimationFrame(refreshFrame);
            }

            refreshFrame = requestAnimationFrame(() => {
              refreshFrame = requestAnimationFrame(() => {
                refreshFrame = 0;
                ScrollTrigger.refresh();
              });
            });
          };

          const revealElements = (
            elements: HTMLElement[],
            options?: { y?: number; duration?: number; stagger?: number; start?: string },
          ) => {
            if (!elements.length) {
              return;
            }

            elements.forEach((element, index) => {
              gsap.from(element, {
                autoAlpha: 0,
                y: options?.y ?? 28,
                duration: options?.duration ?? 0.8,
                delay: (options?.stagger ?? 0) * index,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: element,
                  start: options?.start ?? "top 88%",
                  once: true,
                },
                clearProps: "opacity,visibility,transform",
              });
            });
          };

          const reveal = (
            sectionSelector: string,
            selector: string,
            options?: { y?: number; duration?: number; stagger?: number; start?: string },
          ) => {
            revealElements(queryWithin(sectionSelector, selector), options);
          };

          const heroEyebrow = queryOne(".hero-eyebrow");
          const heroHeading = queryOne(".hero-heading");
          const heroSupportCopy = queryOne(".hero-support-copy");
          const heroActions = queryAll(".hero-actions > *");
          const heroNote = queryOne(".hero-note");
          const heroPills = queryAll(".hero-pill");
          const heroSequence = [
            heroEyebrow,
            heroHeading,
            heroSupportCopy,
            ...heroActions,
            heroNote,
            ...heroPills,
          ].filter((element): element is HTMLElement => Boolean(element));

          if (reduceMotion) {
            gsap.set(heroSequence, { clearProps: "all" });
            gsap.set(queryAll("[data-reveal]"), { clearProps: "all" });
            return;
          }

          if (heroSequence.length) {
            gsap.set(heroSequence, { autoAlpha: 0, y: 18 });
          }

          const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

          if (heroEyebrow) {
            heroTimeline.to(heroEyebrow, {
              autoAlpha: 1,
              y: 0,
              duration: 0.52,
              clearProps: "opacity,visibility,transform",
            });
          }

          if (heroHeading) {
            heroTimeline.to(
              heroHeading,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.78,
                clearProps: "opacity,visibility,transform",
              },
              heroEyebrow ? "-=0.2" : undefined,
            );
          }

          if (heroSupportCopy) {
            heroTimeline.to(
              heroSupportCopy,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.58,
                clearProps: "opacity,visibility,transform",
              },
              heroHeading || heroEyebrow ? "-=0.42" : undefined,
            );
          }

          if (heroActions.length) {
            heroTimeline.to(
              heroActions,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.52,
                stagger: 0.08,
                clearProps: "opacity,visibility,transform",
              },
              heroSupportCopy || heroHeading || heroEyebrow ? "-=0.3" : undefined,
            );
          }

          if (heroNote) {
            heroTimeline.to(
              heroNote,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.54,
                clearProps: "opacity,visibility,transform",
              },
              heroActions.length || heroSupportCopy || heroHeading || heroEyebrow
                ? "-=0.22"
                : undefined,
            );
          }

          if (heroPills.length) {
            heroTimeline.to(
              heroPills,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.48,
                stagger: 0.06,
                clearProps: "opacity,visibility,transform",
              },
              heroNote || heroActions.length || heroSupportCopy || heroHeading || heroEyebrow
                ? "-=0.34"
                : undefined,
            );
          }

          reveal("#propuesta", "[data-reveal]", { y: 24, stagger: 0.12, start: "top 82%" });
          reveal("#excursiones", "[data-reveal]:not(.experience-card)", {
            y: 24,
            stagger: 0.1,
            start: "top 84%",
          });
          revealElements(queryAll(".experience-card"), {
            y: 32,
            stagger: 0.1,
            start: "top 80%",
          });

          reveal("#galeria", "[data-reveal]:not([data-gallery-marquee-viewport])", {
            y: 24,
            stagger: 0.08,
            start: "top 84%",
          });
          revealElements(queryWithin("#galeria", "[data-gallery-marquee-viewport]"), {
            y: 0,
            duration: 0.72,
            start: "top 84%",
          });

          reveal("#testimonios", "[data-reveal]", {
            y: 24,
            stagger: 0.08,
            start: "top 84%",
          });
          revealElements(queryAll(".metric-card"), { y: 20, stagger: 0.08, start: "top 86%" });

          reveal("#contacto", "[data-reveal]", {
            y: 24,
            stagger: 0.1,
            start: "top 82%",
          });

          reveal("#instagram", "[data-reveal]:not(.insta-item)", {
            y: 20,
            stagger: 0.06,
            start: "top 85%",
          });

          const instagramItems = queryWithin("#instagram", ".insta-item");

          if (instagramItems.length) {
            gsap.from(instagramItems, {
              autoAlpha: 0,
              scale: 0.95,
              y: 16,
              duration: 0.54,
              stagger: 0.05,
              ease: "power2.out",
              scrollTrigger: {
                trigger: "#instagram",
                start: "top 80%",
                once: true,
              },
              clearProps: "opacity,visibility,transform",
            });
          }

          reveal("#faq", "[data-reveal]", { y: 20, stagger: 0.08, start: "top 86%" });

          if (desktop) {
            const heroMedia = queryOne(".hero-media");
            const heroSection = queryOne("#hero");

            if (heroMedia && heroSection) {
              gsap.to(heroMedia, {
                yPercent: 6,
                scale: 1.02,
                ease: "none",
                scrollTrigger: {
                  trigger: heroSection,
                  start: "top top",
                  end: "bottom top",
                  scrub: true,
                },
              });
            }
          }

          queueScrollRefresh();

          const handleResize = () => {
            const nextViewportWidth = window.innerWidth;

            if (Math.abs(nextViewportWidth - lastViewportWidth) >= 2) {
              lastViewportWidth = nextViewportWidth;
            }

            queueScrollRefresh();
          };

          const handleLoad = () => {
            queueScrollRefresh();
          };

          const handleMotionRefresh = () => {
            queueScrollRefresh();
          };

          window.addEventListener("resize", handleResize);
          window.addEventListener("load", handleLoad);
          window.addEventListener(LANDING_MOTION_REFRESH_EVENT, handleMotionRefresh);

          return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("load", handleLoad);
            window.removeEventListener(LANDING_MOTION_REFRESH_EVENT, handleMotionRefresh);

            if (refreshFrame) {
              cancelAnimationFrame(refreshFrame);
            }
          };
        },
      );

      dispose = () => mm.revert();
    }

    void init();

    return () => {
      mounted = false;
      dispose?.();
    };
  }, []);

  return null;
}

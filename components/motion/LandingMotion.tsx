"use client";

import { useEffect } from "react";

export function LandingMotion() {
  useEffect(() => {
    let mounted = true;
    let dispose: (() => void) | undefined;

    async function init() {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (!mounted) return;

      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();
      const heroSequence = [
        ".hero-eyebrow",
        ".hero-heading",
        ".hero-support-copy",
        ".hero-actions > *",
        ".hero-note",
        ".hero-pill",
      ];

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

          const galleryTweens: Array<{ kill: () => void }> = [];

          const reveal = (
            target: string,
            options?: { y?: number; duration?: number; stagger?: number; start?: string },
          ) => {
            gsap.from(target, {
              autoAlpha: 0,
              y: options?.y ?? 28,
              duration: options?.duration ?? 0.8,
              ease: "power3.out",
              stagger: options?.stagger,
              scrollTrigger: {
                trigger: target,
                start: options?.start ?? "top 88%",
                once: true,
              },
              clearProps: "opacity,visibility,transform",
            });
          };

          const setupGalleryMarquees = () => {
            galleryTweens.forEach((tween) => tween.kill());
            galleryTweens.length = 0;

            const tracks = Array.from(
              document.querySelectorAll<HTMLElement>("[data-gallery-marquee]"),
            );

            tracks.forEach((track) => {
              const halfWidth = track.scrollWidth / 2;
              const duration = Number(track.dataset.duration ?? 24);
              const direction = track.dataset.direction === "right" ? "right" : "left";

              if (!halfWidth) {
                return;
              }

              gsap.set(track, { x: direction === "right" ? -halfWidth : 0 });

              galleryTweens.push(
                gsap.to(track, {
                  x: direction === "right" ? 0 : -halfWidth,
                  duration,
                  ease: "none",
                  repeat: -1,
                }),
              );
            });
          };

          if (reduceMotion) {
            gsap.set(heroSequence, { clearProps: "all" });
            return;
          }

          gsap.set(heroSequence, { autoAlpha: 0, y: 18 });

          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

          tl.to(".hero-eyebrow", {
            autoAlpha: 1,
            y: 0,
            duration: 0.52,
            clearProps: "opacity,visibility,transform",
          })
            .to(
              ".hero-heading",
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.78,
                clearProps: "opacity,visibility,transform",
              },
              "-=0.2",
            )
            .to(
              ".hero-support-copy",
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.58,
                clearProps: "opacity,visibility,transform",
              },
              "-=0.42",
            )
            .to(
              ".hero-actions > *",
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.52,
                stagger: 0.08,
                clearProps: "opacity,visibility,transform",
              },
              "-=0.3",
            )
            .to(
              ".hero-note",
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.54,
                clearProps: "opacity,visibility,transform",
              },
              "-=0.22",
            )
            .to(
              ".hero-pill",
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.48,
                stagger: 0.06,
                clearProps: "opacity,visibility,transform",
              },
              "-=0.34",
            );

          reveal("#propuesta [data-reveal]", { y: 24, stagger: 0.12, start: "top 82%" });
          reveal("#excursiones [data-reveal]:not(.experience-card)", {
            y: 24,
            stagger: 0.1,
            start: "top 84%",
          });
          reveal(".experience-card", { y: 32, stagger: 0.1, start: "top 80%" });

          reveal("#galeria [data-reveal]", {
            y: 24,
            stagger: 0.08,
            start: "top 84%",
          });

          const queueGallerySetup = () => {
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                setupGalleryMarquees();
              });
            });
          };

          queueGallerySetup();

          const handleResize = () => {
            queueGallerySetup();
          };

          window.addEventListener("resize", handleResize);

          let resizeObserver: ResizeObserver | undefined;

          if (typeof ResizeObserver !== "undefined") {
            resizeObserver = new ResizeObserver(() => {
              queueGallerySetup();
            });

            document
              .querySelectorAll<HTMLElement>("[data-gallery-marquee]")
              .forEach((track) => resizeObserver?.observe(track));
          }

          reveal("#testimonios [data-reveal]", {
            y: 24,
            stagger: 0.08,
            start: "top 84%",
          });
          reveal(".metric-card", { y: 20, stagger: 0.08, start: "top 86%" });

          reveal("#contacto [data-reveal]", {
            y: 24,
            stagger: 0.1,
            start: "top 82%",
          });

          gsap.from("#contacto .cta-main-button", {
            autoAlpha: 0,
            y: 14,
            scale: 0.96,
            duration: 0.64,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "#contacto",
              start: "top 82%",
              once: true,
            },
            clearProps: "opacity,visibility,transform",
          });

          reveal("#instagram [data-reveal]:not(.insta-item)", {
            y: 20,
            stagger: 0.06,
            start: "top 85%",
          });

          gsap.from(".insta-item", {
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

          reveal("#faq [data-reveal]", { y: 20, stagger: 0.08, start: "top 86%" });

          if (desktop) {
            gsap.to(".hero-media", {
              yPercent: 6,
              scale: 1.02,
              ease: "none",
              scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            });
          }

          return () => {
            window.removeEventListener("resize", handleResize);
            resizeObserver?.disconnect();
            galleryTweens.forEach((tween) => tween.kill());
          };
        },
      );

      dispose = () => mm.revert();
    }

    init();

    return () => {
      mounted = false;
      dispose?.();
    };
  }, []);

  return null;
}

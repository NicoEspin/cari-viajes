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

          if (reduceMotion) return;

          const ctx = gsap.context(() => {
            const reveal = (
              target: string,
              options?: { y?: number; duration?: number; stagger?: number; start?: string },
            ) => {
              gsap.from(target, {
                opacity: 0,
                y: options?.y ?? 28,
                duration: options?.duration ?? 0.72,
                ease: "power2.out",
                stagger: options?.stagger,
                scrollTrigger: {
                  trigger: target,
                  start: options?.start ?? "top 88%",
                  once: true,
                },
              });
            };

            const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

            gsap.set(".hero-actions-desktop > *, .hero-actions-mobile > *", {
              autoAlpha: 1,
            });

            tl.from(".hero-eyebrow", { autoAlpha: 0, y: 10, duration: 0.54 })
              .from(
                ".hero-heading",
                { autoAlpha: 0, y: 22, duration: 0.72 },
                "-=0.18",
              )
              .from(
                ".hero-support-copy",
                { autoAlpha: 0, y: 14, duration: 0.55 },
                "-=0.28",
              )
              .fromTo(
                ".hero-actions-desktop > *, .hero-actions-mobile > *",
                { autoAlpha: 0, y: 12 },
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.5,
                  stagger: 0.08,
                  clearProps: "opacity,visibility,transform",
                },
                "-=0.22",
              )
              .from(
                ".hero-right",
                { autoAlpha: 0, y: 16, duration: 0.58 },
                "-=0.32",
              )
              .from(
                ".hero-microcopy",
                { autoAlpha: 0, duration: 0.34 },
                "-=0.18",
              )
              .from(
                ".stat-cell",
                { autoAlpha: 0, y: 16, duration: 0.4, stagger: 0.06 },
                "-=0.18",
              )
              .from(
                ".scroll-hint",
                { autoAlpha: 0, duration: 0.28 },
                "-=0.1",
              );

            reveal("#propuesta [data-reveal]", { y: 24, stagger: 0.12, start: "top 82%" });
            reveal("#excursiones [data-reveal]:not(.experience-card)", {
              y: 24,
              stagger: 0.1,
              start: "top 84%",
            });
            reveal(".experience-card", { y: 36, stagger: 0.12, start: "top 80%" });

            reveal("#diferenciales [data-reveal]", {
              y: 28,
              stagger: 0.12,
              start: "top 84%",
            });

            gsap.from(".differential-number", {
              opacity: 0,
              y: 80,
              duration: 0.9,
              stagger: 0.14,
              ease: "power2.out",
              scrollTrigger: {
                trigger: "#diferenciales",
                start: "top 75%",
                once: true,
              },
            });

            gsap.from(".differential-icon", {
              opacity: 0,
              scale: 0.84,
              duration: 0.5,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: "#diferenciales",
                start: "top 78%",
                once: true,
              },
            });

            reveal("#testimonios [data-reveal]", {
              y: 24,
              stagger: 0.08,
              start: "top 84%",
            });
            reveal(".metric-card", { y: 24, stagger: 0.08, start: "top 86%" });

            reveal("#contacto [data-reveal]", {
              y: 26,
              stagger: 0.12,
              start: "top 82%",
            });

            gsap.from("#contacto .cta-main-button", {
              opacity: 0,
              y: 16,
              scale: 0.93,
              duration: 0.72,
              ease: "power2.out",
              scrollTrigger: {
                trigger: "#contacto",
                start: "top 82%",
                once: true,
              },
              onComplete: () => {
                gsap.to("#contacto .cta-main-button", {
                  keyframes: [{ scale: 1.03, duration: 0.22 }, { scale: 1, duration: 0.2 }],
                  ease: "power2.inOut",
                });
              },
            });

            reveal("#instagram [data-reveal]:not(.insta-item)", {
              y: 22,
              stagger: 0.06,
              start: "top 85%",
            });

            gsap.from(".insta-item", {
              opacity: 0,
              scale: 0.92,
              y: 18,
              duration: 0.58,
              stagger: 0.06,
              ease: "power2.out",
              scrollTrigger: {
                trigger: "#instagram",
                start: "top 80%",
                once: true,
              },
            });

            reveal("#faq [data-reveal]", { y: 22, stagger: 0.08, start: "top 86%" });

            if (desktop) {
              gsap.to(".hero-media", {
                yPercent: 12,
                scale: 1.04,
                ease: "none",
                scrollTrigger: {
                  trigger: "#hero",
                  start: "top top",
                  end: "bottom top",
                  scrub: true,
                },
              });

              gsap.to(".hero-overlay", {
                yPercent: 18,
                ease: "none",
                scrollTrigger: {
                  trigger: "#hero",
                  start: "top top",
                  end: "bottom top",
                  scrub: true,
                },
              });
            }
          });

          return () => ctx.revert();
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

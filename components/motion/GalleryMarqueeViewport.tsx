"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { requestLandingMotionRefresh } from "@/lib/landing-motion";

export function GalleryMarqueeViewport({
  children,
  className = "",
  dataReveal = false,
  direction,
  duration,
}: {
  children: ReactNode;
  className?: string;
  dataReveal?: boolean;
  direction: "left" | "right";
  duration: number;
}) {
  const viewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let mounted = true;
    let setupFrame = 0;
    let activeTween: { kill: () => void } | null = null;
    let resizeObserver: ResizeObserver | undefined;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const queueSetup = () => {
      if (setupFrame) {
        cancelAnimationFrame(setupFrame);
      }

      setupFrame = requestAnimationFrame(() => {
        setupFrame = requestAnimationFrame(() => {
          setupFrame = 0;
          void setupMarquee();
        });
      });
    };

    const setupMarquee = async () => {
      const viewport = viewportRef.current;

      if (!mounted || !viewport) {
        return;
      }

      const track = viewport.querySelector<HTMLElement>("[data-gallery-track]");

      if (!track) {
        return;
      }

      const { default: gsap } = await import("gsap");

      if (!mounted) {
        return;
      }

      activeTween?.kill();
      activeTween = null;

      if (!viewport.getClientRects().length || viewport.offsetWidth === 0) {
        gsap.set(track, { clearProps: "transform" });
        return;
      }

      const distance = Math.round(track.scrollWidth / 2);

      if (!distance) {
        gsap.set(track, { clearProps: "transform" });
        return;
      }

      const reduceMotion = motionQuery.matches;
      const runtimeDuration = reduceMotion ? duration * 1.75 : duration;

      gsap.set(track, {
        x: direction === "right" ? -distance : 0,
      });

      activeTween = gsap.to(track, {
        x: direction === "right" ? 0 : -distance,
        duration: runtimeDuration,
        ease: "none",
        repeat: -1,
      });

      requestLandingMotionRefresh("gallery-marquee-measured");
    };

    queueSetup();

    const handleLoad = () => {
      queueSetup();
      requestLandingMotionRefresh("gallery-window-load");
    };

    window.addEventListener("load", handleLoad);

    const handleMotionPreferenceChange = () => {
      queueSetup();
    };

    motionQuery.addEventListener("change", handleMotionPreferenceChange);

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        queueSetup();
      });

      if (viewportRef.current) {
        resizeObserver.observe(viewportRef.current);

        const track = viewportRef.current.querySelector<HTMLElement>("[data-gallery-track]");

        if (track) {
          resizeObserver.observe(track);
        }
      }
    }

    return () => {
      mounted = false;
      window.removeEventListener("load", handleLoad);
      motionQuery.removeEventListener("change", handleMotionPreferenceChange);
      resizeObserver?.disconnect();
      activeTween?.kill();

      if (setupFrame) {
        cancelAnimationFrame(setupFrame);
      }
    };
  }, [direction, duration]);

  return (
    <div
      ref={viewportRef}
      className={`gallery-marquee-viewport relative overflow-hidden ${className}`.trim()}
      data-reveal={dataReveal ? true : undefined}
      data-gallery-marquee-viewport={dataReveal ? true : undefined}
      style={{
        maskImage:
          "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      {children}
    </div>
  );
}

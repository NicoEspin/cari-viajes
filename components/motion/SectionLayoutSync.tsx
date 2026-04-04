"use client";

import { useEffect } from "react";
import { requestLandingMotionRefresh } from "@/lib/landing-motion";

type SectionLayoutSyncProps = {
  sectionId: string;
  resize?: boolean;
  toggle?: boolean;
};

export function SectionLayoutSync({
  sectionId,
  resize = false,
  toggle = false,
}: SectionLayoutSyncProps) {
  useEffect(() => {
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    let frame = 0;
    let resizeObserver: ResizeObserver | undefined;

    const queueRefresh = (reason: string) => {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => {
          frame = 0;
          requestLandingMotionRefresh(`${sectionId}:${reason}`);
        });
      });
    };

    const handleToggle = (event: Event) => {
      const target = event.target;

      if (!(target instanceof HTMLDetailsElement)) {
        return;
      }

      queueRefresh("toggle");
    };

    if (toggle) {
      section.addEventListener("toggle", handleToggle, true);
    }

    if (resize && typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        queueRefresh("resize");
      });

      resizeObserver.observe(section);
    }

    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      if (toggle) {
        section.removeEventListener("toggle", handleToggle, true);
      }

      resizeObserver?.disconnect();
    };
  }, [resize, sectionId, toggle]);

  return null;
}

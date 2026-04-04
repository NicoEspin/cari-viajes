"use client";

import type { ReactNode } from "react";
import { useRef } from "react";

type ExcursionGalleryMobileTrackProps = {
  children: ReactNode;
  excursionTitle: string;
};

export function ExcursionGalleryMobileTrack({
  children,
  excursionTitle,
}: ExcursionGalleryMobileTrackProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollToDirection = (direction: "left" | "right") => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const slides = Array.from(track.querySelectorAll<HTMLElement>("[data-gallery-slide]"));

    if (!slides.length) {
      return;
    }

    const currentIndex = slides.reduce((closestIndex, slide, index) => {
      const closestSlide = slides[closestIndex];
      const currentDistance = Math.abs(track.scrollLeft - slide.offsetLeft);
      const closestDistance = Math.abs(track.scrollLeft - closestSlide.offsetLeft);

      return currentDistance < closestDistance ? index : closestIndex;
    }, 0);

    const nextIndex =
      direction === "right"
        ? Math.min(currentIndex + 1, slides.length - 1)
        : Math.max(currentIndex - 1, 0);

    track.scrollTo({
      left: slides[nextIndex].offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div className="absolute left-2 top-1/2 z-10 -translate-y-1/2">
        <MobileChevronButton
          direction="left"
          label={`Ver imagen anterior de ${excursionTitle}`}
          onClick={() => scrollToDirection("left")}
        />
      </div>
      <div className="absolute right-2 top-1/2 z-10 -translate-y-1/2">
        <MobileChevronButton
          direction="right"
          label={`Ver imagen siguiente de ${excursionTitle}`}
          onClick={() => scrollToDirection("right")}
        />
      </div>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
    </div>
  );
}

function MobileChevronButton({
  direction,
  label,
  onClick,
}: {
  direction: "left" | "right";
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-[rgba(8,10,12,0.46)] text-white/86 shadow-[0_10px_30px_rgba(8,10,12,0.18)] backdrop-blur-sm transition-colors hover:bg-[rgba(8,10,12,0.66)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    >
      <span aria-hidden="true" className="text-lg leading-none">
        {direction === "left" ? "<" : ">"}
      </span>
    </button>
  );
}

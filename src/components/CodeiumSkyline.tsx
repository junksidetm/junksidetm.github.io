"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * CodeiumSkyline Component
 * ------------------------
 * Renders the official Codeium 3D isometric skyline SVG ("Codeium - Footer SVG.svg")
 * bridging the landing area's footer (above) and the All Project Showcase (PS, below).
 *
 * Requirements:
 * - Covers the entire width of the device screen (100% full-bleed).
 * - Scales responsively across phones, tablets, and desktops.
 * - Triggers a smooth "scrolling up" entrance animation when the user's viewport enters the section.
 * - Completely unclickable, undraggable, unhoverable, and non-selectable (pure background art).
 * - Leaves ample breathing room and ambient purple flare for it to shine onto the PS section below.
 */
export const CodeiumSkyline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger reveal when the top boundary touches the viewing area
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentEl = containerRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden select-none pointer-events-none z-10 pt-4 sm:pt-6 md:pt-8 pb-6 sm:pb-8 md:pb-12"
      aria-hidden="true"
    >
      {/* Ambient purple spotlight halo allowing the vector skyline to shine into PS below */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-44 sm:h-60 bg-gradient-to-r from-purple-900/25 via-purple-600/30 to-purple-900/25 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      {/* Full-width responsive SVG container with scrolling up entrance transition */}
      <div
        className={`w-full flex items-center justify-center transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) gpu-layer ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-12 sm:translate-y-16 scale-[0.98]"
        }`}
      >
        <img
          src="/Codeium%20-%20Footer%20SVG.svg"
          alt=""
          className="w-full h-auto min-h-[85px] sm:min-h-[130px] md:min-h-[175px] lg:min-h-[210px] max-h-[260px] object-cover sm:object-contain object-bottom pointer-events-none select-none drop-shadow-[0_4px_35px_rgba(168,85,247,0.4)]"
          draggable={false}
        />
      </div>

      {/* Architectural subtle dividing glow line along the boundary */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mt-2 sm:mt-3" />
    </div>
  );
};

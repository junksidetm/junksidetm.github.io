"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * CodeiumSkyline Component
 * ------------------------
 * Renders the official Codeium 3D isometric skyline SVG ("Codeium - Footer SVG.svg")
 * placed directly above the footer section of the page and below the Gboard Patches
 * entry in the Product Showcase (PS) section.
 *
 * Requirements:
 * - Positioned below the Gboard Patches showcase card and directly above the footer section.
 * - The image border (below side) touches the top boundary of the footer section with zero gap.
 * - Covers the entire width of the device screen (100% full-bleed).
 * - Scales responsively across phones, tablets, and desktops.
 * - Triggers a smooth "scrolling up" entrance animation when the viewport arrives at the footer border.
 * - Completely unclickable, undraggable, unhoverable, and non-selectable (pure background art).
 * - Leaves ample space above to shine as an ambient backdrop between Gboard Patches and the footer.
 */
export const CodeiumSkyline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger reveal when approaching the viewing area of the footer border
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -30px 0px",
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
      className="relative w-full overflow-hidden select-none pointer-events-none z-10 pt-5 sm:pt-8 md:pt-12 pb-0 mb-0"
      aria-hidden="true"
    >
      {/* Ambient purple spotlight halo allowing the vector skyline to shine above the footer */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 sm:h-64 bg-gradient-to-t from-purple-700/25 via-purple-900/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" 
      />

      {/* Full-width responsive SVG container with scrolling up entrance transition */}
      <div
        className={`w-full flex items-end justify-center transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) gpu-layer ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 sm:translate-y-16"
        }`}
      >
        <img
          src="/Codeium%20-%20Footer%20SVG.svg"
          alt=""
          className="w-full h-auto min-h-[90px] sm:min-h-[140px] md:min-h-[185px] lg:min-h-[220px] max-h-[280px] object-cover sm:object-contain object-bottom block mb-0 align-bottom pointer-events-none select-none drop-shadow-[0_-4px_35px_rgba(168,85,247,0.4)]"
          draggable={false}
        />
      </div>
    </div>
  );
};

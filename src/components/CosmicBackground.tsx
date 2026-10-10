"use client";

import React, { useEffect, useRef, useState } from "react";

export const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight || 800;
      // Progress from 0 (top of MVA) to 1 (entered PS)
      const progress = Math.min(1, Math.max(0, scrollY / (vh * 0.75)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Dynamic particles: strictly purple in PS, subtle mixed in MVA
    const particleCount = Math.min(Math.floor((width * height) / 16000), 75);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      pulseSpeed: number;
      isRed: boolean;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.45 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.006,
        isRed: Math.random() < 0.25, // Only 25% subtle red in MVA
      });
    }

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Current scroll progress from outside ref or window
      const scrollY = window.scrollY || 0;
      const vh = window.innerHeight || 800;
      const pProgress = Math.min(1, Math.max(0, scrollY / (vh * 0.75)));

      // Connecting energetic lines between close particles
      const maxDistance = 140;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const proximity = 1 - dist / maxDistance;
            
            // As user scrolls, red particles turn purple or extinguish
            const effectiveRedWeight = (1 - pProgress);
            const colorI = particles[i].isRed && effectiveRedWeight > 0.1 
              ? `239, 68, 68` 
              : `168, 85, 247`;
            const colorJ = particles[j].isRed && effectiveRedWeight > 0.1 
              ? `239, 68, 68` 
              : `168, 85, 247`;

            const grad = ctx.createLinearGradient(
              particles[i].x,
              particles[i].y,
              particles[j].x,
              particles[j].y
            );
            grad.addColorStop(0, `rgba(${colorI}, ${proximity * 0.25})`);
            grad.addColorStop(1, `rgba(${colorJ}, ${proximity * 0.25})`);

            ctx.beginPath();
            ctx.strokeStyle = grad;
            ctx.lineWidth = proximity * 1.2;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and animate particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        const currentAlpha = p.alpha + Math.sin(frame * p.pulseSpeed) * 0.2;
        const clampedAlpha = Math.max(0.1, Math.min(0.85, currentAlpha));

        const effectiveRedWeight = (1 - pProgress);
        const particleColor = p.isRed && effectiveRedWeight > 0.1
          ? `239, 68, 68`
          : `168, 85, 247`;

        ctx.beginPath();
        const radGrad = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius * 3.5
        );
        radGrad.addColorStop(0, `rgba(${particleColor}, ${clampedAlpha * 0.8})`);
        radGrad.addColorStop(1, `rgba(${particleColor}, 0)`);
        ctx.fillStyle = radGrad;
        ctx.arc(p.x, p.y, p.radius * 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${clampedAlpha * 0.85})`;
        ctx.arc(p.x, p.y, p.radius * 0.7, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Compute gradual opacity for red spotlight: extinguished as user scrolls into PS
  const redSpotlightOpacity = Math.max(0, 0.22 * (1 - scrollProgress));
  // Purple spotlight remains constant or deepens into PS
  const purpleSpotlightOpacity = 0.32 + 0.12 * scrollProgress;
  // Squares pattern opacity: 30% lines as requested, fades in as user enters PS
  const squarePatternOpacity = Math.min(1, scrollProgress * 1.5);

  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
      {/* Deep Obsidian Background */}
      <div className="absolute inset-0 bg-[#06070a]" />

      {/* Atmospheric Flare Spotlight 1: Subtle Purple (Always active, deepens in PS) */}
      <div
        className="absolute -top-36 -left-36 w-[42rem] h-[42rem] rounded-full blur-[140px] pointer-events-none animate-pulse"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, #6d28d9 45%, #3b0764 75%, transparent 100%)",
          opacity: purpleSpotlightOpacity,
          animationDuration: "8s",
          transition: "opacity 0.4s ease-out",
        }}
      />

      {/* Atmospheric Flare Spotlight 2: Subtle Red (MVA only; gradually EXTINGUISHED in PS) */}
      <div
        className="absolute top-1/4 -right-32 w-[40rem] h-[40rem] rounded-full blur-[160px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #ef4444 0%, #b91c1c 45%, #7f1d1d 75%, transparent 100%)",
          opacity: redSpotlightOpacity,
          transition: "opacity 0.4s ease-out",
        }}
      />

      {/* Deep Bottom Flare: Pure Violet/Purple for PS */}
      <div
        className="absolute -bottom-48 left-1/4 w-[48rem] h-[48rem] rounded-full blur-[160px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #a855f7 0%, #581c87 50%, #1e1b4b 80%, transparent 100%)",
          opacity: 0.28 + 0.18 * scrollProgress,
          transition: "opacity 0.4s ease-out",
        }}
      />

      {/* =====================================================================
          PS SECTION SQUARES PATTERN: 30% Opacity Lines with Animated Squares
      ===================================================================== */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{ opacity: squarePatternOpacity }}
      >
        {/* Animated Geometric Squares Grid with exactly 30% opacity lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="ps-purple-squares-grid"
              width="52"
              height="52"
              patternUnits="userSpaceOnUse"
            >
              {/* Lines squares opacity at exactly 30% (0.30) */}
              <rect
                x="0"
                y="0"
                width="52"
                height="52"
                fill="none"
                stroke="rgba(168, 85, 247, 0.30)"
                strokeWidth="1"
              />
              <circle
                cx="52"
                cy="52"
                r="1.2"
                fill="rgba(192, 132, 252, 0.30)"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ps-purple-squares-grid)" />
        </svg>

        {/* Floating Animated Geometric Purple Squares (Cool animations) */}
        <div className="absolute top-1/3 left-10 w-24 h-24 border border-purple-500/30 rounded-2xl rotate-12 animate-float pointer-events-none" />
        <div 
          className="absolute top-1/2 right-12 w-32 h-32 border border-purple-400/30 rounded-3xl -rotate-12 pointer-events-none animate-float"
          style={{ animationDelay: "2s", animationDuration: "8s" }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-20 h-20 border border-purple-400/30 rounded-xl rotate-45 pointer-events-none animate-float"
          style={{ animationDelay: "4s", animationDuration: "7s" }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-28 h-28 border border-purple-500/30 rounded-2xl rotate-6 pointer-events-none animate-float"
          style={{ animationDelay: "1s", animationDuration: "9s" }}
        />
      </div>

      {/* Live Particle Constellation Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

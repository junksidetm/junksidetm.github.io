"use client";

import React, { useEffect, useRef } from "react";

export const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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

    // Particle constellation configuration
    const particleCount = Math.min(Math.floor((width * height) / 14000), 85);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
      pulseSpeed: number;
    }> = [];

    const colors = [
      "147, 51, 234",  // Electric Purple
      "239, 68, 68",   // Crimson Red
      "168, 85, 247",  // Vivid Violet
      "244, 63, 94",   // Ruby Rose
      "192, 132, 252", // Bright Lavender
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.65,
        vy: (Math.random() - 0.5) * 0.65,
        radius: Math.random() * 2.5 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.35,
        pulseSpeed: Math.random() * 0.025 + 0.008,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Connecting energetic lines between close particles
      const maxDistance = 150;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const proximity = 1 - dist / maxDistance;
            const grad = ctx.createLinearGradient(
              particles[i].x,
              particles[i].y,
              particles[j].x,
              particles[j].y
            );
            grad.addColorStop(0, `rgba(${particles[i].color}, ${proximity * 0.35})`);
            grad.addColorStop(1, `rgba(${particles[j].color}, ${proximity * 0.35})`);

            ctx.beginPath();
            ctx.strokeStyle = grad;
            ctx.lineWidth = proximity * 1.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and animate particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Motion physics
        p.x += p.vx;
        p.y += p.vy;

        // Interactive mouse gravity
        const mdx = mouseX - p.x;
        const mdy = mouseY - p.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 160) {
          const force = (1 - mdist / 160) * 1.2;
          p.x -= (mdx / mdist) * force;
          p.y -= (mdy / mdist) * force;
        }

        // Screen edge wrapping
        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        // Dynamic pulsing alpha
        const currentAlpha = p.alpha + Math.sin(frame * p.pulseSpeed) * 0.3;
        const clampedAlpha = Math.max(0.15, Math.min(1, currentAlpha));

        // Outer glow halo
        ctx.beginPath();
        const radGrad = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius * 4.5
        );
        radGrad.addColorStop(0, `rgba(${p.color}, ${clampedAlpha * 0.9})`);
        radGrad.addColorStop(1, `rgba(${p.color}, 0)`);
        ctx.fillStyle = radGrad;
        ctx.arc(p.x, p.y, p.radius * 4.5, 0, Math.PI * 2);
        ctx.fill();

        // Intense core dot
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${clampedAlpha})`;
        ctx.arc(p.x, p.y, p.radius * 0.9, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
      {/* Deep Obsidian Midnight Canvas */}
      <div className="absolute inset-0 bg-[#06070a]" />

      {/* Vibrant Breathing Flare Spotlights (Purple & Crimson Red) */}
      <div
        className="absolute -top-36 -left-36 w-[42rem] h-[42rem] rounded-full blur-[140px] opacity-60 pointer-events-none animate-pulse"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, #6d28d9 45%, #3b0764 75%, transparent 100%)",
          animationDuration: "7s",
        }}
      />
      <div
        className="absolute top-1/4 -right-32 w-[44rem] h-[44rem] rounded-full blur-[150px] opacity-50 pointer-events-none animate-pulse"
        style={{
          background: "radial-gradient(circle, #ef4444 0%, #b91c1c 45%, #7f1d1d 75%, transparent 100%)",
          animationDuration: "9s",
        }}
      />
      <div
        className="absolute -bottom-48 left-1/4 w-[48rem] h-[48rem] rounded-full blur-[160px] opacity-45 pointer-events-none animate-pulse"
        style={{
          background: "radial-gradient(circle, #a855f7 0%, #4c1d95 50%, #1e1b4b 80%, transparent 100%)",
          animationDuration: "11s",
        }}
      />

      {/* Subtle Cybernetic Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Live Constellation Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

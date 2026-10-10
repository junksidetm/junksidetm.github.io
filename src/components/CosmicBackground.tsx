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

    // Particle system configuration
    const particleCount = Math.min(Math.floor((width * height) / 18000), 75);
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
      "139, 92, 246",  // Electric Purple
      "239, 68, 68",   // Crimson Red
      "168, 85, 247",  // Vivid Violet
      "244, 63, 94",   // Ruby Rose
      "217, 70, 239",  // Neon Fuchsia
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
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

      // Render connecting lines
      const maxDistance = 140;
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
            grad.addColorStop(0, `rgba(${particles[i].color}, ${proximity * 0.2})`);
            grad.addColorStop(1, `rgba(${particles[j].color}, ${proximity * 0.2})`);

            ctx.beginPath();
            ctx.strokeStyle = grad;
            ctx.lineWidth = proximity * 1.2;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Motion update
        p.x += p.vx;
        p.y += p.vy;

        // Mouse gentle repulsion/attraction
        const mdx = mouseX - p.x;
        const mdy = mouseY - p.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 150) {
          const force = (1 - mdist / 150) * 0.8;
          p.x -= (mdx / mdist) * force;
          p.y -= (mdy / mdist) * force;
        }

        // Boundary wrap
        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        // Pulse alpha
        const currentAlpha =
          p.alpha + Math.sin(frame * p.pulseSpeed) * 0.25;
        const clampedAlpha = Math.max(0.1, Math.min(1, currentAlpha));

        // Draw particle glow
        ctx.beginPath();
        const radGrad = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius * 3.5
        );
        radGrad.addColorStop(0, `rgba(${p.color}, ${clampedAlpha})`);
        radGrad.addColorStop(1, `rgba(${p.color}, 0)`);
        ctx.fillStyle = radGrad;
        ctx.arc(p.x, p.y, p.radius * 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Draw particle core
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${clampedAlpha * 0.9})`;
        ctx.arc(p.x, p.y, p.radius * 0.8, 0, Math.PI * 2);
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
      {/* Deep Obsidian Background */}
      <div className="absolute inset-0 bg-[#06070a]" />

      {/* Atmospheric Flare Spotlights */}
      <div
        className="absolute -top-32 -left-32 w-[34rem] h-[34rem] rounded-full blur-[130px] opacity-45 pointer-events-none animate-pulse"
        style={{
          background: "radial-gradient(circle, #7c3aed 0%, #4c1d95 60%, transparent 100%)",
          animationDuration: "8s",
        }}
      />
      <div
        className="absolute top-1/4 -right-28 w-[38rem] h-[38rem] rounded-full blur-[150px] opacity-35 pointer-events-none animate-pulse"
        style={{
          background: "radial-gradient(circle, #dc2626 0%, #881337 60%, transparent 100%)",
          animationDuration: "10s",
        }}
      />
      <div
        className="absolute -bottom-40 left-1/3 w-[40rem] h-[40rem] rounded-full blur-[160px] opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #9333ea 0%, #3b0764 70%, transparent 100%)",
        }}
      />

      {/* Cybernetic Grid Matrix Lines */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Live Particle & Constellation Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

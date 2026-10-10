"use client";

import React from "react";
import { 
  Github, 
  ChevronDown, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink,
  Smartphone
} from "lucide-react";

interface HeroProps {
  onDeepDive: () => void;
  totalProjects: number;
}

export const Hero: React.FC<HeroProps> = ({ onDeepDive, totalProjects }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between px-4 sm:px-6 lg:px-12 py-6 sm:py-8 z-10 select-none">
      {/* =========================================================================
          TOP HEADER BAR: Logo Banner at Top-Left & Quick Actions at Top-Right
      ========================================================================= */}
      <header className="w-full flex items-center justify-between gap-4 pt-2">
        {/* Brand Banner at Top-Left */}
        <div className="flex items-center gap-3">
          <a 
            href="#top" 
            className="group flex items-center transition-transform duration-300 hover:scale-[1.02]"
            aria-label="Codeium by Darkside Studio"
          >
            {/* Full Logo Banner - SVG Dark Mode */}
            <img
              src="/Codeium/Codeium Banner/SVG/Codeium - Banner Transparent White.svg"
              alt="Codeium Banner"
              className="h-9 sm:h-11 md:h-12 w-auto object-contain drop-shadow-[0_2px_14px_rgba(139,92,246,0.35)]"
            />
          </a>
        </div>

        {/* Top-Right Quick Links & Status Pill */}
        <div className="flex items-center gap-3">
          {/* Ecosystem Live Badge */}
          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12141f]/80 border border-white/10 text-xs font-mono text-slate-300 backdrop-blur-md shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 font-semibold">ECOSYSTEM ACTIVE</span>
            <span className="text-white/20">•</span>
            <span className="text-purple-300 font-semibold">{totalProjects} Repositories</span>
          </div>

          {/* GitHub Header Button */}
          <a
            href="https://github.com/junksidetm/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-purple-500/50 text-white text-xs sm:text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/20 active:scale-95"
          >
            <Github size={16} className="text-purple-400 group-hover:text-purple-300" />
            <span>GitHub</span>
            <ExternalLink size={12} className="text-slate-400" />
          </a>
        </div>
      </header>

      {/* =========================================================================
          MIDDLE HERO CORE: Developer Circular Photo, Aesthetic Lines, Brand Hero
      ========================================================================= */}
      <div className="my-auto py-8 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Developer Photo in Glowing Circular Frame */}
        <div className="relative mb-6 sm:mb-8 group">
          {/* Rotating Flare Halo Ring (Purple & Crimson Red) */}
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-purple-600 via-rose-500 to-red-600 opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-700 animate-spin-slow pointer-events-none" />
          
          {/* Outer Border Frame */}
          <div className="relative p-1 rounded-full bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.35)]">
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden bg-[#0c0d14] relative">
              <img
                src="/developer.png"
                alt="Abhijeet Yadav (Codeium / Darkside Studio)"
                className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          </div>

          {/* Small Brand Logo Badge Overlay on Frame */}
          <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-[#0a0c14] border border-purple-500/40 shadow-lg shadow-purple-950/60 flex items-center justify-center">
            <img
              src="/Codeium/Codeium Logo/SVG/Codium - Logo Black.svg"
              alt="Codeium Badge"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain invert"
            />
          </div>
        </div>

        {/* Brand Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-950/60 via-[#131522] to-red-950/60 border border-purple-500/30 text-xs sm:text-sm font-mono text-purple-200 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.2)]">
          <Sparkles size={14} className="text-purple-400" />
          <span className="font-semibold tracking-wide uppercase">Codeium</span>
          <span className="text-white/30">•</span>
          <span className="text-rose-300 font-medium">A Part of Darkside Studio</span>
        </div>

        {/* Cool / Aesthetic Lines Headline in Middle */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] sm:leading-[1.15] mb-5">
          Engineering the Edge of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-rose-400 to-red-500 drop-shadow-[0_2px_18px_rgba(239,68,68,0.35)]">
            Native Systems
          </span>
          <br className="hidden sm:block" />
          {" "}& Pure Visual Craft.
        </h1>

        {/* Aesthetic Subtitle */}
        <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed mb-7 sm:mb-8 text-balance">
          Showcasing high-craft Android Jetpack Compose & Flutter architectures, 
          low-latency WebAssembly engines, and hardened system automation suites. 
          Architected for uncompromising speed, verified cryptographic integrity, and zero latency.
        </p>

        {/* Aesthetic Telemetry Badges Matrix */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 text-xs font-mono">
          <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-purple-300 flex items-center gap-1.5 backdrop-blur-sm">
            <Cpu size={13} className="text-purple-400" />
            120 FPS NATIVE COMPOSE
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-rose-300 flex items-center gap-1.5 backdrop-blur-sm">
            <Sparkles size={13} className="text-rose-400" />
            MATERIAL 3 EXPRESSIVE
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-cyan-300 flex items-center gap-1.5 backdrop-blur-sm">
            <ShieldCheck size={13} className="text-cyan-400" />
            VERIFIED SSH SIGNED
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-emerald-300 flex items-center gap-1.5 backdrop-blur-sm">
            <Smartphone size={13} className="text-emerald-400" />
            OFFLINE-FIRST ROOM DB
          </span>
        </div>

        {/* Prominent Action Area (GitHub Link & Source Access) */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/junksidetm/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-rose-600 to-red-600 hover:from-purple-500 hover:via-rose-500 hover:to-red-500 text-white font-semibold text-sm sm:text-base shadow-[0_0_35px_rgba(139,92,246,0.45)] hover:shadow-[0_0_50px_rgba(239,68,68,0.55)] transition-all duration-300 active:scale-95"
          >
            <Github size={18} className="transition-transform group-hover:scale-110" />
            <span>View Source Code</span>
            <ExternalLink size={14} className="opacity-80 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Mirrors Quick Badges */}
          <div className="flex items-center gap-2">
            <a
              href="https://codeberg.org/mrdarksidetm"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors"
              title="Official Codeberg Mirror"
            >
              Codeberg Mirror
            </a>
            <a
              href="https://gitlab.com/mrdarksidetm"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors"
              title="Official GitLab Mirror"
            >
              GitLab Mirror
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM VIEWING AREA: "Let's Deep Dive" Button
      ========================================================================= */}
      <footer className="w-full flex flex-col items-center justify-center pb-2 pt-4">
        <button
          onClick={onDeepDive}
          className="group flex flex-col items-center gap-2 text-slate-300 hover:text-white transition-all duration-300 focus:outline-none"
          aria-label="Let's Deep Dive to view all projects"
        >
          {/* Glowing Pill Button */}
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#121422]/90 hover:bg-[#181a2e] border border-purple-500/30 hover:border-rose-500/60 shadow-[0_0_25px_rgba(139,92,246,0.25)] hover:shadow-[0_0_35px_rgba(239,68,68,0.4)] text-xs sm:text-sm font-semibold tracking-wide uppercase font-mono transition-all duration-300 group-hover:-translate-y-0.5">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-rose-300 font-bold">
              Let&apos;s Deep Dive
            </span>
            <ChevronDown size={16} className="text-rose-400 group-hover:translate-y-1 transition-transform duration-300 animate-bounce" />
          </div>

          {/* Subtext instruction */}
          <span className="text-[11px] font-mono text-slate-400 opacity-80 group-hover:opacity-100 transition-opacity">
            Explore apps, software &amp; curated toolchains
          </span>
        </button>
      </footer>
    </section>
  );
};

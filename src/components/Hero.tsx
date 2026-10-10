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
    <section className="relative w-full min-h-screen flex flex-col justify-between px-4 sm:px-8 lg:px-14 py-6 sm:py-8 z-10 select-none">
      {/* =========================================================================
          TOP HEADER: Brand Logo Banner at Top-Left & Subtle Ecosystem Status at Right
      ========================================================================= */}
      <header className="w-full flex items-center justify-between gap-4 pt-1 sm:pt-2">
        {/* Full Logo Banner at Top-Left */}
        <div className="flex items-center">
          <a 
            href="#top" 
            className="group flex items-center transition-transform duration-300 hover:scale-[1.02]"
            aria-label="Codeium by Darkside Studio"
          >
            <img
              src="/codeium-banner.svg"
              alt="Codeium Banner"
              className="h-9 sm:h-11 md:h-13 w-auto object-contain drop-shadow-[0_2px_16px_rgba(139,92,246,0.4)]"
            />
          </a>
        </div>

        {/* Right Status Badge */}
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121422]/90 border border-white/10 text-xs font-mono text-slate-300 backdrop-blur-md shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 font-semibold hidden sm:inline">ECOSYSTEM ACTIVE</span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span className="text-purple-300 font-semibold">{totalProjects} Repositories</span>
          </div>
        </div>
      </header>

      {/* =========================================================================
          MIDDLE HERO: Circular Developer Photo, Aesthetic Lines, GitHub Button
      ========================================================================= */}
      <div className="my-auto py-6 sm:py-8 flex flex-col items-center text-center max-w-4xl mx-auto w-full">
        {/* Developer Photo in Glowing Circular Frame */}
        <div className="relative mb-6 sm:mb-7 group">
          {/* Animated Spinning Purple-Red Flare Halo */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-purple-600 via-rose-500 to-red-600 opacity-80 blur-md group-hover:opacity-100 transition-opacity duration-700 animate-spin-slow pointer-events-none" />
          
          {/* Outer Glass Ring */}
          <div className="relative p-1.5 rounded-full bg-gradient-to-b from-white/25 to-white/5 backdrop-blur-2xl border border-white/15 shadow-[0_0_55px_rgba(139,92,246,0.45)]">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-[#0a0c14] relative">
              <img
                src="/developer.png"
                alt="Abhijeet Yadav (Codeium / Darkside Studio)"
                className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          </div>

          {/* Codeium Square Logo Badge on Frame Corner */}
          <div className="absolute bottom-0 right-0 p-1.5 rounded-full bg-[#090b14] border border-purple-500/50 shadow-xl shadow-purple-950/80 flex items-center justify-center">
            <img
              src="/codeium-logo.svg"
              alt="Codeium Badge"
              className="w-6 h-6 sm:w-7 sm:h-7 object-contain invert"
            />
          </div>
        </div>

        {/* Brand Identity Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-950/70 via-[#131524] to-red-950/70 border border-purple-500/35 text-xs sm:text-sm font-mono text-purple-200 mb-5 backdrop-blur-md shadow-[0_0_24px_rgba(139,92,246,0.25)]">
          <Sparkles size={14} className="text-purple-400" />
          <span className="font-bold tracking-wider uppercase text-white">Codeium</span>
          <span className="text-white/30">•</span>
          <span className="text-rose-300 font-medium">A Part of Darkside Studio</span>
        </div>

        {/* Cool / Aesthetic Lines: High-Impact Typography */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] sm:leading-[1.14] mb-4">
          Architecting High-Performance{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-rose-400 to-red-500 drop-shadow-[0_2px_22px_rgba(239,68,68,0.4)]">
            Native Systems
          </span>
          <br className="hidden sm:block" />
          {" "}&amp; Pure Visual Craft.
        </h1>

        {/* Aesthetic Subtitle */}
        <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed mb-6 text-balance">
          Showcasing high-craft Android Jetpack Compose &amp; Flutter architectures, 
          low-latency WebAssembly runtimes, and precision automation suites. 
          Engineered for uncompromising speed, verified cryptographic integrity, and zero latency.
        </p>

        {/* Aesthetic Telemetry Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-7 text-xs font-mono">
          <span className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-purple-300 flex items-center gap-1.5 backdrop-blur-sm">
            <Cpu size={13} className="text-purple-400" />
            120 FPS NATIVE COMPOSE
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-rose-300 flex items-center gap-1.5 backdrop-blur-sm">
            <Sparkles size={13} className="text-rose-400" />
            MATERIAL 3 EXPRESSIVE
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-cyan-300 flex items-center gap-1.5 backdrop-blur-sm">
            <ShieldCheck size={13} className="text-cyan-400" />
            VERIFIED SSH SIGNED
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-emerald-300 flex items-center gap-1.5 backdrop-blur-sm">
            <Smartphone size={13} className="text-emerald-400" />
            OFFLINE-FIRST ROOM DB
          </span>
        </div>

        {/* Prominent Action Button: GitHub / View Source Code */}
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="https://github.com/junksidetm/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-rose-600 to-red-600 hover:from-purple-500 hover:via-rose-500 hover:to-red-500 text-white font-semibold text-sm sm:text-base shadow-[0_0_35px_rgba(139,92,246,0.45)] hover:shadow-[0_0_55px_rgba(239,68,68,0.6)] transition-all duration-300 active:scale-95"
          >
            <Github size={19} className="transition-transform group-hover:scale-110" />
            <span>View Source Code</span>
            <ExternalLink size={14} className="opacity-80 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Quick Mirror Badges */}
          <a
            href="https://codeberg.org/mrdarksidetm"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors"
          >
            Codeberg
          </a>
          <a
            href="https://gitlab.com/mrdarksidetm"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors"
          >
            GitLab
          </a>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM OF VIEWING AREA: "Let's Deep Dive" Button
      ========================================================================= */}
      <footer className="w-full flex flex-col items-center justify-center pb-2 pt-2">
        <button
          onClick={onDeepDive}
          className="group flex flex-col items-center gap-2 text-slate-300 hover:text-white transition-all duration-300 focus:outline-none cursor-pointer"
          aria-label="Let's Deep Dive to view all projects"
        >
          {/* Glowing Deep Dive Button */}
          <div className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#121424]/95 hover:bg-[#191c32] border border-purple-500/40 hover:border-rose-500/70 shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:shadow-[0_0_45px_rgba(239,68,68,0.5)] text-xs sm:text-sm font-bold tracking-wider uppercase font-mono transition-all duration-300 group-hover:-translate-y-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-rose-300">
              Let&apos;s Deep Dive
            </span>
            <ChevronDown size={18} className="text-rose-400 group-hover:translate-y-1 transition-transform duration-300 animate-bounce" />
          </div>

          <span className="text-[11px] font-mono text-slate-400 opacity-80 group-hover:opacity-100 transition-opacity">
            Click to explore apps, software &amp; curated toolchains
          </span>
        </button>
      </footer>
    </section>
  );
};

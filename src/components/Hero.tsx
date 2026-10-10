"use client";

import React from "react";
import { Github, ChevronDown, Sparkles, ExternalLink } from "lucide-react";

interface HeroProps {
  onDeepDive: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDeepDive }) => {
  return (
    <section className="relative w-full min-h-[100dvh] h-[100dvh] flex flex-col justify-between px-4 sm:px-8 lg:px-14 py-4 sm:py-6 md:py-8 z-10 select-none overflow-hidden">
      {/* =========================================================================
          TOP HEADER: Brand Logo Banner at Left & "(GitHub) GitHub" at Right
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
              className="h-8 sm:h-10 md:h-12 w-auto object-contain drop-shadow-[0_2px_14px_rgba(139,92,246,0.35)]"
            />
          </a>
        </div>

        {/* Top-Right: (GitHub Logo) GitHub Button (Replaced Ecosystem Active) */}
        <div className="flex items-center">
          <a
            href="https://github.com/junksidetm/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-purple-500/50 text-white text-xs sm:text-sm font-medium transition-all duration-300 shadow-md hover:shadow-purple-500/20 active:scale-95"
            aria-label="Visit GitHub Profile"
          >
            <Github size={16} className="text-purple-400 group-hover:text-purple-300" />
            <span className="font-semibold">GitHub</span>
            <ExternalLink size={12} className="text-slate-400 hidden sm:inline" />
          </a>
        </div>
      </header>

      {/* =========================================================================
          MIDDLE HERO: Developer Photo, Brand Tag, "Building the future from Chaos to Order"
      ========================================================================= */}
      <div className="my-auto py-2 sm:py-4 md:py-6 flex flex-col items-center text-center max-w-3xl lg:max-w-4xl mx-auto w-full">
        {/* Developer Photo in Subtle Glowing Circular Frame */}
        <div className="relative mb-4 sm:mb-6 group">
          {/* Subtle Rotating Halo Ring (Subtle Purple & Soft Crimson) */}
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-purple-600/70 via-rose-500/50 to-purple-600/70 opacity-60 blur-md group-hover:opacity-90 transition-opacity duration-700 animate-spin-slow pointer-events-none" />
          
          {/* Outer Glass Ring */}
          <div className="relative p-1 rounded-full bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.3)]">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-38 md:h-38 lg:w-44 lg:h-44 rounded-full overflow-hidden bg-[#0a0c14] relative">
              <img
                src="/developer.png"
                alt="Abhijeet Yadav"
                className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          </div>

          {/* Small Codeium Square Badge on Corner */}
          <div className="absolute bottom-0 right-0 p-1 sm:p-1.5 rounded-full bg-[#080a12] border border-purple-500/40 shadow-lg shadow-purple-950/70 flex items-center justify-center">
            <img
              src="/codeium-logo.svg"
              alt="Codeium Badge"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain invert"
            />
          </div>
        </div>

        {/* Brand Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-[11px] sm:text-xs font-mono text-purple-200 mb-3 sm:mb-4 backdrop-blur-md shadow-[0_0_16px_rgba(139,92,246,0.2)]">
          <Sparkles size={13} className="text-purple-400" />
          <span className="font-bold tracking-wider uppercase text-white">Codeium</span>
          <span className="text-white/30">•</span>
          <span className="text-purple-300 font-medium">Darkside Studio</span>
        </div>

        {/* Main Title: "Building the future from Chaos to Order" */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-3 sm:mb-4">
          Building the future from{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-rose-300 to-purple-500 drop-shadow-[0_2px_20px_rgba(168,85,247,0.35)]">
            Chaos to Order
          </span>
        </h1>

        {/* Professional Subline: Writing chaos, making mods, until order is served */}
        <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-xl md:max-w-2xl font-normal leading-relaxed text-balance px-2">
          Decomposing complex architectures, writing through the raw chaos, crafting mods, and refining low-level systems—relentlessly shaping code until seamless, reliable order emerges and is served directly to you. From your friends over the internet.
        </p>
      </div>

      {/* =========================================================================
          BOTTOM OF LANDING AREA: "Let's Deep Dive" Button (The Primary Element)
      ========================================================================= */}
      <footer className="w-full flex flex-col items-center justify-center pb-3 sm:pb-6 md:pb-8 pt-1">
        <button
          onClick={onDeepDive}
          className="group flex flex-col items-center gap-2 text-slate-300 hover:text-white transition-all duration-300 focus:outline-none cursor-pointer active:scale-95"
          aria-label="Let's Deep Dive to explore projects"
        >
          {/* Main Glowing Deep Dive Button */}
          <div className="inline-flex items-center gap-2.5 sm:gap-3 px-8 sm:px-10 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-purple-900/90 via-[#181530] to-purple-900/90 hover:from-purple-800 hover:to-purple-700 border border-purple-400/50 hover:border-purple-300 shadow-[0_0_35px_rgba(139,92,246,0.45)] hover:shadow-[0_0_55px_rgba(168,85,247,0.7)] text-xs sm:text-sm font-bold tracking-wider uppercase font-mono transition-all duration-300 group-hover:-translate-y-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-200 text-sm sm:text-base font-extrabold tracking-widest">
              Let&apos;s Deep Dive
            </span>
            <ChevronDown size={20} className="text-purple-300 group-hover:translate-y-1 transition-transform duration-300 animate-bounce" />
          </div>

          {/* Subtext instruction */}
          <span className="text-[10px] sm:text-[11px] font-mono text-purple-300/80 group-hover:text-purple-200 transition-colors">
            Click to explore apps, software &amp; curated toolchains
          </span>
        </button>
      </footer>
    </section>
  );
};

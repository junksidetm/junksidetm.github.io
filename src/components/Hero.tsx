"use client";

import React from "react";
import { Github, ChevronDown, Sparkles, ExternalLink } from "lucide-react";

interface HeroProps {
  onDeepDive: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDeepDive }) => {
  return (
    <section className="relative w-full min-h-[100dvh] h-[100dvh] flex flex-col justify-between px-4 sm:px-8 lg:px-14 py-3 sm:py-5 md:py-8 z-10 select-none overflow-hidden">
      {/* =========================================================================
          TOP HEADER: (GitHub logo) GitHub at Top-Left & Brand Banner at Top-Right
      ========================================================================= */}
      <header className="w-full flex items-center justify-between gap-4 pt-1 sm:pt-2">
        {/* Top-Left: (GitHub Logo) GitHub Button (Replaced Ecosystem Active) */}
        <div className="flex items-center">
          <a
            href="https://github.com/junksidetm/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-purple-500/50 text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-purple-500/20 active:scale-95"
            aria-label="Visit GitHub Profile"
          >
            <Github size={16} className="text-purple-400 group-hover:text-purple-300 transition-colors" />
            <span className="font-semibold">GitHub</span>
            <ExternalLink size={12} className="text-slate-400 hidden sm:inline" />
          </a>
        </div>

        {/* Top-Right: Codeium Brand Banner */}
        <div className="flex items-center">
          <a href="#top" className="flex items-center group" aria-label="Codeium">
            <img
              src="/codeium-banner.svg"
              alt="Codeium Banner"
              className="h-7 sm:h-9 md:h-11 w-auto object-contain drop-shadow-[0_2px_14px_rgba(139,92,246,0.3)] transition-transform group-hover:scale-[1.02]"
            />
          </a>
        </div>
      </header>

      {/* =========================================================================
          MIDDLE HERO: Developer Photo, Tag, "Building the future from Chaos to Order"
      ========================================================================= */}
      <div className="my-auto py-2 sm:py-4 md:py-6 flex flex-col items-center text-center max-w-3xl lg:max-w-4xl mx-auto w-full">
        {/* Developer Photo in Subtle Glowing Circular Frame */}
        <div className="relative mb-3 sm:mb-5 group">
          {/* Subtle Rotating Halo Ring */}
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-purple-600/40 via-rose-500/25 to-purple-600/40 opacity-60 blur-md group-hover:opacity-90 transition-opacity duration-700 animate-spin-slow pointer-events-none" />
          
          {/* Outer Glass Ring */}
          <div className="relative p-1 rounded-full bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_35px_rgba(139,92,246,0.25)]">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-38 md:h-38 lg:w-44 lg:h-44 rounded-full overflow-hidden bg-[#0a0c14] relative">
              <img
                src="/developer.png"
                alt="Abhijeet Yadav"
                className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          </div>

          {/* Small Codeium Badge on Corner */}
          <div className="absolute bottom-0 right-0 p-1 sm:p-1.5 rounded-full bg-[#080a12] border border-purple-500/40 shadow-lg shadow-purple-950/70 flex items-center justify-center">
            <img
              src="/codeium-logo.svg"
              alt="Codeium Badge"
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain invert"
            />
          </div>
        </div>

        {/* Brand Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-[11px] sm:text-xs font-mono text-purple-200 mb-2 sm:mb-3 backdrop-blur-md shadow-[0_0_16px_rgba(139,92,246,0.2)]">
          <Sparkles size={13} className="text-purple-400" />
          <span className="font-bold tracking-wider uppercase text-white">Codeium</span>
          <span className="text-white/30">•</span>
          <span className="text-purple-300 font-medium">Darkside Studio</span>
        </div>

        {/* Main Title: "Building the future from Chaos to Order" */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-2 sm:mb-4 max-w-4xl text-balance">
          Building the future from{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-rose-300 to-purple-400 drop-shadow-[0_2px_20px_rgba(168,85,247,0.35)]">
            Chaos to Order
          </span>
        </h1>

        {/* Professional Subline */}
        <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-xl md:max-w-2xl font-normal leading-relaxed text-balance px-2">
          Writing chaos, making mods, refining low-level systems through raw noise until seamless, dependable order emerges and is served directly to you. From your friends over the internet.
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
          <div className="inline-flex items-center gap-2.5 sm:gap-3.5 px-8 sm:px-12 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-purple-900/90 via-[#191333] to-purple-900/90 hover:from-purple-800 hover:to-purple-700 border-2 border-purple-400/50 hover:border-purple-300 shadow-[0_0_35px_rgba(139,92,246,0.45)] hover:shadow-[0_0_60px_rgba(168,85,247,0.7)] text-sm sm:text-base font-bold tracking-widest uppercase font-mono transition-all duration-300 group-hover:-translate-y-1">
            <span className="text-white drop-shadow-[0_2px_12px_rgba(168,85,247,0.5)]">
              Let&apos;s Deep Dive
            </span>
            <ChevronDown size={22} className="text-purple-300 group-hover:translate-y-1 transition-transform duration-300 animate-bounce" />
          </div>

          {/* Subtext instruction */}
          <span className="text-[10px] sm:text-[11px] font-mono text-purple-300/80 group-hover:text-purple-200 transition-colors">
            Click to explore software, masterpieces &amp; toolchains
          </span>
        </button>
      </footer>
    </section>
  );
};

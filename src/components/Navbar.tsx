"use client";

import React from "react";
import { Github, Search, Sparkles, ExternalLink } from "lucide-react";

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#06070a]/85 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-rose-600 to-red-600 p-[1px] shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0d0f17] rounded-[11px] flex items-center justify-center p-1.5 overflow-hidden">
              <img 
                src="/codeium-logo.svg" 
                alt="Codeium Logo" 
                className="w-full h-full object-contain invert" 
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-tight text-white text-base sm:text-lg group-hover:text-purple-300 transition-colors">
                Codeium
              </span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-500/10 to-red-500/10 text-rose-300 border border-purple-500/20 font-bold">
                Darkside Studio
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono tracking-tight hidden sm:block">
              Android Native • Material 3 Expressive • Toolchains
            </p>
          </div>
        </a>

        {/* Center / Search pill */}
        <button
          onClick={onOpenSearch}
          className="hidden md:flex items-center gap-3 px-4 py-2 rounded-full bg-[#121422]/80 hover:bg-[#1a1c30] border border-white/10 text-slate-400 hover:text-white transition-all text-xs font-mono group shadow-inner"
          aria-label="Quick find project"
        >
          <Search size={14} className="text-purple-400 group-hover:scale-110 transition-transform" />
          <span>Quick Find Project...</span>
          <kbd className="px-1.5 py-0.5 text-[10px] bg-white/10 rounded text-slate-300 font-sans border border-white/10">
            ⌘K
          </kbd>
        </button>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>GitHub Pages Live</span>
          </div>

          <a
            href="https://github.com/junksidetm/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-purple-500/40 text-slate-200 hover:text-white text-xs font-semibold transition-all shadow-sm"
          >
            <Github size={16} className="text-purple-400" />
            <span className="hidden sm:inline">GitHub</span>
            <ExternalLink size={12} className="text-slate-400" />
          </a>
        </div>
      </div>
    </header>
  );
};

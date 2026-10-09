"use client";

import React from "react";
import { Github, Terminal, Search, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#07080c]/80 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-500 p-[1px] shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0d0f17] rounded-[11px] flex items-center justify-center overflow-hidden">
              <img src="/logo.svg" alt="junksidetm" className="w-6 h-6 object-contain" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-tight text-white text-lg group-hover:text-purple-400 transition-colors">
                junksidetm
              </span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 font-bold">
                Forge
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono tracking-tight hidden sm:block">
              Android Native • M3 Expressive • Systems
            </p>
          </div>
        </a>

        {/* Center / Search pill */}
        <button
          onClick={onOpenSearch}
          className="hidden md:flex items-center gap-3 px-4 py-2 rounded-full bg-[#131722]/80 hover:bg-[#1a1f2e] border border-white/10 text-slate-400 hover:text-white transition-all text-xs font-mono group shadow-inner"
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
            href="https://github.com/junksidetm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#131722] hover:bg-[#1c2233] border border-white/10 text-slate-200 hover:text-white text-xs font-semibold transition-all shadow-sm"
          >
            <Github size={16} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
};

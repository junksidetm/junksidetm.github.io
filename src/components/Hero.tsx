"use client";

import React from "react";
import { Sparkles, Layers, ShieldCheck, Cpu, Smartphone, Globe, Terminal, Search } from "lucide-react";

interface HeroProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalProjects: number;
  filteredCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalProjects,
  filteredCount,
}) => {
  const categories = [
    { id: "all", label: "All Repositories", icon: Layers },
    { id: "android", label: "Android & APKs", icon: Smartphone },
    { id: "web", label: "Web & Wasm", icon: Globe },
    { id: "desktop", label: "Windows & System", icon: Terminal },
    { id: "design", label: "Design & Assets", icon: Sparkles },
  ];

  return (
    <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Decorative ambient glows */}
      <div className="absolute top-0 left-1/4 -z-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-12 right-1/4 -z-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Badge */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono">
          <Cpu size={14} className="text-purple-400" />
          <span>MATERIAL 3 EXPRESSIVE • 120 FPS NATIVE SUITE</span>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
          <ShieldCheck size={14} className="text-cyan-400" />
          <span>VERIFIED SSH SIGNED COMMITS</span>
        </div>
      </div>

      {/* Main Title */}
      <div className="max-w-4xl mb-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
          Architected for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">Pure Native</span> Speed & Polish.
        </h1>
        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
          Open-source laboratory by <span className="font-semibold text-white">junksidetm</span>. Flagship Android applications built with Jetpack Compose & Flutter, compiled WebAssembly engines, and hardened system automation tools.
        </p>
      </div>

      {/* Metrics Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10 max-w-3xl">
        <div className="p-4 rounded-2xl bg-[#131722]/80 border border-white/5 backdrop-blur-md">
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">13</div>
          <div className="text-xs text-slate-400 font-mono uppercase tracking-wider mt-1">Open Source Repos</div>
        </div>
        <div className="p-4 rounded-2xl bg-[#131722]/80 border border-white/5 backdrop-blur-md">
          <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono">5+</div>
          <div className="text-xs text-slate-400 font-mono uppercase tracking-wider mt-1">Release APKs</div>
        </div>
        <div className="p-4 rounded-2xl bg-[#131722]/80 border border-white/5 backdrop-blur-md">
          <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">120</div>
          <div className="text-xs text-slate-400 font-mono uppercase tracking-wider mt-1">FPS Fluid Canvas</div>
        </div>
        <div className="p-4 rounded-2xl bg-[#131722]/80 border border-white/5 backdrop-blur-md">
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">100%</div>
          <div className="text-xs text-slate-400 font-mono uppercase tracking-wider mt-1">Offline-First Room</div>
        </div>
      </div>

      {/* Search and Category Filter Toolbar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-4 border-t border-white/5">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-600/25 border border-purple-400/40"
                    : "bg-[#131722]/70 hover:bg-[#1c2233] text-slate-400 hover:text-white border border-white/5"
                }`}
              >
                <Icon size={14} className={isSelected ? "text-white" : "text-slate-400"} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Live Filter Input */}
        <div className="relative min-w-[260px]">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={`Filter ${filteredCount} projects...`}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#131722]/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 font-mono transition-all"
          />
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { ArrowLeft, Cpu, ShieldCheck, Zap, Layers, Terminal, Sparkles, Github, Smartphone } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen text-slate-100 flex flex-col justify-between">
      {/* Top Bar */}
      <header className="border-b border-white/5 bg-[#07080c]/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors">
            <ArrowLeft size={14} />
            <span>Return to Codeium</span>
          </a>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-slate-400">Engineering Profile</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full">
        {/* Profile Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#11141f]/90 border border-purple-500/30 shadow-2xl mb-12 flex flex-col md:flex-row items-center gap-8">
          <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-500 p-[2px] shadow-xl shrink-0">
            <div className="w-full h-full bg-[#0d0f17] rounded-[22px] flex items-center justify-center overflow-hidden p-3">
              <img src="/logo.svg" alt="junksidetm" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs font-mono mb-2">
              <span>SYSTEM ARCHITECT & ENGINEER</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Codeium • Darkside Studio
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Specialized in native Android engineering, Material 3 Expressive motion systems, high-speed WebAssembly engines, and cryptographic platform verification.
            </p>
          </div>
        </div>

        {/* Core Pillars */}
        <h2 className="text-xl font-bold text-white tracking-tight mb-6 flex items-center gap-2">
          <Sparkles size={18} className="text-purple-400" />
          <span>Foundational Engineering Principles</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-[#11141f]/70 border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
              <Smartphone size={18} />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Native-First Mandate</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Prioritize native Android primitives, Room offline-first DBs, StateFlow lifecycles, and hardware-accelerated Canvas rendering to sustain 120 FPS performance.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#11141f]/70 border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
              <Zap size={18} />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Material 3 Expressive</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Rigorous adherence to the latest M3 Expressive design tokens, tactile micro-interactions, tonal elevations, and fluid physics-based transitions.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#11141f]/70 border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <ShieldCheck size={18} />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Cryptographic Integrity</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every commit and release asset is cryptographically verified using OpenSSH ED25519 signing keys, maintaining strict traceability across repositories.
            </p>
          </div>
        </div>

        {/* Tech Stack Matrix */}
        <div className="p-8 rounded-3xl bg-[#11141f]/70 border border-white/5">
          <h3 className="text-base font-bold text-white mb-4">Technologies & Platforms</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Kotlin",
              "Jetpack Compose",
              "Android SDK (API 35)",
              "Dart",
              "Flutter 3.x",
              "Room Persistence",
              "WebAssembly",
              "Next.js 14",
              "React 18",
              "Tailwind CSS",
              "TypeScript",
              "PowerShell 7",
              "GitHub Actions CI/CD",
              "OpenSSH Signing",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-xl text-xs font-mono bg-[#161b2a] text-purple-300 border border-purple-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#07080c] py-8 text-center text-xs font-mono text-slate-500">
        junksidetm • High-Performance Systems Laboratory
      </footer>
    </div>
  );
}

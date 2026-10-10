"use client";

import React from "react";
import { Github, ShieldCheck, Heart, Terminal, Code2, ExternalLink, Cpu, Sparkles } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#07080f]/95 py-16 px-4 sm:px-6 lg:px-12 text-slate-400 relative z-10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto">
        {/* =========================================================================
            SITEMAP GRID & BRAND BANNER ROW
        ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Brand Presentation & Banner (Spans 2 columns on lg) */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            {/* Full Brand Banner at the side */}
            <a href="#top" className="group block" aria-label="Codeium by Darkside Studio">
              <img
                src="/codeium-banner.svg"
                alt="Codeium Banner"
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_2px_12px_rgba(139,92,246,0.3)] transition-transform group-hover:scale-[1.02]"
              />
            </a>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              &quot;Codeium&quot; is the specialized software brand of <strong className="text-white">Darkside Studio</strong>. 
              Engineering high-craft native Android solutions, cross-platform Flutter suites, 
              WebAssembly modules, and precision automation toolchains.
            </p>

            {/* Cryptographic Verification Pill */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>100% Cryptographically Verified Commits</span>
            </div>
          </div>

          {/* Sitemap Column 1: Native Applications */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4 flex items-center gap-2">
              <Cpu size={14} className="text-purple-400" />
              <span>Applications</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="https://github.com/junksidetm/Wallet" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors flex items-center gap-1">
                  <span>Wallet (Native Compose)</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/junksidetm/Wallet-Flutter" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors flex items-center gap-1">
                  <span>Wallet-Flutter (M3)</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/junksidetm/instafel" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors flex items-center gap-1">
                  <span>Instafel (Unclone)</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/junksidetm/physics-wonderland" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors flex items-center gap-1">
                  <span>Physics Wonderland 3D</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/junksidetm/Android-Battery-Unrestricted-Checker" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors flex items-center gap-1">
                  <span>Battery Checker</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Sitemap Column 2: Web & Tools */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4 flex items-center gap-2">
              <Terminal size={14} className="text-rose-400" />
              <span>Toolchains</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="https://github.com/junksidetm/vector-drawable-nextjs" target="_blank" rel="noopener noreferrer" className="hover:text-rose-300 transition-colors">
                  Vector Drawable Next.js
                </a>
              </li>
              <li>
                <a href="https://github.com/junksidetm/WinForge" target="_blank" rel="noopener noreferrer" className="hover:text-rose-300 transition-colors">
                  WinForge Power Tools
                </a>
              </li>
              <li>
                <a href="https://github.com/junksidetm/Wasm" target="_blank" rel="noopener noreferrer" className="hover:text-rose-300 transition-colors">
                  Wasm High-Speed Engine
                </a>
              </li>
              <li>
                <a href="https://github.com/junksidetm/assests" target="_blank" rel="noopener noreferrer" className="hover:text-rose-300 transition-colors">
                  Codeium Brand Assets
                </a>
              </li>
              <li>
                <a href="https://github.com/junksidetm/Alpha-Insta" target="_blank" rel="noopener noreferrer" className="hover:text-rose-300 transition-colors">
                  Alpha-Insta Engine
                </a>
              </li>
            </ul>
          </div>

          {/* Sitemap Column 3: Multi-Platform Ecosystem */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4 flex items-center gap-2">
              <Github size={14} className="text-cyan-400" />
              <span>Mirrors &amp; Sources</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="https://github.com/junksidetm/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>GitHub Main (@junksidetm)</span>
                </a>
              </li>
              <li>
                <a href="https://codeberg.org/mrdarksidetm" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Codeberg Mirror (@mrdarksidetm)</span>
                </a>
              </li>
              <li>
                <a href="https://gitlab.com/mrdarksidetm" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  <span>GitLab Mirror (@mrdarksidetm)</span>
                </a>
              </li>
              <li>
                <a href="https://m3.material.io/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-200 transition-colors text-xs text-slate-400 flex items-center gap-1 mt-2">
                  <span>Material 3 Expressive Standard</span>
                  <ExternalLink size={11} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* =========================================================================
            BOTTOM COPYRIGHT & LEGAL CREDITS
        ========================================================================= */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2.5">
            <img
              src="/codeium-logo.svg"
              alt="Codeium Icon"
              className="w-4 h-4 object-contain invert opacity-80"
            />
            <p>
              &copy; 2026 Abhijeet Yadav. <strong className="text-slate-300">&quot;Codeium&quot;</strong> is a part of Darkside Studio. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Signed with ED25519</span>
            <span>•</span>
            <span>Host 4 GB RAM Guarded</span>
            <span>•</span>
            <a href="#top" className="text-purple-400 hover:text-purple-300 transition-colors">
              Back to top &uarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

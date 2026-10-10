"use client";

import React, { useState, useEffect } from "react";
import { Github, Terminal, Cpu, ArrowUp, ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || 0;
      const vh = window.innerHeight || 800;
      // Hide if on MVA (first viewport), show in PS and Footer sections
      setShowBackToTop(scrollY > vh * 0.65);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="mt-20 border-t border-purple-500/15 bg-[#070514]/95 py-16 px-4 sm:px-6 lg:px-12 text-slate-400 relative z-10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          {/* =========================================================================
              SITEMAP GRID & BRAND BANNER ROW
          ========================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-purple-500/15">
            {/* Brand Presentation & Banner (Spans 2 columns on lg) */}
            <div className="lg:col-span-2 flex flex-col items-start gap-4">
              <a href="#top" className="group block" aria-label="Codeium by Darkside Studio">
                <img
                  src="/codeium-banner.svg"
                  alt="Codeium Banner"
                  className="h-9 sm:h-11 w-auto object-contain drop-shadow-[0_2px_12px_rgba(139,92,246,0.3)] transition-transform group-hover:scale-[1.02]"
                />
              </a>

              <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                &quot;Codeium&quot; is the specialized software brand of <strong className="text-white">Darkside Studio</strong>. 
                Engineering high-craft native Android solutions, cross-platform Flutter suites, 
                WebAssembly modules, and precision automation toolchains.
              </p>
            </div>

            {/* Sitemap Column 1: Applications */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4 flex items-center gap-2">
                <Cpu size={14} className="text-purple-400" />
                <span>Applications</span>
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <a href="https://github.com/junksidetm/Wallet-Flutter" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
                    Wallet-Flutter (M3)
                  </a>
                </li>
                <li>
                  <a href="https://github.com/junksidetm/Google-Emoji-3D" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
                    Google Emoji 3D
                  </a>
                </li>
                <li>
                  <a href="https://github.com/junksidetm/physics-wonderland" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
                    Physics Wonderland
                  </a>
                </li>
                <li>
                  <a href="https://github.com/junksidetm/instafel" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
                    Instafel (Unclone)
                  </a>
                </li>
                <li>
                  <a href="https://github.com/junksidetm/Android-Battery-Unrestricted-Checker" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
                    Battery Checker
                  </a>
                </li>
              </ul>
            </div>

            {/* Sitemap Column 2: Toolchains */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4 flex items-center gap-2">
                <Terminal size={14} className="text-purple-400" />
                <span>Toolchains</span>
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <a href="https://github.com/junksidetm/vector-drawable-nextjs" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
                    Vector Drawable Next.js
                  </a>
                </li>
                <li>
                  <a href="https://github.com/junksidetm/WinForge" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
                    WinForge Power Tools
                  </a>
                </li>
                <li>
                  <a href="https://github.com/junksidetm/Wasm" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
                    Wasm High-Speed Engine
                  </a>
                </li>
                <li>
                  <a href="https://github.com/junksidetm/Gboard-patches" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
                    Gboard Patches (Morphe)
                  </a>
                </li>
              </ul>
            </div>

            {/* Sitemap Column 3: Mirrors & Profiles */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4 flex items-center gap-2">
                <Github size={14} className="text-purple-400" />
                <span>Mirrors &amp; Sources</span>
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <a href="https://github.com/junksidetm/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>GitHub Main (@junksidetm)</span>
                  </a>
                </li>
                <li>
                  <a href="https://codeberg.org/mrdarksidetm" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span>Codeberg Mirror (@mrdarksidetm)</span>
                  </a>
                </li>
                <li>
                  <a href="https://gitlab.com/mrdarksidetm" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-300" />
                    <span>GitLab Mirror (@mrdarksidetm)</span>
                  </a>
                </li>
                <li>
                  <a href="https://m3.material.io/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-200 transition-colors text-xs text-slate-400 flex items-center gap-1 mt-2">
                    <span>Material 3 Standard</span>
                    <ExternalLink size={11} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* =========================================================================
              BOTTOM COPYRIGHT WITH DARKSIDE STUDIO LOGO
          ========================================================================= */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-3">
              {/* Replaced Codeium logo with Darkside Studio Logo - Balck.png */}
              <img
                src="/darkside-studio-logo-black.png"
                alt="Darkside Studio Logo"
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain shrink-0"
              />
              <p>
                &copy; 2026 Abhijeet Yadav. <strong className="text-slate-300">&quot;Codeium&quot;</strong> is a part of Darkside Studio. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating & Fixed Back-To-Top Arrow Button (Hidden on MVA, shown in other sections) */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-2xl bg-purple-600/90 hover:bg-purple-500 text-white shadow-xl shadow-purple-950/60 backdrop-blur-md border border-purple-400/40 transition-all duration-300 cursor-pointer active:scale-90 ${
          showBackToTop
            ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
            : "opacity-0 scale-75 pointer-events-none translate-y-4"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} className="stroke-[2.5]" />
      </button>
    </>
  );
};

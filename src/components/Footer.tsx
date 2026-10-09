"use client";

import React from "react";
import { Github, ShieldCheck, Heart, Terminal, Code2 } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-24 border-t border-white/5 bg-[#07080c] py-16 px-4 sm:px-6 lg:px-8 text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left Branding */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Code2 size={16} />
            </div>
            <span className="text-white font-extrabold text-base tracking-tight">
              junksidetm Forge
            </span>
          </div>
          <p className="text-xs font-mono text-slate-500 max-w-sm">
            High-Performance Android Native, WebAssembly, and Systems Software Engineering.
          </p>
        </div>

        {/* Center: Cryptographic Security Badge */}
        <div className="p-4 rounded-2xl bg-[#11141f] border border-white/5 flex items-center gap-3">
          <ShieldCheck size={20} className="text-emerald-400 shrink-0" />
          <div className="text-xs font-mono">
            <div className="text-white font-bold">Cryptographically Verified</div>
            <div className="text-slate-400 text-[11px]">
              SSH Key: <code className="text-purple-400">id_ed25519_junksidetm</code>
            </div>
          </div>
        </div>

        {/* Right Links & Social */}
        <div className="flex flex-col items-start md:items-end gap-2 text-xs font-mono">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/junksidetm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github size={14} />
              <span>@junksidetm</span>
            </a>
            <a
              href="mailto:contact.dsidetm@gmail.com"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
          <p className="text-slate-600 text-[11px]">
            Hosted directly on GitHub Pages via Next.js Static Export
          </p>
        </div>
      </div>
    </footer>
  );
};

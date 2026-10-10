"use client";

import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [shortcutKey, setShortcutKey] = useState<string>("Ctrl K");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMac = /Mac|iPhone|iPad|iPod/i.test(navigator.userAgent);
      setShortcutKey(isMac ? "⌘K" : "Ctrl K");
    }
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-purple-500/20 bg-[#070512]/85 backdrop-blur-2xl transition-all shadow-[0_4px_30px_rgba(139,92,246,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between gap-4">
        {/* Left Side: Just Codeium Logo as it is */}
        <a 
          href="#top" 
          className="flex items-center transition-transform hover:scale-105 active:scale-95" 
          aria-label="Codeium by Darkside Studio"
        >
          <img 
            src="/codeium-logo.svg" 
            alt="Codeium Logo" 
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain invert drop-shadow-[0_0_14px_rgba(168,85,247,0.5)]" 
          />
        </a>

        {/* Right Side: Search bar with windows/macos shortcut keyboard */}
        <button
          onClick={onOpenSearch}
          className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2 rounded-xl bg-purple-950/50 hover:bg-purple-900/60 border border-purple-500/30 hover:border-purple-400/60 text-purple-200 hover:text-white transition-all text-xs sm:text-sm font-mono shadow-inner group cursor-pointer active:scale-95"
          aria-label={`Search projects (${shortcutKey})`}
        >
          <Search size={15} className="text-purple-400 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">Search projects...</span>
          <span className="sm:hidden">Search</span>
          <kbd className="px-1.5 py-0.5 text-[10px] bg-purple-900/70 rounded text-purple-200 border border-purple-500/40 font-mono shadow-sm">
            {shortcutKey}
          </kbd>
        </button>
      </div>
    </header>
  );
};

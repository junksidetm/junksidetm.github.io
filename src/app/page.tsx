"use client";

import React, { useState, useMemo } from "react";
import { CosmicBackground } from "../components/CosmicBackground";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { ProjectCard } from "../components/ProjectCard";
import { QrCodeModal } from "../components/QrCodeModal";
import { CommandPalette } from "../components/CommandPalette";
import { Footer } from "../components/Footer";
import { PROJECTS, Project } from "../data/projects";
import { 
  Sparkles, 
  Terminal, 
  Download, 
  ExternalLink, 
  Copy, 
  Check, 
  Layers, 
  Zap, 
  Smartphone,
  Globe,
  Search
} from "lucide-react";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [qrProject, setQrProject] = useState<Project | null>(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);
  const [activeWalletTab, setActiveWalletTab] = useState<"compose" | "flutter">("compose");
  const [copiedClone, setCopiedClone] = useState<boolean>(false);

  const handleDeepDive = () => {
    const el = document.getElementById("showcase-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Categories list
  const categories = [
    { id: "all", label: "All Repositories", icon: Layers },
    { id: "android", label: "Android & APKs", icon: Smartphone },
    { id: "web", label: "Web & Wasm", icon: Globe },
    { id: "desktop", label: "Desktop & System", icon: Terminal },
    { id: "design", label: "Design & Assets", icon: Sparkles },
  ];

  // Filter projects
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        project.name.toLowerCase().includes(q) ||
        project.tagline.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.techStack.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const composeProject = PROJECTS.find((p) => p.id === "wallet-compose")!;
  const flutterProject = PROJECTS.find((p) => p.id === "wallet-flutter")!;
  const currentWallet = activeWalletTab === "compose" ? composeProject : flutterProject;

  const handleCopyClone = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2000);
  };

  return (
    <div id="top" className="min-h-screen flex flex-col relative selection:bg-purple-600 selection:text-white">
      {/* Dynamic Cosmic Flare Animated Background (Subtle red & purple in MVA; pure purple in PS) */}
      <CosmicBackground />

      {/* Main Full-Viewport Hero Landing View (MVA: Occupies 100dvh, responsive across phones, tablets, PC) */}
      <Hero onDeepDive={handleDeepDive} />

      {/* =========================================================================
          ALL PROJECT SHOWCASE (PS): Pure Purple Palette & 30% Opacity Squares Matrix
      ========================================================================= */}
      <section
        id="showcase-section"
        className="w-full relative z-10 pt-2"
      >
        {/* Distorted / Blurred Top Bar on PS with Codeium Logo & Search Bar */}
        <Navbar onOpenSearch={() => setIsCommandPaletteOpen(true)} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full pt-10 flex-grow">
          {/* Header Controls: Search & Category Pills */}
          <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Category Pills (Pure Purple hues) */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const IconComponent = cat.icon;
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                      isSelected
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/40 border border-purple-400/40 font-semibold"
                        : "bg-[#120e24]/80 hover:bg-[#1a1435] text-slate-300 hover:text-white border border-purple-500/10"
                    }`}
                  >
                    <IconComponent size={14} className={isSelected ? "text-white" : "text-purple-400"} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Filter Search Box */}
            <div className="relative w-full md:w-72">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tools, APKs, tags..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#120e24]/90 border border-purple-500/20 focus:border-purple-400/60 focus:outline-none text-xs sm:text-sm text-white placeholder-slate-400 backdrop-blur-md transition-all font-mono"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-purple-400 hover:text-white font-mono"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* =====================================================================
              FLAGSHIP SPOTLIGHT: Dual Wallet Suite (Strictly Purple Aesthetics)
          ===================================================================== */}
          {selectedCategory === "all" && searchQuery === "" && (
            <section className="mb-14">
              <div className="relative rounded-3xl bg-gradient-to-br from-[#120e26] via-[#0d091e] to-[#150f2e] border border-purple-500/30 p-6 sm:p-8 lg:p-10 overflow-hidden shadow-2xl">
                {/* Purple ambient flare orbs */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-purple-600/25 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-1/3 -mb-20 w-80 h-80 bg-purple-700/15 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Info */}
                  <div className="lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        FLAGSHIP SUITE
                      </span>
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        DUAL ARCHITECTURE SUITE
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                      Wallet: One Vision, Two Native Realizations.
                    </h2>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      Engineered to explore the absolute zenith of modern Android development. 
                      Experience the contrast between a <span className="text-purple-300 font-semibold">100% Native Jetpack Compose</span> engine 
                      built with low-level Canvas primitives, and a <span className="text-purple-300 font-semibold">Material 3 Expressive Flutter</span> suite.
                    </p>

                    {/* Architecture Selector Toggle (Pure Purple) */}
                    <div className="inline-flex p-1 rounded-2xl bg-black/40 border border-purple-500/20 backdrop-blur-md mb-6">
                      <button
                        onClick={() => setActiveWalletTab("compose")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                          activeWalletTab === "compose"
                            ? "bg-purple-600 text-white shadow-lg shadow-purple-600/40"
                            : "text-slate-300 hover:text-white"
                        }`}
                      >
                        <Zap size={14} />
                        <span>Jetpack Compose (120 FPS)</span>
                      </button>
                      <button
                        onClick={() => setActiveWalletTab("flutter")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                          activeWalletTab === "flutter"
                            ? "bg-purple-600 text-white shadow-lg shadow-purple-600/40"
                            : "text-slate-300 hover:text-white"
                        }`}
                      >
                        <Sparkles size={14} />
                        <span>Flutter (M3 Expressive)</span>
                      </button>
                    </div>

                    {/* Tech Highlights */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                      {currentWallet.techStack.map((tech) => (
                        <div
                          key={tech}
                          className="px-3 py-2 rounded-xl bg-purple-950/30 border border-purple-500/15 text-xs font-mono text-purple-200 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center gap-3">
                      {currentWallet.apkDownload?.universal && (
                        <a
                          href={currentWallet.apkDownload.universal}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-purple-600/30 transition-all active:scale-95"
                        >
                          <Download size={15} />
                          <span>Download APK ({activeWalletTab.toUpperCase()})</span>
                        </a>
                      )}
                      <a
                        href={currentWallet.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/40 border border-purple-500/20 text-white text-xs sm:text-sm font-semibold transition-all"
                      >
                        <ExternalLink size={14} />
                        <span>View Repository</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Interactive Preview */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-2xl bg-black/60 border border-purple-500/20 p-5 backdrop-blur-xl">
                      <div className="flex items-center justify-between pb-4 border-b border-purple-500/15 mb-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={currentWallet.icon}
                            alt={currentWallet.name}
                            className="w-10 h-10 object-contain drop-shadow"
                          />
                          <div>
                            <div className="font-bold text-white text-sm">{currentWallet.name}</div>
                            <div className="text-xs text-purple-400 font-mono">{currentWallet.stats.value}</div>
                          </div>
                        </div>
                        <button
                          onClick={() => setQrProject(currentWallet)}
                          className="px-2.5 py-1.5 rounded-lg bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 text-[11px] font-mono text-purple-200 transition-colors cursor-pointer"
                        >
                          QR APK
                        </button>
                      </div>

                      {/* Code Clone Command box */}
                      <div className="rounded-xl bg-[#090714] border border-purple-500/20 p-3 font-mono text-xs text-purple-200">
                        <div className="flex items-center justify-between text-[11px] text-purple-400 mb-2">
                          <span>FAST CLONE</span>
                          <button
                            onClick={() => handleCopyClone(`git clone ${currentWallet.repoUrl}.git`)}
                            className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                          >
                            {copiedClone ? <Check size={12} /> : <Copy size={12} />}
                            <span>{copiedClone ? "Copied" : "Copy"}</span>
                          </button>
                        </div>
                        <div className="text-purple-300 overflow-x-auto whitespace-nowrap pb-1">
                          git clone {currentWallet.repoUrl}.git
                        </div>
                      </div>

                      {/* Architecture features breakdown */}
                      <div className="mt-4 space-y-2 text-xs text-purple-200">
                        <div className="flex items-center justify-between py-1 border-b border-purple-500/15">
                          <span className="text-slate-400">Persistence</span>
                          <span className="font-mono text-white">Room DB (Offline-First)</span>
                        </div>
                        <div className="flex items-center justify-between py-1 border-b border-purple-500/15">
                          <span className="text-slate-400">Signing Standard</span>
                          <span className="font-mono text-purple-300">SHA-256 Release Signed</span>
                        </div>
                        <div className="flex items-center justify-between py-1">
                          <span className="text-slate-400">Frame Budget</span>
                          <span className="font-mono text-purple-400">8.33ms (120 FPS)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* =====================================================================
              ALL PROJECTS DIRECTORY GRID
          ===================================================================== */}
          <section className="mb-20">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Software Ecosystem Directory
                </h3>
                <p className="text-xs sm:text-sm text-purple-300/80 mt-1 font-mono">
                  Showing {filteredProjects.length} of {PROJECTS.length} repositories
                </p>
              </div>
            </div>

            {filteredProjects.length === 0 ? (
              <div className="p-12 text-center rounded-3xl bg-purple-950/20 border border-purple-500/20 font-mono text-slate-400">
                <p>No repositories found matching &quot;{searchQuery}&quot;</p>
                <button
                  onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
                  className="mt-4 px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-semibold cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onOpenQr={(p) => setQrProject(p)}
                  />
                ))}
              </div>
            )}
          </section>
        </main>

        {/* Footer with Sitemap, Copyright & Brand Banner at Side */}
        <Footer />
      </section>

      {/* QR Code Modal */}
      {qrProject && (
        <QrCodeModal
          project={qrProject}
          isOpen={Boolean(qrProject)}
          onClose={() => setQrProject(null)}
        />
      )}

      {/* Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />
    </div>
  );
}

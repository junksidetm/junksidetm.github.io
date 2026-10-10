"use client";

import React, { useState, useMemo } from "react";
import { CosmicBackground } from "../components/CosmicBackground";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { ProjectCard } from "../components/ProjectCard";
import { QrCodeModal, QrModalItem } from "../components/QrCodeModal";
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
  Smartphone,
  Globe,
  Search,
  Orbit
} from "lucide-react";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [qrItem, setQrItem] = useState<QrModalItem | Project | null>(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);
  const [activeMasterpiece, setActiveMasterpiece] = useState<"emoji3d" | "physics">("emoji3d");
  const [copiedClone, setCopiedClone] = useState<boolean>(false);

  const handleDeepDive = () => {
    const el = document.getElementById("showcase-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Categories list: only web, android, desktop (plus all)
  const categories = [
    { id: "all", label: "All Repositories", icon: Layers },
    { id: "android", label: "Android", icon: Smartphone },
    { id: "web", label: "Web", icon: Globe },
    { id: "desktop", label: "Desktop", icon: Terminal },
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
        className="w-full relative z-10 pt-1"
      >
        {/* Distorted / Blurred Top Bar on PS with Codeium Logo & Search Bar */}
        <Navbar onOpenSearch={() => setIsCommandPaletteOpen(true)} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full pt-8 sm:pt-10 flex-grow">
          {/* Header Controls: Search & Category Pills */}
          <div className="mb-8 sm:mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
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
                        ? "bg-purple-600 text-white shadow-lg shadow-purple-900/40 border border-purple-400/40 font-semibold"
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
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-purple-400 hover:text-white font-mono cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* =====================================================================
              MASTERPIECES SHOWCASE: "Some of our Master Pieces"
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
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3">
                      Some of our Master Pieces
                    </h2>
                    <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                      Every artist has 1 masterpiece they are really proud of. We are there and for now we have two of the masterpieces
                    </p>

                    {/* Masterpiece Selector Toggle (Google 3D Emoji vs Physics Wonderland) */}
                    <div className="inline-flex p-1 rounded-2xl bg-black/40 border border-purple-500/20 backdrop-blur-md mb-6">
                      <button
                        onClick={() => setActiveMasterpiece("emoji3d")}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                          activeMasterpiece === "emoji3d"
                            ? "bg-purple-600 text-white shadow-lg shadow-purple-600/40"
                            : "text-slate-300 hover:text-white"
                        }`}
                      >
                        <Sparkles size={14} />
                        <span>Google 3D Emoji</span>
                      </button>
                      <button
                        onClick={() => setActiveMasterpiece("physics")}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                          activeMasterpiece === "physics"
                            ? "bg-purple-600 text-white shadow-lg shadow-purple-600/40"
                            : "text-slate-300 hover:text-white"
                        }`}
                      >
                        <Orbit size={14} />
                        <span>Physics Wonderland</span>
                      </button>
                    </div>

                    {/* Tech Highlights */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                      {(activeMasterpiece === "emoji3d"
                        ? ["3D Rendering", "TrueType Font (.ttf)", "sbix Color Strikes", "Unicode 15.1", "Android 17 Ready"]
                        : ["WebGL Engine", "Canvas 2D", "Rigid Body Solver", "Cloth Dynamics", "60 FPS Runtime"]
                      ).map((tech) => (
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
                      {activeMasterpiece === "emoji3d" ? (
                        <>
                          <a
                            href="https://github.com/junksidetm/Google-Emoji-3D/releases/latest/download/NotoColorEmoji.ttf"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-purple-600/30 transition-all active:scale-95"
                          >
                            <Download size={15} />
                            <span>Download TTF Font</span>
                          </a>
                          <a
                            href="https://github.com/junksidetm/Google-Emoji-3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/40 border border-purple-500/20 text-white text-xs sm:text-sm font-semibold transition-all"
                          >
                            <ExternalLink size={14} />
                            <span>View Repository</span>
                          </a>
                        </>
                      ) : (
                        <>
                          <a
                            href="https://junksidetm.github.io/physics-wonderland/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-purple-600/30 transition-all active:scale-95"
                          >
                            <Globe size={15} />
                            <span>Launch Website</span>
                          </a>
                          <a
                            href="https://github.com/junksidetm/physics-wonderland"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/40 border border-purple-500/20 text-white text-xs sm:text-sm font-semibold transition-all"
                          >
                            <ExternalLink size={14} />
                            <span>View Repository</span>
                          </a>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Right Interactive Preview */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-2xl bg-black/60 border border-purple-500/20 p-5 backdrop-blur-xl">
                      <div className="flex items-center justify-between pb-4 border-b border-purple-500/15 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-purple-950/50 p-1.5 border border-purple-500/25 flex items-center justify-center overflow-hidden shrink-0">
                            {activeMasterpiece === "emoji3d" ? (
                              <img
                                src="/emoji3d-512.png"
                                alt="Google 3D Emoji"
                                className="w-full h-full object-contain"
                              />
                            ) : (
                              <img
                                src="/instagram-logo.svg"
                                alt="Physics Wonderland"
                                className="w-full h-full object-contain"
                              />
                            )}
                          </div>
                          <div>
                            <div className="font-bold text-white text-sm">
                              {activeMasterpiece === "emoji3d" ? "Google 3D Emoji" : "Physics Wonderland"}
                            </div>
                            <div className="text-xs text-purple-300 font-mono">
                              {activeMasterpiece === "emoji3d" ? "Volumetric sbix TTF Font" : "60 FPS Web Simulation"}
                            </div>
                          </div>
                        </div>

                        {/* QR Code button */}
                        <button
                          onClick={() => {
                            if (activeMasterpiece === "emoji3d") {
                              setQrItem({
                                name: "Google 3D Emoji",
                                url: "https://github.com/junksidetm/Google-Emoji-3D/releases/latest/download/NotoColorEmoji.ttf",
                                label: "Point your phone camera to download TTF font directly",
                                sublabel: "Direct TrueType Font (.ttf) Download",
                              });
                            } else {
                              setQrItem({
                                name: "Physics Wonderland",
                                url: "https://junksidetm.github.io/physics-wonderland/",
                                label: "Point your phone camera to open Physics Wonderland website",
                                sublabel: "Interactive Web Simulation Sandbox",
                              });
                            }
                          }}
                          className="px-2.5 py-1.5 rounded-lg bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 text-[11px] font-mono text-purple-200 transition-colors cursor-pointer"
                        >
                          {activeMasterpiece === "emoji3d" ? "QR Font" : "QR Website"}
                        </button>
                      </div>

                      {/* Code Clone Command box */}
                      <div className="rounded-xl bg-[#090714] border border-purple-500/20 p-3 font-mono text-xs text-purple-200">
                        <div className="flex items-center justify-between text-[11px] text-purple-400 mb-2">
                          <span>FAST CLONE</span>
                          <button
                            onClick={() =>
                              handleCopyClone(
                                activeMasterpiece === "emoji3d"
                                  ? "git clone https://github.com/junksidetm/Google-Emoji-3D.git"
                                  : "git clone https://github.com/junksidetm/physics-wonderland.git"
                              )
                            }
                            className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                          >
                            {copiedClone ? <Check size={12} /> : <Copy size={12} />}
                            <span>{copiedClone ? "Copied" : "Copy"}</span>
                          </button>
                        </div>
                        <div className="text-purple-300 overflow-x-auto whitespace-nowrap pb-1">
                          git clone https://github.com/junksidetm/{activeMasterpiece === "emoji3d" ? "Google-Emoji-3D" : "physics-wonderland"}.git
                        </div>
                      </div>

                      {/* Architecture features breakdown */}
                      <div className="mt-4 space-y-2 text-xs text-purple-200">
                        {activeMasterpiece === "emoji3d" ? (
                          <>
                            <div className="flex items-center justify-between py-1 border-b border-purple-500/15">
                              <span className="text-slate-400">Font Format</span>
                              <span className="font-mono text-white">OpenType TrueType (.ttf)</span>
                            </div>
                            <div className="flex items-center justify-between py-1 border-b border-purple-500/15">
                              <span className="text-slate-400">Color Table</span>
                              <span className="font-mono text-purple-300">sbix 3D Strikes</span>
                            </div>
                            <div className="flex items-center justify-between py-1">
                              <span className="text-slate-400">Compatibility</span>
                              <span className="font-mono text-purple-300">Android / Linux / Web</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex items-center justify-between py-1 border-b border-purple-500/15">
                              <span className="text-slate-400">Simulation Engine</span>
                              <span className="font-mono text-white">Verlet &amp; Particle Solvers</span>
                            </div>
                            <div className="flex items-center justify-between py-1 border-b border-purple-500/15">
                              <span className="text-slate-400">Rendering Target</span>
                              <span className="font-mono text-purple-300">WebGL &amp; High-DPI Canvas</span>
                            </div>
                            <div className="flex items-center justify-between py-1">
                              <span className="text-slate-400">Frame Budget</span>
                              <span className="font-mono text-purple-300">16.6ms (60 FPS Fluid)</span>
                            </div>
                          </>
                        )}
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
                    onOpenQr={(p) => setQrItem(p)}
                  />
                ))}
              </div>
            )}
          </section>
        </main>

        {/* Footer with Sitemap, Copyright & Brand Banner at Side */}
        <Footer />
      </section>

      {/* QR Code Modal (Universal support for APKs, TTF fonts, and Web URLs) */}
      {qrItem && (
        <QrCodeModal
          item={qrItem}
          isOpen={Boolean(qrItem)}
          onClose={() => setQrItem(null)}
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

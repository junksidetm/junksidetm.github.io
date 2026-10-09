"use client";

import React, { useState, useMemo } from "react";
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
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Smartphone 
} from "lucide-react";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("all");
  const [qrProject, setQrProject] = useState<Project | null>(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);
  const [activeWalletTab, setActiveWalletTab] = useState<"compose" | "flutter">("compose");
  const [copiedClone, setCopiedClone] = useState<boolean>(false);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "all" ||
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
    <div className="min-h-screen flex flex-col selection:bg-purple-600 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenSearch={() => setIsCommandPaletteOpen(true)} />

      {/* Hero Header & Filter */}
      <Hero
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery === "all" ? "" : searchQuery}
        onSearchChange={setSearchQuery}
        totalProjects={PROJECTS.length}
        filteredCount={filteredProjects.length}
      />

      {/* Main Showcase Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        {/* Flagship Spotlight Bento: The Dual Wallet Architecture */}
        {selectedCategory === "all" && (searchQuery === "all" || searchQuery === "") && (
          <section className="mb-14">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#121624] via-[#0e111a] to-[#141826] border border-purple-500/30 p-6 sm:p-8 lg:p-10 overflow-hidden shadow-2xl">
              {/* Radial flare */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-1/3 -mb-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Info */}
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      FLAGSHIP SHOWCASE
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      DUAL ARCHITECTURE SUITE
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    Wallet: High-Performance Financial Engineering
                  </h2>

                  <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                    Designed for peak responsiveness and security. Explored through two distinct native architectures: pure native Android with Jetpack Compose & Kotlin, alongside an expressive cross-platform Flutter counterpart.
                  </p>

                  {/* Architecture Toggle Tabs */}
                  <div className="mt-6 inline-flex p-1 rounded-2xl bg-[#090b12] border border-white/10">
                    <button
                      onClick={() => setActiveWalletTab("compose")}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        activeWalletTab === "compose"
                          ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Jetpack Compose (Native Kotlin)
                    </button>
                    <button
                      onClick={() => setActiveWalletTab("flutter")}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        activeWalletTab === "flutter"
                          ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Flutter (Material 3 Expressive)
                    </button>
                  </div>

                  {/* Dynamic Tech Specs */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {currentWallet.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-xl text-xs font-mono bg-[#161b2a] text-purple-200 border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    {currentWallet.apkDownload?.universal && (
                      <a
                        href={currentWallet.apkDownload.universal}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold transition-all shadow-lg shadow-purple-600/25"
                      >
                        <Download size={15} />
                        <span>Download Latest APK</span>
                      </a>
                    )}

                    <button
                      onClick={() => setQrProject(currentWallet)}
                      className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#161b2a] hover:bg-[#1f263b] text-purple-300 border border-purple-500/30 text-xs font-bold transition-all"
                    >
                      <span>Scan Mobile QR</span>
                    </button>

                    {currentWallet.liveUrl && (
                      <a
                        href={currentWallet.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold transition-all border border-white/5"
                      >
                        <span>Launch Showcase</span>
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Interactive Card / Visual Preview */}
                <div className="lg:col-span-5">
                  <div className="p-6 rounded-3xl bg-[#090b12]/90 border border-white/10 shadow-xl">
                    <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/20 p-2 flex items-center justify-center border border-purple-500/30">
                          <img
                            src={currentWallet.icon}
                            alt=""
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <div className="text-white font-bold text-sm">{currentWallet.name}</div>
                          <div className="text-[11px] font-mono text-cyan-400">
                            {currentWallet.stats.value}
                          </div>
                        </div>
                      </div>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>

                    <div className="space-y-3 font-mono text-xs">
                      <div className="p-3 rounded-xl bg-[#121624] border border-white/5 flex justify-between">
                        <span className="text-slate-400">Target Framework:</span>
                        <span className="text-white font-semibold">
                          {activeWalletTab === "compose" ? "Android 14/15 Native" : "Flutter 3.x / Dart"}
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#121624] border border-white/5 flex justify-between">
                        <span className="text-slate-400">Offline Storage:</span>
                        <span className="text-emerald-400 font-semibold">Room DB / Hive</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#121624] border border-white/5 flex justify-between">
                        <span className="text-slate-400">Release Signature:</span>
                        <span className="text-purple-300 font-semibold">GitHub Actions CI</span>
                      </div>
                    </div>

                    {/* Fast Terminal Copy Box */}
                    <div className="mt-4 p-3 rounded-xl bg-[#07080c] border border-purple-500/20 flex items-center justify-between gap-2">
                      <code className="text-[11px] text-purple-300 font-mono truncate">
                        git clone {currentWallet.repoUrl}.git
                      </code>
                      <button
                        onClick={() => handleCopyClone(`git clone ${currentWallet.repoUrl}.git`)}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors shrink-0"
                        title="Copy command"
                      >
                        {copiedClone ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section Heading */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              {selectedCategory === "all" ? "Repository Ecosystem" : `${selectedCategory.toUpperCase()} Suite`}
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20 font-semibold">
              {filteredProjects.length} Projects
            </span>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenQr={setQrProject}
            />
          ))}
        </div>
      </main>

      {/* QR Code Modal for Android APKs */}
      <QrCodeModal project={qrProject} onClose={() => setQrProject(null)} />

      {/* Spotlight Command Palette (⌘K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

"use client";

import React from "react";
import { ExternalLink, Github, Download, QrCode, Monitor, Laptop } from "lucide-react";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  onOpenQr: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenQr }) => {
  const hasApk = !!project.apkDownload;
  const apkUrl =
    project.apkDownload?.universal ||
    project.apkDownload?.arm64 ||
    project.apkDownload?.unclone;

  const isBraveOrigin = project.id === "brave-origin";
  const isRivo = project.id === "rivo-phone";
  const isInstafel = project.id === "instafel";

  return (
    <div
      className={`group relative flex flex-col justify-between p-5 sm:p-7 rounded-3xl bg-[#0f0b24]/90 hover:bg-[#150f33] border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-900/25 ${
        isBraveOrigin
          ? "md:col-span-2 lg:col-span-2"
          : project.featured
          ? "md:col-span-2 lg:col-span-1"
          : ""
      }`}
    >
      {/* Top Bar: Icon, Title & Category Badge */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          {/* Logo container: perfectly centered and fitted */}
          <div
            className={`rounded-2xl bg-[#140f2b] border border-purple-500/25 flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 group-hover:border-purple-400/40 transition-all shadow-inner ${
              isRivo
                ? "w-16 h-16 sm:w-20 sm:h-20 p-1"
                : isInstafel
                ? "w-12 h-12 sm:w-14 sm:h-14 p-1"
                : "w-12 h-12 sm:w-14 sm:h-14 p-2"
            }`}
          >
            <img
              src={project.icon}
              alt={project.name}
              className={`w-full h-full object-contain transition-transform ${
                isRivo
                  ? "scale-[1.85]"
                  : isInstafel
                  ? "scale-125"
                  : ""
              }`}
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/icons.svg";
              }}
            />
          </div>

          {/* Only keep "web, android, desktop" category pill */}
          <div className="flex items-center gap-2">
            {isBraveOrigin && (
              <span className="px-2.5 py-1 rounded-xl text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase bg-purple-900/50 text-purple-200 border border-purple-500/30">
                DUAL-OS EDITION
              </span>
            )}
            <span className="px-2.5 py-1 rounded-xl text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase bg-purple-950/60 text-purple-300 border border-purple-500/25 shadow-sm">
              {project.category}
            </span>
          </div>
        </div>

        {/* Title and Tagline */}
        <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors">
          {project.name}
        </h3>
        <p className="text-xs sm:text-sm font-mono text-purple-300/90 mt-1 mb-3">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
          {project.description}
        </p>

        {/* =========================================================================
            EXPANDED DUAL-PANEL SECTION FOR BRAVE ORIGIN PROFILE (WINDOWS & MACOS)
            Takes full advantage of the 2-column span left by Cresto
        ========================================================================= */}
        {isBraveOrigin && (
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
            {/* Windows Panel */}
            <div className="p-4 sm:p-5 rounded-2xl bg-purple-950/35 border border-purple-500/25 flex flex-col justify-between hover:border-purple-400/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                    <Monitor size={16} className="text-purple-400" />
                    <span>Windows Edition</span>
                  </span>
                  <span className="text-[10px] text-purple-300 bg-purple-900/50 px-2 py-0.5 rounded-md border border-purple-500/25">
                    PowerShell 7
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-sans mb-3 leading-relaxed">
                  Engineered for Windows 10 &amp; 11 workstations. Bundles automated registry anti-telemetry policies and custom uBlock Origin filter sets.
                </p>
                <div className="space-y-1 text-[11px] text-purple-300/80 mb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-purple-400" />
                    <span>Automated PowerShell debloat pipeline</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-purple-400" />
                    <span>Privacy-hardened Windows registry rules</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-purple-500/15">
                <a
                  href="https://github.com/junksidetm/Brave-Origin-Profile-Windows"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 text-center rounded-xl bg-purple-900/40 hover:bg-purple-800/60 text-xs text-purple-200 font-semibold border border-purple-500/25 transition-all flex items-center justify-center gap-1.5"
                >
                  <Github size={13} />
                  <span>Windows Repo</span>
                </a>
                <a
                  href="https://junksidetm.github.io/Brave-Origin-Profile-Windows/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 text-center rounded-xl bg-purple-600/30 hover:bg-purple-600/50 text-xs text-white font-bold border border-purple-500/35 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Explore Live</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* macOS Panel */}
            <div className="p-4 sm:p-5 rounded-2xl bg-purple-950/35 border border-purple-500/25 flex flex-col justify-between hover:border-purple-400/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                    <Laptop size={16} className="text-purple-400" />
                    <span>macOS Edition</span>
                  </span>
                  <span className="text-[10px] text-purple-300 bg-purple-900/50 px-2 py-0.5 rounded-md border border-purple-500/25">
                    zsh / plist
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-sans mb-3 leading-relaxed">
                  Tailored for macOS Sonoma &amp; Sequoia. Deploys managed plist profile defaults and zero-telemetry rules with native Apple Silicon &amp; Intel support.
                </p>
                <div className="space-y-1 text-[11px] text-purple-300/80 mb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-purple-400" />
                    <span>1-line terminal deployment via zsh script</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-purple-400" />
                    <span>Managed plist security &amp; privacy preferences</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-purple-500/15">
                <a
                  href="https://github.com/junksidetm/Brave-Origin-Profile-MacOS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 text-center rounded-xl bg-purple-900/40 hover:bg-purple-800/60 text-xs text-purple-200 font-semibold border border-purple-500/25 transition-all flex items-center justify-center gap-1.5"
                >
                  <Github size={13} />
                  <span>macOS Repo</span>
                </a>
                <a
                  href="https://junksidetm.github.io/Brave-Origin-Profile-MacOS/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 text-center rounded-xl bg-purple-600/30 hover:bg-purple-600/50 text-xs text-white font-bold border border-purple-500/35 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Explore Live</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Middle: Tech Stack */}
      <div>
        <div className="flex flex-wrap items-center gap-1.5 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-mono bg-purple-950/40 text-purple-200 border border-purple-500/15"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Row */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-purple-500/15">
          {/* Live Page Button */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[110px] flex items-center justify-center gap-1.5 py-2 sm:py-2.5 px-3 rounded-xl bg-purple-600/25 hover:bg-purple-600/40 text-purple-200 hover:text-white border border-purple-500/30 hover:border-purple-400 text-xs font-bold transition-all"
            >
              <span>Explore</span>
              <ExternalLink size={13} />
            </a>
          )}

          {/* GitHub Source Button */}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 sm:py-2.5 px-3 rounded-xl bg-purple-950/50 hover:bg-purple-900/50 text-purple-200 hover:text-white border border-purple-500/20 text-xs font-semibold transition-all"
            title="GitHub Repository"
          >
            <Github size={14} />
            <span className="hidden sm:inline">Repo</span>
          </a>

          {/* Direct APK Download Button */}
          {hasApk && apkUrl && (
            <a
              href={apkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 sm:py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-lg shadow-purple-600/25 transition-all"
              title="Direct Download"
            >
              <Download size={14} />
              <span>APK</span>
            </a>
          )}

          {/* Scan QR Modal Trigger */}
          <button
            onClick={() => onOpenQr(project)}
            className="p-2 sm:p-2.5 rounded-xl bg-purple-950/50 hover:bg-purple-900/60 text-purple-300 hover:text-white border border-purple-500/25 transition-all cursor-pointer"
            title="Scan QR Code to open or download on mobile"
          >
            <QrCode size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

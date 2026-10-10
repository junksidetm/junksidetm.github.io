"use client";

import React from "react";
import { ExternalLink, Github, Download, QrCode, Sparkles, Smartphone, Globe, Terminal } from "lucide-react";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  onOpenQr: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenQr }) => {
  const isAndroid = project.category === "android";
  const hasApk = !!project.apkDownload;

  const apkUrl =
    project.apkDownload?.universal ||
    project.apkDownload?.arm64 ||
    project.apkDownload?.unclone;

  return (
    <div
      className={`group relative flex flex-col justify-between p-6 rounded-3xl bg-[#11141f]/80 hover:bg-[#151926] border border-white/5 hover:border-purple-500/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 ${
        project.featured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
    >
      {/* Top Bar: Icon, Title & Badge */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-[#181d2c] p-2.5 border border-white/10 flex items-center justify-center group-hover:scale-105 group-hover:border-purple-500/30 transition-all shadow-inner">
            <img
              src={project.icon}
              alt={project.name}
              className="w-full h-full object-contain"
              onError={(e) => {
                // Fallback to logo.svg if custom icon is missing
                (e.target as HTMLImageElement).src = "/logo.svg";
              }}
            />
          </div>

          <div className="flex items-center gap-2">
            {project.badge && (
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wide uppercase bg-purple-500/10 text-purple-300 border border-purple-500/20">
                {project.badge}
              </span>
            )}
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono text-slate-400 bg-white/5 border border-white/5 uppercase">
              {project.category}
            </span>
          </div>
        </div>

        {/* Title and Tagline */}
        <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors">
          {project.name}
        </h3>
        <p className="text-xs font-mono text-purple-400/90 mt-1 mb-3">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
          {project.description}
        </p>
      </div>

      {/* Middle: Tech Stack & Metric Pill */}
      <div>
        <div className="flex flex-wrap items-center gap-1.5 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[#181d2c] text-slate-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Performance / Stat Row */}
        <div className="flex items-center justify-between p-3 rounded-2xl bg-[#0b0d14] border border-white/5 mb-6 text-xs font-mono">
          <span className="text-slate-400">{project.stats.label}</span>
          <span className="text-purple-300 font-bold">{project.stats.value}</span>
        </div>

        {/* Action Row */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
          {/* Live Page Button */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[120px] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 text-purple-200 border border-purple-500/30 hover:border-purple-400 text-xs font-bold transition-all"
            >
              <span>Explore Live</span>
              <ExternalLink size={13} />
            </a>
          )}

          {/* GitHub Source Button */}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#181d2c] hover:bg-[#20273b] text-slate-300 hover:text-white border border-white/10 text-xs font-semibold transition-all"
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
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-lg shadow-purple-600/25 transition-all"
              title="Direct APK Download"
            >
              <Download size={14} />
              <span>APK</span>
            </a>
          )}

          {/* Scan QR Modal Trigger */}
          {hasApk && (
            <button
              onClick={() => onOpenQr(project)}
              className="p-2.5 rounded-xl bg-[#181d2c] hover:bg-[#222a40] text-purple-400 hover:text-purple-300 border border-purple-500/20 transition-all"
              title="Scan QR Code to install APK on mobile"
            >
              <QrCode size={15} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

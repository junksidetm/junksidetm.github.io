"use client";

import React from "react";
import { ExternalLink, Github, Download, QrCode } from "lucide-react";
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

  return (
    <div
      className={`group relative flex flex-col justify-between p-5 sm:p-6 rounded-3xl bg-[#0f0b24]/85 hover:bg-[#150f33] border border-purple-500/15 hover:border-purple-400/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-900/20 ${
        project.featured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
    >
      {/* Top Bar: Icon, Title & Category Badge */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          {/* Logo container: perfectly centered and fitted */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#140f2b] p-2 border border-purple-500/25 flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 group-hover:border-purple-400/40 transition-all shadow-inner">
            <img
              src={project.icon}
              alt={project.name}
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/icons.svg";
              }}
            />
          </div>

          {/* Only keep "web, android, desktop" category pill */}
          <span className="px-2.5 py-1 rounded-xl text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase bg-purple-950/60 text-purple-300 border border-purple-500/25 shadow-sm">
            {project.category}
          </span>
        </div>

        {/* Title and Tagline */}
        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors">
          {project.name}
        </h3>
        <p className="text-xs font-mono text-purple-300/90 mt-1 mb-3">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
          {project.description}
        </p>
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

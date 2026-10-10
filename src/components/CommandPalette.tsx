"use client";

import React, { useState, useEffect } from "react";
import { Search, X, ExternalLink, Download, Copy, Check, Github } from "lucide-react";
import { PROJECTS } from "../data/projects";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filtered = PROJECTS.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.techStack.some((t) => t.toLowerCase().includes(q))
    );
  });

  const handleCopyClone = (repoUrl: string, id: string) => {
    navigator.clipboard.writeText(`git clone ${repoUrl}.git`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#0f0b24] border border-purple-500/30 shadow-2xl shadow-purple-900/40 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-purple-500/20 bg-[#140e2e]">
          <Search size={18} className="text-purple-400 mr-3 shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a project, tag, or command (e.g. Flutter, APK, Wasm, Physics)..."
            className="w-full bg-transparent text-sm text-white placeholder-purple-300/40 focus:outline-none font-mono"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-purple-300 hover:text-white hover:bg-purple-900/40 transition-colors ml-2 cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 divide-y divide-purple-500/10 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-xs font-mono text-slate-500">
              No matching projects found for &quot;{query}&quot;.
            </div>
          ) : (
            filtered.map((project) => {
              const apkUrl =
                project.apkDownload?.universal ||
                project.apkDownload?.arm64 ||
                project.apkDownload?.unclone;

              return (
                <div
                  key={project.id}
                  className="p-3 rounded-xl hover:bg-purple-950/40 transition-colors flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-purple-950/60 p-1.5 flex items-center justify-center shrink-0 border border-purple-500/20 overflow-hidden">
                      <img
                        src={project.icon}
                        alt=""
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/icons.svg";
                        }}
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm truncate group-hover:text-purple-300 transition-colors">
                          {project.name}
                        </span>
                        <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 bg-purple-950/80 text-purple-300 rounded border border-purple-500/25">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 truncate font-mono">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Quick actions */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    {/* Copy clone command */}
                    <button
                      onClick={() => handleCopyClone(project.repoUrl, project.id)}
                      title="Copy git clone"
                      className="p-2 rounded-lg bg-purple-950/40 hover:bg-purple-900/50 text-purple-300 hover:text-white border border-purple-500/20 transition-colors cursor-pointer"
                    >
                      {copiedId === project.id ? (
                        <Check size={14} className="text-purple-300" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>

                    {/* Direct APK */}
                    {apkUrl && (
                      <a
                        href={apkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Download APK"
                        className="p-2 rounded-lg bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 border border-purple-500/30 transition-colors"
                      >
                        <Download size={14} />
                      </a>
                    )}

                    {/* Live link */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Launch Live"
                        className="p-2 rounded-lg bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 transition-colors"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}

                    {/* Repo link */}
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub"
                      className="p-2 rounded-lg bg-purple-950/40 hover:bg-purple-900/50 text-purple-300 hover:text-white border border-purple-500/20 transition-colors"
                    >
                      <Github size={14} />
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-[#0a0718] border-t border-purple-500/15 flex items-center justify-between text-[11px] font-mono text-purple-300/60">
          <span>Navigate with mouse or keyboard</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};

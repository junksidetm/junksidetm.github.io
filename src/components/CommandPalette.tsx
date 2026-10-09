"use client";

import React, { useState, useEffect } from "react";
import { Search, X, Terminal, ExternalLink, Download, Copy, Check, Github } from "lucide-react";
import { PROJECTS, Project } from "../data/projects";

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
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#0f121a] border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-[#141824]">
          <Search size={18} className="text-purple-400 mr-3 shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a project, tag, or command (e.g. Kotlin, APK, Wasm, Wallet)..."
            className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none font-mono"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-2"
          >
            <X size={16} />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 divide-y divide-white/5 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-xs font-mono text-slate-500">
              No matching projects found for "{query}".
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
                  className="p-3 rounded-xl hover:bg-[#181d2c] transition-colors flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-[#202638] p-1.5 flex items-center justify-center shrink-0 border border-white/5">
                      <img
                        src={project.icon}
                        alt=""
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/logo.svg";
                        }}
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm truncate group-hover:text-purple-300 transition-colors">
                          {project.name}
                        </span>
                        {project.badge && (
                          <span className="text-[9px] font-mono uppercase px-1.5 py-0.2 bg-purple-500/10 text-purple-300 rounded border border-purple-500/20">
                            {project.badge}
                          </span>
                        )}
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
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                    >
                      {copiedId === project.id ? (
                        <Check size={14} className="text-emerald-400" />
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
                        className="p-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 transition-colors"
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
                        className="p-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 transition-colors"
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
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
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
        <div className="p-3 bg-[#0a0c12] border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Navigate with mouse or keyboard</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};

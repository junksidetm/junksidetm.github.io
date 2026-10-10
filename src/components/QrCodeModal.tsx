"use client";

import React, { useState } from "react";
import { X, QrCode, Download, Copy, Check, ExternalLink, Smartphone } from "lucide-react";
import { Project } from "../data/projects";

interface QrCodeModalProps {
  project: Project | null;
  onClose: () => void;
  isOpen?: boolean;
}

export const QrCodeModal: React.FC<QrCodeModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!project || !project.apkDownload) return null;

  const downloadUrl =
    project.apkDownload.universal ||
    project.apkDownload.arm64 ||
    project.apkDownload.unclone ||
    project.repoUrl;

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=10&data=${encodeURIComponent(
    downloadUrl
  )}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(downloadUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md p-6 rounded-3xl bg-[#0f121a] border border-purple-500/30 shadow-2xl shadow-purple-500/20 text-white overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/20 rounded-full blur-2xl -z-10 pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
              <Smartphone size={20} className="text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight text-white">{project.name}</h3>
              <p className="text-xs text-slate-400 font-mono">Scan to Install on Device</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* QR Code Container */}
        <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white rounded-xl mb-5 shadow-inner">
          <img
            src={qrImageUrl}
            alt={`QR Code for ${project.name}`}
            className="w-48 h-48 object-contain"
          />
          <p className="mt-3 text-xs text-slate-700 font-mono font-medium text-center">
            Point your Android camera to download APK directly
          </p>
        </div>

        {/* Package info */}
        <div className="p-3 rounded-xl bg-[#161a26] border border-white/5 mb-5 text-xs font-mono text-slate-300">
          <div className="flex justify-between mb-1">
            <span className="text-slate-500">Package:</span>
            <span className="text-purple-400 font-bold">{project.apkDownload.version || "Production"}</span>
          </div>
          <div className="truncate text-slate-400">
            {downloadUrl}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#1c2233] hover:bg-[#242c42] border border-white/10 text-xs font-semibold transition-all"
          >
            {copied ? (
              <>
                <Check size={14} className="text-emerald-400" />
                <span className="text-emerald-400 font-mono">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={14} className="text-slate-400" />
                <span>Copy Link</span>
              </>
            )}
          </button>

          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold transition-all shadow-lg shadow-purple-600/20"
          >
            <Download size={14} />
            <span>Direct Download</span>
          </a>
        </div>
      </div>
    </div>
  );
};

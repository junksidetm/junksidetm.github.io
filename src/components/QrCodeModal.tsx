"use client";

import React, { useState } from "react";
import { X, Download, Copy, Check, ExternalLink, QrCode } from "lucide-react";
import { Project } from "../data/projects";

export interface QrModalItem {
  name: string;
  url: string;
  label?: string;
  sublabel?: string;
  icon?: string;
}

interface QrCodeModalProps {
  item: QrModalItem | Project | null;
  onClose: () => void;
  isOpen?: boolean;
}

export const QrCodeModal: React.FC<QrCodeModalProps> = ({ item, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!item) return null;

  const isCustomItem = "url" in item && typeof item.url === "string";
  const name = item.name;
  
  let targetUrl = "";
  let sublabel = "Scan to Open on Device";
  let promptText = "Point your phone camera to open link";
  let actionText = "Open Link";

  if (isCustomItem) {
    targetUrl = item.url;
    if (item.sublabel) sublabel = item.sublabel;
    if (item.label) promptText = item.label;
    if (targetUrl.endsWith(".ttf") || targetUrl.endsWith(".apk")) {
      actionText = "Direct Download";
    }
  } else {
    const proj = item as Project;
    targetUrl =
      proj.apkDownload?.universal ||
      proj.apkDownload?.arm64 ||
      proj.apkDownload?.unclone ||
      proj.liveUrl ||
      proj.repoUrl;
    
    if (proj.apkDownload) {
      sublabel = `Package: ${proj.apkDownload.version || "Production"}`;
      promptText = "Point your camera to download APK directly";
      actionText = "Download APK";
    } else {
      sublabel = proj.tagline;
      promptText = "Point your camera to visit web project";
      actionText = "Visit Project";
    }
  }

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=10&data=${encodeURIComponent(
    targetUrl
  )}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(targetUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md p-6 rounded-3xl bg-[#0f0b24] border border-purple-500/30 shadow-2xl shadow-purple-900/40 text-white overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/20 rounded-full blur-2xl -z-10 pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center">
              <QrCode size={20} className="text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight text-white">{name}</h3>
              <p className="text-xs text-purple-300/80 font-mono">{sublabel}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* QR Code Container */}
        <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white mb-5 shadow-inner">
          <img
            src={qrImageUrl}
            alt={`QR Code for ${name}`}
            className="w-48 h-48 object-contain"
          />
          <p className="mt-3 text-xs text-slate-700 font-mono font-medium text-center">
            {promptText}
          </p>
        </div>

        {/* URL Box */}
        <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 mb-5 text-xs font-mono text-purple-200">
          <div className="truncate text-purple-300">
            {targetUrl}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-purple-950/50 hover:bg-purple-900/60 border border-purple-500/30 text-xs font-semibold text-purple-200 hover:text-white transition-all cursor-pointer active:scale-95"
          >
            {copied ? (
              <>
                <Check size={14} className="text-purple-300" />
                <span className="text-purple-300 font-mono">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={14} className="text-purple-400" />
                <span>Copy Link</span>
              </>
            )}
          </button>

          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all shadow-lg shadow-purple-600/30 active:scale-95"
          >
            {targetUrl.endsWith(".ttf") || targetUrl.endsWith(".apk") ? (
              <Download size={14} />
            ) : (
              <ExternalLink size={14} />
            )}
            <span>{actionText}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

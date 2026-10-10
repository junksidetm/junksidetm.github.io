export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: "android" | "web" | "desktop";
  icon: string;
  featured?: boolean;
  liveUrl?: string;
  repoUrl: string;
  apkDownload?: {
    universal?: string;
    arm64?: string;
    unclone?: string;
    version?: string;
    sha256Snippet?: string;
  };
  techStack: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "wallet-flutter",
    name: "Wallet-Flutter",
    tagline: "Designed with M3 Expressive for Flutter",
    description: "A simple wallet app, made with offline first principle. Highly customisable for people who want to track money with style",
    category: "android",
    icon: "/wallet-flutter-logo.svg",
    featured: true,
    liveUrl: "https://junksidetm.github.io/Wallet-Flutter/",
    repoUrl: "https://github.com/junksidetm/Wallet-Flutter",
    apkDownload: {
      arm64: "https://github.com/junksidetm/Wallet-Flutter/releases/latest/download/wallet-arm64-v8a.apk",
      universal: "https://github.com/junksidetm/Wallet-Flutter/releases/latest/download/wallet-universal.apk",
      version: "Latest Multi-ABI",
      sha256Snippet: "Full ABI Split (arm64-v8a, armeabi-v7a, x86_64)",
    },
    techStack: ["Dart", "Flutter", "Material 3 Expressive", "Offline-First"],
  },
  {
    id: "google-emoji-3d",
    name: "Google Emoji 3D",
    tagline: "High-Resolution 3D Rendered Asset Suite",
    description: "Optimized collection of Google 3D Fluent animated and high-resolution emoji assets formatted for web and mobile developers with rolling TrueType font compilation.",
    category: "web",
    icon: "/emoji3d-512.png",
    featured: true,
    liveUrl: "https://github.com/junksidetm/Google-Emoji-3D/releases/latest/download/NotoColorEmoji.ttf",
    repoUrl: "https://github.com/junksidetm/Google-Emoji-3D",
    apkDownload: {
      universal: "https://github.com/junksidetm/Google-Emoji-3D/releases/latest/download/NotoColorEmoji.ttf",
      version: "Rolling Release TTF",
      sha256Snippet: "OpenType TrueType sbix strike collection",
    },
    techStack: ["3D Rendering", "OpenType TTF", "Unicode 15.1", "Fluent M3"],
  },
  {
    id: "physics-wonderland",
    name: "Physics Wonderland",
    tagline: "Interactive 2D/3D Particle & Collision Sandbox",
    description: "In-browser physics engine featuring gravity simulation, rigid body collisions, cloth simulation, and real-time stress testing.",
    category: "web",
    icon: "/instagram-logo.svg",
    featured: true,
    liveUrl: "https://junksidetm.github.io/physics-wonderland/",
    repoUrl: "https://github.com/junksidetm/physics-wonderland",
    techStack: ["WebGL", "JavaScript", "Canvas 2D", "Physics Solver"],
  },
  {
    id: "vector-drawable-nextjs",
    name: "Vector Drawable Next.js",
    tagline: "Android Vector Drawable to SVG Live Studio",
    description: "In-browser XML compiler and visual playground converting Android Vector Drawable assets into clean SVG with CodeMirror syntax highlighting and instant preview.",
    category: "web",
    icon: "/vectordrawable-logo.png",
    featured: true,
    liveUrl: "https://junksidetm.github.io/vector-drawable-nextjs/",
    repoUrl: "https://github.com/junksidetm/vector-drawable-nextjs",
    techStack: ["Next.js", "React 18", "CodeMirror", "SVG Engine"],
  },
  {
    id: "wasm-runtime",
    name: "Wasm Engine",
    tagline: "High-Performance WebAssembly Runtime",
    description: "Cutting-edge WebAssembly demonstration compiling low-level computation into near-native web execution with hardware acceleration and zero memory bloat.",
    category: "web",
    icon: "/wasm-logo.svg",
    featured: true,
    liveUrl: "https://junksidetm.github.io/wasm/",
    repoUrl: "https://github.com/junksidetm/wasm",
    techStack: ["WebAssembly", "C / Rust", "Canvas API", "SIMD"],
  },
  {
    id: "instafel",
    name: "Instafel (Unclone)",
    tagline: "Optimized Instagram Experience",
    description: "Enhanced Android client with ad blocking, uncloned package support, telemetry removal, and performance tuning for power users.",
    category: "android",
    icon: "/instagram-logo.svg",
    repoUrl: "https://github.com/junksidetm/instafel",
    apkDownload: {
      unclone: "https://github.com/junksidetm/instafel/releases/download/v451.0.0.0.70/instafel-v451.0.0.0.70-arm64-v8a-unclone.apk",
      version: "v451.0.0.0.70",
      sha256Snippet: "arm64-v8a unclone production package",
    },
    techStack: ["Android Smali", "Reversing", "ARM64", "Security"],
  },
  {
    id: "android-battery-checker",
    name: "Android Battery Unrestricted Checker",
    tagline: "Instant Background & Power Restriction Auditor",
    description: "Diagnostic Android app verifying battery optimization bypasses and unrestricted background execution permissions. Shizuku/Shevery compatible app.",
    category: "android",
    icon: "/battery-logo.svg",
    liveUrl: "https://junksidetm.github.io/Android-Battery-Unrestricted-Checker/",
    repoUrl: "https://github.com/junksidetm/Android-Battery-Unrestricted-Checker",
    apkDownload: {
      universal: "https://github.com/junksidetm/Android-Battery-Unrestricted-Checker/releases/latest/download/Android-Battery-Unrestricted-Checker-universal.apk",
      version: "Latest Universal",
      sha256Snippet: "Universal APK release verified via GitHub Actions",
    },
    techStack: ["Kotlin", "Android SDK", "Shizuku", "BatteryManager"],
  },
  {
    id: "winforge",
    name: "WinForge",
    tagline: "Windows Performance & System Automation Suite",
    description: "Automated PowerShell and native batch pipeline for debloating, telemetry suppression, registry optimization, and workstation acceleration.",
    category: "desktop",
    icon: "/winforge-logo.svg",
    liveUrl: "https://junksidetm.github.io/WinForge/",
    repoUrl: "https://github.com/junksidetm/WinForge",
    techStack: ["PowerShell 7", "Windows API", "Batch", "Registry Engine"],
  },
  {
    id: "brave-origin",
    name: "Brave Origin Profile Windows/MacOS",
    tagline: "Pre-Configured Hardened Privacy Profile for Windows & macOS",
    description: "Automated installer and profile hardening engine bundling Brave Browser with configured uBlock Origin rules, fingerprint protection, and anti-telemetry policies.",
    category: "desktop",
    icon: "/Brave-origin-Profile-Light.svg",
    liveUrl: "https://junksidetm.github.io/Brave-Origin-Profile-Windows/",
    repoUrl: "https://github.com/junksidetm/Brave-Origin-Profile-Windows",
    techStack: ["Windows (PowerShell)", "macOS (zsh)", "Brave Engine", "Privacy Hardening"],
  },
  {
    id: "rivo-phone",
    name: "Rivo Phone App",
    tagline: "Pure Material 3 Phone & Dialer Experience",
    description: "Clean, responsive Android phone dialer and contacts application built with Jetpack Compose following strict Material 3 Expressive guidelines.",
    category: "android",
    icon: "/Phone-AppLogo-Green.svg",
    repoUrl: "https://github.com/junksidetm/RivoPhoneApp",
    apkDownload: {
      universal: "https://github.com/junksidetm/RivoPhoneApp/releases/download/v2.2.412/RivoPhone-v2.2.412.apk",
      version: "v2.2.412",
      sha256Snippet: "RivoPhone production signed release",
    },
    techStack: ["Kotlin", "Jetpack Compose", "TelecomManager", "Room DB"],
  },
  {
    id: "gboard-patches",
    name: "Gboard Patches",
    tagline: "Customization & Layout Themes for Gboard",
    description: "System-level RRO overlay mods, Morphe patches, color schemes, and rounded key cap customizations for Google Keyboard on Android.",
    category: "android",
    icon: "/gboard-logo.svg",
    repoUrl: "https://github.com/junksidetm/Gboard-patches",
    techStack: ["Magisk", "Morphe", "RRO Overlays", "Theming"],
  },
];

<div align="center">
  <img src="public/logo.svg" alt="Atelier Forge Logo" width="84" height="84" />
  <h1>Atelier — Software Forge & Ecosystem Hub</h1>
  <p><b>The centralized showcase and dynamic portfolio for @mrdarksidetm's software ecosystem.</b></p>
  <p>
    <a href="https://junksidetm.github.io/"><strong>🚀 Visit Live Forge on GitHub Pages</strong></a>
  </p>
  <p>
    <a href="https://github.com/junksidetm/junksidetm.github.io"><img src="https://img.shields.io/badge/GitHub-Main-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub Main" /></a>
    <a href="https://codeberg.org/mrdarksidetm/pages"><img src="https://img.shields.io/badge/Codeberg-Mirror-2185d0?style=flat-square&logo=codeberg&logoColor=white" alt="Codeberg Mirror" /></a>
    <a href="https://gitlab.com/mrdarksidetm/mrdarksidetm.github.io"><img src="https://img.shields.io/badge/GitLab-Mirror-fc6d26?style=flat-square&logo=gitlab&logoColor=white" alt="GitLab Mirror" /></a>
    <a href="https://github.com/junksidetm/junksidetm.github.io/actions"><img src="https://github.com/junksidetm/junksidetm.github.io/actions/workflows/pages/pages-build-deployment/badge.svg" alt="Pages Deployment" /></a>
    <img src="https://img.shields.io/badge/Design-Material_3_Expressive-0061A4?style=flat-square" alt="Material 3 Expressive" />
    <img src="https://img.shields.io/badge/Style-Vector_Drawable_Theme-269bff?style=flat-square" alt="Vector Drawable Theme" />
    <img src="https://img.shields.io/badge/Auto--Sync-GitHub_REST_API-success?style=flat-square" alt="GitHub API Auto-Sync" />
    <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square" alt="License: MIT" /></a>
  </p>
</div>

---

## 🌟 Overview

**Atelier** is the official central portal and software forge for all applications, utilities, and system toolkits engineered by **Abhijeet Yadav** ([@junksidetm](https://github.com/junksidetm)).

Built from the ground up to follow the sleek **Vector Drawable** dark Material 3 Expressive design language (`#121212` canvas, `#1e1e1e` surface containers, `#269bff` electric blue accents, and `DM Sans` + `JetBrains Mono` typography), the site features:
1. **Curated Showcase**: Detailed interactive presentation of all flagship mobile, web, and desktop products.
2. **Live GitHub Ecosystem Auto-Sync**: Queries the GitHub REST API (`https://api.github.com/users/mrdarksidetm/repos`) directly at runtime to automatically discover and list any new repositories created or updated by `@mrdarksidetm` without requiring manual code redeployments.
3. **Local-First Speed**: Integrated LocalStorage client caching ensures instant page loads with zero layout shifts or API rate limit bottlenecks.

---

## 🚀 Featured Software Suite

| Project | Platform | Design Language & Stack | Live Experience |
| :--- | :--- | :--- | :--- |
| **[VectorDrawable to SVG](https://github.com/junksidetm/vector-drawable-nextjs)** | Web Utility | Next.js 13, React 18, CodeMirror 6 | [Live Web App](https://junksidetm.github.io/vector-drawable-nextjs/) |
| **[Wallet (Native Compose)](https://github.com/junksidetm/Wallet)** | Native Android | Jetpack Compose (BOM 2024.12.01), Room SQLite, Canvas Hero | [Explore Wallet](https://junksidetm.github.io/Wallet/) |
| **[Wallet-Flutter](https://github.com/junksidetm/Wallet-Flutter)** | Cross-Platform | Flutter 3.x, Isar Embedded NoSQL, Riverpod | [Explore Showcase](https://junksidetm.github.io/Wallet-Flutter/) |
| **[Wasm](https://github.com/junksidetm/wasm)** | Native Android | WhatsApp & Instagram Parsers, AudioPlayer, SAF | [Explore Wasm](https://junksidetm.github.io/wasm/) |
| **[Battery Mode Checker](https://github.com/junksidetm/Android-Battery-Unrestricted-Checker)** | Native Android | Shizuku Privileged Binder IPC, Compose Canvas | [Explore ABUC](https://junksidetm.github.io/Android-Battery-Unrestricted-Checker/) |
| **[WinForge](https://github.com/junksidetm/WinForge)** | Windows 11 | PowerShell, AI/Recall Purge, Game Mode, Winget | [Launch WinForge](https://junksidetm.github.io/WinForge/) |
| **[Brave Origin Unlocker](https://github.com/junksidetm/Brave-Origin-Unlocker-Windows)** | Windows Automation | Native PowerShell, Local State JSON Patcher | [Launch Guide](https://junksidetm.github.io/Brave-Origin-Unlocker-Windows/) |
| **[Google Emoji 3D](https://github.com/junksidetm/Google-Emoji-3D)** | Font Mod / System | OpenType sbix TrueType (TTF), 3,900+ 3D Assets, Rolling Release | [Download TTF](https://github.com/junksidetm/Google-Emoji-3D/releases/latest) |
| **[Gboard Patches](https://github.com/junksidetm/Gboard-patches)** | Keyboard Mod | Morphe Source (`.mpp`), Material 3 Expressive UI, Custom TTF Font, Rambler Voice | [Explore Patches](https://github.com/junksidetm/Gboard-patches/releases/latest) |
| **[June](https://github.com/junksidetm/June)** | Native Android | Kotlin, Jetpack Compose, Multimedia Journaling | [GitHub Repository](https://github.com/junksidetm/June) |

---

## ⚡ Dynamic Live GitHub Ecosystem

The master hub automatically syncs with GitHub's REST API at runtime:
- **Zero-Code Updates**: Whenever a new repository is created under the `@mrdarksidetm` account, it is dynamically detected, categorized, and rendered as a Vector-Drawable styled card.
- **Metadata Extraction**: Dynamically parses repository name, description, primary language badge, star count, updated date, and live deployment links.
- **Segmented Filter Controls**: Filter seamlessly between `All Products`, `Native Android`, `Flutter`, `Web & Converters`, and `System Toolkits` with live search debouncing.

---

## 🛠️ Design Tokens & Architecture

- **Canvas Background**: `#121212`
- **Surface Containers**: `#1e1e1e` (elevated: `#262626`)
- **Primary Accent**: `#269bff` (container: `rgba(38, 155, 255, 0.12)`)
- **Hairline Borders**: `rgba(255, 255, 255, 0.08)`
- **Typography**: Google Fonts [DM Sans](https://fonts.google.com/specimen/DM+Sans) (Headlines & body) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Code, tags, indicators)
- **Border Radii**: Cards (`24px`), Badges & Buttons (`9999px` pills)
- **Deployment**: Automatic GitHub Pages hosting from `main` root `/`

---

## 👤 Developer & Philosophy

Built with ❤️ by **Abhijeet Yadav** ([@junksidetm](https://github.com/junksidetm)).

All software in this forge follows the **Local-First, Privacy-First Mandate**:
- Zero telemetry and zero cloud dependencies.
- Native performance with 60–120 FPS hardware acceleration.
- Bounded scope with uncompromising single-purpose utility precision.

---

## 🌐 Source Mirrors

- **Main (GitHub)**: [github.com/junksidetm/junksidetm.github.io](https://github.com/junksidetm/junksidetm.github.io)
- **Mirror (Codeberg)**: [codeberg.org/mrdarksidetm/pages](https://codeberg.org/mrdarksidetm/pages)
- **Mirror (GitLab)**: [gitlab.com/mrdarksidetm/mrdarksidetm.github.io](https://gitlab.com/mrdarksidetm/mrdarksidetm.github.io)

---

## 📄 License

MIT — See [LICENSE](LICENSE) for details.

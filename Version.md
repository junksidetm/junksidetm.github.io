# Version & Changelog — MrDarksideTM GitHub Pages Portfolio Hub

The absolute source of truth for the project's evolution and changelog history.
Strict Append Pattern: All updates are permanently appended to the bottom.

---

## Libraries & Tools
- HTML5 / CSS3 (Material 3 Expressive Design System)
- Typography: DM Sans & JetBrains Mono
- GitHub REST API (Dynamic Repository & Ecosystem Auto-Sync)
- Vite / React / TypeScript (Source Foundation)

---

## Log Entries

### [2026-09-20 11:05:00 IST] - Master Hub Overhaul to Vector Drawable Design Language & Live Auto-Sync
- **Author**: mrdarksidetm
- **Status**: Completed complete redesign and deployment of the master portfolio hub.
- **Architectural & Design Enhancements**:
  - Transitioned the entire master GitHub Pages site (`mrdarksidetm.github.io`) to the **Vector Drawable** dark Material 3 Expressive design language.
  - Implemented standard color tokens: `--vd-color-bg: #121212`, `--vd-color-surface: #1e1e1e`, `--vd-color-primary: #269bff`, `--vd-color-stroke: rgba(255, 255, 255, 0.08)`.
  - Implemented dual-font typography with Google Fonts `DM Sans` for headlines/body and `JetBrains Mono` for tags, badges, and terminal snippets.
  - Built comprehensive featured showcase cards for all flagship products:
    - **VectorDrawable to SVG** (Next.js web utility)
    - **Wallet (Native Jetpack Compose)** (Android, Room SQLite, 8 Financial Hubs, Canvas Hero)
    - **Wallet-Flutter** (Flutter, Isar DB, Riverpod)
    - **Wasm** (WhatsApp & Instagram chat archive manager, in-app audio player)
    - **Battery Mode Checker (ABUC)** (Doze auditor, Shizuku rootless privilege bridge)
    - **WinForge** (Windows 11 Recall purge & gaming optimization toolkit)
  - Built real-time **Dynamic Live GitHub Ecosystem** section:
    - Automatically fetches all public repositories via GitHub REST API (`https://api.github.com/users/mrdarksidetm/repos`).
    - Dynamically renders any newly created or updated repositories with star counts, language tags, and direct links without requiring manual site re-deployments.
    - Added LocalStorage caching with background re-fetch to protect against GitHub API rate limits.
  - Added interactive segmented category filter buttons (`All Products`, `Native Android`, `Flutter`, `Web & Converters`, `System Toolkits`) and real-time search input.
  - Added 1-tap clipboard copy terminal snippet for `npx vector-drawable-svg` with animated checkmark feedback.
  - Redesigned `about.html` with matching Vector Drawable aesthetic and developer specs.
- **Files Created / Modified**:
  - `index.html`
  - `about.html`
  - `public/wasm-logo.png`
  - `public/battery-logo.svg`
  - `public/vectordrawable-logo.png`
  - `Version.md`
- **Verification**: Verified syntax and local file integrity.

### [2026-09-20 12:55:00 IST] - Standardized SVG Brand Asset Matrix & GitHub Identity Integration
- **Author**: mrdarksidetm
- **Status**: Completed & Deployed
- **Architectural & Design Enhancements**:
  - Overhauled `README.md` with complete product matrix, design architecture tokens, and automated GitHub REST API auto-sync documentation.
  - Standardized crisp vector SVG logos across all flagship showcase cards (`battery-logo.svg`, `winforge-logo.svg`, `wallet-logo.svg`, `wallet-flutter-logo.svg`, `wasm-logo.svg`).
  - Calibrated SVG viewBoxes and contrast ratios to ensure uniform visual density and dark-theme legibility across cards.
  - Integrated official GitHub SVG logos beside all GitHub text occurrences across navbar, product cards, dynamic live repository listings, profile links, and footer.
- **Files Created / Modified**:
  - `README.md`
  - `index.html`
  - `about.html`
  - `public/battery-logo.svg`
  - `public/winforge-logo.svg`
  - `public/wallet-logo.svg`
  - `public/wallet-flutter-logo.svg`
  - `public/wasm-logo.svg`
  - `Version.md`
- **Verification**: Verified syntax and local file integrity.

### [2026-09-20 13:25:00 IST] - Streamline Live Ecosystem Tiles & Terminal Quick-Start Retirement
- **Author**: mrdarksidetm
- **Status**: Completed & Deployed
- **Architectural & Design Enhancements**:
  - Removed the standalone Developer Terminal Quick-Start command card (`vd-cli-card`) and associated clipboard copy script.
  - Redesigned the **Live GitHub Ecosystem** section with compact, streamlined cards (`.vd-eco-card`, `.vd-ecosystem-grid`):
    - Replaced the large flagship product grid with a dense auto-filling responsive grid (`minmax(260px, 1fr)`).
    - Reduced padding, typography scale, and iconography to compact squircle tiles.
    - Removed the secondary "View Project" button from dynamic cards, standardizing on a clean, single-action GitHub repository button spanning full width with official SVG GitHub branding.
    - Updated dynamic card search filter queries to target `.vd-eco-card` elements seamlessly.
- **Files Created / Modified**:
  - `index.html`
  - `Version.md`
- **Verification**: Verified syntax, responsive layout, search filter bindings, and local file integrity.

### [2026-09-21 20:51:00 IST] - Add Google Emoji 3D and Gboard Patches Flagship Showcase Cards
- **Author**: mrdarksidetm
- **Status**: Completed & Deployed
- **Architectural & Design Enhancements**:
  - Integrated Google Emoji 3D into the flagship product grid with custom vector emoji logo (public/emoji3d-logo.svg), highlighting Android 17 volumetric 3D font compilation, sbix color strikes, and rolling TrueType release.
  - Integrated Gboard Patches into the flagship product grid with custom vector keyboard logo (public/gboard-logo.svg), highlighting Material 3 Expressive UI, rootless custom 3D emoji font loading, Pixel Rambler voice typing, and Morphe patch integration.
  - Added direct links to releases and GitHub repositories.
- **Files Created / Modified**:
  - index.html (Modified)
  - public/emoji3d-logo.svg (Created)
  - public/gboard-logo.svg (Created)
  - Version.md (Appended)
- **Verification**: Verified syntax and layout responsiveness.

### [2026-09-22 07:51:30 IST] - Featured Software Suite Matrix Documentation Update
- **Author**: mrdarksidetm
- **Status**: Completed & Synced
- **Architectural & Design Enhancements**:
  - Updated the official `README.md` software suite table to include Google Emoji 3D (Font Mod / System OpenType sbix rolling release) and Gboard Patches (Morphe keyboard mod with Material 3 Expressive UI and Custom TTF font loader).
  - Synchronized project links directly with rolling latest release endpoints.
- **Files Created / Modified**:
  - `README.md` (Modified)
  - `Version.md` (Appended)
- **Verification**: Verified Markdown link structure and table alignment.


### [2026-09-26 01:25:00 IST] - Brave Origin Unlocker Windows Integration & Flagship Filter Auto-Sync
- **Author**: mrdarksidetm
- **Status**: Completed & Deployed
- **Architectural & Design Enhancements**:
  - Integrated Brave Origin Unlocker Windows into the flagship products grid under "System Toolkits" with custom vector logo asset (`public/brave-unlocker-logo.svg`).
  - Added primary link to the new official GitHub Pages documentation guide (`https://mrdarksidetm.github.io/Brave-Origin-Unlocker-Windows/`) and GitHub repository.
  - Added `brave-origin-unlocker-windows`, `google-emoji-3d`, and `gboard-patches` to `KNOWN_FLAGSHIPS` filter in client-side script to avoid duplication in the dynamic live GitHub repositories ecosystem.
  - Updated the official `README.md` software suite table to include Brave Origin Unlocker Windows.
- **Files Created / Modified**:
  - `public/brave-unlocker-logo.svg` (Created)
  - `index.html` (Modified)
  - `README.md` (Modified)
  - `Version.md` (Appended)
- **Verification**: Verified HTML semantic structure, CSS styling, filter functionality, and live GitHub Pages endpoint links.

### [2026-09-27 12:00:00 IST] - Codeberg Pages Migration & Dual Ecosystem Architecture
- **Author**: mrdarksidetm
- **Status**: Completed & Prepared
- **Architectural & Design Enhancements**:
  - Configured repository migration to Codeberg as `pages` repository to serve as the master user pages domain (`https://mrdarksidetm.codeberg.page`).
  - Added support for local `pages` deployment branch to satisfy Codeberg Pages git-pages daemon requirements.
  - Aligned API endpoint architecture for live repository auto-sync via Codeberg REST API (`https://codeberg.org/api/v1/users/mrdarksidetm/repos`).
  - Configured Git remote `codeberg` (`git@codeberg.org:mrdarksidetm/pages.git`).
- **Files Modified**:
  - `Version.md` (Appended)
- **Verification**: Verified branch structure and git remotes.

## [2026-10-01 12:47:00 IST] - README Documentation GitHub Links Migration
- **Action**: Updated README.md documentation links, badges, and author references to point to active GitHub account `junksidetm` while preserving GitLab and Codeberg mappings.
- **Files Modified**:
  - `README.md`
  - `Version.md`
- **Status**: 100% (Completed & Synced)

## [2026-10-08 18:05:00 IST] - Atelier Ecosystem Source Mirrors Integration
- **Action**: Added GitHub (Main), Codeberg (Mirror), and GitLab (Mirror) repository badges and dedicated Source Mirrors section in README.md.
- **Files Modified**:
  - `README.md`
  - `Version.md`
- **Status**: 100% (Completed & Synced)

## [2026-10-09 19:28:00 IST] - Tri-Platform Automated CI/CD Pages Deployment
- **Action**: Established automated tri-platform Pages build and deployment across GitHub Pages, GitLab Pages, and Codeberg Pages.
- **Components Added**:
  - `.github/workflows/deploy.yml`: Autonomous GitHub Pages CI/CD utilizing pnpm and Vite.
  - `.gitlab-ci.yml`: Containerized Node 22 build pipeline deploying to GitLab Pages.
  - `.forgejo/workflows/pages.yml`: Codeberg Actions workflow publishing Vite build to `pages` branch.
  - `Version.md`: Appended tracking entry.
- **Status**: 100% (Completed & Synced)

## [2026-10-09 22:15:00 IST] - Ecosystem Pages Navigation Migration
- **Action**: Migrated flagship showcase URLs in index.html from `mrdarksidetm.github.io` to `junksidetm.github.io`.
- **Files Modified**:
  - `index.html`: Updated all flagship application launch links to point to active `junksidetm.github.io` hosts.
  - `Version.md`: Appended ledger entry.
- **Status**: 100% (Completed)

## [2026-10-09 23:55:00 IST] - Complete Rebuild with Next.js 14, Material 3 Expressive & High-Craft Architecture
- **Action**: Completely restructured and rebuilt `junksidetm.github.io` from scratch as a Next.js 14 App Router project with Tailwind CSS, Material 3 Expressive design tokens, and static export CI deployment.
- **Repository Isolation**:
  - Renamed local workspace directory to `junksidetm.github.io`.
  - Removed mirror remotes (`codeberg`, `gitlab`) to isolate this repository exclusively to `junksidetm/junksidetm.github.io`.
  - Removed `.gitlab-ci.yml` and `.forgejo/` configurations.
- **Components & Architecture Added**:
  - `package.json`: Configured Next.js 14, React 18, Tailwind CSS, Lucide React, and pnpm package management.
  - `next.config.mjs`: Configured `output: 'export'`, `trailingSlash: true`, and unoptimized image export for GitHub Pages.
  - `tailwind.config.ts` & `src/app/globals.css`: Implemented Material 3 Expressive color palette, glass panels, and mesh backdrops.
  - `src/data/projects.ts`: Comprehensive data catalog of all 13 projects with verified APK release and live showcase URLs.
  - `src/components/Navbar.tsx`: Sticky glass navigation with search modal trigger and live deployment status.
  - `src/components/Hero.tsx`: Editorial typography, live statistics banner, and real-time category switcher.
  - `src/components/ProjectCard.tsx`: Interactive bento card featuring direct APK downloads, live links, and QR code triggers.
  - `src/components/QrCodeModal.tsx`: Dynamic QR code generator modal enabling phone camera scanning for instant APK installation.
  - `src/components/CommandPalette.tsx`: Keyboard-driven spotlight launcher (`⌘K` / `/`) with one-click git clone copy.
  - `src/components/Footer.tsx`: Cryptographic SSH commit verification documentation and social links.
  - `src/app/page.tsx`: Flagship dual-architecture spotlight (Compose vs Flutter) and responsive bento grid.
  - `src/app/about/page.tsx`: System engineering profile, principles, and hardware specification documentation.
  - `.github/workflows/deploy.yml`: Autonomous cloud-based pnpm CI/CD building static export and deploying directly to GitHub Pages.
- **Status**: 100% (Completed)

## [2026-10-09 23:58:00 IST] - CI Workflow Optimization for Remote pnpm Resolution
- **Action**: Removed `cache: "pnpm"` requirement from `actions/setup-node@v4` in `.github/workflows/deploy.yml` and upgraded runner Node runtime to Node 22 to allow autonomous online lockfile resolution.
- **Files Modified**:
  - `.github/workflows/deploy.yml`
  - `Version.md`
- **Status**: 100% (Completed)

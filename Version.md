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

## [2026-10-10 00:04:00 IST] - Live Repository Slug Harmonization
- **Action**: Harmonized showcase and repository URLs in `src/data/projects.ts` to exactly mirror live GitHub Pages paths (`/wasm/` lowercase and `/Brave-Origin-Unlocker-Windows/`).
- **Files Modified**:
  - `src/data/projects.ts`
  - `Version.md`
- **Status**: 100% (Completed)

## [2026-10-10 15:15:00 IST] - Documentation & Codeium Ecosystem Branding
- **Action**: Ingested official Codeium logo and banner brand assets under public/Codeium, and updated README.md branding.
- **Files Modified**:
  - `public/Codeium/`
  - `README.md`
  - `Version.md`
- **Status**: 100% (Completed & Synced)

## [2026-10-10 15:25:00 IST] - Codeium Brand Redesign, Cosmic Motion & Deep-Dive Experience
- **Action**: Completely overhauled the portfolio website according to Darkside Studio & Codeium design guidelines. Built a full-screen hero landing experience featuring official vector SVG banner branding, an interactive 60fps cosmic canvas animation with purple/red flare spotlights, a circular developer profile avatar with an animated multi-color halo, aesthetic telemetry lines, prominent GitHub repository access, a smooth "Let's Deep Dive" transition mechanism that reveals all projects and features below the fold, and an exhaustive footer with multi-column sitemap, copyright, and side brand banner. Fully eliminated all legacy "Forge" and "Atelier" references across the codebase.
- **Components Added**:
  - `src/components/CosmicBackground.tsx`: High-performance 60fps canvas particle constellation network with interactive mouse physics and dual purple/red breathing flare lighting.
- **Components Modified**:
  - `src/components/Hero.tsx`: Redesigned as a full-viewport immersive hero with SVG banner at top-left, developer avatar in glowing circular frame, aesthetic telemetry typography, GitHub source access, and "Let's Deep Dive" button.
  - `src/components/Navbar.tsx`: Ingested Codeium square brand logo, Darkside Studio badging, search trigger, and GitHub link.
  - `src/components/Footer.tsx`: Built multi-column sitemap, official Codeium banner at the side, square logo, and 2026 copyright notice.
  - `src/app/page.tsx`: Integrated full-screen hero landing, smooth below-to-up reveal transition upon clicking "Let's Deep Dive", and dual-architecture flagship showcase.
  - `src/app/layout.tsx`: Updated metadata, OpenGraph tags, and favicon to Codeium.
  - `src/app/about/page.tsx`: Purged legacy naming.
  - `src/data/projects.ts`: Cleaned taglines.
  - `tailwind.config.ts`: Added slow-spin and motion keyframes.
  - `README.md`: Updated ecosystem hub documentation.
  - `Version.md`: Appended tracking entry.
- **Status**: 100% (Completed & Synced)

## [2026-10-10 15:35:00 IST] - Pages Workflow Engine Switch & TypeScript Contract Harmonization
- **Action**: Converted GitHub Pages deployment engine from legacy branch/Jekyll mode (`build_type=workflow`) to GitHub Actions Next.js static deployment, resolving automatic fallback conversion of `README.md` to homepage. Harmonized TypeScript prop types on `QrCodeModal` (`isOpen?: boolean`), streamlined `CommandPalette` invocation in `page.tsx`, and cleaned unused icon dependencies across hero components.
- **Components Modified**:
  - `src/components/QrCodeModal.tsx`
  - `src/components/Hero.tsx`
  - `src/app/page.tsx`
  - `Version.md`
- **Status**: 100% (Completed & Synced)

## [2026-10-10 15:45:00 IST] - Viewport Scroll Flow Restoration & Static Asset Alias Routing
- **Action**: Restored natural viewport scroll flow by removing conditional `hidden` (`display:none`) that froze document scrolling. The Hero retains full 100vh height concealing the projects below the fold until the user scrolls or clicks "Let's Deep Dive" for a fluid smooth-scroll transition. Created clean, URL-safe asset aliases in `public/` (`codeium-banner.svg`, `codeium-logo.svg`, `codeium-logo-white.svg`) preventing HTTP 400 space-encoding fetch failures. Amplified CosmicBackground flare and particle luminescence.
- **Components Modified**:
  - `src/app/page.tsx`
  - `src/components/Hero.tsx`
  - `src/components/Navbar.tsx`
  - `src/components/Footer.tsx`
  - `src/components/CosmicBackground.tsx`
  - `src/app/layout.tsx`
  - `public/codeium-banner.svg`
  - `public/codeium-logo.svg`
  - `Version.md`
- **Status**: 100% (Completed & Synced)

## [2026-10-10 19:05:00 IST] - Pre-Optimization Baseline Synchronization
- Action: Synchronized current workspace state, assets, and initial layout modifications to origin main ahead of adaptive layout overhaul.
- Files Modified:
  - `src/app/page.tsx`
  - `src/components/CosmicBackground.tsx`
  - `src/components/Hero.tsx`
  - `src/components/Navbar.tsx`
  - `src/components/ProjectCard.tsx`
  - `public/Darkside Studio Logo - Balck.png`
  - `public/darksidestudiobanner.png`
  - `Version.md`
- Status: 100% (Completed & Synced)

## [2026-10-10 19:16:30 IST] - Screen-Adaptive Overhaul, Masterpieces Spotlight & Minimal Pure-Purple PS Architecture
- **Action**: Completely revamped user experience and layout responsiveness across phones, tablets, and desktops.
  - **Main View / Landing Area (MVA)**:
    - Anchored `(GitHub Logo) GitHub` button at top-left, permanently replacing the legacy `Ecosystem Active` status badge.
    - Repositioned Codeium banner to top-right with balanced responsive scaling.
    - Softened dual-flare ambient lighting in MVA for a subtle, elegant red and purple atmosphere.
    - Updated primary title to "Building the future from Chaos to Order".
    - Crafted professional subline: "Writing chaos, making mods, refining low-level systems through raw noise until seamless, dependable order emerges and is served directly to you. From your friends over the internet."
    - Removed telemetry badges (`120 FPS NATIVE COMPOSE`, `MATERIAL 3 EXPRESSIVE`, `VERIFIED SSH SIGNED`, `OFFLINE-FIRST ROOM DB`) and repository mirror action buttons (`View Source Code`, `Codeberg`, `GitLab`).
    - Established "Let's Deep Dive" button as the primary, most prominent element with dynamic height adaptation across all screen viewports.
  - **All Project Showcase (PS)**:
    - Implemented a 30% opacity geometric square grid background pattern (`stroke="rgba(168, 85, 247, 0.30)"`) coupled with floating rotating geometric animation accents.
    - Engineered gradual scroll transition extinguishing crimson/red flares and particles completely upon entering PS, transitioning to a strict, pure purple color palette.
    - Installed blurred/distorted top bar (`Navbar.tsx`) featuring strictly the untinted Codeium brand logo on the left and a shortcut-enabled search button (`Ctrl K` / `⌘K`) on the right, purging all other elements.
    - Replaced the Dual Wallet Architecture section with "Some of our Master Pieces":
      - Header: "Some of our Master Pieces" with subtitle "Every artist has 1 masterpiece they are really proud of. We are there and for now we have two of the masterpieces".
      - Featured Masterpiece 1: Google Emoji 3D with direct TTF font download and QR code targeting the TrueType file.
      - Featured Masterpiece 2: Physics Wonderland with direct website launcher and QR code targeting the live interactive sandbox website.
  - **Software Directory & Cards**:
    - Streamlined badges across cards: removed custom pills (`flagship native`, `web tool`, `engine`), retaining strictly platform identifiers (`web`, `android`, `desktop`).
    - Removed performance metric row (`stats.label` / `stats.value`, e.g., "Design: M3 Expressive", "Conversion: Zero Latency") from all cards.
    - Calibrated all icon and logo containers to ensure perfect aspect-ratio centering and fitted bounds without overflow.
    - Removed Wallet (Native Compose) entry; promoted Wallet (Flutter) with updated M3 Expressive tagline and offline-first style description.
    - Updated Google Emoji 3D icon to official Google Noto 3D high-resolution asset (`emoji3d-512.png`).
    - Added Morphe patch integration mention to Gboard Patches.
    - Added Shizuku/Shevery compatibility notice to Android Battery Unrestricted Checker.
  - **Footer & Navigation**:
    - Purged cryptographic commit verification badge and all related text mentions.
    - Removed `Signed with ED25519 • Host 4 GB RAM Guarded`.
    - Integrated floating, fixed back-to-top arrow button (`ArrowUp`) that dynamically hides on MVA and appears upon scrolling into PS.
    - Replaced Codeium copyright logo with official Darkside Studio Black Logo (`darkside-studio-logo-black.png`).
- **Files Modified / Created**:
  - `src/app/page.tsx`
  - `src/components/Hero.tsx`
  - `src/components/Navbar.tsx`
  - `src/components/CosmicBackground.tsx`
  - `src/components/ProjectCard.tsx`
  - `src/components/QrCodeModal.tsx`
  - `src/components/CommandPalette.tsx`
  - `src/components/Footer.tsx`
  - `src/data/projects.ts`
  - `public/darkside-studio-logo-black.png`
  - `public/emoji3d-512.png`
  - `public/emoji3d-logo.png`
  - `Version.md`
- **Status**: 100% (Completed & Synced)

## [2026-10-10 19:24:30 IST] - Toolbar Branding Simplification, Footer Developer Profile & Multi-OS Brave Matrix
- **Action**: Further refined brand consistency, navigation headers, mirror representation, and dual-OS profile architecture.
  - **Toolbar & Page Metadata**:
    - Simplified toolbar title to strictly "Codeium" with official logo in `Navbar.tsx`.
    - Updated HTML document metadata title and OpenGraph site name to strictly "Codeium" in `src/app/layout.tsx`.
  - **Main View Area (MVA) Optimization**:
    - Relocated developer circular photo from MVA to the footer section, allowing the landing headline, brand tagline, and "Let's Deep Dive" button to breathe with full viewport responsiveness.
  - **Footer Mirrors & Developer Showcase**:
    - Integrated official vector SVG logos for GitHub, Codeberg (official iceberg vector), and GitLab (official tanuki vector) replacing plain text badges.
    - Replaced the legacy Material 3 standard link with a small developer portrait avatar and prominent, bold "Developer" link targeting `https://github.com/junksidetm/`.
  - **Brave Origin Profile Windows/MacOS**:
    - Renamed project to "Brave Origin Profile Windows/MacOS".
    - Architected two distinct platform cards within `ProjectCard.tsx` covering:
      - Windows: PowerShell installation pipeline, registry debloating, and uBlock Origin rule bundling (`https://github.com/junksidetm/Brave-Origin-Profile-Windows`).
      - macOS: Automated zsh script, managed plist preferences, and privacy rules (`https://github.com/junksidetm/Brave-Origin-Profile-MacOS`).
- **Files Modified**:
  - `src/app/layout.tsx`
  - `src/components/Navbar.tsx`
  - `src/components/Hero.tsx`
  - `src/components/Footer.tsx`
  - `src/components/ProjectCard.tsx`
  - `src/data/projects.ts`
  - `Version.md`
- **Status**: 100% (Completed & Synced)

## [2026-10-10 19:37:30 IST] - Header Symmetry Alignment, Brand Pill Removal & Custom Brand Vector Asset Matrix
- **Action**: Finalized header control placement, purged branding pills, and ingested high-fidelity application logos.
  - **MVA Header & Layout**:
    - Repositioned Codeium brand banner strictly to the top-left and the GitHub button to the top-right for intuitive visual balance.
    - Completely removed the `Codeium • Darkside Studio` pill from MVA, allowing maximum focus on the headline and subline.
  - **Custom Logo Ingestion & Harmonization**:
    - `instafel`: Updated icon to official vector `instagram-logo.svg`.
    - `physics-wonderland`: Updated icon in project directory and Masterpieces preview to `instagram-logo.svg`.
    - `rivo-phone`: Updated icon to official `Phone-AppLogo-Green.svg`.
    - `brave-origin`: Updated icon to official `Brave-origin-Profile-Light.svg`.
  - **Project Catalog Harmonization**:
    - Removed `Cresto` from the software catalog, establishing `Rivo Phone App` as the flagship Material 3 Android dialer suite.
- **Files Modified**:
  - `src/components/Hero.tsx`
  - `src/app/page.tsx`
  - `src/data/projects.ts`
  - `Version.md`
- **Status**: 100% (Completed & Synced)

## [2026-10-10 19:41:00 IST] - 2-Column Expansion for Brave Origin Profile (Windows & macOS Showcase)
- **Action**: Expanded Brave Origin Profile Windows/MacOS to span 2 grid columns (`md:col-span-2 lg:col-span-2`), occupying the space vacated by Cresto.
  - Built an expansive side-by-side dual-panel architecture inside the wide card:
    - **Windows Edition**: Dedicated PowerShell 7 panel detailing registry debloating, anti-telemetry policies, uBlock Origin preset filter bundling, and direct repository/live deployment links.
    - **macOS Edition**: Dedicated zsh/plist panel detailing Apple Silicon & Intel native support, 1-line terminal deployment, managed plist policies, and direct repository/live deployment links.
- **Files Modified**:
  - `src/components/ProjectCard.tsx`
  - `Version.md`
- **Status**: 100% (Completed & Synced)

## [2026-10-10 19:58:45 IST] - Brand Logo Enhancements: White Instafel Vector, Atom Physics Emblem, High-Res WinForge Logo & 2x Rivo Dialer Scaler
- **Action**: Applied visual asset updates and sizing calibrations across project cards and the Masterpiece showcase:
  - **Instafel Logo**: Converted `instagram-logo.svg` fill to `#ffffff` (pure white) and increased visual scale (`scale-125` with `p-1`) for prominent contrast against the purple card container.
  - **Physics Wonderland**: Replaced legacy logo with official atom symbol vector (`atom-symbol-svgrepo-com.svg`) across both the Masterpieces spotlight preview and project directory card.
  - **WinForge Logo**: Ingested high-resolution official asset (`winforge-logo.png`) replacing the vector placeholder in the desktop tooling directory.
  - **Rivo Phone App**: Scaled logo representation to 2x size via expanded container (`w-16 h-16 sm:w-20 sm:h-20`) and centered icon scaling (`scale-[1.85]`), eliminating excess SVG margins and accentuating the Material 3 dialer brand mark.
- **Files Modified**:
  - `public/instagram-logo.svg`
  - `src/app/page.tsx`
  - `src/components/ProjectCard.tsx`
  - `src/data/projects.ts`
  - `Version.md`
- **Status**: 100% (Completed & Synced)

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "junksidetm • High-Performance Systems & Native Android Suite",
  description: "Official software forge of junksidetm: Native Android applications, Material 3 Expressive architectures, WebAssembly runtimes, and system automation tools.",
  keywords: ["Android", "Jetpack Compose", "Flutter", "Material 3", "WebAssembly", "Next.js", "WinForge", "junksidetm"],
  authors: [{ name: "junksidetm", url: "https://github.com/junksidetm" }],
  icons: {
    icon: "/favicon.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "junksidetm • High-Performance Systems & Native Android Suite",
    description: "Official software forge of junksidetm: Native Android, WebAssembly, and Desktop Tools.",
    url: "https://junksidetm.github.io",
    siteName: "junksidetm Forge",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "junksidetm Forge",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="m3-mesh-bg text-slate-100 min-h-screen selection:bg-purple-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}

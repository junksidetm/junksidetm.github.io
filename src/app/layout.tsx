import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Codeium • Darkside Studio | High-Performance Native Android & Systems Suite",
  description: "Official software showcase of Codeium (Darkside Studio): Flagship Native Android Jetpack Compose & Flutter architectures, WebAssembly runtimes, and system automation suites by Abhijeet Yadav (@junksidetm).",
  keywords: [
    "Codeium",
    "Darkside Studio",
    "Android",
    "Jetpack Compose",
    "Flutter",
    "Material 3 Expressive",
    "WebAssembly",
    "Next.js",
    "junksidetm",
    "mrdarksidetm"
  ],
  authors: [{ name: "Abhijeet Yadav", url: "https://github.com/junksidetm" }],
  icons: {
    icon: "/codeium-logo.svg",
    apple: "/codeium-logo.svg",
  },
  openGraph: {
    title: "Codeium • Darkside Studio | High-Performance Systems & Native Android Suite",
    description: "Official software showcase of Codeium (Darkside Studio): Native Android Compose, Flutter M3, WebAssembly, and Automation Tools.",
    url: "https://junksidetm.github.io",
    siteName: "Codeium by Darkside Studio",
    images: [
      {
        url: "/developer.png",
        width: 800,
        height: 800,
        alt: "Abhijeet Yadav - Codeium",
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
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#06070a] text-slate-100 min-h-screen selection:bg-purple-600 selection:text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

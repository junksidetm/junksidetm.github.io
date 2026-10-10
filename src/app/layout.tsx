import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Codeium",
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
    title: "Codeium",
    description: "Official software showcase of Codeium (Darkside Studio): Native Android Compose, Flutter M3, WebAssembly, and Automation Tools.",
    url: "https://junksidetm.github.io",
    siteName: "Codeium",
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
    <html lang="en" className={`dark scroll-smooth ${sansFont.variable} ${monoFont.variable}`}>
      <body className="font-sans bg-[#06070a] text-slate-100 min-h-screen selection:bg-purple-600 selection:text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

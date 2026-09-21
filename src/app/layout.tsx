import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noah Otim — Software Engineer",
  description: "Noah Otim builds practical software and systems that solve real problems. AI and automation, marketing and growth, leadership for small teams.",
  keywords: ["Noah Otim", "Software Engineer", "Portfolio", "Next.js", "AI", "Marketing"],
  authors: [{ name: "Noah Otim", url: "https://github.com/noahotim" }],
  openGraph: {
    title: "Noah Otim — Software Engineer",
    description: "Practical software that solves real problems. Remove friction, focus on what works, ship consistently.",
    url: "https://github.com/noahotim/portfolio",
    siteName: "Noah Otim Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">{children}</body>
    </html>
  );
}

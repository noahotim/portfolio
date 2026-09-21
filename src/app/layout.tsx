import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], style: ["normal","italic"], display: "swap" });

export const metadata: Metadata = {
  title: "Noah Otim -- Software Engineer",
  description: "Noah Otim builds practical software and systems that solve real problems. AI and automation, marketing and growth, leadership for small teams.",
  keywords: ["Noah Otim","Software Engineer","Portfolio","Next.js","AI","Marketing","Uganda"],
  authors: [{ name: "Noah Otim", url: "https://github.com/noahotim" }],
  metadataBase: new URL("https://noahotim.github.io"),
  openGraph: {
    title: "Noah Otim -- Software Engineer",
    description: "Practical software that ships. Remove friction, focus on what works, ship consistently.",
    url: "https://noahotim.github.io/portfolio/",
    siteName: "Noah Otim",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Noah Otim -- Software Engineer", description: "Practical software that ships." },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#fcfcfb] text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">{children}</body>
    </html>
  );
}

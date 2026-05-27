import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import GrainOverlay from "@/components/layout/GrainOverlay";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gamalliel Sharon — System Analyst · Indie Builder · Creative Technologist",
  description:
    "Portfolio of Gamalliel Sharon Saragih — System Analyst with 4 years of experience in manufacturing and insurance. Building digital products, AI platforms, and design tools at the intersection of systems, design, and imagination.",
  keywords: [
    "System Analyst",
    "Indie Builder",
    "Creative Technologist",
    "Next.js",
    "GraphQL",
    "Supabase",
    "Portfolio",
    "Full-stack Developer",
    "TypeScript",
    "ERP Systems",
  ],
  authors: [{ name: "Gamalliel Sharon Saragih" }],
  creator: "Gamalliel Sharon Saragih",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Gamalliel Sharon — System Analyst · Indie Builder · Creative Technologist",
    description:
      "Building at the intersection of systems, design, and imagination.",
    siteName: "Gamalliel Sharon Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gamalliel Sharon — System Analyst · Indie Builder · Creative Technologist",
    description:
      "Building at the intersection of systems, design, and imagination.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="bg-[#0a0a0a] text-[#fafafa] font-sans antialiased overflow-x-hidden">
        <SmoothScroll>
          <ScrollProgress />
          <CustomCursor />
          <GrainOverlay />
          <Navbar />
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}

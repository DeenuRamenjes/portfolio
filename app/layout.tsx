import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { PageTransition } from "@/components/page-transition";
import { GrainOverlay } from "@/components/grain-overlay";
import { AnimatedBackground } from "@/components/ui/animated-background";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.deenu.fun"),
  title: {
    default: "Deenu Ramenjes M S | Full Stack Software Developer",
    template: "%s | Deenu Ramenjes",
  },
  description: "Full Stack Software Developer specializing in Next.js, React, Node.js, MongoDB, and scalable schema-driven SaaS systems.",
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "google83208983fb394399",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased font-sans`}
      >
        <SmoothScrollProvider>
          <AnimatedBackground />
          <PageTransition>{children}</PageTransition>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

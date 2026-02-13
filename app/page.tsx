"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import PillNav from "@/components/PillNav";
import { Hero } from "@/components/sections/hero";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { ScrollProgress } from "@/components/scroll-progress";
import { Marquee } from "@/components/ui/marquee";
import { SplashScreen } from "@/components/ui/splash-screen";

// Lazy-load below-fold sections to reduce initial JS bundle for faster LCP
const About = dynamic(() => import("@/components/sections/about").then(m => ({ default: m.About })));
const Projects = dynamic(() => import("@/components/sections/projects").then(m => ({ default: m.Projects })));
const Skills = dynamic(() => import("@/components/sections/skills").then(m => ({ default: m.Skills })));
const Experience = dynamic(() => import("@/components/sections/experience").then(m => ({ default: m.Experience })));
const Education = dynamic(() => import("@/components/sections/education").then(m => ({ default: m.Education })));
const Contact = dynamic(() => import("@/components/sections/contact").then(m => ({ default: m.Contact })));
const Footer = dynamic(() => import("@/components/footer").then(m => ({ default: m.Footer })));
const BeyondTheCode = dynamic(() => import("@/components/sections/beyond-code").then(m => ({ default: m.BeyondTheCode })));

// Module-level variable to track splash state across client-side navigations
let hasShownSplash = false;

export default function Home() {
  const [showSplash, setShowSplash] = useState(!hasShownSplash);

  const handleSplashComplete = () => {
    setShowSplash(false);
    hasShownSplash = true;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Deenu Ramenjes",
            url: "https://www.deenu.fun",
            jobTitle: "Full Stack Software Developer",
            sameAs: [
              "https://www.linkedin.com/in/deenu-ramenjes-ms-b49902336",
              "https://github.com/DeenuRamenjes"
            ],
          }),
        }}
      />
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      <main className="relative">
        <ScrollProgress />
        <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between md:justify-center px-6 py-6 md:px-12 pointer-events-none">
          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-tight text-foreground transition-transform hover:scale-105 cursor-pointer pointer-events-auto md:absolute md:left-12 md:top-6">
            Portfolio
          </h1>

          {/* Pill Nav */}
          <div className="pointer-events-auto">
            <PillNav
              items={[
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ]}
              baseColor="#0a0a0a"
              pillColor="#ffffff"
              pillTextColor="#0a0a0a"
              hoveredPillTextColor="#ffffff"
            />
          </div>
        </div>
        <Hero />

        <div className="py-12 backdrop-blur-lg">
          <Marquee
            items={[
              "Performant", "Reliable", "Scalable", "Maintainable", "Secure",
              "Collaborative", "Adaptable", "Effective", "User Friendly",
              "Dynamic", "Optimized", "Flexible", "Responsive", "High Performance"
            ]}
            speed={100}
          />
        </div>

        <SectionWrapper id="about">
          <About />
        </SectionWrapper>
        <Projects />
        <SectionWrapper id="skills">
          <Skills />
        </SectionWrapper>
        <SectionWrapper id="experience">
          <Experience />
        </SectionWrapper>
        <SectionWrapper id="education">
          <Education />
        </SectionWrapper>
        <SectionWrapper id="beyond-code">
          <BeyondTheCode />
        </SectionWrapper>
        <SectionWrapper id="contact">
          <Contact />
        </SectionWrapper>
        <Footer />
      </main>
    </>
  );
}

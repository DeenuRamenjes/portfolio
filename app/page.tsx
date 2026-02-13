"use client";

import { useState, useEffect } from "react";
import PillNav from "@/components/PillNav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { ScrollProgress } from "@/components/scroll-progress";
import { BeyondTheCode } from "@/components/sections/beyond-code";
import { Location } from "@/components/sections/location";
import { Marquee } from "@/components/ui/marquee";
import { SplashScreen } from "@/components/ui/splash-screen";

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
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      <div className={`relative transition-opacity duration-300 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
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
        {/* <SectionWrapper id="location">
          <Location />
        </SectionWrapper> */}
        <SectionWrapper id="contact">
          <Contact />
        </SectionWrapper>
        <Footer />
      </div>
    </>
  );
}

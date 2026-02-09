"use client";

import { useState } from "react";
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

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      <div className={`relative transition-opacity duration-1000 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        <ScrollProgress />
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">

          {/* Portfolio Title - Top Left */}
          <h1 className="absolute left-6 top-6 text-2xl font-bold tracking-tight text-foreground pointer-events-auto">
            Portfolio
          </h1>

          {/* Pill Nav - Centered */}
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

        <div className="py-12 bg-background/50 backdrop-blur-sm border-y border-white/5">
          <Marquee
            items={[
              "Performant", "Accessible", "Reliable", "Scalable", "Maintainable", "Secure",
              "Collaborative", "Adaptable", "Innovative", "Effective", "User Friendly",
              "Efficient", "Streamlined", "Dynamic", "Progressive", "Optimized", "Flexible",
              "Responsive", "Intuitive", "Sustainable", "High Performance", "Robust", "Resilient"
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
        <SectionWrapper id="location">
          <Location />
        </SectionWrapper>
        <SectionWrapper id="contact">
          <Contact />
        </SectionWrapper>
        <Footer />
      </div>
    </>
  );
}

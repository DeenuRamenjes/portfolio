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
import { Marquee } from "@/components/ui/marquee";
import { SplashScreen } from "@/components/ui/splash-screen";
import { LazySection } from "@/components/ui/lazy-section";

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

        {/* Heavy below-fold sections are lazy-mounted to reduce TBT.
            They only initialize (framer-motion/gsap/MagicBento) when
            the user scrolls near them. */}
        <LazySection minHeight="1200vh">
          <Projects />
        </LazySection>
        <LazySection minHeight="80vh">
          <SectionWrapper id="skills">
            <Skills />
          </SectionWrapper>
        </LazySection>
        <LazySection minHeight="80vh">
          <SectionWrapper id="experience">
            <Experience />
          </SectionWrapper>
        </LazySection>
        <LazySection minHeight="60vh">
          <SectionWrapper id="education">
            <Education />
          </SectionWrapper>
        </LazySection>
        <LazySection minHeight="60vh">
          <SectionWrapper id="beyond-code">
            <BeyondTheCode />
          </SectionWrapper>
        </LazySection>
        <LazySection minHeight="60vh">
          <SectionWrapper id="contact">
            <Contact />
          </SectionWrapper>
        </LazySection>
        <LazySection minHeight="20vh">
          <Footer />
        </LazySection>
      </main>
    </>
  );
}

import { Navigation } from "@/components/navigation";
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
import { GrainOverlay } from "@/components/grain-overlay";

export default function Home() {
  return (
    <div className="relative">
      <ScrollProgress />
      <GrainOverlay />
      <Navigation />
      <Hero />
      <SectionWrapper id="about">
        <About />
      </SectionWrapper>
      <SectionWrapper id="projects">
        <Projects />
      </SectionWrapper>
      <SectionWrapper id="skills">
        <Skills />
      </SectionWrapper>
      <SectionWrapper id="experience">
        <Experience />
      </SectionWrapper>
      <SectionWrapper id="education">
        <Education />
      </SectionWrapper>
      <SectionWrapper id="contact">
        <Contact />
      </SectionWrapper>
      <Footer />
    </div>
  );
}

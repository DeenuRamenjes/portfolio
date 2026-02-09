"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { useRef } from "react";
import { projects } from "@/lib/projects-data";

export function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 40,
    stiffness: 80,
    restDelta: 0.001
  });

  // No horizontal x transform needed for 3D stack

  return (
    <section id="projects" ref={container} className="relative h-[1200vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center" style={{ perspective: "2000px" }}>

        {/* Layer E: Sticky Title */}
        <div className="absolute top-12 left-6 md:left-12 z-20 pointer-events-none">
          <motion.div
            style={{
              opacity: useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]),
              y: useTransform(smoothProgress, [0, 0.05], [20, 0])
            }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-black tracking-tighter text-white/20 uppercase">
              Selected <span className="text-white">Works</span>
            </h2>
          </motion.div>
        </div>

        {/* Layer C: Stacked 3D Content */}
        <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              total={projects.length}
              {...project}
              scrollYProgress={smoothProgress}
            />
          ))}
        </div>

        {/* Progress Bar Controller */}
        {/* <div className="absolute bottom-12 left-6 right-6 md:left-12 md:right-12 h-[1px] bg-white/10 z-20 overflow-hidden">
          <motion.div
            style={{ scaleX: smoothProgress, transformOrigin: "left" }}
            className="absolute inset-0 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          />
        </div> */}
      </div>
    </section>
  );
}

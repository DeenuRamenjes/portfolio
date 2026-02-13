"use client";

import { motion, MotionValue, useScroll, useTransform, useSpring } from "framer-motion";
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
    damping: 50,
    stiffness: 100,
    restDelta: 0.0001
  });

  return (
    <section id="projects" ref={container} className="relative" style={{ height: `${projects.length * 300 + 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center" style={{ perspective: "1500px" }}>

        {/* Sticky Title */}
        <div className="absolute top-12 left-6 md:left-12 z-20 pointer-events-none">
          <motion.div
            style={{
              opacity: useTransform(smoothProgress, [0, 0.03, 0.95, 1], [0, 1, 1, 0]),
              y: useTransform(smoothProgress, [0, 0.03], [20, 0])
            }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-black tracking-tighter text-white/20 uppercase">
              Selected <span className="text-white">Works</span>
            </h2>
          </motion.div>
        </div>

        {/* Card Counter Dots */}
        <div className="absolute top-12 right-6 md:right-12 z-20 pointer-events-none">
          <motion.div
            style={{
              opacity: useTransform(smoothProgress, [0, 0.03, 0.95, 1], [0, 1, 1, 0]),
            }}
          >
            <div className="flex items-center gap-3">
              {projects.map((_, i) => (
                <CardDot key={i} index={i} total={projects.length} progress={smoothProgress} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stacked Cards */}
        <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              total={projects.length}
              {...project}
              image={project.images[0]}
              status={project.status}
              scrollYProgress={smoothProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CardDot({ index, total, progress }: { index: number; total: number; progress: MotionValue<number> }) {
  const step = 1 / total;
  const mid = index * step + step * 0.5;

  const isActive = useTransform(progress, (v: number) => {
    const cardStart = index * step;
    const cardEnd = (index + 1) * step;
    return v >= cardStart && v < cardEnd;
  });

  const dotScale = useTransform(isActive, (active: boolean) => active ? 1.5 : 0.8);
  const dotOpacity = useTransform(isActive, (active: boolean) => active ? 1 : 0.3);

  return (
    <motion.div
      style={{ scale: dotScale, opacity: dotOpacity }}
      className="w-2 h-2 rounded-full bg-white transition-colors duration-300"
    />
  );
}

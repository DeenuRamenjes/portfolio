"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with cutting-edge technologies.",
  },
  {
    title: "Project Two",
    description: "Innovative solution for complex business challenges.",
  },
  {
    title: "Project Three",
    description: "Creative digital experience with stunning visuals.",
  },
  {
    title: "Project Four",
    description: "Full-stack platform with seamless user experience.",
  },
];

export function Projects() {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-16"
      >
        Featured Work
      </motion.h2>

      <div 
        className="grid md:grid-cols-2 gap-8 md:gap-12" 
        style={{ 
          perspective: "2000px",
          perspectiveOrigin: "center center",
          transformStyle: "preserve-3d"
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

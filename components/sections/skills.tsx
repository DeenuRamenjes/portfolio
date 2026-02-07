"use client";

import { motion } from "framer-motion";
import { scaleIn } from "@/lib/animation-variants";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "GraphQL",
];

export function Skills() {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-16"
      >
        Skills & Technologies
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="relative group"
          >
            <div className="p-6 md:p-8 rounded-xl bg-card/30 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
              <p className="text-center font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                {skill}
              </p>
            </div>
            
            {/* Glow effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-xl blur-lg -z-10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.15 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

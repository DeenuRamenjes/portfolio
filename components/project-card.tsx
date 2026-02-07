"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useRef } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  index: number;
}

export function ProjectCard({ title, description, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  // 3D Flip animation - rotates on both X and Y axes for cinematic depth
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [25, 0, 0]);
  const rotateY = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    [isEven ? -15 : 15, 0, 0]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 1]);
  const z = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX,
        rotateY,
        opacity,
        scale,
        z,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className="will-animate"
    >
      <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-500">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="aspect-video bg-gradient-to-br from-[var(--accent-blue)]/30 to-[var(--accent-purple)]/30 relative overflow-hidden"
        >
          {/* Image Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl opacity-30">◆</span>
          </div>
          
          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[var(--accent-blue)]/40 to-[var(--accent-purple)]/40"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <div className="p-6 md:p-8">
          <motion.h3
            className="text-2xl md:text-3xl font-heading font-bold mb-3 group-hover:translate-x-2 transition-transform duration-300"
          >
            {title}
          </motion.h3>
          <p className="text-foreground/60 leading-relaxed">{description}</p>
        </div>

        {/* Glow Effect on Hover */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-lg blur-xl -z-10"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />
      </Card>
    </motion.div>
  );
}

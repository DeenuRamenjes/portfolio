"use client";

import { motion } from "framer-motion";
import { heroTextLine } from "@/lib/animation-variants";
import { Button } from "@/components/ui/button";
import { ShinyText } from "@/components/ui/shiny-text";

const heroLines = [
  "Creative Developer",
  "Building Digital",
  "Experiences",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient Orb */}
      <motion.div
        className="absolute top-1/4 -right-1/4 w-96 h-96 md:w-[600px] md:h-[600px] rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, var(--accent-blue) 0%, var(--accent-purple) 50%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32">
        <div className="space-y-6">
          {/* Staggered Hero Text */}
          {heroLines.map((line, index) => (
            <motion.h1
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={heroTextLine}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight leading-[1.1]"
            >
              <ShinyText
                text={line}
                speed={2}
                delay={index * 0.01}
                color="#d1d5db"
                shineColor="#ffffff"
                spread={90}
                direction="left"
              />
            </motion.h1>
          ))}

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-foreground/60 max-w-2xl pt-4"
          >
            Crafting premium web experiences with modern technologies and
            attention to detail.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="pt-8"
          >
            <Button
              size="lg"
              className="relative group overflow-hidden bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
              onClick={() => {
                const element = document.querySelector("#projects");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="relative z-10">View Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-foreground/40"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

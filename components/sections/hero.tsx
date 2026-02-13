"use client";

import { motion } from "framer-motion";
import { heroTextLine } from "@/lib/animation-variants";
import { Button } from "@/components/ui/button";
import { ShinyText } from "@/components/ui/shiny-text";

import { Typewriter } from "@/components/ui/typewriter";


export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">


      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32">
        <div className="space-y-6">

          {/* Custom Hero Text Rendering */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroTextLine}
            className="font-heading font-bold tracking-tight leading-[1.1]"
          >
            {/* Line 1 */}
            <motion.h1
              custom={0}
              variants={heroTextLine}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="text-foreground/80">Hi, I&apos;m </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)]">
                M S Deenu Ramenjes
              </span>
            </motion.h1>

            {/* Line 2 */}
            <motion.h1
              custom={1}
              variants={heroTextLine}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2"
            >
              <ShinyText
                text="a passionate"
                speed={2}
                delay={0.1}
                color="#d1d5db"
                shineColor="#ffffff"
                spread={90}
                direction="left"
              />
            </motion.h1>

            {/* Line 3 */}
            <motion.h1
              custom={2}
              variants={heroTextLine}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2"
            >
              <Typewriter
                words={["Full-Stack Developer", "React Native Developer", "Prompt Engineer", "Front-End Developer"]}
                delay={2000}
                className="text-foreground"
                cursorClassName="bg-[var(--accent-blue)]"
              />
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-foreground/60 max-w-2xl pt-4"
          >
            Crafting High-Performance, User-Centric Applications
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="pt-8"
          >
            <Button
              size="lg"
              className="relative group cursor-pointer overflow-hidden bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
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

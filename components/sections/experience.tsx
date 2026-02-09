"use client";

import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/lib/animation-variants";

const experiences = [
  {
    date: "Mar 2025 - May 2025",
    title: "Full Stack Developer Intern",
    company: "Quantzi Infotech",
    description: "Worked on real-time backend projects, implementing scalable server-side logic and RESTful APIs using Node.js and Express.js. Collaborated with teams to debug and improve system reliability.",
  },
  {
    date: "Jun 2024 - July 2024",
    title: "Frontend Development Intern",
    company: "Srishti Innovative",
    description: "Developed the user interface for an e-commerce website using React. Collaborated with senior developers to implement responsive, user-friendly layouts with Material-UI.",
  },
];

export function Experience() {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-16"
      >
        Experience
      </motion.h2>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-blue)] via-[var(--accent-purple)] to-transparent" />

        <div className="space-y-12 md:space-y-20">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={isEven ? slideInLeft : slideInRight}
                className={`relative flex ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 -ml-[7px] md:-ml-[7px] rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] shadow-lg shadow-[var(--accent-blue)]/50" />

                {/* Content */}
                <div className={`flex-1 ${isEven ? "md:text-right md:pr-12" : "md:pl-12"} pl-8 md:pl-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02, x: isEven ? -4 : 4 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 md:p-8 rounded-xl bg-card/30 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <p className="text-sm text-[var(--accent-blue)] font-medium mb-2">
                      {exp.date}
                    </p>
                    <h3 className="text-xl md:text-2xl font-heading font-bold mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-base text-foreground/80 font-medium mb-3">
                      {exp.company}
                    </p>
                    <p className="text-foreground/60 leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>

                {/* Spacer for other side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

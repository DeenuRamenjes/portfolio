"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  image: string;
  status?: string;
  liveUrl?: string;
  index: number;
  scrollYProgress: MotionValue<number>;
  total: number;
}

export function ProjectCard({
  title,
  description,
  slug,
  image,
  status,
  liveUrl,
  index,
  scrollYProgress,
  total
}: ProjectCardProps) {
  const step = 1 / total;

  // Phase breakdown per card:
  // [start → enterEnd]: Card enters (slides up, fades in)
  // [enterEnd → flipStart]: Card dwells (fully visible, front face)
  // [flipStart → flipEnd]: Card flips 180° on Y-axis
  // [flipEnd → exitEnd]: Card dwells flipped briefly then exits
  const start = index * step;
  const enterEnd = start + step * 0.15;
  const flipStart = start + step * 0.25;
  const flipEnd = start + step * 0.65;
  const exitStart = start + step * 0.80;
  const end = Math.min((index + 1) * step, 1);

  // X-axis flip: 0° → 180° (top-to-bottom)
  const rotateX = useTransform(
    scrollYProgress,
    [start, flipStart, flipEnd, end],
    [0, 0, 180, 180]
  );

  // Vertical movement: enter from below, exit above
  const y = useTransform(
    scrollYProgress,
    [start, enterEnd, exitStart, end],
    ["60vh", "0vh", "0vh", "-60vh"]
  );

  // Scale: slightly smaller on enter/exit
  const scale = useTransform(
    scrollYProgress,
    [start, enterEnd, exitStart, end],
    [0.85, 1, 1, 0.85]
  );

  // Opacity
  const initialOpacity = index === 0 ? 1 : 0;
  const opacity = useTransform(
    scrollYProgress,
    [start, enterEnd, exitStart, end],
    [initialOpacity, 1, 1, 0]
  );

  // First card: start visible and centered
  const initialY = index === 0 ? "0vh" : "60vh";
  const yAdjusted = useTransform(
    scrollYProgress,
    [start, enterEnd, exitStart, end],
    [initialY, "0vh", "0vh", "-60vh"]
  );

  return (
    <motion.div
      style={{
        rotateX,
        scale,
        opacity,
        y: yAdjusted,
        transformStyle: "preserve-3d",
        position: "absolute",
        zIndex: total - index,
      }}
      className="w-[calc(100vw-32px)] md:w-full max-w-6xl will-change-transform"
    >
      {/* ===== FRONT FACE ===== */}
      <div
        className="w-full rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60 backdrop-blur-xl shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
        style={{ backfaceVisibility: "hidden" }}
      >
        <div className="flex flex-col md:flex-row min-h-[420px] md:min-h-[500px]">
          {/* Image Side */}
          <div className="relative w-full md:w-[55%] h-56 md:h-auto bg-[#080808] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent to-black/60 pointer-events-none" />

            {/* Large Index Number */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] mix-blend-overlay pointer-events-none">
              <span className="text-[12rem] md:text-[20rem] font-black select-none font-heading leading-none text-white italic">
                0{index + 1}
              </span>
            </div>
          </div>

          {/* Content Side */}
          <div className="flex-1 p-8 md:p-14 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/5">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/5 bg-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" />
                  <span className="text-[9px] font-bold tracking-[0.4em] text-white/30 uppercase">Project 0{index + 1}</span>
                </div>
                {status && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase">{status}</span>
                  </div>
                )}
              </div>

              <h3 className="text-4xl md:text-6xl font-heading font-black tracking-tighter text-white leading-[0.9]">
                {title.split(' ')[0]}
                {title.split(' ').length > 1 && (
                  <>
                    <br />
                    <span className="text-white/25">{title.split(' ').slice(1).join(' ')}</span>
                  </>
                )}
              </h3>

              <p className="text-base md:text-lg text-white/40 leading-relaxed font-light max-w-md">
                {description}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href={`/projects/${slug}`}
                  className="group/btn inline-flex relative px-7 py-3.5 rounded-sm bg-white text-black font-black tracking-tight text-sm transition-all duration-300 hover:bg-[var(--accent-blue)] hover:text-white overflow-hidden"
                >
                  <span className="relative z-10">Explore Case</span>
                  <div className="absolute inset-0 bg-black/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                </Link>

                {liveUrl && (
                  <button
                    onClick={() => window.open(liveUrl, "_blank")}
                    className="group/live inline-flex cursor-pointer items-center gap-2 px-7 py-3.5 rounded-sm border border-white/10 bg-white/5 text-white font-black tracking-tight text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                  >
                    <span>Live Demo</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BACK FACE ===== */}
      <div
        className="absolute inset-0 w-full rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/80 backdrop-blur-xl shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
        style={{
          backfaceVisibility: "hidden",
          transform: "rotateX(180deg)",
        }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16 text-center relative min-h-[420px] md:min-h-[500px]">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />

          {/* Inverted large number */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
            <span className="text-[15rem] md:text-[25rem] font-black select-none font-heading leading-none text-white">
              0{index + 1}
            </span>
          </div>

          <div className="relative z-10 space-y-8 max-w-lg">
            <div className="space-y-4">
              <span className="text-[10px] font-black tracking-[0.6em] uppercase text-[var(--accent-blue)]">
                Behind the Build
              </span>
              <h3 className="text-3xl md:text-5xl font-heading font-black tracking-tighter text-white">
                {title}
              </h3>
            </div>

            <p className="text-base md:text-lg text-white/50 leading-relaxed font-light">
              {description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href={`/projects/${slug}`}
                className="group/btn inline-flex relative px-8 py-4 rounded-sm bg-[var(--accent-blue)] text-white font-black tracking-tight text-sm transition-all duration-300 hover:bg-white hover:text-black overflow-hidden"
              >
                <span className="relative z-10">View Full Case Study →</span>
              </Link>

              {liveUrl && (
                <button
                  onClick={() => window.open(liveUrl, "_blank")}
                  className="inline-flex cursor-pointer items-center gap-2 px-8 py-4 rounded-sm border border-white/15 bg-white/5 text-white font-bold tracking-tight text-sm transition-all duration-300 hover:bg-white/10"
                >
                  Visit Live Site
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Ground Shadow */}
      <div className="absolute inset-x-8 -bottom-10 h-16 bg-black/50 blur-3xl pointer-events-none -z-10 rounded-full scale-x-90" />
    </motion.div>
  );
}

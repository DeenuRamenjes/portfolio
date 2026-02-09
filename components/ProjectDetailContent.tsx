"use client";

import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects, Project } from "@/lib/projects-data";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

interface ProjectDetailContentProps {
    project: Project;
}

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
    const router = useRouter();
    const containerRef = useRef<HTMLDivElement>(null);
    const spotlightRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });
    const { scrollYProgress: spotlightProgress } = useScroll({
        target: spotlightRef,
        offset: ["start 0.9", "start 0.2"]
    });

    const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "20%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

    const missionOpacity = useTransform(spotlightProgress, [0.2, 0.8], [0, 1]);
    const missionY = useTransform(spotlightProgress, [0.2, 0.8], [50, 0]);
    const metaOpacity = useTransform(spotlightProgress, [0, 0.5], [1, 0]);
    const metaY = useTransform(spotlightProgress, [0, 0.5], [0, -50]);
    const metaFilter = useTransform(spotlightProgress, [0, 0.5], ["blur(0px)", "blur(10px)"]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const projectIndex = projects.findIndex((p) => p.slug === project.slug);

    return (
        <main ref={containerRef} className="bg-[#050505] text-white selection:bg-[var(--accent-blue)] selection:text-white overflow-clip">
            {/* Cinematic Hero */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
                    className="relative z-10 w-full max-w-[90rem] px-6 md:px-12 flex flex-col items-center text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-8 flex flex-col items-center gap-4"
                    >
                        <span className="text-[10px] font-black tracking-[0.8em] uppercase text-white/30 border-b border-white/10 pb-2">
                            Project No. 0{projectIndex + 1}
                        </span>
                        {project.status && (
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-500">
                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                                <span className="text-[9px] font-bold tracking-[0.2em] uppercase">{project.status}</span>
                            </div>
                        )}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[12vw] md:text-[8vw] font-heading font-black tracking-tightest leading-[0.8] uppercase flex flex-col"
                    >
                        <span className="text-white">{project.title.split(' ')[0]}</span>
                        <span className="text-transparent outline-text opacity-20">{project.title.split(' ').slice(1).join(' ')}</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="absolute inset-0 -z-10 flex items-center justify-center text-[30vw] font-black pointer-events-none select-none opacity-5 text-white italic"
                    >
                        0{projectIndex + 1}
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-12 flex flex-col items-center gap-4 text-white/20"
                >
                    <span className="text-[8px] font-bold tracking-[0.4em] uppercase">Investigate</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
                </motion.div>

                {/* Floating Back Button */}
                <div className="fixed top-12 left-12 z-50">
                    <button
                        onClick={() => router.push("/#projects")}
                        className="group flex items-center gap-4 text-white/40 hover:text-white transition-colors duration-500"
                    >
                        <div className="relative w-12 h-12 rounded-full border border-white/10 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110">
                            <ArrowLeft className="w-4 h-4 relative z-10 transition-transform group-hover:-translate-x-1" />
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </div>
                        <span className="text-[10px] font-black tracking-[0.2em] uppercase opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                            Return to Works
                        </span>
                    </button>
                </div>
            </section>

            {/* Unified Interaction Container */}
            <section className="relative z-20 px-6 md:px-12 py-24 max-w-[85rem] mx-auto min-h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">

                    {/* Left: Persistent Sticky Sidebar */}
                    <aside className="lg:col-span-4 sticky top-40 space-y-16">
                        <motion.div style={{ opacity: metaOpacity, y: metaY, filter: metaFilter }} className="space-y-12">
                            <MetaGroup label="Deliverable" value={project.year} delay={0} />
                            <MetaGroup label="Role" value={project.role} delay={0.1} />
                            <MetaGroup label="Stack" value={project.technologies} delay={0.2} />
                        </motion.div>

                        {/* Linked Reveal Section: Mission */}
                        <motion.div
                            style={{ opacity: missionOpacity, y: missionY }}
                            className="pt-12 border-t border-white/5 absolute top-0 left-0 w-full"
                        >
                            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[var(--accent-blue)] mb-6 block">Mission Outcome</span>
                            <p className="text-xl font-light text-white/80 leading-relaxed">
                                {project.description}
                            </p>
                        </motion.div>
                    </aside>

                    {/* Right: Sequential Content Flow */}
                    <div className="lg:col-span-8 space-y-48">

                        {/* Narrative Segment */}
                        <div className="space-y-12 md:space-y-20 pb-24 border-b border-white/5">
                            <div className="text-[10px] font-black tracking-[0.5em] uppercase text-[var(--accent-blue)] mb-8 md:mb-12 flex items-center gap-4">
                                <span>The Story</span>
                                <div className="h-[1px] flex-1 bg-white/10" />
                            </div>

                            <div className="space-y-12 md:space-y-16">
                                <ul className="space-y-6 md:space-y-8 list-none pl-0">
                                    {project.longDescription.map((item, idx) => (
                                        <li key={idx} className="group relative flex items-start gap-4">
                                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] shrink-0 opacity-60" />
                                            <div className="text-xl md:text-3xl font-light leading-[1.4] tracking-tight">
                                                <RevealSentence text={item} />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Visual Segment */}
                        <div className="space-y-16">
                            {/* Main Spotlight - Triggers Mission Reveal */}
                            <motion.div
                                ref={spotlightRef}
                                onClick={() => project.liveUrl && window.open(project.liveUrl, "_blank")}
                                style={{
                                    y: useTransform(scrollYProgress, [0.4, 1], [40, 0]),
                                    cursor: project.liveUrl ? 'pointer' : 'default'
                                }}
                                className="aspect-[16/10] w-full bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden group relative"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${project.images[0]})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                                <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end">
                                    <div className="space-y-4">
                                        <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white/40">Visual 01</span>
                                        <h3 className="text-2xl font-light text-white">Interface Exploration</h3>
                                    </div>
                                    {project.liveUrl && (
                                        <ArrowUpRight className="w-8 h-8 text-white/20 group-hover:text-[var(--accent-blue)] transition-colors duration-500" />
                                    )}
                                </div>
                            </motion.div>

                            {/* Secondary Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                                <motion.div
                                    onClick={() => project.liveUrl && window.open(project.liveUrl, "_blank")}
                                    style={{
                                        y: useTransform(scrollYProgress, [0.5, 1], [80, 0]),
                                        cursor: project.liveUrl ? 'pointer' : 'default'
                                    }}
                                    className="aspect-[4/5] bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden relative group"
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                        style={{ backgroundImage: `url(${project.images[1] || project.images[0]})` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end">
                                        <div className="space-y-4">
                                            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white/40">Visual 02</span>
                                            <h3 className="text-xl font-light text-white">Project Detail</h3>
                                        </div>
                                        {project.liveUrl && (
                                            <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-[var(--accent-blue)] transition-colors duration-500" />
                                        )}
                                    </div>
                                </motion.div>
                                <motion.div
                                    onClick={() => project.liveUrl && window.open(project.liveUrl, "_blank")}
                                    style={{
                                        y: useTransform(scrollYProgress, [0.6, 1], [120, 0]),
                                        cursor: project.liveUrl ? 'pointer' : 'default'
                                    }}
                                    className="aspect-[4/5] md:aspect-[4/3] bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden relative group"
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                        style={{ backgroundImage: `url(${project.images[2] || project.images[0]})` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end">
                                        <div className="space-y-4">
                                            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white/40">Visual 03</span>
                                            <h3 className="text-xl font-light text-white">Experience View</h3>
                                        </div>
                                        {project.liveUrl && (
                                            <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-[var(--accent-blue)] transition-colors duration-500" />
                                        )}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .outline-text {
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
                    text-shadow: none;
                }
                .tracking-tightest {
                    letter-spacing: -0.05em;
                }
            `}</style>
        </main>
    );
}

function MetaGroup({ label, value, delay }: { label: string, value: string | string[], delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay }}
            className="space-y-4"
        >
            <span className="text-[9px] font-black tracking-[0.4em] uppercase text-white/20">{label}</span>
            <div className="text-xl md:text-2xl font-light">
                {Array.isArray(value) ? (
                    <ul className="space-y-2">
                        {value.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-white/80">
                                <span className="w-1 h-1 rounded-full bg-[var(--accent-blue)] opacity-50" />
                                <RevealSentence text={item} opacityRange={[0.4, 1]} offset={["start 0.95", "start 0.7"]} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <RevealSentence text={value} opacityRange={[0.1, 0.8]} offset={["start 0.95", "start 0.7"]} />
                )}
            </div>
        </motion.div>
    );
}

function RevealSentence({ text, opacityRange = [0.1, 0.8], offset = ["start 0.95", "start 0.25"] }: { text: string, opacityRange?: [number, number], offset?: [string, string] }) {
    const element = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: offset as any
    });

    const characters = text.split("");
    return (
        <p ref={element} className="flex flex-wrap text-white">
            {characters.map((char, i) => {
                const start = i / characters.length;
                const end = (i + 1) / characters.length;
                return (
                    <Char key={i} range={[start, end]} progress={scrollYProgress} opacityRange={opacityRange}>
                        {char}
                    </Char>
                );
            })}
        </p>
    );
}

function Char({ children, range, progress, opacityRange }: { children: React.ReactNode, range: [number, number], progress: any, opacityRange: [number, number] }) {
    const opacity = useTransform(progress, range, opacityRange);
    return (
        <motion.span style={{ opacity }} className="inline-block whitespace-pre">
            {children}
        </motion.span>
    );
}

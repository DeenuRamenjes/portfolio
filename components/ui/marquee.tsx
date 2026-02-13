"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
    items: string[];
    direction?: "left" | "right";
    speed?: number;
    className?: string;
}

export function Marquee({
    items,
    direction = "left",
    speed = 20,
    className = ""
}: MarqueeProps) {
    return (
        <div className={`flex overflow-hidden bg-transparent whitespace-nowrap ${className}`}>
            <motion.div
                key={speed}
                className="flex gap-8 items-center"
                animate={{
                    x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
                }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                }}
            >
                {[...items, ...items, ...items, ...items].map((item, index) => (
                    <span key={index} className="text-4xl md:text-6xl bg-transparent font-bold uppercase tracking-tighter opacity-10">
                        {item}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}

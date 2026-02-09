"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Deep Space Base */}
            <div className="absolute inset-0 bg-[#030014]" />

            {/* Primary Gradient Orb - Cyan */}
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[35vw] h-[35vw] rounded-full blur-[100px] opacity-40"
                style={{
                    background: "radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)",
                }}
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Secondary Gradient Orb - Teal */}
            <motion.div
                className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full blur-[100px] opacity-40"
                style={{
                    background: "radial-gradient(circle, var(--accent-purple) 0%, transparent 70%)",
                }}
                animate={{
                    x: [0, -100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />

            {/* Floating Accent Orb - Cyan/Teal Mix */}
            <motion.div
                className="absolute top-[40%] left-[30%] w-[35vw] h-[35vw] rounded-full blur-[80px] opacity-30"
                style={{
                    background: "radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, transparent 70%)",
                }}
                animate={{
                    x: [0, 60, -60, 0],
                    y: [0, -60, 60, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Grid Overlay for texture */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"
            />
        </div>
    );
}

"use client";

import { ReactNode, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Detect if mobile device
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      lerp: isMobile ? 0.15 : 0.1,
    });

    lenisRef.current = lenis;

    // Add Lenis class to HTML
    document.documentElement.classList.add("lenis");

    // Update ScrollTrigger on Lenis scroll
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    // RAF loop for smooth scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
      document.documentElement.classList.remove("lenis");
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Aggressive update on route change to prevent height ghosting
  useEffect(() => {
    if (lenisRef.current) {
      const timer1 = setTimeout(() => {
        lenisRef.current?.resize();
        ScrollTrigger.refresh();
      }, 100);

      const timer2 = setTimeout(() => {
        lenisRef.current?.resize();
        ScrollTrigger.refresh();
        window.dispatchEvent(new Event('resize'));
      }, 500);

      const timer3 = setTimeout(() => {
        lenisRef.current?.resize();
        ScrollTrigger.refresh();
      }, 1200);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [pathname]);

  return <>{children}</>;
}

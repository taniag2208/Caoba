"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 400, damping: 35 });
  const springY = useSpring(y, { stiffness: 400, damping: 35 });
  const [state, setState] = useState<"default" | "image" | "cta">("default");

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const handleEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor='image']")) {
        setState("image");
      } else if (target.closest("[data-cursor='cta']")) {
        setState("cta");
      } else {
        setState("default");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleEnter);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleEnter);
    };
  }, [x, y]);

  const size = state === "image" ? 72 : 12;
  const bg =
    state === "cta"
      ? "var(--oro)"
      : state === "image"
        ? "rgba(92,52,36,0.85)"
        : "var(--caoba)";

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        width: size,
        height: size,
        backgroundColor: bg,
        transition: "width 0.25s ease, height 0.25s ease, background-color 0.2s ease",
      }}
    >
      {state === "image" && (
        <span
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "9px",
            letterSpacing: "0.3em",
            color: "var(--pergamino)",
          }}
        >
          VER
        </span>
      )}
    </motion.div>
  );
}

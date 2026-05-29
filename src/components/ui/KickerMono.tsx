"use client";

import { motion } from "framer-motion";
import { fadeIn, viewportOnce } from "@/lib/motion";

interface KickerMonoProps {
  children: React.ReactNode;
  color?: string;
  animate?: boolean;
  className?: string;
}

export default function KickerMono({
  children,
  color = "var(--oro)",
  animate = true,
  className = "",
}: KickerMonoProps) {
  const style = {
    fontFamily: "var(--font-jetbrains), monospace",
    fontSize: "11px",
    fontWeight: 400,
    letterSpacing: "0.42em",
    textTransform: "uppercase" as const,
    color,
  };

  if (!animate) {
    return (
      <span style={style} className={className}>
        {children}
      </span>
    );
  }

  return (
    <motion.span
      style={style}
      className={`block ${className}`}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.span>
  );
}

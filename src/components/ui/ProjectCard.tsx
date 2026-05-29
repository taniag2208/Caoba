"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  lang: string;
  priority?: boolean;
}

export default function ProjectCard({
  project,
  lang,
  priority = false,
}: ProjectCardProps) {
  return (
    <Link href={`/${lang}/proyectos/${project.slug}`} className="block group relative overflow-hidden" data-cursor="image">
      <div
        className="w-full h-full min-h-[320px] flex flex-col justify-end p-6 relative"
        style={{ backgroundColor: project.bgColor }}
      >
        {/* Wood grain texture overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(
              92deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.03) 2px,
              rgba(255,255,255,0.03) 4px
            )`,
          }}
        />

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-end p-6"
          style={{ backgroundColor: "rgba(18,11,7,0.7)" }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "10px",
              letterSpacing: "0.35em",
              color: "var(--oro)",
              textTransform: "uppercase",
            }}
          >
            {project.type} · {project.year}
          </span>
          <h3
            className="mt-2 text-3xl font-light italic"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              color: "var(--pergamino)",
            }}
          >
            {lang === "en" ? project.nameEn : project.name}
          </h3>
          <p
            className="mt-2 text-sm leading-relaxed line-clamp-2"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 300,
              color: "var(--arena)",
              fontSize: "13px",
            }}
          >
            {lang === "en" ? project.descriptionEn : project.description}
          </p>
          <div className="mt-4 flex gap-6">
            <div>
              <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: "9px", letterSpacing: "0.3em", color: "var(--oro)", textTransform: "uppercase" }}>Madera</div>
              <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: "10px", color: "var(--pergamino)", marginTop: 2 }}>{project.wood}</div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: "9px", letterSpacing: "0.3em", color: "var(--oro)", textTransform: "uppercase" }}>Ciudad</div>
              <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: "10px", color: "var(--pergamino)", marginTop: 2 }}>{project.city}</div>
            </div>
          </div>
        </motion.div>

        {/* Default state - always visible */}
        <div className="relative z-10">
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "10px",
              letterSpacing: "0.35em",
              color: "var(--oro-claro)",
              textTransform: "uppercase",
            }}
          >
            {project.city} · {project.year}
          </span>
          <h3
            className="mt-1 text-2xl font-light"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              color: "var(--pergamino)",
            }}
          >
            {lang === "en" ? project.nameEn : project.name}
          </h3>
        </div>
      </div>
    </Link>
  );
}

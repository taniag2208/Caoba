"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import KickerMono from "@/components/ui/KickerMono";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";
import { viewportOnce } from "@/lib/motion";

type Filter = "todos" | "residencial" | "comercial" | "restauracion";

interface ProyectosPageContentProps {
  lang: string;
}

export default function ProyectosPageContent({ lang }: ProyectosPageContentProps) {
  const t = useTranslations("proyectos");
  const [filter, setFilter] = useState<Filter>("todos");

  const filtered =
    filter === "todos"
      ? projects
      : projects.filter((p) => p.type === filter);

  const filters: { key: Filter; label: string }[] = [
    { key: "todos", label: t("filter_all") },
    { key: "residencial", label: t("filter_residencial") },
    { key: "comercial", label: t("filter_comercial") },
    { key: "restauracion", label: t("filter_restauracion") },
  ];

  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-16 px-6 md:px-16"
        style={{ backgroundColor: "var(--pergamino)" }}
        aria-label="Portafolio de proyectos"
      >
        <div className="max-w-7xl mx-auto">
          <KickerMono color="var(--nogal)" animate={false}>
            {t("kicker")}
          </KickerMono>
          <motion.h1
            className="mt-6 mb-12"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 300,
              fontSize: "clamp(48px, 7vw, 96px)",
              color: "var(--tinta)",
              lineHeight: 1.05,
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {lang === "en" ? "Work" : "Obra"}
          </motion.h1>

          {/* Filters */}
          <div className="flex flex-wrap gap-6 mb-16" role="group" aria-label="Filtrar proyectos">
            {filters.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className="relative pb-1"
                aria-pressed={filter === key}
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: "11px",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: filter === key ? "var(--tinta)" : "var(--nogal)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                {label}
                <motion.span
                  className="absolute bottom-0 left-0 h-px"
                  style={{ backgroundColor: "var(--oro)" }}
                  animate={{ width: filter === key ? "100%" : "0%" }}
                  transition={{ duration: 0.25 }}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section
        className="pb-24 px-6 md:px-16"
        style={{ backgroundColor: "var(--pergamino)" }}
        aria-label="Lista de proyectos"
      >
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              layout
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="min-h-[360px]"
                  style={{
                    gridRow:
                      i === 0 ? "span 1" : undefined,
                  }}
                >
                  <div className="h-full min-h-[360px]">
                    <ProjectCard project={project} lang={lang} priority={i < 3} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import KickerMono from "@/components/ui/KickerMono";
import ProjectCard from "@/components/ui/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";
import { viewportOnce } from "@/lib/motion";

interface ProyectosGridProps {
  lang: string;
}

export default function ProyectosGrid({ lang }: ProyectosGridProps) {
  const t = useTranslations("home");
  const featured = getFeaturedProjects();
  const [main, ...rest] = featured;

  return (
    <section
      className="py-24 px-6 md:px-16"
      style={{ backgroundColor: "var(--pergamino)" }}
      aria-label="Proyectos seleccionados"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-12">
          <KickerMono color="var(--nogal)" animate={false}>
            {t("proyectos_kicker")}
          </KickerMono>
          <Link
            href={`/${lang}/proyectos`}
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "10px",
              letterSpacing: "0.3em",
              color: "var(--nogal)",
              textTransform: "uppercase",
            }}
          >
            {t("proyectos_link")}
          </Link>
        </div>

        {/* Asymmetric grid: 60% left + 40% right stacked */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Main project — 60% */}
          {main && (
            <motion.div
              className="md:col-span-3 h-[500px] md:h-[640px]"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7 }}
            >
              <div className="h-full">
                <ProjectCard project={main} lang={lang} priority />
              </div>
            </motion.div>
          )}

          {/* Stacked right — 40% */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {rest.map((project, i) => (
              <motion.div
                key={project.slug}
                className="flex-1 min-h-[300px]"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.7, delay: (i + 1) * 0.15 }}
              >
                <div className="h-full">
                  <ProjectCard project={project} lang={lang} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

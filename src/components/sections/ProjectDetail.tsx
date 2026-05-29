"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import KickerMono from "@/components/ui/KickerMono";
import { projects } from "@/lib/projects";
import { viewportOnce } from "@/lib/motion";

interface ProjectDetailProps {
  project: Project;
  lang: string;
}

export default function ProjectDetail({ project, lang }: ProjectDetailProps) {
  const name = lang === "en" ? project.nameEn : project.name;
  const description = lang === "en" ? project.descriptionEn : project.description;

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const specs = [
    { label: lang === "en" ? "Project" : "Proyecto", value: name },
    { label: lang === "en" ? "Type" : "Tipo", value: lang === "en" ? (project.type === "residencial" ? "Residential" : project.type === "comercial" ? "Commercial" : "Restoration") : (project.type === "residencial" ? "Residencial" : project.type === "comercial" ? "Comercial" : "Restauración") },
    { label: lang === "en" ? "City" : "Ciudad", value: `${project.city}, Colombia` },
    { label: lang === "en" ? "Wood" : "Madera", value: project.wood },
    { label: lang === "en" ? "Finish" : "Acabado", value: project.finish },
    { label: lang === "en" ? "Area" : "Superficie", value: project.area },
    { label: lang === "en" ? "Duration" : "Duración", value: project.duration },
    { label: lang === "en" ? "Year" : "Año", value: project.year },
  ];

  return (
    <>
      {/* Hero full-bleed */}
      <section
        className="relative flex items-end"
        style={{ minHeight: "70vh", backgroundColor: project.bgColor }}
        aria-label={`Hero del proyecto ${name}`}
      >
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `repeating-linear-gradient(88deg, transparent, transparent 3px, rgba(255,255,255,0.05) 3px, rgba(255,255,255,0.05) 6px)`,
          }}
          aria-hidden="true"
        />
        <motion.div
          className="relative z-10 px-6 md:px-16 pb-16 pt-40"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <KickerMono color="var(--oro-claro)" animate={false}>
            {project.type.toUpperCase()} · {project.city} · {project.year}
          </KickerMono>
          <h1
            className="mt-6"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 300,
              fontSize: "clamp(40px, 7vw, 96px)",
              color: "var(--pergamino)",
              lineHeight: 1.05,
            }}
          >
            {name}
          </h1>
        </motion.div>
      </section>

      {/* Content: sticky spec sidebar + curatorial text */}
      <section
        className="py-24 px-6 md:px-16"
        style={{ backgroundColor: "var(--pergamino)" }}
        aria-label="Detalle del proyecto"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          {/* Sticky spec sidebar */}
          <aside className="md:col-span-1">
            <div className="md:sticky md:top-28">
              <div className="border-t pt-6" style={{ borderColor: "var(--arena)" }}>
                {specs.map((spec) => (
                  <div key={spec.label} className="mb-5">
                    <div
                      style={{
                        fontFamily: "var(--font-jetbrains), monospace",
                        fontSize: "9px",
                        letterSpacing: "0.35em",
                        color: "var(--oro)",
                        textTransform: "uppercase",
                        marginBottom: 4,
                      }}
                    >
                      {spec.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-jetbrains), monospace",
                        fontSize: "11px",
                        color: "var(--tinta)",
                        lineHeight: 1.5,
                      }}
                    >
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Curatorial text */}
          <div className="md:col-span-2">
            <motion.p
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 400,
                fontSize: "clamp(20px, 2.5vw, 28px)",
                color: "var(--tinta)",
                lineHeight: 1.6,
                fontStyle: "italic",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8 }}
            >
              {description}
            </motion.p>

            {/* Gallery placeholders */}
            <div className="mt-16 grid grid-cols-1 gap-4">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-full relative overflow-hidden"
                  style={{
                    height: i === 0 ? 480 : 320,
                    backgroundColor:
                      i === 0
                        ? project.bgColor
                        : i === 1
                          ? "var(--nogal)"
                          : "var(--espresso)",
                  }}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  data-cursor="image"
                  role="img"
                  aria-label={`Fotografía ${i + 1} del proyecto ${name}`}
                >
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `repeating-linear-gradient(88deg, transparent, transparent 2px, rgba(255,255,255,0.04) 2px, rgba(255,255,255,0.04) 4px)`,
                    }}
                    aria-hidden="true"
                  />
                </motion.div>
              ))}
            </div>

            {/* Spec sheet table */}
            <div
              className="mt-16 border-t pt-10"
              style={{ borderColor: "var(--arena)" }}
            >
              <KickerMono color="var(--nogal)" animate={false} className="mb-8">
                {lang === "en" ? "— TECHNICAL SPECIFICATIONS" : "— ESPECIFICACIONES TÉCNICAS"}
              </KickerMono>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {[
                  { k: lang === "en" ? "Species" : "Especie", v: project.wood },
                  { k: lang === "en" ? "Origin" : "Procedencia", v: "Colombia / Estados Unidos" },
                  { k: lang === "en" ? "Finish" : "Acabado", v: project.finish },
                  { k: lang === "en" ? "Area" : "Dimensiones", v: project.area },
                  { k: lang === "en" ? "Treatment" : "Tratamiento", v: "Secado de cámara · Clasificación A" },
                  { k: lang === "en" ? "Certification" : "Certificación", v: "FSC / Cadena de custodia" },
                ].map(({ k, v }) => (
                  <div key={k}>
                    <div
                      style={{
                        fontFamily: "var(--font-jetbrains), monospace",
                        fontSize: "9px",
                        letterSpacing: "0.3em",
                        color: "var(--nogal)",
                        textTransform: "uppercase",
                        marginBottom: 4,
                      }}
                    >
                      {k}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-jetbrains), monospace",
                        fontSize: "11px",
                        color: "var(--tinta)",
                      }}
                    >
                      {v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project navigation */}
      <nav
        className="py-12 px-6 md:px-16 border-t flex justify-between items-center"
        style={{ borderColor: "var(--arena)", backgroundColor: "var(--lino)" }}
        aria-label="Navegación entre proyectos"
      >
        {prevProject ? (
          <Link href={`/${lang}/proyectos/${prevProject.slug}`} className="flex flex-col">
            <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "9px", letterSpacing: "0.3em", color: "var(--nogal)", textTransform: "uppercase" }}>
              ← {lang === "en" ? "Previous" : "Anterior"}
            </span>
            <span style={{ fontFamily: "var(--font-cormorant)", fontSize: "22px", fontWeight: 400, color: "var(--tinta)", marginTop: 4 }}>
              {lang === "en" ? prevProject.nameEn : prevProject.name}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {nextProject ? (
          <Link href={`/${lang}/proyectos/${nextProject.slug}`} className="flex flex-col items-end">
            <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "9px", letterSpacing: "0.3em", color: "var(--nogal)", textTransform: "uppercase" }}>
              {lang === "en" ? "Next" : "Siguiente"} →
            </span>
            <span style={{ fontFamily: "var(--font-cormorant)", fontSize: "22px", fontWeight: 400, color: "var(--tinta)", marginTop: 4 }}>
              {lang === "en" ? nextProject.nameEn : nextProject.name}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </>
  );
}

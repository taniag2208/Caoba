"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import KickerMono from "@/components/ui/KickerMono";
import FadeInWhenVisible from "@/components/ui/FadeInWhenVisible";
import { stagger, fadeUp, viewportOnce } from "@/lib/motion";

const hitos = [
  { year: "2018", es: "Fundación del estudio en Bogotá", en: "Studio founded in Bogotá" },
  { year: "2019", es: "Primer proyecto residencial de alto valor", en: "First high-value residential project" },
  { year: "2021", es: "Primer proyecto comercial de autor", en: "First commercial signature project" },
  { year: "2023", es: "Expansión a Medellín y Cali", en: "Expansion to Medellín and Cali" },
  { year: "2024", es: "40 proyectos completados", en: "40 projects completed" },
  { year: "2026", es: "Lanzamiento de caoba.studio", en: "caoba.studio launch" },
];

const valores = [
  {
    num: "01",
    nameEs: "Permanencia",
    nameEn: "Permanence",
    descEs: "Diseñamos para décadas, no para tendencias. La madera noble mejora con el tiempo cuando está bien trabajada.",
    descEn: "We design for decades, not trends. Noble wood improves with time when properly crafted.",
  },
  {
    num: "02",
    nameEs: "Precisión",
    nameEn: "Precision",
    descEs: "Cada junta, cada milímetro de acabado, cada especificación técnica se ejecuta sin concesiones.",
    descEn: "Every joint, every millimeter of finish, every technical specification is executed without compromise.",
  },
  {
    num: "03",
    nameEs: "Trazabilidad",
    nameEn: "Traceability",
    descEs: "Conocemos el origen de cada especie que trabajamos. Procedencia certificada y cadena de custodia documentada.",
    descEn: "We know the origin of every species we work with. Certified origin and documented chain of custody.",
  },
  {
    num: "04",
    nameEs: "Proceso",
    nameEn: "Process",
    descEs: "El proceso es el producto. Siete pasos, una veta: desde la escucha inicial hasta el mantenimiento anual.",
    descEn: "The process is the product. Seven steps, one grain: from the first conversation to annual maintenance.",
  },
];

interface NosotrosContentProps {
  lang: string;
}

export default function NosotrosContent({ lang }: NosotrosContentProps) {
  const t = useTranslations("nosotros");
  const [activeHito, setActiveHito] = useState(hitos.length - 1);

  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-24 px-6 md:px-16 min-h-[60vh] flex flex-col justify-center"
        style={{ backgroundColor: "var(--tinta)" }}
        aria-label="Nosotros hero"
      >
        <div className="max-w-4xl">
          <KickerMono color="var(--oro)" animate={false}>
            — AUTORES
          </KickerMono>
          <h1
            className="mt-8 mb-6"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 300,
              fontSize: "clamp(36px, 6vw, 80px)",
              color: "var(--pergamino)",
              lineHeight: 1.1,
            }}
          >
            {t("h1")}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 300,
              fontSize: "clamp(20px, 2.5vw, 30px)",
              color: "var(--arena)",
              fontStyle: "italic",
            }}
          >
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Editorial text */}
      <section
        className="py-24 px-6 md:px-16"
        style={{ backgroundColor: "var(--pergamino)" }}
        aria-label="Sobre el estudio"
      >
        <div className="max-w-3xl mx-auto">
          <FadeInWhenVisible>
            <p
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 300,
                fontSize: "clamp(15px, 1.8vw, 18px)",
                color: "var(--tinta)",
                lineHeight: 1.9,
              }}
            >
              {lang === "en"
                ? "CAOBA is a deliberately small studio. We believe quality is a decision of scale: one residential project per quarter, one commercial project per semester. We operate at the intersection of interior architecture, artisan cabinetry and technical maintenance of noble surfaces. We are not suppliers — we are the technical and editorial judgment behind every wood decision."
                : "CAOBA es un estudio deliberadamente pequeño. Creemos que la calidad es una decisión de escala: un proyecto residencial por trimestre, un proyecto comercial por semestre. Operamos en la intersección entre la arquitectura interior, la ebanistería de autor y el mantenimiento técnico de superficies nobles. No somos proveedores: somos el criterio técnico y editorial detrás de cada decisión en madera."}
            </p>
          </FadeInWhenVisible>

          {/* Founder quote */}
          <FadeInWhenVisible delay={0.2}>
            <blockquote
              className="mt-16 border-l-2 pl-8"
              style={{ borderColor: "var(--oro)" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 400,
                  fontSize: "clamp(22px, 3vw, 36px)",
                  color: "var(--tinta)",
                  fontStyle: "italic",
                  lineHeight: 1.5,
                }}
              >
                {lang === "en"
                  ? "\"We do not make furniture. We compose spaces where life unfolds better.\""
                  : "\"No fabricamos muebles. Componemos espacios donde una vida transcurre mejor.\""}
              </p>
              <footer
                className="mt-4"
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: "10px",
                  letterSpacing: "0.3em",
                  color: "var(--nogal)",
                  textTransform: "uppercase",
                }}
              >
                {lang === "en" ? "— Founder, CAOBA" : "— Fundador, CAOBA"}
              </footer>
            </blockquote>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="py-24 px-6 md:px-16"
        style={{ backgroundColor: "var(--lino)" }}
        aria-label="Historia del estudio"
      >
        <div className="max-w-7xl mx-auto">
          <KickerMono color="var(--nogal)" className="mb-16">
            {t("timeline_kicker")}
          </KickerMono>

          {/* Desktop horizontal interactive */}
          <div className="hidden md:block">
            <div className="relative">
              <div
                className="absolute top-5 left-0 right-0 h-px"
                style={{ backgroundColor: "var(--nogal)", opacity: 0.3 }}
                aria-hidden="true"
              />
              <div className="flex">
                {hitos.map((hito, i) => (
                  <button
                    key={hito.year}
                    onClick={() => setActiveHito(i)}
                    className="flex flex-col items-center flex-1 cursor-pointer"
                    aria-label={`${hito.year}: ${lang === "en" ? hito.en : hito.es}`}
                    aria-pressed={activeHito === i}
                    style={{ background: "none", border: "none", padding: 0 }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center border-2 z-10 transition-all duration-300"
                      style={{
                        borderColor: activeHito === i ? "var(--oro)" : "var(--nogal)",
                        backgroundColor: activeHito === i ? "var(--oro)" : "var(--lino)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains), monospace",
                          fontSize: "8px",
                          color: activeHito === i ? "var(--tinta)" : "var(--nogal)",
                        }}
                      >
                        {hito.year.slice(2)}
                      </span>
                    </div>
                    <span
                      className="mt-4"
                      style={{
                        fontFamily: "var(--font-jetbrains), monospace",
                        fontSize: "10px",
                        letterSpacing: "0.2em",
                        color: activeHito === i ? "var(--tinta)" : "var(--nogal)",
                        transition: "color 0.3s",
                      }}
                    >
                      {hito.year}
                    </span>
                  </button>
                ))}
              </div>

              {/* Active hito text */}
              <motion.div
                key={activeHito}
                className="mt-12"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontWeight: 400,
                    fontSize: "clamp(22px, 3vw, 36px)",
                    color: "var(--tinta)",
                    fontStyle: "italic",
                  }}
                >
                  {lang === "en" ? hitos[activeHito].en : hitos[activeHito].es}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Mobile vertical */}
          <div className="md:hidden flex flex-col gap-6">
            {hitos.map((hito) => (
              <div key={hito.year} className="flex gap-5 items-start">
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    color: "var(--oro)",
                    minWidth: 40,
                    paddingTop: 2,
                  }}
                >
                  {hito.year}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "20px",
                    color: "var(--tinta)",
                    fontStyle: "italic",
                  }}
                >
                  {lang === "en" ? hito.en : hito.es}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores 2x2 grid */}
      <section
        className="py-24 px-6 md:px-16"
        style={{ backgroundColor: "var(--caoba)" }}
        aria-label="Valores del estudio"
      >
        <div className="max-w-7xl mx-auto">
          <KickerMono color="var(--oro-claro)" className="mb-16">
            {t("valores_kicker")}
          </KickerMono>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {valores.map((valor) => (
              <motion.article key={valor.num} variants={fadeUp}>
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: "11px",
                    letterSpacing: "0.35em",
                    color: "var(--oro-claro)",
                  }}
                >
                  {valor.num}
                </span>
                <h3
                  className="mt-4 mb-4"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontWeight: 400,
                    fontSize: "clamp(26px, 3vw, 42px)",
                    color: "var(--pergamino)",
                    lineHeight: 1.2,
                  }}
                >
                  {lang === "en" ? valor.nameEn : valor.nameEs}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 300,
                    fontSize: "14px",
                    color: "var(--arena)",
                    lineHeight: 1.8,
                    maxWidth: 280,
                  }}
                >
                  {lang === "en" ? valor.descEn : valor.descEs}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Prensa placeholder */}
      <section
        className="py-20 px-6 md:px-16"
        style={{ backgroundColor: "var(--pergamino)" }}
        aria-label="Prensa y reconocimientos"
      >
        <div className="max-w-7xl mx-auto text-center">
          <KickerMono color="var(--nogal)" className="mb-12">
            {t("prensa_kicker")}
          </KickerMono>
          <p
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 300,
              fontSize: "14px",
              color: "var(--nogal)",
            }}
          >
            {lang === "en"
              ? "Press features and recognitions coming soon."
              : "Apariciones en prensa y reconocimientos próximamente."}
          </p>
        </div>
      </section>
    </>
  );
}

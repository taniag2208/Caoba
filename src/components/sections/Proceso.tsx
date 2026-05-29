"use client";

import { motion } from "framer-motion";
import KickerMono from "@/components/ui/KickerMono";
import { viewportOnce } from "@/lib/motion";

const steps = [
  { num: "01", es: "Escucha", en: "Listen" },
  { num: "02", es: "Diagnóstico", en: "Diagnosis" },
  { num: "03", es: "Diseño", en: "Design" },
  { num: "04", es: "Selección", en: "Selection" },
  { num: "05", es: "Taller", en: "Workshop" },
  { num: "06", es: "Instalación", en: "Installation" },
  { num: "07", es: "Mantenimiento", en: "Maintenance" },
];

interface ProcesoProps {
  lang: string;
}

export default function Proceso({ lang }: ProcesoProps) {
  return (
    <section
      className="py-24 px-6 md:px-16 overflow-hidden"
      style={{ backgroundColor: "var(--pergamino)" }}
      aria-label="Proceso de trabajo"
    >
      <div className="max-w-7xl mx-auto">
        <KickerMono color="var(--nogal)" className="mb-16">
          {lang === "en"
            ? "— PROCESS · SEVEN STEPS · ONE GRAIN"
            : "— PROCESO · SIETE PASOS · UNA VETA"}
        </KickerMono>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block relative">
          {/* Connector line */}
          <div
            className="absolute top-5 left-0 right-0 h-px"
            style={{ backgroundColor: "var(--nogal)", opacity: 0.4 }}
            aria-hidden="true"
          />

          <div className="flex justify-between relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="flex flex-col items-center text-center"
                style={{ width: `${100 / steps.length}%` }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {/* Circle */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center border mb-5 z-10"
                  style={{
                    borderColor: "var(--nogal)",
                    backgroundColor: "var(--pergamino)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontSize: "9px",
                      letterSpacing: "0.1em",
                      color: "var(--oro)",
                    }}
                  >
                    {step.num}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "18px",
                    fontWeight: 400,
                    color: "var(--tinta)",
                  }}
                >
                  {lang === "en" ? step.en : step.es}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden flex flex-col gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="flex items-center gap-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border"
                style={{
                  borderColor: "var(--nogal)",
                  backgroundColor: "var(--pergamino)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: "9px",
                    color: "var(--oro)",
                  }}
                >
                  {step.num}
                </span>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "22px",
                  fontWeight: 400,
                  color: "var(--tinta)",
                }}
              >
                {lang === "en" ? step.en : step.es}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import KickerMono from "@/components/ui/KickerMono";
import { stagger, fadeUp, viewportOnce } from "@/lib/motion";

const services = [
  {
    num: "01",
    nameEs: "Diseño",
    nameEn: "Design",
    descEs: "Diagnóstico de espacio, propuesta conceptual y desarrollo técnico. Cada proyecto parte de escuchar el lugar.",
    descEn: "Space diagnosis, conceptual proposal and technical development. Every project starts from listening to the space.",
  },
  {
    num: "02",
    nameEs: "Ebanistería",
    nameEn: "Cabinetry",
    descEs: "Fabricación en taller propio con maderas nobles certificadas. Cada pieza, construida para durar generaciones.",
    descEn: "Production in our own workshop with certified noble woods. Every piece built to last generations.",
  },
  {
    num: "03",
    nameEs: "Instalación",
    nameEn: "Installation",
    descEs: "Montaje técnico con equipo propio. Coordinamos obra, plomería y electricidad para una entrega limpia.",
    descEn: "Technical installation with our own team. We coordinate construction, plumbing and electrical for a clean delivery.",
  },
  {
    num: "04",
    nameEs: "Mantenimiento",
    nameEn: "Maintenance",
    descEs: "Plan anual de mantenimiento preventivo. Garantía de 10 años sobre estructura y acabados.",
    descEn: "Annual preventive maintenance plan. 10-year guarantee on structure and finishes.",
  },
];

interface OficioSectionProps {
  lang: string;
}

export default function OficioSection({ lang }: OficioSectionProps) {
  const t = useTranslations("home");

  return (
    <section
      className="py-24 px-6 md:px-16"
      style={{ backgroundColor: "var(--lino)" }}
      aria-label="Nuestros servicios"
    >
      <div className="max-w-7xl mx-auto">
        <KickerMono color="var(--nogal)" className="mb-16">
          {t("oficio_kicker")}
        </KickerMono>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {services.map((service) => (
            <motion.article
              key={service.num}
              variants={fadeUp}
              className="flex flex-col"
            >
              <span
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: "11px",
                  letterSpacing: "0.35em",
                  color: "var(--oro)",
                  fontWeight: 400,
                }}
              >
                {service.num}
              </span>
              <h3
                className="mt-4 mb-4"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(26px, 3vw, 38px)",
                  fontWeight: 400,
                  color: "var(--tinta)",
                  lineHeight: 1.2,
                }}
              >
                {lang === "en" ? service.nameEn : service.nameEs}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 300,
                  fontSize: "14px",
                  color: "var(--espresso)",
                  lineHeight: 1.7,
                }}
              >
                {lang === "en" ? service.descEn : service.descEs}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

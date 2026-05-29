"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import KickerMono from "@/components/ui/KickerMono";
import { viewportOnce } from "@/lib/motion";

const servicios = [
  {
    num: "01",
    nameEs: "Diseño de Interiores en Madera",
    nameEn: "Wood Interior Design",
    descEs:
      "Diseñamos espacios residenciales y comerciales donde la madera es el material estructural del concepto, no un revestimiento. Cada proyecto parte de un diagnóstico detallado del espacio, la luz y el uso. Trabajamos con maderas nobles de procedencia certificada: nogal americano, caoba, encino y cerezo. Diseño personalizado en madera noble para interiores Bogotá y Colombia.",
    descEn:
      "We design residential and commercial spaces where wood is the structural material of the concept, not a cladding. Each project starts from a detailed diagnosis of the space, light and use. We work with certified noble woods: American walnut, mahogany, oak and cherry.",
    specs: [
      { label: "Materiales", value: "Nogal · Caoba · Encino · Cerezo" },
      { label: "Plazo típico", value: "4–8 semanas" },
      { label: "Alcance", value: "Planos, renders, especificaciones técnicas" },
    ],
    bgColor: "var(--lino)",
  },
  {
    num: "02",
    nameEs: "Ebanistería de Autor",
    nameEn: "Artisan Cabinetry",
    descEs:
      "Fabricación artesanal en taller propio. Cada pieza se construye con maderas macizas, uniones tradicionales y acabados al aceite natural o hardwax. Ebanistería artesanal Colombia, muebles en madera a medida y carpintería fina Bogotá con criterio editorial y técnico.",
    descEn:
      "Artisan production in our own workshop. Each piece is built with solid woods, traditional joints and natural oil or hardwax finishes. Custom wood furniture and fine cabinetry with editorial and technical criteria.",
    specs: [
      { label: "Técnica", value: "Uniones espiga · Caja y espiga · Dovetail" },
      { label: "Acabados", value: "Aceite hardwax · Lacado mate · Aceite danés" },
      { label: "Plazo típico", value: "6–12 semanas de taller" },
    ],
    bgColor: "var(--pergamino)",
  },
  {
    num: "03",
    nameEs: "Instalación y Montaje",
    nameEn: "Installation & Assembly",
    descEs:
      "Coordinamos la instalación de madera en obra con equipo propio. Gestionamos la secuencia con obra civil, plomería y electricidad para una entrega limpia y sin daños a la madera. Instalación de madera en obra y montaje de interiores en madera con precisión técnica.",
    descEn:
      "We coordinate wood installation on-site with our own team. We manage the sequence with civil works, plumbing and electrical for a clean delivery.",
    specs: [
      { label: "Coordinación", value: "Obra · Plomería · Electricidad" },
      { label: "Plazo", value: "1–4 semanas según proyecto" },
      { label: "Garantía", value: "Entrega con acta técnica" },
    ],
    bgColor: "var(--lino)",
  },
  {
    num: "04",
    nameEs: "Mantenimiento y Restauración",
    nameEn: "Maintenance & Restoration",
    descEs:
      "Plan anual de mantenimiento preventivo y restauración de superficies nobles. Mantenimiento de superficies en madera y restauración de pisos y muebles en madera Bogotá. Garantía de 10 años sobre estructura y acabados.",
    descEn:
      "Annual preventive maintenance plan and noble surface restoration. 10-year guarantee on structure and finishes.",
    specs: [
      { label: "Frecuencia", value: "Visita anual incluida" },
      { label: "Alcance", value: "Pisos · Paredes · Muebles · Restauración" },
      { label: "Garantía", value: "10 años estructura y acabados" },
    ],
    bgColor: "var(--pergamino)",
  },
];

interface ServiciosContentProps {
  lang: string;
}

export default function ServiciosContent({ lang }: ServiciosContentProps) {
  const t = useTranslations("servicios");

  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-24 px-6 md:px-16 flex flex-col justify-center"
        style={{
          backgroundColor: "var(--tinta)",
          minHeight: "60vh",
        }}
        aria-label="Servicios hero"
      >
        <div className="max-w-4xl">
          <KickerMono color="var(--oro)" animate={false}>
            — OFICIO
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
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 300,
              fontSize: "clamp(16px, 2vw, 22px)",
              color: "var(--arena)",
              maxWidth: 600,
              lineHeight: 1.7,
            }}
          >
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Services alternating */}
      {servicios.map((servicio, i) => {
        const isEven = i % 2 === 0;
        return (
          <section
            key={servicio.num}
            className="py-24 px-6 md:px-16"
            style={{ backgroundColor: servicio.bgColor }}
            aria-label={lang === "en" ? servicio.nameEn : servicio.nameEs}
          >
            <div className="max-w-7xl mx-auto">
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center ${!isEven ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Image placeholder */}
                <motion.div
                  className="relative overflow-hidden"
                  style={{ height: 420, backgroundColor: isEven ? "var(--nogal)" : "var(--caoba)" }}
                  initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.8 }}
                  data-cursor="image"
                  aria-label={`Imagen de ${lang === "en" ? servicio.nameEn : servicio.nameEs}`}
                >
                  <div
                    className="absolute inset-0 opacity-25"
                    style={{
                      backgroundImage: `repeating-linear-gradient(88deg, transparent, transparent 3px, rgba(255,255,255,0.05) 3px, rgba(255,255,255,0.05) 6px)`,
                    }}
                    aria-hidden="true"
                  />
                  {/* Service number watermark */}
                  <div
                    className="absolute bottom-6 right-6"
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "120px",
                      fontWeight: 300,
                      color: "rgba(242,235,219,0.08)",
                      lineHeight: 1,
                      userSelect: "none",
                    }}
                    aria-hidden="true"
                  >
                    {servicio.num}
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 24 : -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.8, delay: 0.15 }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontSize: "11px",
                      letterSpacing: "0.35em",
                      color: "var(--oro)",
                    }}
                  >
                    {servicio.num}
                  </span>
                  <h2
                    className="mt-4 mb-6"
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontWeight: 300,
                      fontSize: "clamp(28px, 4vw, 52px)",
                      color: "var(--tinta)",
                      lineHeight: 1.15,
                    }}
                  >
                    {lang === "en" ? servicio.nameEn : servicio.nameEs}
                  </h2>
                  <p
                    className="mb-10"
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 300,
                      fontSize: "15px",
                      color: "var(--espresso)",
                      lineHeight: 1.8,
                    }}
                  >
                    {lang === "en" ? servicio.descEn : servicio.descEs}
                  </p>

                  {/* Spec sheet */}
                  <div className="border-t pt-6" style={{ borderColor: "var(--arena)" }}>
                    {servicio.specs.map((spec) => (
                      <div key={spec.label} className="flex gap-4 mb-3">
                        <span
                          style={{
                            fontFamily: "var(--font-jetbrains), monospace",
                            fontSize: "10px",
                            letterSpacing: "0.3em",
                            color: "var(--nogal)",
                            textTransform: "uppercase",
                            minWidth: 120,
                            flexShrink: 0,
                          }}
                        >
                          {spec.label}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-jetbrains), monospace",
                            fontSize: "10px",
                            color: "var(--tinta)",
                          }}
                        >
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import KickerMono from "@/components/ui/KickerMono";
import { viewportOnce } from "@/lib/motion";

interface EditorialSectionProps {
  lang: string;
}

export default function EditorialSection({ lang }: EditorialSectionProps) {
  const t = useTranslations("home");

  const title =
    lang === "en"
      ? "Why American walnut ages better than pine in tropical interiors"
      : "Por qué el nogal americano envejece mejor que el pino en interiores tropicales";

  const excerpt =
    lang === "en"
      ? "In high-humidity climates, wood choice isn't aesthetic—it's structural. Dense-grain species like walnut resist tropical conditions with a kind of quiet dignity that softwoods simply cannot match."
      : "En climas de alta humedad, la elección de la madera no es estética: es estructural. Las especies de grano denso como el nogal resisten el trópico con una dignidad silenciosa que los pinos simplemente no pueden igualar.";

  return (
    <section
      className="py-24 px-6 md:px-16"
      style={{ backgroundColor: "var(--espresso)" }}
      aria-label="Editorial"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image placeholder */}
          <motion.div
            className="relative overflow-hidden"
            style={{ height: 420 }}
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8 }}
            data-cursor="image"
          >
            <div
              className="w-full h-full"
              style={{
                background: `linear-gradient(135deg, var(--caoba) 0%, var(--nogal) 50%, var(--espresso) 100%)`,
              }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `repeating-linear-gradient(88deg, transparent, transparent 2px, rgba(255,255,255,0.04) 2px, rgba(255,255,255,0.04) 4px)`,
              }}
              aria-hidden="true"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <KickerMono color="var(--oro)" animate={false}>
              {t("editorial_kicker")}
            </KickerMono>
            <h2
              className="mt-8 mb-6"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 400,
                fontSize: "clamp(28px, 3.5vw, 48px)",
                color: "var(--pergamino)",
                lineHeight: 1.2,
                fontStyle: "italic",
              }}
            >
              {title}
            </h2>
            <p
              className="mb-10"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 300,
                fontSize: "15px",
                color: "var(--arena)",
                lineHeight: 1.8,
              }}
            >
              {excerpt}
            </p>
            <Link
              href={`/${lang}/nosotros`}
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "11px",
                letterSpacing: "0.3em",
                color: "var(--oro)",
                textTransform: "uppercase",
              }}
              data-cursor="cta"
            >
              {t("editorial_link")}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

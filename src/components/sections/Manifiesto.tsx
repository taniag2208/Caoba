"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import KickerMono from "@/components/ui/KickerMono";
import { viewportOnce } from "@/lib/motion";

export default function Manifiesto() {
  const t = useTranslations("home");

  return (
    <section
      className="py-32 px-6 md:px-16"
      style={{ backgroundColor: "var(--pergamino)" }}
      aria-label="Manifiesto"
    >
      <div className="max-w-3xl mx-auto text-center">
        <KickerMono color="var(--nogal)" className="mb-10">
          {t("manifiesto_kicker")}
        </KickerMono>
        <motion.p
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontWeight: 400,
            fontSize: "clamp(22px, 3.5vw, 38px)",
            color: "var(--tinta)",
            lineHeight: 1.5,
            fontStyle: "italic",
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          &ldquo;{t("manifiesto_text")}&rdquo;
        </motion.p>
      </div>
    </section>
  );
}

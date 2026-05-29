"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface HeroProps {
  lang: string;
}

export default function Hero({ lang }: HeroProps) {
  const t = useTranslations("home");

  return (
    <section
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      aria-label="Hero principal"
    >
      {/* Animated dark background (video placeholder) */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(160deg, var(--espresso) 0%, var(--tinta) 40%, var(--caoba) 100%)`,
        }}
      />

      {/* Wood grain texture overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(
            88deg,
            transparent,
            transparent 3px,
            rgba(184,146,77,0.04) 3px,
            rgba(184,146,77,0.04) 6px
          ), repeating-linear-gradient(
            92deg,
            transparent,
            transparent 8px,
            rgba(255,255,255,0.015) 8px,
            rgba(255,255,255,0.015) 16px
          )`,
        }}
        aria-hidden="true"
      />

      {/* Animated light sweep (simulates video warmth) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 70% 60%, rgba(139,90,60,0.25) 0%, transparent 70%)`,
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.04, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "11px",
              letterSpacing: "0.42em",
              color: "var(--oro)",
              textTransform: "uppercase",
            }}
          >
            {t("kicker")}
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          className="mt-8 leading-tight"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontWeight: 300,
            fontSize: "clamp(40px, 7vw, 96px)",
            color: "var(--pergamino)",
            lineHeight: 1.1,
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
        >
          {t("h1_start")}{" "}
          <em style={{ color: "var(--oro)", fontStyle: "italic" }}>
            {t("h1_highlight")}
          </em>{" "}
          {t("h1_end")}
        </motion.h1>

        {/* CTA */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
        >
          <Link
            href={`/${lang}/contacto`}
            className="btn-outline-pergamino inline-block"
            data-cursor="cta"
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "11px",
              letterSpacing: "0.3em",
              border: "1px solid var(--pergamino)",
              color: "var(--pergamino)",
              padding: "0.875rem 2.5rem",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background-color 0.3s, color 0.3s",
            }}
          >
            {t("cta")}
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "9px",
            letterSpacing: "0.3em",
            color: "var(--arena)",
            textTransform: "uppercase",
            writingMode: "vertical-rl",
          }}
        >
          {t("scroll")}
        </span>
        <motion.div
          className="w-px"
          style={{ backgroundColor: "var(--oro)", height: 40 }}
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

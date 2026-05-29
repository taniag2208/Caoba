"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

interface NavProps {
  lang: string;
}

export default function Nav({ lang }: NavProps) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const otherLang = lang === "es" ? "en" : "es";
  const otherPath = pathname.replace(`/${lang}`, `/${otherLang}`);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: `/${lang}/servicios`, label: t("oficio") },
    { href: `/${lang}/proyectos`, label: t("obra") },
    { href: `/${lang}/nosotros`, label: t("autores") },
    { href: `/${lang}/contacto`, label: t("conversacion") },
  ];

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(18,11,7,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <nav
        className="flex items-center justify-between px-8 md:px-16"
        style={{ height: 72 }}
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <Link
          href={`/${lang}`}
          className="flex-shrink-0"
          aria-label="CAOBA - Ir al inicio"
        >
          <span
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 300,
              fontSize: "22px",
              letterSpacing: "0.16em",
              color: "var(--pergamino)",
            }}
          >
            CAO<span style={{ color: "var(--oro)" }}>B</span>A
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative group"
              data-cursor="cta"
            >
              <span
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: "10px",
                  letterSpacing: "0.35em",
                  fontWeight: 400,
                  color: isActive(link.href) ? "var(--oro)" : "var(--arena)",
                  transition: "color 0.2s",
                  textTransform: "uppercase",
                }}
              >
                {link.label}
              </span>
              {/* Animated gold underline */}
              <motion.span
                className="absolute -bottom-1 left-0 h-px"
                style={{ backgroundColor: "var(--oro)" }}
                initial={{ width: isActive(link.href) ? "100%" : "0%" }}
                animate={{ width: isActive(link.href) ? "100%" : "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.25 }}
              />
            </Link>
          ))}

          {/* Lang toggle */}
          <Link
            href={otherPath}
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "10px",
              letterSpacing: "0.35em",
              color: "var(--oro)",
              textTransform: "uppercase",
            }}
          >
            {t("lang")}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <motion.span
            className="block w-6 h-px"
            style={{ backgroundColor: "var(--pergamino)" }}
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
          />
          <motion.span
            className="block w-6 h-px"
            style={{ backgroundColor: "var(--pergamino)" }}
            animate={{ opacity: menuOpen ? 0 : 1 }}
          />
          <motion.span
            className="block w-6 h-px"
            style={{ backgroundColor: "var(--pergamino)" }}
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:hidden"
            style={{ backgroundColor: "var(--tinta)" }}
          >
            <div className="flex flex-col px-8 py-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: "12px",
                    letterSpacing: "0.4em",
                    color: isActive(link.href) ? "var(--oro)" : "var(--pergamino)",
                    textTransform: "uppercase",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={otherPath}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: "12px",
                  letterSpacing: "0.4em",
                  color: "var(--oro)",
                  textTransform: "uppercase",
                }}
              >
                {t("lang")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

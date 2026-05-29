import Link from "next/link";
import { getTranslations } from "next-intl/server";

interface FooterProps {
  lang: string;
}

export default async function Footer({ lang }: FooterProps) {
  const tNav = await getTranslations({ locale: lang, namespace: "nav" });
  const tFooter = await getTranslations({ locale: lang, namespace: "footer" });

  const navLinks = [
    { href: `/${lang}/servicios`, label: tNav("oficio") },
    { href: `/${lang}/proyectos`, label: tNav("obra") },
    { href: `/${lang}/nosotros`, label: tNav("autores") },
    { href: `/${lang}/contacto`, label: tNav("conversacion") },
  ];

  return (
    <footer
      style={{ backgroundColor: "var(--tinta)" }}
      className="px-8 md:px-16 py-16"
      aria-label="Pie de página"
    >
      {/* Logo centrado */}
      <div className="text-center mb-10">
        <Link href={`/${lang}`} aria-label="CAOBA inicio">
          <div
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 300,
              fontSize: "32px",
              letterSpacing: "0.16em",
              color: "var(--pergamino)",
            }}
          >
            CAO<span style={{ color: "var(--oro)" }}>B</span>A
          </div>
        </Link>
        <div className="flex items-center justify-center gap-3 mt-2">
          <div className="h-px w-12" style={{ backgroundColor: "var(--oro)" }} />
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "9px",
              letterSpacing: "0.42em",
              color: "var(--oro)",
              textTransform: "uppercase",
            }}
          >
            {tFooter("tagline")}
          </span>
          <div className="h-px w-12" style={{ backgroundColor: "var(--oro)" }} />
        </div>
      </div>

      {/* Nav */}
      <nav
        className="flex flex-wrap justify-center gap-8 mb-10"
        aria-label="Navegación del pie de página"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "10px",
              letterSpacing: "0.35em",
              color: "var(--arena)",
              textTransform: "uppercase",
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Contact */}
      <div className="text-center mb-10">
        <a
          href="mailto:hola@caoba.studio"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 300,
            fontSize: "14px",
            color: "var(--arena)",
          }}
        >
          hola@caoba.studio
        </a>
      </div>

      {/* Credit */}
      <div
        className="text-center"
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: "10px",
          letterSpacing: "0.35em",
          color: "var(--espresso)",
          textTransform: "uppercase",
        }}
      >
        {tFooter("credit")}
      </div>
    </footer>
  );
}

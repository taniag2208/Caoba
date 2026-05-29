import type { Metadata } from "next";

const siteUrl = "https://caoba.studio";

interface PageSeoData {
  title: string;
  description: string;
  path: string;
}

const pages: Record<string, { es: PageSeoData; en: PageSeoData }> = {
  home: {
    es: {
      title: "CAOBA · Diseño de espacios en madera | Estudio boutique | Colombia",
      description:
        "Estudio de diseño, fabricación y mantenimiento de espacios en madera noble. Proyectos residenciales y comerciales a medida en Bogotá y Colombia. Cada pieza envejece mejor de lo que llegó.",
      path: "/es",
    },
    en: {
      title: "CAOBA · Wood interior design studio | Colombia",
      description:
        "Boutique studio for design, fabrication and maintenance of noble wood spaces. Residential and commercial projects in Colombia. Every piece ages better than it arrived.",
      path: "/en",
    },
  },
  servicios: {
    es: {
      title:
        "Servicios · Diseño de interiores en madera, ebanistería y mantenimiento | CAOBA",
      description:
        "Diseño de interiores en madera, ebanistería de autor, instalación y mantenimiento. Estudio boutique en Colombia. Proyectos desde diagnóstico hasta postventa.",
      path: "/es/servicios",
    },
    en: {
      title: "Services · Wood interior design, cabinetry and maintenance | CAOBA",
      description:
        "Wood interior design, artisan cabinetry, installation and maintenance. Boutique studio in Colombia. Projects from diagnosis to after-sales.",
      path: "/en/servicios",
    },
  },
  proyectos: {
    es: {
      title: "Obra · Portafolio de proyectos en madera noble | CAOBA Colombia",
      description:
        "Portafolio editorial de proyectos en madera: residencias, oficinas y espacios comerciales. Nogal, caoba, encino y cerezo trabajados con precisión técnica.",
      path: "/es/proyectos",
    },
    en: {
      title: "Work · Portfolio of noble wood projects | CAOBA Colombia",
      description:
        "Editorial portfolio of wood projects: residences, offices and commercial spaces. Walnut, mahogany, oak and cherry crafted with technical precision.",
      path: "/en/proyectos",
    },
  },
  nosotros: {
    es: {
      title: "Nosotros · El estudio detrás de CAOBA | Diseño Natural",
      description:
        "Un estudio deliberadamente pequeño. Conoce la filosofía, el proceso y los talleres aliados de CAOBA, firma de referencia en espacios en madera noble en Colombia.",
      path: "/es/nosotros",
    },
    en: {
      title: "Studio · The people behind CAOBA | Natural Design",
      description:
        "A deliberately small studio. Discover the philosophy, process and workshop partners of CAOBA, Colombia's reference firm for noble wood spaces.",
      path: "/en/nosotros",
    },
  },
  contacto: {
    es: {
      title:
        "Iniciar un proyecto · CAOBA | Diseño de espacios en madera en Colombia",
      description:
        "¿Tienes un espacio para transformar? Cuéntanos tu proyecto. Trabajamos con clientes residenciales y comerciales en Bogotá, Medellín, Cali y Colombia.",
      path: "/es/contacto",
    },
    en: {
      title: "Start a project · CAOBA | Wood interior design in Colombia",
      description:
        "Have a space to transform? Tell us about your project. We work with residential and commercial clients in Bogotá, Medellín, Cali and Colombia.",
      path: "/en/contacto",
    },
  },
};

export function buildMetadata(
  page: keyof typeof pages,
  lang: string
): Metadata {
  const locale = lang === "en" ? "en" : "es";
  const data = pages[page]?.[locale] ?? pages[page]?.es;

  return {
    title: data.title,
    description: data.description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: data.path,
      languages: {
        es: pages[page].es.path,
        en: pages[page].en.path,
      },
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `${siteUrl}${data.path}`,
      siteName: "CAOBA Diseño Natural",
      locale: locale === "en" ? "en_US" : "es_CO",
      type: "website",
    },
  };
}

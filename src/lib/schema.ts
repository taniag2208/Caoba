export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "InteriorDesigner",
  name: "CAOBA Diseño Natural",
  url: "https://caoba.studio",
  logo: "https://caoba.studio/logo.svg",
  description:
    "Estudio boutique de diseño, fabricación y mantenimiento de espacios en madera noble en Colombia.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cll 79 #8-42",
    addressLocality: "Bogotá",
    addressRegion: "Bogotá D.C.",
    addressCountry: "CO",
  },
  areaServed: ["Bogotá", "Medellín", "Cali", "Colombia"],
  priceRange: "$$$",
  knowsLanguage: ["es", "en"],
  serviceType: [
    "Diseño de interiores en madera",
    "Ebanistería de autor",
    "Instalación y montaje",
    "Mantenimiento de superficies en madera",
  ],
};

export function projectSchema(name: string, material: string, year: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    creator: {
      "@type": "Organization",
      name: "CAOBA Diseño Natural",
      url: "https://caoba.studio",
    },
    locationCreated: {
      "@type": "Place",
      addressLocality: "Bogotá",
      addressCountry: "CO",
    },
    material,
    dateCreated: year,
  };
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta un proyecto de diseño en madera en Bogotá?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los proyectos de CAOBA parten de $50M COP. Cada proyecto es único y se cotiza tras un diagnóstico personalizado. El rango varía según espacio, especie de madera y complejidad técnica.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tarda un proyecto de interiorismo en madera?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Iniciar un proyecto de CAOBA toma entre 12 y 24 semanas desde la primera conversación hasta la instalación. El proceso incluye diagnóstico, diseño, selección de madera, taller e instalación.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia a CAOBA de una ebanistería tradicional?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CAOBA no es una ebanistería: es un estudio de diseño. No vendemos paquetes ni catálogos. Cada proyecto comienza con un diagnóstico de espacio y termina con una solución irrepetible, diseñada y fabricada con criterio editorial.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué maderas usan para proyectos residenciales en Colombia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trabajamos principalmente con nogal americano, caoba, encino y cerezo. La elección de especie depende del espacio, la luz, el uso y el acabado deseado. En Colombia priorizamos maderas de procedencia certificada.",
      },
    },
  ],
};

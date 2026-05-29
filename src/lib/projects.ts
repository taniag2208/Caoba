export interface Project {
  slug: string;
  name: string;
  nameEn: string;
  type: "residencial" | "comercial" | "restauracion";
  city: string;
  wood: string;
  finish: string;
  area: string;
  duration: string;
  year: string;
  description: string;
  descriptionEn: string;
  featured: boolean;
  bgColor: string;
}

export const projects: Project[] = [
  {
    slug: "apartamento-chico",
    name: "Apartamento Chicó",
    nameEn: "Chicó Apartment",
    type: "residencial",
    city: "Bogotá",
    wood: "Nogal americano",
    finish: "Aceite hardwax mate",
    area: "180 m²",
    duration: "18 semanas",
    year: "2025",
    description:
      "Una residencia familiar en el norte de Bogotá donde el nogal americano define cada plano. La continuidad de veta entre paneles y carpintería crea la ilusión de un espacio tallado en una sola pieza.",
    descriptionEn:
      "A family residence in northern Bogotá where American walnut defines every plane. Grain continuity between panels and joinery creates the illusion of a space carved from a single piece.",
    featured: true,
    bgColor: "#8B5A3C",
  },
  {
    slug: "oficina-el-poblado",
    name: "Oficina El Poblado",
    nameEn: "El Poblado Office",
    type: "comercial",
    city: "Medellín",
    wood: "Caoba colombiana",
    finish: "Lacado mate natural",
    area: "320 m²",
    duration: "22 semanas",
    year: "2025",
    description:
      "Un espacio de trabajo donde la caoba colombiana dialoga con el concreto expuesto. Las divisiones en madera maciza crean acústica natural y calidez sin renunciar a la transparencia visual.",
    descriptionEn:
      "A workspace where Colombian mahogany dialogues with exposed concrete. Solid wood partitions create natural acoustics and warmth without sacrificing visual transparency.",
    featured: true,
    bgColor: "#5C3424",
  },
  {
    slug: "casa-laureles",
    name: "Casa Laureles",
    nameEn: "Laureles House",
    type: "residencial",
    city: "Medellín",
    wood: "Encino blanco",
    finish: "Aceite danés",
    area: "420 m²",
    duration: "24 semanas",
    year: "2024",
    description:
      "Una vivienda unifamiliar donde el encino blanco recorre pisos, paredes y techo en continuidad. El diseño elimina las juntas visibles para crear superficies que parecen crecer de la tierra.",
    descriptionEn:
      "A single-family home where white oak runs through floors, walls and ceiling in continuity. The design eliminates visible joints to create surfaces that seem to grow from the ground.",
    featured: true,
    bgColor: "#D9C8A8",
  },
  {
    slug: "restaurante-zona-rosa",
    name: "Restaurante Zona Rosa",
    nameEn: "Zona Rosa Restaurant",
    type: "comercial",
    city: "Bogotá",
    wood: "Cerezo americano",
    finish: "Barniz satinado",
    area: "210 m²",
    duration: "16 semanas",
    year: "2024",
    description:
      "Un restaurante de alta cocina donde el cerezo americano crea ambientes íntimos. Los paneles acústicos de madera perforada controlan la reverberación sin sacrificar la estética.",
    descriptionEn:
      "A fine dining restaurant where American cherry creates intimate atmospheres. Perforated wood acoustic panels control reverberation without sacrificing aesthetics.",
    featured: false,
    bgColor: "#8B5A3C",
  },
  {
    slug: "biblioteca-privada-usaquen",
    name: "Biblioteca Privada Usaquén",
    nameEn: "Usaquén Private Library",
    type: "restauracion",
    city: "Bogotá",
    wood: "Cedro de altura / Nogal",
    finish: "Aceite natural",
    area: "45 m²",
    duration: "12 semanas",
    year: "2026",
    description:
      "La restauración de una biblioteca de 1940 en una casa colonial de Usaquén. Recuperamos las maderas originales de cedro de altura y complementamos con nogal americano para las nuevas estanterías.",
    descriptionEn:
      "Restoration of a 1940 library in a colonial house in Usaquén. We recovered the original highland cedar and complemented it with American walnut for the new shelving.",
    featured: false,
    bgColor: "#2A1A12",
  },
  {
    slug: "sala-comedor-santa-barbara",
    name: "Sala-Comedor Santa Bárbara",
    nameEn: "Santa Bárbara Living-Dining",
    type: "residencial",
    city: "Bogotá",
    wood: "Nogal americano",
    finish: "Aceite hardwax mate",
    area: "85 m²",
    duration: "14 semanas",
    year: "2026",
    description:
      "Un proyecto de sala y comedor integrados donde la mesa de nogal se convierte en el epicentro compositivo. Las superficies de pared repiten la veta en escala, creando un campo visual unificado.",
    descriptionEn:
      "An integrated living and dining project where the walnut table becomes the compositional epicenter. Wall surfaces repeat the grain at scale, creating a unified visual field.",
    featured: false,
    bgColor: "#5C3424",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}

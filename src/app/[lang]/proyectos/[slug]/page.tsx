import { notFound } from "next/navigation";
import { getProjectBySlug, getAllSlugs } from "@/lib/projects";
import { projectSchema } from "@/lib/schema";
import { routing } from "@/i18n/routing";
import ProjectDetail from "@/components/sections/ProjectDetail";
import type { Metadata } from "next";

export function generateStaticParams() {
  const slugs = getAllSlugs();
  return routing.locales.flatMap((lang) =>
    slugs.map((slug) => ({ lang, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const name = lang === "en" ? project.nameEn : project.name;
  const description = lang === "en" ? project.descriptionEn : project.description;

  return {
    title: `${name} · CAOBA`,
    description,
    metadataBase: new URL("https://caoba.studio"),
    openGraph: {
      title: `${name} · CAOBA`,
      description,
      type: "website",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const schema = projectSchema(
    lang === "en" ? project.nameEn : project.name,
    project.wood,
    project.year
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ProjectDetail project={project} lang={lang} />
    </>
  );
}

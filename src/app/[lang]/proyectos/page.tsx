import { buildMetadata } from "@/lib/seo";
import { organizationSchema } from "@/lib/schema";
import ProyectosPageContent from "@/components/sections/ProyectosPageContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return buildMetadata("proyectos", lang);
}

export default async function ProyectosPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <ProyectosPageContent lang={lang} />
    </>
  );
}

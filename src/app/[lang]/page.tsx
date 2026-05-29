import { buildMetadata } from "@/lib/seo";
import { organizationSchema } from "@/lib/schema";
import Hero from "@/components/sections/Hero";
import Manifiesto from "@/components/sections/Manifiesto";
import ProyectosGrid from "@/components/sections/ProyectosGrid";
import OficioSection from "@/components/sections/OficioSection";
import EditorialSection from "@/components/sections/EditorialSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return buildMetadata("home", lang);
}

export default async function HomePage({
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
      <Hero lang={lang} />
      <Manifiesto />
      <ProyectosGrid lang={lang} />
      <OficioSection lang={lang} />
      <EditorialSection lang={lang} />
    </>
  );
}

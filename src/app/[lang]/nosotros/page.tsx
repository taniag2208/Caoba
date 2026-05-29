import { buildMetadata } from "@/lib/seo";
import { organizationSchema } from "@/lib/schema";
import NosotrosContent from "@/components/sections/NosotrosContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return buildMetadata("nosotros", lang);
}

export default async function NosotrosPage({
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
      <NosotrosContent lang={lang} />
    </>
  );
}

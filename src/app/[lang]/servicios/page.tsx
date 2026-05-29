import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { organizationSchema, faqSchema } from "@/lib/schema";
import Proceso from "@/components/sections/Proceso";
import ServiciosContent from "@/components/sections/ServiciosContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return buildMetadata("servicios", lang);
}

export default async function ServiciosPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang, namespace: "servicios" });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiciosContent lang={lang} />
      <Proceso lang={lang} />

      {/* Guarantee block */}
      <section
        className="py-20 px-6 md:px-16 text-center"
        style={{ backgroundColor: "var(--caoba)" }}
        aria-label="Garantía"
      >
        <p
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontWeight: 400,
            fontSize: "clamp(22px, 3vw, 38px)",
            color: "var(--pergamino)",
            fontStyle: "italic",
          }}
        >
          {t("garantia_text")}
        </p>
      </section>

      {/* CTA block */}
      <section
        className="py-24 px-6 md:px-16 text-center"
        style={{ backgroundColor: "var(--lino)" }}
        aria-label="Agendar visita"
      >
        <p
          className="mb-8"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 300,
            fontSize: "15px",
            color: "var(--espresso)",
          }}
        >
          {t("cta_sub")}
        </p>
        <a
          href={`/${lang}/contacto`}
          data-cursor="cta"
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "11px",
            letterSpacing: "0.3em",
            border: "1px solid var(--caoba)",
            color: "var(--caoba)",
            padding: "0.875rem 2.5rem",
            textTransform: "uppercase",
            textDecoration: "none",
            display: "inline-block",
            transition: "background 0.3s, color 0.3s",
          }}
        >
          {t("cta")}
        </a>
      </section>
    </>
  );
}

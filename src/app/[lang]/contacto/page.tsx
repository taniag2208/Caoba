import { buildMetadata } from "@/lib/seo";
import { organizationSchema } from "@/lib/schema";
import { getTranslations } from "next-intl/server";
import ContactForm from "@/components/sections/ContactForm";
import KickerMono from "@/components/ui/KickerMono";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return buildMetadata("contacto", lang);
}

export default async function ContactoPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang, namespace: "contacto" });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Hero */}
      <section
        className="pt-40 pb-24 px-6 md:px-16 min-h-[50vh] flex flex-col justify-center relative overflow-hidden"
        style={{ backgroundColor: "var(--tinta)" }}
        aria-label="Contacto hero"
      >
        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(88deg, transparent, transparent 3px, rgba(184,146,77,0.06) 3px, rgba(184,146,77,0.06) 6px)`,
          }}
          aria-hidden="true"
        />
        <div className="max-w-3xl relative z-10">
          <KickerMono color="var(--oro)" animate={false}>
            — CONVERSACIÓN
          </KickerMono>
          <h1
            className="mt-8 mb-6"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 300,
              fontSize: "clamp(36px, 6vw, 80px)",
              color: "var(--pergamino)",
              lineHeight: 1.1,
              fontStyle: "italic",
            }}
          >
            {t("h1")}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 300,
              fontSize: "clamp(15px, 2vw, 20px)",
              color: "var(--arena)",
              lineHeight: 1.7,
            }}
          >
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section
        className="py-24 px-6 md:px-16"
        style={{ backgroundColor: "var(--pergamino)" }}
        aria-label="Formulario de contacto"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Form */}
          <div>
            <ContactForm lang={lang} />
          </div>

          {/* Studio info */}
          <aside>
            {/* Time expectations */}
            <div
              className="p-10 mb-12"
              style={{ backgroundColor: "var(--lino)" }}
              aria-label="Tiempos de proceso"
            >
              <KickerMono color="var(--nogal)" animate={false} className="mb-8">
                {t("expectativas_kicker")}
              </KickerMono>
              {[
                {
                  label: lang === "en" ? "INITIAL RESPONSE" : "RESPUESTA INICIAL",
                  value: lang === "en" ? "48 BUSINESS HOURS" : "48 HORAS HÁBILES",
                },
                {
                  label: lang === "en" ? "DIAGNOSIS" : "DIAGNÓSTICO",
                  value: "2–3 " + (lang === "en" ? "WEEKS" : "SEMANAS"),
                },
                {
                  label: lang === "en" ? "PROJECT START" : "INICIO DE OBRA",
                  value: "12–24 " + (lang === "en" ? "WEEKS" : "SEMANAS"),
                },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-baseline py-4 border-b" style={{ borderColor: "var(--arena)" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "9px", letterSpacing: "0.3em", color: "var(--nogal)", textTransform: "uppercase" }}>
                    {label}
                  </span>
                  <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "11px", color: "var(--tinta)" }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Studio info */}
            <div>
              <KickerMono color="var(--nogal)" animate={false} className="mb-8">
                {t("estudio_kicker")}
              </KickerMono>
              <div className="flex flex-col gap-5">
                <div>
                  <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: "9px", letterSpacing: "0.3em", color: "var(--oro)", textTransform: "uppercase", marginBottom: 6 }}>
                    {lang === "en" ? "Address" : "Dirección"}
                  </div>
                  <div style={{ fontFamily: "var(--font-manrope)", fontWeight: 300, fontSize: "14px", color: "var(--tinta)" }}>
                    Cll 79 #8-42, Bogotá
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: "9px", letterSpacing: "0.3em", color: "var(--oro)", textTransform: "uppercase", marginBottom: 6 }}>
                    {lang === "en" ? "Hours" : "Horarios"}
                  </div>
                  <div style={{ fontFamily: "var(--font-manrope)", fontWeight: 300, fontSize: "14px", color: "var(--tinta)" }}>
                    {lang === "en" ? "Mon–Fri 9:00–18:00 · Saturdays by appointment" : "Lunes a Viernes 9:00–18:00 · Sábados con cita previa"}
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: "9px", letterSpacing: "0.3em", color: "var(--oro)", textTransform: "uppercase", marginBottom: 6 }}>
                    Email
                  </div>
                  <a
                    href="mailto:hola@caoba.studio"
                    style={{ fontFamily: "var(--font-manrope)", fontWeight: 300, fontSize: "14px", color: "var(--tinta)" }}
                  >
                    hola@caoba.studio
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

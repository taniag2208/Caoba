"use client";

import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import type { ContactFormData } from "@/lib/whatsapp";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface ContactFormProps {
  lang: string;
}

const inputStyle = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontWeight: 300,
  fontSize: "15px",
  color: "var(--tinta)",
  backgroundColor: "var(--pergamino)",
  border: "1px solid var(--arena)",
  padding: "0.875rem 1rem",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s",
};

const labelStyle = {
  fontFamily: "var(--font-jetbrains), monospace",
  fontSize: "9px",
  letterSpacing: "0.35em",
  color: "var(--nogal)",
  textTransform: "uppercase" as const,
  display: "block",
  marginBottom: 8,
};

export default function ContactForm({ lang }: ContactFormProps) {
  const t = useTranslations("contacto");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    const url = buildWhatsAppUrl(data);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const ciudades =
    lang === "en"
      ? ["Bogotá", "Medellín", "Cali", "Other"]
      : ["Bogotá", "Medellín", "Cali", "Otra"];

  const tipos =
    lang === "en"
      ? ["Residential", "Commercial", "Restoration", "I'm not sure"]
      : ["Residencial", "Comercial", "Restauración", "No estoy seguro"];

  const presupuestos = [
    "< $50M COP",
    "$50M – $150M",
    "$150M – $400M",
    "> $400M",
    lang === "en" ? "Prefer not to say" : "Prefiero no decirlo",
  ];

  const fuentes =
    lang === "en"
      ? ["Instagram", "Referral", "Google", "Architect / Designer", "Other"]
      : ["Instagram", "Referido", "Google", "Arquitecto / Diseñador", "Otro"];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8"
      aria-label={lang === "en" ? "Contact form" : "Formulario de contacto"}
      noValidate
    >
      {/* 01 Nombre */}
      <div>
        <label htmlFor="nombre" style={labelStyle}>
          01 — {lang === "en" ? "Full name" : "Nombre completo"} *
        </label>
        <input
          id="nombre"
          type="text"
          autoComplete="name"
          style={inputStyle}
          aria-required="true"
          aria-invalid={!!errors.nombre}
          {...register("nombre", { required: true })}
        />
        {errors.nombre && (
          <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "10px", color: "var(--nogal)", marginTop: 4, display: "block" }}>
            {lang === "en" ? "Required" : "Requerido"}
          </span>
        )}
      </div>

      {/* 02 Ciudad */}
      <div>
        <label htmlFor="ciudad" style={labelStyle}>
          02 — {lang === "en" ? "City" : "Ciudad"} *
        </label>
        <select
          id="ciudad"
          style={{ ...inputStyle, appearance: "none" as const, cursor: "pointer" }}
          aria-required="true"
          aria-invalid={!!errors.ciudad}
          {...register("ciudad", { required: true })}
        >
          <option value="">—</option>
          {ciudades.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        {errors.ciudad && (
          <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "10px", color: "var(--nogal)", marginTop: 4, display: "block" }}>
            {lang === "en" ? "Required" : "Requerido"}
          </span>
        )}
      </div>

      {/* 03 Tipo */}
      <div>
        <label htmlFor="tipo" style={labelStyle}>
          03 — {lang === "en" ? "Project type" : "Tipo de proyecto"} *
        </label>
        <select
          id="tipo"
          style={{ ...inputStyle, appearance: "none" as const, cursor: "pointer" }}
          aria-required="true"
          aria-invalid={!!errors.tipo}
          {...register("tipo", { required: true })}
        >
          <option value="">—</option>
          {tipos.map((tipo) => (
            <option key={tipo} value={tipo}>{tipo}</option>
          ))}
        </select>
        {errors.tipo && (
          <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "10px", color: "var(--nogal)", marginTop: 4, display: "block" }}>
            {lang === "en" ? "Required" : "Requerido"}
          </span>
        )}
      </div>

      {/* 04 Descripción */}
      <div>
        <label htmlFor="descripcion" style={labelStyle}>
          04 — {lang === "en" ? "Describe your space" : "Cuéntenos qué quiere transformar"} *
        </label>
        <textarea
          id="descripcion"
          rows={5}
          style={{ ...inputStyle, resize: "vertical" }}
          aria-required="true"
          aria-invalid={!!errors.descripcion}
          {...register("descripcion", { required: true, minLength: 20 })}
        />
        {errors.descripcion && (
          <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "10px", color: "var(--nogal)", marginTop: 4, display: "block" }}>
            {lang === "en" ? "Please describe your space (20 chars min)" : "Cuéntenos sobre su espacio (mínimo 20 caracteres)"}
          </span>
        )}
      </div>

      {/* 05 Presupuesto */}
      <div>
        <label htmlFor="presupuesto" style={labelStyle}>
          05 — {lang === "en" ? "Approximate budget" : "Presupuesto aproximado"} *
        </label>
        <select
          id="presupuesto"
          style={{ ...inputStyle, appearance: "none" as const, cursor: "pointer" }}
          aria-required="true"
          aria-invalid={!!errors.presupuesto}
          {...register("presupuesto", { required: true })}
        >
          <option value="">—</option>
          {presupuestos.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
        {errors.presupuesto && (
          <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "10px", color: "var(--nogal)", marginTop: 4, display: "block" }}>
            {lang === "en" ? "Required" : "Requerido"}
          </span>
        )}
      </div>

      {/* 06 Fuente */}
      <div>
        <label htmlFor="fuente" style={labelStyle}>
          06 — {lang === "en" ? "How did you find us?" : "¿Cómo nos encontró?"}
        </label>
        <select
          id="fuente"
          style={{ ...inputStyle, appearance: "none" as const, cursor: "pointer" }}
          {...register("fuente")}
        >
          <option value="">—</option>
          {fuentes.map((f) => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>
      </div>

      {/* CTA */}
      <div className="pt-4">
        <button
          type="submit"
          data-cursor="cta"
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "11px",
            letterSpacing: "0.3em",
            border: "1px solid var(--tinta)",
            color: "var(--tinta)",
            padding: "0.875rem 2.5rem",
            textTransform: "uppercase",
            background: "none",
            cursor: "pointer",
            transition: "background 0.3s, color 0.3s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "var(--tinta)";
            (e.currentTarget as HTMLButtonElement).style.color = "var(--pergamino)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
            (e.currentTarget as HTMLButtonElement).style.color = "var(--tinta)";
          }}
        >
          {t("cta")}
        </button>
        <p
          className="mt-6"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 300,
            fontSize: "11px",
            color: "var(--arena)",
            lineHeight: 1.6,
          }}
        >
          {t("disclaimer")}
        </p>
      </div>
    </form>
  );
}

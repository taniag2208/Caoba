const WA_NUMBER = "573000000000";

export interface ContactFormData {
  nombre: string;
  ciudad: string;
  tipo: string;
  descripcion: string;
  presupuesto: string;
  fuente: string;
}

export function buildWhatsAppUrl(data: ContactFormData): string {
  const message = `Hola CAOBA. Soy ${data.nombre} de ${data.ciudad}.
Proyecto: ${data.tipo}
Espacio: ${data.descripcion}
Presupuesto: ${data.presupuesto}
Referido por: ${data.fuente}`;

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

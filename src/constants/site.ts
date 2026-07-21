/**
 * SITE CONFIGURATION
 * ─────────────────────────────────────────────────────────────────
 * Ganti nilai di sini untuk mengkustomisasi branding per client.
 * Semua section mengambil data dari file ini — tidak ada hardcode.
 */

export const SITE_CONFIG = {
  /** Nama proyek / restoran */
  name: "in-Lite Indonesia",

  /** Tagline singkat */
  tagline: "#TerangIndonesia",

  /** Description untuk SEO */
  description:
    "in-Lite LED Indonesia — Pionir Lampu LED Lokal Berkualitas & Inovasi Sakelar Premium Alura & Linea Series.",

  /** URL canonical */
  url: "https://inlite.id",

  /** Path logo */
  logo: "/inlite.webp",

  /** Nomor WhatsApp (format internasional, tanpa +) */
  whatsapp: {
    number: "6281234567890",
    message:
      "Halo in-Lite Indonesia, saya tertarik dengan produk pencahayaan atau sakelar Alura & Linea Series.",
  },

  /** Social media */
  social: {
    instagram: "https://www.instagram.com/inliteled/",
    youtube: "",
    tiktok: "",
  },

  /** Google Maps Embed URL (Gedung Indra Sentra) */
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8224.943591265266!2d106.8539254896664!3d-6.177160602546201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5aa7cd40001%3A0x4b6339324b72619a!2sInlite%20Head%20Office!5e0!3m2!1sid!2sid!4v1782980346058!5m2!1sid!2sid",

  /** Tahun untuk copyright */
  year: new Date().getFullYear(),
} as const;

/** WhatsApp URL builder */
export const getWhatsAppUrl = (message?: string) => {
  const text = encodeURIComponent(message ?? SITE_CONFIG.whatsapp.message);
  return `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${text}`;
};

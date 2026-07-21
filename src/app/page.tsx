import { SITE_CONFIG } from "@/constants/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WAFloatingButton } from "@/components/ui";
import {
  HeroFrameBackground,
  Hero,
  Promo,
  Menu,

  Location,
  Facility,
  Advantage,
  AboutUs,
  FAQ,
  CTA,
  Branches,
} from "@/components/sections";

/**
 * MAIN PAGE
 * ─────────────────────────────────────────────────────────────────
 * One-page landing page.
 */
export default function HomePage() {
  return (
    <main className="relative bg-brand-bg min-h-screen overflow-x-hidden">
      {/* ── Fixed Scroll-driven Background (Envision Pattern) ────── */}
      <HeroFrameBackground />
      {/* ── Layout ──────────────────────────────────────────────── */}
      <Navbar />

      <Hero />

      {/* ── Other Sections ──────────────────────────────────────── */}
      <Promo />
      <Menu />
      <Facility />
      <Advantage />
      <Location />
      <Branches />
      <AboutUs />
      <FAQ />
      <CTA />

      {/* ── Footer ──────────────────────────────────────────────── */}
      <Footer />

      {/* ── Floating WhatsApp ────────────────────────────────────── */}
      <WAFloatingButton />

      {/* ── Structured Data Organization ────────────────────────────── */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE_CONFIG.name,
            image: SITE_CONFIG.url + "/inlite.webp",
            url: SITE_CONFIG.url,
            telephone: "+622100000000",
            logo: SITE_CONFIG.url + "/inlite.webp",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Gedung Indra Sentra Blok AE-AF-AG, Jl. Letjen Suprapto No. 60, Cempaka Putih Barat",
              addressLocality: "Jakarta Pusat",
              addressRegion: "DKI Jakarta",
              postalCode: "10520",
              addressCountry: "ID",
            },
            sameAs: [
              "https://www.instagram.com/inliteled/",
            ],
          }),
        }}
      />
    </main>
  );
}

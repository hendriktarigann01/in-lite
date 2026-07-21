import type {
  HeroContent,
  PromoContent,
  MenuContent,
  BranchContent,
  LocationContent,
  FacilityContent,
  AdvantageContent,
  AboutContent,
  FAQContent,
  CTAContent,
  FooterContent,
} from "@/types";

// ── HERO ─────────────────────────────────────────────────────────
export const HERO_CONTENT: HeroContent = {
  eyebrow:     "Pionir LED & Aksesori Elektrik",
  headline:    "#TerangIndonesia",
  subheadline: "Solusi Satu Atap Pencahayaan & Elektrikal",
  description: "Menyediakan lebih dari 2.000 produk lampu LED berkualitas SNI serta inovasi terbaru sakelar premium Alura & Linea Series.",
  badge:       "TerangIndonesia",
  cta: {
    primary:   "Hubungi WhatsApp Resmi",
    secondary: "Lihat Katalog Produk",
  },
  totalFrames: 101,
  frameDir:    "/frame-inlite-parallax",
  frameName:   "frame_",
  slides: [
    {
      id: "slide-lighting",
      headline: "Lampu LED SNI Premium",
      description: "Lini pencahayaan berkualitas tinggi, hemat energi, dan tahan lama sejak 2014 untuk seluruh penjuru Indonesia."
    },
    {
      id: "slide-alura",
      headline: "Alura Series Switches",
      description: "Sakelar elegan dengan aksen chrome mewah untuk statement piece interior modern. Hadir dalam warna Gold, Grey, dan Black."
    },
    {
      id: "slide-linea",
      headline: "Linea Series Switches",
      description: "Ketebalan ultra-thin 5mm minimalis timeless untuk estetika hunian modern Japandi & Scandinavian. Hadir dalam warna White, Grey, dan Black."
    },
    {
      id: "slide-features",
      headline: "Teknologi & Fitur Unggul",
      description: "Inovasi sakelar dengan baby skin coating lembut, soft click senyap, port USB terintegrasi, dan bahan tahan api hingga 850°C."
    }
  ]
};

// ── PROMO ────────────────────────────────────────────────────────
export const PROMO_CONTENT: PromoContent = {
  eyebrow: "Fokus Utama & Kampanye",
  headline: "Solusi Elektrikal & Pencahayaan",
  subheadline: "Temukan perpaduan fungsionalitas dan estetika tinggi pada rangkaian produk terbaru dan terlaris kami.",
  note: "*Seluruh produk telah memenuhi standar SNI untuk keamanan dan kenyamanan rumah tangga Anda.",
  groups: [
    {
      id:    "switch-socket",
      title: "Sakelar & Stop Kontak Premium",
      items: [
        "Alura Series dengan aksen chrome mewah & Linea Series berdesain ultra-thin 5mm",
        "Permukaan dilapisi baby skin coating yang sangat lembut dan nyaman disentuh",
        "Dilengkapi soft clicking mechanism yang memperhalus bunyi sakelar",
        "Menggunakan material fire retardant tahan panas ekstrem hingga 850°C",
      ],
    },
    {
      id:    "led-solutions",
      title: "Pencahayaan LED Terlaris",
      items: [
        "Lampu Sorot LED INF027 (10W-200W) yang tangguh dan tahan cuaca ekstrim untuk outdoor",
        "Lampu TL T8 & TL T5 hemat energi yang mendominasi penjualan fast-moving",
        "Pilihan bohlam LED andalan berkualitas tinggi dengan harga ramah untuk mass-market",
      ],
    },
    {
      id:    "distribution",
      title: "Omnichannel & Garansi Resmi",
      items: [
        "Produk berstandar SNI dengan proses manufaktur dan uji kualitas ketat",
        "Tersedia garansi resmi untuk menjamin kenyamanan pemakaian jangka panjang",
        "Distribusi luas di modern trade (Mitra10, dll.) dan official store di Shopee & Tokopedia",
      ],
    },
  ],
};

// ── MENU ─────────────────────────────────────────────────────────
export const MENU_CONTENT: MenuContent = {
  eyebrow:     "Katalog Produk",
  headline:    "Produk Pilihan Unggulan",
  subheadline: "Koleksi lengkap sakelar premium teranyar dan lampu LED andalan berkualitas tinggi untuk kenyamanan dan keindahan ruangan Anda.",
  categories: [
    {
      id:    "switch-socket",
      name:  "Sakelar & Stop Kontak",
      items: [
        {
          id:        "s11-alura-bk",
          name:      "Sakelar 1 Gang 1 Way Alura Hitam",
          price:     "Rp 77.177",
          description: "Sakelar premium Alura Series warna hitam elegan dengan baby skin coating lembut dan soft click mechanism.",
          image:     "/products/product-1.webp",
          tag:       "Alura Series",
        },
        {
          id:        "s12-alura-gd",
          name:      "Sakelar 1 Gang 2 Way Alura Emas",
          price:     "Rp 62.000",
          description: "Sakelar Alura Series dengan warna emas mewah and aksen chrome eksklusif untuk statement piece interior Anda.",
          image:     "/products/product-2.webp",
          tag:       "Best Seller",
        },
        {
          id:        "s21-linea-bk",
          name:      "Sakelar 2 Gang 1 Way Linea Hitam",
          price:     "Rp 62.222",
          description: "Sakelar Linea Series berdesain ultra-thin 5mm minimalis timeless. Sangat cocok untuk gaya Japandi dan Scandinavian.",
          image:     "/products/product-3.webp",
          tag:       "Linea Series",
        },
        {
          id:        "soeu-alura-gd",
          name:      "Stop Kontak EU 16A Type-C Alura Emas",
          price:     "Rp 297.480",
          description: "Stop kontak premium dilengkapi port USB Type-A & Type-C, serta material fire retardant tahan panas hingga 850°C.",
          image:     "/products/product-4.webp",
          tag:       "Fitur Lengkap",
        },
        {
          id:        "f5-alura-frame",
          name:      "Bingkai Saklar 5 Gang Alura",
          price:     "Rp 30.556",
          description: "Bingkai multi-gang premium Alura Series untuk penataan sakelar/stop kontak yang rapi dan seragam.",
          image:     "/products/product-5.webp",
          tag:       "Aksesori",
        }
      ],
    },
    {
      id:    "led-lighting",
      name:  "Pencahayaan LED",
      items: [
        {
          id:        "inf027-100w",
          name:      "Lampu Sorot LED 100W (INF027)",
          price:     "Rp 857.000",
          description: "Lampu sorot outdoor/tembak LED 100W tangguh dengan performa pencahayaan tinggi, awet dan tahan segala cuaca.",
          image:     "/products/product-6.webp",
          tag:       "Best Seller",
        },
        {
          id:        "t8-18w-tube",
          name:      "Lampu TL T8 LED 18W (120cm)",
          price:     "Rp 44.500",
          description: "Lampu TL Tube LED hemat energi, alternatif terbaik pengganti lampu TL konvensional dengan cahaya yang lebih terang.",
          image:     "/products/product-7.webp",
          tag:       "Terlaris",
        },
        {
          id:        "t5-20w-neon",
          name:      "Lampu Neon LED TL T5 20W (INT5003)",
          price:     "Rp 67.000",
          description: "Lampu neon T5 slim praktis dengan seamless connection, sangat ideal untuk indirect lighting/ceiling drop plafon.",
          image:     "/products/product-8.webp",
          tag:       "Hemat Energi",
        },
        {
          id:        "inb010-5w",
          name:      "Lampu Bohlam LED (INB010) 5W",
          price:     "Rp 14.000",
          description: "Lampu bohlam LED andalan berkualitas tinggi dengan harga ekonomis. Cahaya nyaman dan ramah lingkungan.",
          image:     "/products/product-9.webp",
          tag:       "Value Series",
        },
        {
          id:        "led-strip-premium",
          name:      "LED Strip Light Premium",
          price:     "Rp 98.000",
          description: "Lampu strip LED fleksibel untuk memberikan aksen cahaya estetik dan dramatis pada kabinet, cermin, atau drop ceiling.",
          image:     "/products/product-10.webp",
          tag:       "Dekorasi",
        }
      ],
    },
  ],
};

// ── BRANCHES ─────────────────────────────────────────────────────
export const BRANCHES_CONTENT: BranchContent = {
  eyebrow:     "Kantor Cabang",
  headline:    "Distribusi Nasional",
  subheadline: "in-Lite hadir di berbagai kota besar di Indonesia untuk memberikan layanan terbaik.",
  branches: [
    {
      id:      "br-bandung",
      name:    "Cabang Bandung",
      address: "Kawasan Pergudangan BIZ PARK Blok AA6 No. 5, Kec. Kopo, Bandung, Jawa Barat 40233",
      phone:   "+62 22 0000 0000",
      hours:   "08.00 – 17.00",
    },
    {
      id:      "br-surabaya",
      name:    "Cabang Surabaya",
      address: "Jl. Mangkunegoro No. 5, RT006 RW010, Darmo Wonokromo, Surabaya, Jawa Timur 60241",
      phone:   "+62 31 0000 0000",
      hours:   "08.00 – 17.00",
    },
    {
      id:      "br-makassar",
      name:    "Cabang Makassar",
      address: "Jl. Pangeran Diponegoro 110 (Lama) / 124 (Baru) RT001 RW001, Bontoala Parang, Makassar, Sulawesi Selatan 90154",
      phone:   "+62 411 0000 0000",
      hours:   "08.00 – 17.00",
    }
  ]
};

// ── LOCATION ─────────────────────────────────────────────────────
export const LOCATION_CONTENT: LocationContent = {
  eyebrow: "Kantor Pusat",
  headline: "Head Office in-Lite",
  subheadline: "PT Suryamas Lumisindo Dwidaya, Jakarta Pusat",
  description:
    "Kantor pusat kami berlokasi strategis di Jakarta Pusat, mengoordinasikan seluruh operasional, manufaktur, QC ketat, dan distribusi omnichannel in-Lite ke seluruh penjuru tanah air guna mewujudkan visi #TerangIndonesia.",
  address:
    "Gedung Indra Sentra Blok AE-AF-AG, Jl. Letjen Suprapto No. 60, Cempaka Putih Barat, Jakarta Pusat, DKI Jakarta 10520",
  phone: "+62 21 00000000",
  hours: {
    "Senin - Jumat": "08.30 – 17.30 (Hari Kerja)",
    "Sabtu - Minggu": "Tutup (Akhir Pekan)",
  },
};

// ── FACILITY ─────────────────────────────────────────────────────
export const FACILITY_CONTENT: FacilityContent = {
  eyebrow:     "Fitur & Standar Kualitas",
  headline:    "Keunggulan Teknologi in-Lite",
  subheadline: "Setiap produk kami dirancang dengan standar kualitas tinggi untuk menjamin kenyamanan, keamanan, dan keindahan.",
  items: [
    { id: "sni-standard", label: "Standar SNI & Garansi", description: "Lolos sertifikasi SNI ketat dan dilengkapi garansi resmi untuk jaminan kualitas jangka panjang.", icon: "award" },
    { id: "fire-retardant", label: "Fire Retardant 850°C", description: "Material sakelar & stop kontak tahan rambat api dan panas ekstrem untuk perlindungan maksimal.", icon: "shield" },
    { id: "soft-click", label: "Soft Click Mechanism", description: "Mekanisme sakelar berbunyi halus dan lembut saat ditekan, memberikan kenyamanan akustik.", icon: "key" },
    { id: "baby-skin", label: "Baby Skin Coating", description: "Tekstur halus premium pada permukaan sakelar (Alura & Linea) yang sangat lembut disentuh.", icon: "sun" },
    { id: "led-tech", label: "Teknologi LED Premium", description: "Efisiensi daya luar biasa menghasilkan cahaya terang merata dengan watt yang lebih hemat.", icon: "activity" },
    { id: "wide-access", label: "Akses Distribusi Luas", description: "Mudah didapatkan di modern trade (Mitra10, dsb.) dan Toko Resmi online Shopee/Tokopedia.", icon: "building" },
  ],
};

// ── ADVANTAGE ────────────────────────────────────────────────────
export const ADVANTAGE_CONTENT: AdvantageContent = {
  eyebrow:     "Mengapa in-Lite",
  headline:    "Inovasi & Kualitas Terpercaya",
  subheadline: "Kombinasi standar kualitas nasional, desain modern, dan kemudahan akses produk pencahayaan & elektrikal.",
  items: [
    {
      id:          "adv-sni",
      number:      "01",
      title:       "Standar Keamanan SNI",
      description: "Seluruh produk in-Lite telah bersertifikasi SNI resmi, menjamin keamanan kelistrikan tinggi untuk rumah tangga.",
    },
    {
      id:          "adv-switch",
      number:      "02",
      title:       "Inovasi Sakelar & Stop Kontak",
      description: "Penerapan fitur premium seperti baby skin coating, soft click, dan material fire retardant pada Alura & Linea series.",
    },
    {
      id:          "adv-catalog",
      number:      "03",
      title:       "Pilihan 2.000+ Produk",
      description: "Menyediakan lini produk pencahayaan terlengkap, dari bohlam, TL, downlight, hingga stop kontak elektrikal.",
    },
    {
      id:          "adv-omni",
      number:      "04",
      title:       "Omnichannel & Terjangkau",
      description: "Produk berkualitas tinggi dengan harga yang sangat kompetitif, didistribusikan merata di seluruh modern trade & online.",
    },
  ],
};

// ── ABOUT ────────────────────────────────────────────────────────
export const ABOUT_CONTENT: AboutContent = {
  eyebrow: "Tentang Kami",
  headline: "in-Lite Indonesia",
  subheadline: "#TerangIndonesia — Produk Lampu Anak Negeri",
  description:
    "Sejak berdiri pada tahun 2014 di bawah naungan PT Suryamas Lumisindo Dwidaya, in-Lite LED telah menjadi salah satu pemimpin pasar pencahayaan di Indonesia. Dengan komitmen menghadirkan produk lampu anak Negeri berkualitas premium namun berharga terjangkau, in-Lite terus berinovasi. Pada Februari 2026, in-Lite melangkah menuju 'one stop lighting solution' dengan meluncurkan lini produk sakelar & stop kontak premium Alura Series & Linea Series yang mengusung desain mewah, minimalis, dan berteknologi tinggi.",
  stats: [
    { id: "stat-tahun", value: "2014", label: "Tahun Berdiri" },
    { id: "stat-produk", value: "2000+", label: "Pilihan Produk" },
    { id: "stat-rating", value: "4.9", label: "Rating Marketplace" },
    { id: "stat-sales", value: "133K+", label: "Produk Terjual Online" },
  ],
};

// ── FAQ ──────────────────────────────────────────────────────────
export const FAQ_CONTENT: FAQContent = {
  eyebrow:  "FAQ",
  headline: "Pertanyaan Terkait",
  items: [
    {
      id:       "faq-sni",
      question: "Apakah semua produk in-Lite memiliki standar SNI?",
      answer:   "Ya, seluruh produk in-Lite LED serta lini sakelar & stop kontak telah lolos uji laboratorium nasional dan memenuhi standar SNI untuk keamanan kelistrikan.",
    },
    {
      id:       "faq-switch-diff",
      question: "Apa perbedaan Alura Series dan Linea Series?",
      answer:   "Alura Series menonjolkan keanggunan eksklusif dengan aksen chrome dan warna Gold/Grey/Black. Linea Series mengusung konsep ultra-thin 5mm yang minimalis timeless dengan warna White/Grey/Black.",
    },
    {
      id:       "faq-features",
      question: "Apa saja fitur unggulan sakelar Alura & Linea?",
      answer:   "Dilengkapi baby skin coating (tekstur lembut), soft clicking mechanism (suara klik halus), port USB (Type-A & Type-C) terintegrasi pada SKU tertentu, serta material fire retardant yang tahan panas hingga 850°C.",
    },
    {
      id:       "faq-warranty",
      question: "Apakah produk in-Lite bergaransi?",
      answer:   "Tentu. Kami berkomitmen memberikan kenyamanan bagi konsumen dengan menyediakan garansi resmi untuk produk lampu LED in-Lite.",
    },
    {
      id:       "faq-store",
      question: "Di mana saya bisa membeli produk in-Lite?",
      answer:   "Produk in-Lite dapat dibeli melalui modern trade (seperti Mitra10, Depo Bangunan, Hypermart), toko listrik tradisional terdekat, serta toko online resmi kami di Shopee & Tokopedia.",
    },
  ],
};

// ── CTA ──────────────────────────────────────────────────────────
export const CTA_CONTENT: CTAContent = {
  eyebrow: "Mulai Terangi Hunian",
  headline: "#TerangIndonesia",
  subheadline:
    "Ciptakan suasana pencahayaan estetik dengan keamanan kelistrikan tinggi menggunakan produk in-Lite.",
  cta: {
    primary: "Hubungi WhatsApp Resmi",
    secondary: "Temukan Toko Terdekat",
  },
};

// ── FOOTER ───────────────────────────────────────────────────────
export const FOOTER_CONTENT: FooterContent = {
  tagline:   "Pionir lampu LED berkualitas tinggi dan lini sakelar premium Alura & Linea Series yang bergaransi resmi dan berstandar SNI di Indonesia.",
  copyright: `© ${new Date().getFullYear()} in-Lite Indonesia (PT Suryamas Lumisindo Dwidaya). All rights reserved.`,
  links: [
    { label: "Produk", href: "#menu" },
    { label: "Inovasi",        href: "#promo" },
    { label: "Teknologi",    href: "#facility" },
    { label: "Cabang",       href: "#branches" },
    { label: "Lokasi HQ",       href: "#location" },
    { label: "FAQ",          href: "#faq" },
  ],
};

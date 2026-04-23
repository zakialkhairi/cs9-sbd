"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type HeroSlide = {
  id: number;
  eyebrow: string;
  title: string;
  copy: string;
  cta: string;
  image: string;
  alt: string;
  tone: "blue" | "yellow" | "cream";
};

type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  originalPrice?: number;
  stock: string;
  dimensions: string;
  material: string;
  badge?: string;
  image: string;
  alt: string;
  tone: "blue" | "yellow" | "cream";
};

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    eyebrow: "",
    title: "Wujudkan hunian impian Anda dengan desain minimalis khas Skandinavia.",
    copy:
      "",
    cta: "Belanja koleksi baru",
    image: "/images/Ikea-dashboard2.jpg",
    alt: "Tampilan area toko IKEA",
    tone: "blue",
  },
  {
    id: 2,
    eyebrow: "",
    title: "Nikmati pengalaman belanjaan unik, mulai dari perabotan hingga kelzatan makanan khas Swedia.",
    copy:
      "",
    cta: "Lihat promo makanan",
    image: "/images/ikea-makanan.jpg",
    alt: "Produk dan suasana IKEA makanan",
    tone: "cream",
  },
  {
    id: 3,
    eyebrow: "",
    title: "Bawa pulang furnitur berkualitas, solusi cerdas untuk menciptakan kehidupan yang lebih baik.",
    copy:
      "",
    cta: "Jelajahi family packs",
    image: "/images/ikea-family2.jpeg",
    alt: "Promosi IKEA Family",
    tone: "cream",
  },
];

const products: Product[] = [
  {
    id: 1,
    name: "SOFFA",
    category: "Ruang Tamu",
    description: "Sofa modular bertekstur halus untuk ruang tamu modern yang rapi.",
    price: 4299000,
    originalPrice: 4999000,
    stock: "12 unit tersedia di Jakarta Garden City",
    dimensions: "210 x 92 x 84 cm",
    material: "Kayu pinus, busa padat, kain poliester premium.",
    badge: "Hot",
    image: "/images/sofa.png",
    alt: "Sofa modular BJORNA",
    tone: "cream",
  },
  {
    id: 2,
    name: "TABELL",
    category: "Workspace",
    description: "Meja kerja dengan tray kabel tersembunyi dan tampilan sangat bersih.",
    price: 2599000,
    originalPrice: 2999000,
    stock: "7 unit tersedia di Alam Sutera",
    dimensions: "140 x 70 x 75 cm",
    material: "Oak veneer, kaki baja powder-coated.",
    image: "/images/table.png",
    alt: "Workspace LAGOM",
    tone: "cream",
  },
  {
    id: 3,
    name: "KÖKSHYLLOR",
    category: "Dapur",
    description: "Rak dapur terbuka yang membuat jar, bumbu, dan alat masak tertata.",
    price: 999000,
    originalPrice: 1299000,
    stock: "15 unit tersedia di Mal Taman Anggrek",
    dimensions: "90 x 38 x 180 cm",
    material: "Baja galvanis dan panel laminasi anti-gores.",
    badge: "New",
    image: "/images/kitchen.png",
    alt: "Rak dapur KOKA",
    tone: "cream",
  },
  {
    id: 4,
    name: "SKÅP",
    category: "Kamar",
    description: "Kabinet laci yang tenang, simetris, dan cocok untuk interior terang.",
    price: 1899000,
    originalPrice: 2199000,
    stock: "20 unit tersedia di Sentul City",
    dimensions: "80 x 48 x 102 cm",
    material: "Particle board, veneer ash, handle aluminium.",
    image: "/images/dresser.png",
    alt: "Kabinet laci SMYGA",
    tone: "cream",
  },
  {
    id: 5,
    name: "MORBY",
    category: "Anak",
    description: "Boneka tekstur lembut yang cocok untuk hadiah dan kamar anak.",
    price: 179000,
    stock: "33 unit tersedia di seluruh toko besar",
    dimensions: "32 x 18 x 14 cm",
    material: "Polyester daur ulang dan isian lembut.",
    image: "/images/draw.png",
    alt: "Mainan anak MORBY",
    tone: "yellow",
  },
  {
    id: 6,
    name: "NORDEN MINI",
    category: "Pencahayaan",
    description: "Lampu meja lembut untuk sudut baca dengan proporsi mungil.",
    price: 549000,
    originalPrice: 699000,
    stock: "18 unit tersedia di Surabaya",
    dimensions: "22 x 22 x 38 cm",
    material: "Shade linen dan kaki metal matte.",
    image: "/images/drill.png",
    alt: "Lampu meja NORDEN MINI",
    tone: "blue",
  },
  {
    id: 7,
    name: "FJALL",
    category: "Ruang Tamu",
    description: "Meja kopi bundar dengan rak bawah untuk majalah dan dekorasi.",
    price: 1499000,
    stock: "9 unit tersedia di Kota Baru Parahyangan",
    dimensions: "88 x 88 x 42 cm",
    material: "MDF lacquered dan kaki kayu solid.",
    image: "/images/truck.png",
    alt: "Meja kopi FJALL",
    tone: "blue",
  },
  {
    id: 8,
    name: "ALVA",
    category: "Makan",
    description: "Kursi makan compact dengan struktur tegas dan nyaman dipakai lama.",
    price: 879000,
    originalPrice: 999000,
    stock: "11 unit tersedia di Bandung",
    dimensions: "48 x 52 x 81 cm",
    material: "Baja tubular dan plywood veneer.",
    image: "/images/ikea-family.jpg",
    alt: "Kursi ALVA",
    tone: "yellow",
  },
];

const services = [
  {
    title: "Desain Interior",
    copy: "Bantuan ahli untuk mewujudkan ruang impian Anda dengan hasil yang lebih terarah.",
    image: "/images/draw-bg.jpg",
    icon: "/images/draw.png",
  },
  {
    title: "Delivery",
    copy: "Belanja dari mana saja dan langsung kirim ke rumah tanpa alur yang rumit.",
    image: "/images/truck-bg.jpeg",
    icon: "/images/truck.png",
  },
  {
    title: "Perakitan",
    copy: "Tim kami membantu merakit produk agar pengalaman setelah checkout tetap nyaman.",
    image: "/images/drill-bg.png",
    icon: "/images/drill.png",
  },
];

const starterCart = [
  { productId: 1, quantity: 1 },
  { productId: 3, quantity: 1 },
];

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function toneClass(tone: Product["tone"] | HeroSlide["tone"]) {
  if (tone === "blue") {
    return "bg-[var(--ikea-blue)] text-white";
  }
  if (tone === "yellow") {
    return "bg-[var(--ikea-yellow)] text-slate-950";
  }
  return "bg-[#f2ede2] text-slate-950";
}

type ProductTileProps = {
  product: Product;
  className?: string;
  onQuickView: (productId: number) => void;
  onAddToCart: (productId: number) => void;
};

function ProductTile({
  product,
  className = "",
  onQuickView,
  onAddToCart,
}: ProductTileProps) {
  return (
    <article className={`product-tile ${className}`}>
      <div className={`product-media ${toneClass(product.tone)}`}>
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover mix-blend-multiply"
        />
        {product.badge ? (
          <span className="absolute left-4 top-4 bg-slate-950 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-white">
            {product.badge}
          </span>
        ) : null}
      </div>
      <div className="product-copy">
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
          {product.category}
        </p>
        <h3 className="mt-2 text-2xl font-black">{product.name}</h3>
        <p className="font-ff-zwo mt-2 text-sm leading-6 text-slate-600">
          {product.description}
        </p>
        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-3xl font-black">{formatCurrency(product.price)}</p>
            {product.originalPrice ? (
              <p className="text-sm font-bold text-slate-400 line-through">
                {formatCurrency(product.originalPrice)}
              </p>
            ) : null}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => onQuickView(product.id)}
              className="sharp-button sharp-button-light"
            >
              Quick View
            </button>
            <button
              type="button"
              onClick={() => onAddToCart(product.id)}
              className="sharp-button sharp-button-dark"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export function IkeaShowcase() {
  const [activeHero, setActiveHero] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewId, setQuickViewId] = useState<number | null>(null);
  const [cart, setCart] = useState(starterCart);

  const quickView = products.find((product) => product.id === quickViewId) ?? null;

  const cartEntries = useMemo(() => {
    return cart
      .map((item) => {
        const product = products.find((entry) => entry.id === item.productId);
        if (!product) {
          return null;
        }
        return { ...item, product };
      })
      .filter(Boolean) as Array<{
        productId: number;
        quantity: number;
        product: Product;
      }>;
  }, [cart]);

  const cartCount = cartEntries.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartEntries.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  const addToCart = (productId: number) => {
    setCart((current) => {
      const found = current.find((item) => item.productId === productId);
      if (found) {
        return current.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...current, { productId, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCart((current) =>
      current
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: Math.max(0, quantity) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const hero = heroSlides[activeHero];

  const showPrevHero = () => {
    setActiveHero((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  };

  const showNextHero = () => {
    setActiveHero((current) => (current + 1) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-[#f3f1ec] text-slate-950">
      <header className="sticky top-0 z-50 bg-white">
        <div className="bg-slate-950 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.26em] text-white sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-2 text-center sm:grid-cols-3">
            <span>Gratis ongkir area tertentu</span>
            <span>Rancang rumah lebih mudah bersama IKEA</span>
            <span>Family price aktif minggu ini</span>
          </div>
        </div>
        <div className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-4 border-b border-slate-900 px-4 py-4 sm:px-8 lg:px-10">
          <div className="relative h-12 w-[102px] overflow-hidden">
            <Image
              src="/images/Ikea.png"
              alt="IKEA logo"
              fill
              sizes="102px"
              className="object-contain"
              priority
            />
          </div>
          <nav className="hidden items-center gap-6 text-sm font-black text-slate-700 lg:flex">
            <a href="#promo">Dashboard</a>
            <a href="#storage">Tata Barang</a>
            <a href="#jelajahi">Jelajahi IKEA</a>
            <a href="#mainan">Mainan</a>
            <a href="#layanan">Layanan</a>
          </nav>
          <label className="hidden min-w-0 items-center bg-[#f2ede2] px-5 py-3 md:flex">
            <input
              aria-label="Cari produk"
              placeholder="Cari sofa, storage, mainan, atau perabot dapur"
              className="w-full bg-transparent text-sm text-slate-700 outline-none"
            />
          </label>
          <div className="flex items-center gap-3 justify-self-end">
            <button className="sharp-button sharp-button-light">Profil</button>
            <button
              type="button"
              onClick={() => setIsCartOpen((current) => !current)}
              className="relative flex items-center justify-center bg-white px-4 py-3"
              aria-label="Buka keranjang"
            >
              <Image
                src="/images/cart.png"
                alt="Cart"
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
              <span className="ml-2 text-sm font-black text-slate-950">{cartCount}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="w-full">
        <section id="promo" className="relative min-h-[700px] overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0">
            <Image
              src={hero.image}
              alt={hero.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/45" />
          </div>
          <article className="relative z-10 grid min-h-[700px] grid-cols-1 xl:grid-cols-[0.92fr_1.08fr]">
            <div className="flex flex-col justify-between px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-white/70">
                  {hero.eyebrow}
                </p>
                <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[0.98] sm:text-6xl lg:text-7xl">
                  {hero.title}
                </h1>
                <p className="font-ff-zwo mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                  {hero.copy}
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-3">
                  <button className="sharp-button sharp-button-dark">{hero.cta}</button>
                  <button
                    type="button"
                    onClick={() => setQuickViewId(products[activeHero]?.id ?? 1)}
                    className="sharp-button sharp-button-light"
                  >
                    Lihat detail cepat
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={showPrevHero}
                    className="hero-arrow"
                    aria-label="Slide sebelumnya"
                  >
                    ←
                  </button>
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setActiveHero(index)}
                      className={`h-3 ${activeHero === index ? "w-16 bg-white" : "w-4 bg-white/45"
                        }`}
                      aria-label={`Slide ${index + 1}`}
                    />
                  ))}
                  <button
                    type="button"
                    onClick={showNextHero}
                    className="hero-arrow"
                    aria-label="Slide berikutnya"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section id="storage" className="section-shell bg-white">
          <div className="section-header">
            <div>
              <p className="text-3xl font-black uppercase tracking-[0.24em] text-slate-500">
                Produk IKEA paling TOP
              </p>
              <h2 className="mt-3 text-4xl font-black sm:text-2xl">
                Pilihan tepat untuk kenyamanan dan gaya hidup sehari-hari.
              </h2>
              <span />
              <span />
            </div>
          </div>
          <div className="storage-collage">
            <article className="storage-copy-block bg-[#f2ede2]">
              <h3 className="text-3xl font-black">Furnitur Modern untuk Ruang Nyaman</h3>
              <p className="font-ff-zwo mt-4 text-base leading-8 text-slate-700">
                Koleksi furnitur modern yang mengutamakan desain sederhana, warna netral, dan fungsi praktis. Setiap elemen dirancang dengan garis bersih dan tampilan minimalis untuk menciptakan suasana ruang yang tenang dan teratur. Material dan bentuknya dipilih agar mudah dipadukan dengan berbagai gaya interior, sekaligus tetap nyaman digunakan sehari-hari. Dirancang untuk membantu menata ruang agar lebih rapi, efisien, dan estetis tanpa mengorbankan kenyamanan.
              </p>
            </article>
            <ProductTile
              product={products[0]}
              className="storage-item storage-a"
              onQuickView={setQuickViewId}
              onAddToCart={addToCart}
            />
            <ProductTile
              product={products[1]}
              className="storage-item storage-b"
              onQuickView={setQuickViewId}
              onAddToCart={addToCart}
            />
            <ProductTile
              product={products[2]}
              className="storage-item storage-c"
              onQuickView={setQuickViewId}
              onAddToCart={addToCart}
            />
            <ProductTile
              product={products[3]}
              className="storage-item storage-d"
              onQuickView={setQuickViewId}
              onAddToCart={addToCart}
            />
          </div>
        </section>

        <section id="jelajahi" className="section-shell bg-[#f3f1ec]">
          <div className="section-header">
            <div>
              <p className="text-3xl font-black uppercase tracking-[0.24em] text-slate-500">
                JELAJAHI IKEA
              </p>
              <h2 className="mt-3 text-4xl font-black sm:text-2xl">
                Jelajahi IKEA
              </h2>
            </div>
          </div>
          <div className="explore-row">
            <article className="explore-card">
              <div className="explore-media">
                <Image
                  src="/images/ikea-alsut.jpeg"
                  alt="Toko IKEA"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="explore-copy">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-4xl font-black sm:text-3xl">Toko IKEA</h3>
                  <button className="explore-arrow" aria-label="Jelajahi Toko IKEA">
                    →
                  </button>
                </div>
              </div>
            </article>
            <article className="explore-card">
              <div className="explore-media">
                <Image
                  src="/images/ikea-makanan.jpg"
                  alt="Makanan IKEA"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="explore-copy">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-4xl font-black sm:text-3xl">Makanan IKEA</h3>
                  <button className="explore-arrow" aria-label="Jelajahi Makanan IKEA">
                    →
                  </button>
                </div>
              </div>
            </article>
            <article className="explore-card">
              <div className="explore-media">
                <Image
                  src="/images/ikea-business.jpg"
                  alt="IKEA Bisnis"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="explore-copy">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-4xl font-black sm:text-3xl">IKEA Bisnis</h3>
                  <button className="explore-arrow" aria-label="Jelajahi IKEA Bisnis">
                    →
                  </button>
                </div>
              </div>
            </article>
            <article className="explore-card">
              <div className="explore-media">
                <Image
                  src="/images/ikea-family.jpg"
                  alt="IKEA Family"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="explore-copy">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-4xl font-black sm:text-3xl">IKEA Family</h3>
                  <button className="explore-arrow" aria-label="Jelajahi IKEA Family">
                    →
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="mainan" className="section-shell bg-white">
          <div className="section-header">
            <div>
              <p className="text-3xl font-black uppercase tracking-[0.24em] text-slate-500">
                Mainan dan boneka
              </p>
              <h2 className="mt-3 text-4xl font-black sm:text-2xl">
                Empuk, gemas, dan tentunya asik buat diajak main.
              </h2>
            </div>
          </div>
          <div className="toy-collage">
            <article className="toy-panel toy-photo-card text-white">
              <div className="toy-media relative">
                <Image
                  src="/images/beruang.jpg"
                  alt="Boneka BJÖRN"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="toy-cream-overlay" />
              </div>
              <div className="toy-copy p-6 sm:p-8">
                <h3 className="mt-4 text-4xl font-black sm:text-5xl">DJUNGELSKOG</h3>
                <p className="font-ff-zwo mt-2 max-w-md text-lg leading-8 text-white/90">
                  Boneka, beruang lembut
                </p>
                <p className="mt-3 text-4xl font-black sm:text-5xl">Rp129.000</p>
              </div>
            </article>
            <article className="toy-panel toy-message-card bg-[#7a5d49] text-white">
              <div className="p-6 sm:p-8">
                <p className="font-ff-zwo text-2xl leading-tight sm:text-3xl">
                  Yuk kenalan sama teman-teman
                </p>
                <p className="mt-4 text-6xl font-black leading-[0.9] sm:text-7xl">
                  Punch!
                </p>
              </div>
            </article>
            <article className="toy-panel toy-photo-card text-white">
              <div className="toy-media relative">
                <Image
                  src="/images/anjing.jpg"
                  alt="Boneka GOSIG"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
                <div className="toy-cream-overlay" />
              </div>
              <div className="toy-copy p-6">
                <h3 className="text-3xl font-black sm:text-4xl">GOSIG</h3>
                <p className="font-ff-zwo mt-2 text-base leading-7 text-white/90">
                  Boneka, anjing
                </p>
                <p className="mt-3 text-3xl font-black sm:text-4xl">Rp199.000</p>
              </div>
            </article>
            <article className="toy-panel toy-photo-card text-white">
              <div className="toy-media relative">
                <Image
                  src="/images/panda.webp"
                  alt="Boneka JÄTTESTOR"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
                <div className="toy-cream-overlay" />
              </div>
              <div className="toy-copy p-6">
                <h3 className="text-3xl font-black sm:text-4xl">JÄTTESTOR</h3>
                <p className="font-ff-zwo mt-2 text-base leading-7 text-white/90">
                  Boneka, panda
                </p>
                <p className="mt-3 text-3xl font-black sm:text-4xl">Rp199.000</p>
              </div>
            </article>
          </div>
        </section>

        <section id="layanan" className="section-shell bg-[#f3f1ec]">
          <div className="section-header">
            <div>
              <p className="text-3xl font-black uppercase tracking-[0.24em] text-slate-500">
                Layanan IKEA
              </p>
              <h2 className="mt-3 text-4xl font-black sm:text-2xl">
                Nikmati berbagai layanan yang dirancang untuk membuat pengalaman berbelanja Anda lebih mudah dan menyenangkan.
              </h2>
            </div>
          </div>
          <div className="services-row">
            {services.map((service) => (
              <article
                key={service.title}
                className="service-card text-white"
              >
                <div className="service-media">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="33vw"
                    className="object-cover"
                  />
                  <div className="service-overlay" />
                </div>
                <div className="service-copy">
                  <div className="service-icon-wrap">
                    <Image
                      src={service.icon}
                      alt=""
                      width={76}
                      height={76}
                      className="service-icon"
                    />
                  </div>
                  <h3 className="text-4xl font-black">{service.title}</h3>
                  <p className="font-ff-zwo mt-4 text-base leading-8 opacity-85">
                    {service.copy}
                  </p>
                  <button className="service-arrow" aria-label={`Lihat layanan ${service.title}`}>
                    →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="grid gap-0 bg-slate-950 text-white lg:grid-cols-[1.3fr_0.7fr]">
        <div className="px-5 py-10 sm:px-8 lg:px-10">
          <div className="relative h-12 w-[102px] overflow-hidden">
            <Image
              src="/images/Ikea.png"
              alt="IKEA logo"
              fill
              sizes="102px"
              className="object-contain"
            />
          </div>
          <h2 className="mt-6 text-5xl font-black">Tentang IKEA</h2>
          <p className="font-ff-zwo mt-4 max-w-2xl text-base leading-8 text-white/75">
            Berfokus pada peningkatan kualitas hidup, IKEA menawarkan solusi interior rumah yang memadukan fungsionalitas dengan desain modern namun tetap terjangkau. Melalui berbagai pilihan perabot seperti tempat tidur, lemari, hingga sofa bergaya, kami berkomitmen membantu Anda menciptakan rumah yang lebih nyaman bagi
          </p>
        </div>
        <div className="bg-[#111526] px-5 py-10 sm:px-8 lg:px-10">
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/70">
            Tautan Berguna
          </h3>
          <ul className="mt-5 space-y-3 text-base font-semibold text-white/85">
            <li>Belanja online</li>
            <li>Info pengiriman</li>
            <li>Perencanaan ruang</li>
            <li>Layanan perakitan</li>
            <li>Hubungi kami</li>
          </ul>
        </div>
      </footer>

      {isCartOpen ? (
        <>
          <button
            type="button"
            aria-label="Tutup keranjang"
            className="fixed inset-0 z-[60] bg-slate-950/25"
            onClick={() => setIsCartOpen(false)}
          />
          <aside className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-white shadow-[0_0_40px_rgba(15,23,42,0.25)]">
            <div className="flex items-center justify-between bg-slate-950 px-5 py-5 text-white sm:px-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-white/65">
                  Cart
                </p>
                <h2 className="mt-1 text-3xl font-black">Keranjang Anda</h2>
              </div>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="sharp-button sharp-button-light"
              >
                Tutup
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">
              {cartEntries.length ? (
                <div className="space-y-4">
                  {cartEntries.map((item) => (
                    <article key={item.productId} className="bg-[#f2ede2] p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="relative h-20 w-20 flex-none bg-white">
                          <Image
                            src={item.product.image}
                            alt={item.product.alt}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-lg font-black">{item.product.name}</p>
                          <p className="font-ff-zwo mt-1 text-sm text-slate-600">
                            {formatCurrency(item.product.price)}
                          </p>
                          <div className="mt-4 flex items-center justify-between gap-3">
                            <div className="flex items-center bg-white">
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                                className="h-10 w-10 text-lg font-black"
                              >
                                -
                              </button>
                              <span className="min-w-[2.5rem] text-center text-sm font-black">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                                className="h-10 w-10 bg-slate-950 text-lg font-black text-white"
                              >
                                +
                              </button>
                            </div>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.productId, 0)}
                              className="text-xs font-black uppercase tracking-[0.16em] text-slate-500"
                            >
                              Hapus
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="flex h-full flex-col items-center justify-center bg-[#f2ede2] px-6 text-center">
                  <Image
                    src="/images/cart.png"
                    alt="Keranjang kosong"
                    width={44}
                    height={44}
                    className="h-11 w-11 object-contain"
                  />
                  <h3 className="mt-5 text-3xl font-black">Keranjang masih kosong</h3>
                  <p className="font-ff-zwo mt-3 text-base leading-8 text-slate-600">
                    Tambahkan produk dari section mana pun dan daftar checkout akan langsung muncul di sini.
                  </p>
                </div>
              )}
            </div>
            <div className="bg-[#111526] px-5 py-5 text-white sm:px-6">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span>Subtotal</span>
                <span>{formatCurrency(cartTotal)}</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-base font-bold">Total</span>
                <span className="text-3xl font-black">{formatCurrency(cartTotal)}</span>
              </div>
              <button className="mt-5 w-full bg-[var(--ikea-yellow)] px-5 py-4 text-sm font-black uppercase tracking-[0.16em] text-slate-950">
                Lanjut checkout
              </button>
            </div>
          </aside>
        </>
      ) : null}

      {quickView ? (
        <div className="fixed inset-0 z-[80] flex items-end justify-center bg-slate-950/40 p-3 sm:items-center sm:p-6">
          <div className="w-full max-w-5xl overflow-hidden bg-white shadow-[0_20px_60px_rgba(15,23,42,0.25)]">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className={`relative min-h-[360px] ${toneClass(quickView.tone)}`}>
                <Image
                  src={quickView.image}
                  alt={quickView.alt}
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
              <div className="px-5 py-6 sm:px-8 sm:py-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">
                      Product Detail
                    </p>
                    <h3 className="mt-3 text-5xl font-black">{quickView.name}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setQuickViewId(null)}
                    className="sharp-button sharp-button-light"
                  >
                    Tutup
                  </button>
                </div>
                <p className="font-ff-zwo mt-5 text-base leading-8 text-slate-600">
                  {quickView.description}
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="bg-[#f2ede2] p-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                      Dimensi
                    </p>
                    <p className="mt-2 text-base font-bold">{quickView.dimensions}</p>
                  </div>
                  <div className="bg-[#f2ede2] p-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                      Stok
                    </p>
                    <p className="mt-2 text-base font-bold">{quickView.stock}</p>
                  </div>
                </div>
                <div className="mt-4 bg-[#f2ede2] p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                    Material
                  </p>
                  <p className="font-ff-zwo mt-2 text-sm leading-7 text-slate-700">
                    {quickView.material}
                  </p>
                </div>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                      Harga
                    </p>
                    <p className="mt-2 text-4xl font-black">{formatCurrency(quickView.price)}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => addToCart(quickView.id)}
                    className="sharp-button sharp-button-dark"
                  >
                    Tambah ke keranjang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { kamarList, fasilitasUmum, formatHarga } from "@/lib/data";
import KamarCard from "@/components/KamarCard";
import {
  ArrowRight,
  Star,
  Shield,
  Wifi,
  Car,
  ChefHat,
  Shirt,
  MapPin,
  Phone,
  CheckCircle,
} from "lucide-react";

const fasilitasIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi className="w-6 h-6" />,
  parking: <Car className="w-6 h-6" />,
  security: <Shield className="w-6 h-6" />,
  laundry: <Shirt className="w-6 h-6" />,
  kitchen: <ChefHat className="w-6 h-6" />,
  mosque: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 2C8 2 5 5 5 9c0 2 1 4 2 5l5 8 5-8c1-1 2-3 2-5 0-4-3-7-7-7z"
      />
    </svg>
  ),
};

const testimonials = [
  {
    nama: "Rina Kusuma",
    pekerjaan: "Mahasiswi",
    rating: 5,
    komentar:
      "Kamarnya bersih dan nyaman banget! Fasilitas lengkap, WiFi kencang, dan pengelolanya ramah. Sangat recommended untuk teman-teman yang cari kost.",
    avatar: "RK",
  },
  {
    nama: "Budi Santoso",
    pekerjaan: "Karyawan Swasta",
    rating: 5,
    komentar:
      "Sudah 2 tahun tinggal di sini. Lokasi strategis, keamanan terjaga 24 jam, dan harga sangat worth it. Tidak perlu pindah-pindah lagi.",
    avatar: "BS",
  },
  {
    nama: "Siti Rahayu",
    pekerjaan: "Mahasiswi",
    rating: 5,
    komentar:
      "Kamar Premium-nya luar biasa! Luas, ada balkon, dan semua fasilitas ada. Harga memang sedikit lebih tinggi tapi sangat sepadan.",
    avatar: "SR",
  },
];

export default function HomePage() {
  const kamarTersedia = kamarList.filter((k) => k.tersedia).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl"
            style={{ backgroundColor: "#e879a0" }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-10 blur-3xl"
            style={{ backgroundColor: "#e879a0" }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{ backgroundColor: "#fce4ef", color: "#c0527a" }}
              >
                <Star className="w-4 h-4 fill-current" />
                Kost Terpercaya & Nyaman
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                Temukan Hunian{" "}
                <span style={{ color: "#e879a0" }}>Nyaman</span>{" "}
                Impian Anda
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                DzawaniKost menyediakan kamar kost bersih, aman, dan terjangkau
                dengan fasilitas lengkap. Cocok untuk mahasiswa dan pekerja
                yang menginginkan hunian berkualitas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  href="/kamar"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white transition-all hover:opacity-90 shadow-md hover:shadow-lg"
                  style={{ backgroundColor: "#e879a0" }}
                >
                  Lihat Kamar Tersedia
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/kontak"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Hubungi Kami
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "50+", label: "Kamar" },
                  { value: "200+", label: "Penghuni" },
                  { value: "5★", label: "Rating" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-extrabold" style={{ color: "#e879a0" }}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
                style={{ backgroundColor: "#e879a0" }}
              />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-80 md:h-96">
                <Image
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80"
                  alt="DzawaniKost Hero"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "#fce4ef" }}
                >
                  <CheckCircle className="w-5 h-5" style={{ color: "#e879a0" }} />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Kamar Tersedia</div>
                  <div className="text-xs text-gray-500">
                    {kamarList.filter((k) => k.tersedia).length} kamar siap huni
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fasilitas Umum */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
              Fasilitas <span style={{ color: "#e879a0" }}>Lengkap</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Kami menyediakan berbagai fasilitas umum untuk mendukung
              kenyamanan dan kebutuhan sehari-hari Anda.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {fasilitasUmum.map((f) => (
              <div
                key={f.label}
                className="bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: "#fce4ef", color: "#e879a0" }}
                >
                  {fasilitasIcons[f.icon]}
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">{f.label}</div>
                <div className="text-xs text-gray-500">{f.deskripsi}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kamar Tersedia */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                Kamar <span style={{ color: "#e879a0" }}>Pilihan</span>
              </h2>
              <p className="text-gray-600">Kamar terbaik yang tersedia untuk Anda</p>
            </div>
            <Link
              href="/kamar"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
              style={{ color: "#e879a0" }}
            >
              Lihat Semua <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kamarTersedia.map((kamar) => (
              <KamarCard key={kamar.id} kamar={kamar} />
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link
              href="/kamar"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#e879a0" }}
            >
              Lihat Semua Kamar <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Harga Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
              Pilihan <span style={{ color: "#e879a0" }}>Harga</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Tersedia berbagai pilihan tipe kamar sesuai kebutuhan dan anggaran Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                tipe: "Standard",
                harga: 800000,
                warna: "gray",
                fitur: ["Kipas Angin", "Kasur", "Kamar Mandi Luar", "WiFi", "Listrik"],
              },
              {
                tipe: "Deluxe",
                harga: 1200000,
                warna: "pink",
                fitur: ["AC", "Kasur Spring Bed", "Kamar Mandi Dalam", "WiFi", "Lemari"],
              },
              {
                tipe: "Superior",
                harga: 1500000,
                warna: "pink",
                fitur: ["AC", "Spring Bed", "KM Dalam", "TV", "Kulkas Mini", "WiFi"],
                popular: true,
              },
              {
                tipe: "Premium",
                harga: 2000000,
                warna: "dark",
                fitur: ["AC", "King Bed", "Bathtub", "TV 32\"", "Kulkas", "Balkon"],
              },
            ].map((plan) => (
              <div
                key={plan.tipe}
                className={`relative rounded-2xl p-6 border transition-all hover:shadow-md ${
                  plan.popular
                    ? "border-2 shadow-lg"
                    : "border-gray-200 bg-white"
                }`}
                style={
                  plan.popular
                    ? { borderColor: "#e879a0", backgroundColor: "#fff" }
                    : {}
                }
              >
                {plan.popular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: "#e879a0" }}
                  >
                    Paling Populer
                  </div>
                )}
                <div className="text-lg font-bold text-gray-900 mb-1">{plan.tipe}</div>
                <div className="mb-4">
                  <span className="text-2xl font-extrabold text-gray-900">
                    {formatHarga(plan.harga)}
                  </span>
                  <span className="text-sm text-gray-500">/bulan</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.fitur.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "#e879a0" }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/kamar"
                  className="block text-center px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                  style={
                    plan.popular
                      ? { backgroundColor: "#e879a0", color: "white" }
                      : { backgroundColor: "#fce4ef", color: "#c0527a" }
                  }
                >
                  Pilih Kamar
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
              Kata <span style={{ color: "#e879a0" }}>Penghuni</span>
            </h2>
            <p className="text-gray-600">Pengalaman nyata dari penghuni DzawaniKost</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.nama}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#e879a0" }} />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-5 italic">
                  &ldquo;{t.komentar}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ backgroundColor: "#e879a0" }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{t.nama}</div>
                    <div className="text-xs text-gray-500">{t.pekerjaan}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16"
        style={{
          background: "linear-gradient(135deg, #e879a0 0%, #d6638e 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Siap Pindah ke DzawaniKost?
          </h2>
          <p className="text-pink-100 text-lg mb-8 max-w-xl mx-auto">
            Hubungi kami sekarang dan dapatkan informasi lengkap tentang kamar
            yang tersedia. Kami siap membantu Anda menemukan hunian terbaik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kamar"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold bg-white transition-all hover:bg-gray-50 shadow-md"
              style={{ color: "#e879a0" }}
            >
              Lihat Kamar <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white border-2 border-white hover:bg-white/10 transition-all"
            >
              <Phone className="w-4 h-4" />
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Lokasi <span style={{ color: "#e879a0" }}>Strategis</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                DzawaniKost berlokasi di tempat yang strategis, mudah diakses
                dengan transportasi umum dan dekat dengan berbagai fasilitas
                publik.
              </p>
              <ul className="space-y-3">
                {[
                  "5 menit dari kampus",
                  "10 menit dari pusat perbelanjaan",
                  "Dekat dengan halte bus dan stasiun",
                  "Akses jalan utama yang mudah",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#fce4ef" }}
                    >
                      <CheckCircle className="w-4 h-4" style={{ color: "#e879a0" }} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3 mt-6 p-4 bg-gray-50 rounded-xl">
                <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: "#e879a0" }} />
                <span className="text-sm text-gray-700">
                  Jl. Contoh No. 123, Kota Anda, Indonesia
                </span>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-72 bg-gray-100 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <MapPin className="w-12 h-12 mx-auto mb-3 opacity-40" />
                <p className="text-sm">Peta Lokasi</p>
                <p className="text-xs mt-1">DzawaniKost</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

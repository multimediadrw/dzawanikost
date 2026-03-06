"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Star,
  MapPin,
  Wifi,
  Car,
  Shield,
  Utensils,
  Wind,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import SearchBar from "@/components/SearchBar";
import KamarCard from "@/components/KamarCard";
import { kamarList } from "@/lib/data";

const KATEGORI = [
  {
    label: "Kamar Standar",
    jumlah: "2 kamar",
    gambar: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80",
    filter: "Standard",
  },
  {
    label: "Kamar Deluxe",
    jumlah: "2 kamar",
    gambar: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
    filter: "Deluxe",
  },
  {
    label: "Kamar Superior",
    jumlah: "2 kamar",
    gambar: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
    filter: "Superior",
  },
];

const FASILITAS_FILTER = [
  {
    label: "Kamar Mandi Dalam",
    gambar: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80",
  },
  {
    label: "Kamar Mandi Luar",
    gambar: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80",
  },
  {
    label: "Unit Dengan Balkon",
    gambar: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&q=80",
  },
];

const TESTIMONI = [
  {
    nama: "Rina Kusuma",
    profesi: "Mahasiswi",
    teks: "Kamarnya bersih dan nyaman banget! Fasilitas lengkap, WiFi kencang, dan pengelolanya ramah. Sangat recommended untuk teman-teman yang cari kost.",
    rating: 5,
    inisial: "RK",
  },
  {
    nama: "Budi Santoso",
    profesi: "Karyawan Swasta",
    teks: "Sudah 2 tahun tinggal di sini. Lokasi strategis, keamanan terjaga 24 jam, dan harga sangat worth it. Tidak perlu pindah-pindah lagi.",
    rating: 5,
    inisial: "BS",
  },
  {
    nama: "Siti Rahayu",
    profesi: "Mahasiswi",
    teks: "Kamar Premium-nya luar biasa! Luas, ada balkon, dan semua fasilitas ada. Harga memang sedikit lebih tinggi tapi sangat sepadan.",
    rating: 5,
    inisial: "SR",
  },
];

const TABS = ["Semua", "Yogyakarta", "Sleman", "Bantul"];

const FASILITAS_UMUM = [
  { icon: Wifi, label: "WiFi Gratis", sub: "24 jam" },
  { icon: Car, label: "Parkir Luas", sub: "Motor & mobil" },
  { icon: Shield, label: "Keamanan 24 Jam", sub: "CCTV & satpam" },
  { icon: Utensils, label: "Dapur Bersama", sub: "Lengkap & bersih" },
  { icon: Wind, label: "AC", sub: "Setiap kamar" },
  { icon: MapPin, label: "Lokasi Strategis", sub: "Dekat kampus" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Semua");
  const [testiIdx, setTestiIdx] = useState(0);

  const filteredKamar =
    activeTab === "Semua"
      ? kamarList.slice(0, 6)
      : kamarList.filter((k) => k.lokasi === activeTab).slice(0, 6);

  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <section className="relative">
        {/* Background - tidak pakai overflow-hidden agar dropdown tidak terpotong */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 w-full">
          <div className="inline-flex items-center gap-2 text-white text-sm font-medium px-4 py-2 rounded-full mb-5 bg-white/20">
            <span>🏠</span>
            <span>Solusi untuk Memilih Hunian Ideal</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-2xl mb-12">
            Temukan Hunian Nyaman yang Cocok dengan Gaya Hidupmu
          </h1>
        </div>

        {/* Search Bar - di luar overflow container agar dropdown bisa muncul bebas */}
        <div className="relative z-20 pb-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SearchBar variant="hero" />
          </div>
        </div>
      </section>

      {/* ===== KATEGORI ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2 text-pink-500">
              Kategori
            </p>
            <h2 className="text-3xl font-bold text-gray-900">Pilih Jenis Kamarmu</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {KATEGORI.map((kat) => (
              <Link
                key={kat.label}
                href={`/kamar?tipe=${kat.filter}`}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 block"
              >
                <div className="relative h-48">
                  <Image
                    src={kat.gambar}
                    alt={kat.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-bold text-lg">{kat.label}</p>
                  <p className="text-white/80 text-sm">{kat.jumlah}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KAMAR TERSEDIA ===== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-1 text-pink-500">
                Kamar Tersedia
              </p>
              <h2 className="text-3xl font-bold text-gray-900">Kamar Dengan Harga Terbaik</h2>
            </div>
            <Link
              href="/kamar"
              className="text-sm font-semibold text-pink-500 hover:text-pink-600 transition-colors"
            >
              Lihat Semua →
            </Link>
          </div>

          {/* Tab Filter Lokasi */}
          <div className="flex flex-wrap gap-2 mb-8">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-pink-500 text-white shadow-sm"
                    : "bg-white text-gray-500 border border-gray-200 hover:border-pink-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Kamar Cards */}
          {filteredKamar.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredKamar.map((kamar) => (
                <KamarCard key={kamar.id} kamar={kamar} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-400">
              <p className="text-lg">Belum ada kamar di lokasi ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* ===== SESUAIKAN GAYAMU ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2 text-pink-500">
              Sesuaikan Gayamu
            </p>
            <h2 className="text-3xl font-bold text-gray-900">Pilih Fasilitas yang Kamu Inginkan</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FASILITAS_FILTER.map((fas) => (
              <Link
                key={fas.label}
                href="/kamar"
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 block"
              >
                <div className="relative h-52">
                  <Image
                    src={fas.gambar}
                    alt={fas.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-bold text-lg">{fas.label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FASILITAS UMUM ===== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2 text-pink-500">
              Fasilitas
            </p>
            <h2 className="text-3xl font-bold text-gray-900">Fasilitas Lengkap untuk Kenyamananmu</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {FASILITAS_UMUM.map((fas) => (
              <div
                key={fas.label}
                className="bg-white rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 bg-pink-50">
                  <fas.icon className="w-5 h-5 text-pink-500" />
                </div>
                <p className="text-sm font-semibold text-gray-800">{fas.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{fas.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONI ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2 text-pink-500">
              Testimoni
            </p>
            <h2 className="text-3xl font-bold text-gray-900">Apa Kata Mereka?</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Video placeholder */}
            <div
              className="rounded-2xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center"
              style={{ aspectRatio: "16/9" }}
            >
              <div className="text-center p-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg bg-pink-500">
                  <svg
                    className="w-6 h-6 text-white"
                    style={{ marginLeft: "4px" }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm font-medium">Testimoni Video</p>
                <p className="text-gray-400 text-xs mt-1">DzawaniKost</p>
              </div>
            </div>

            {/* Testimoni Card */}
            <div>
              <div className="rounded-2xl p-6 text-white bg-pink-500">
                <div className="text-white/30 text-6xl font-serif leading-none mb-2" style={{ lineHeight: "1" }}>
                  &ldquo;
                </div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: TESTIMONI[testiIdx].rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                  ))}
                </div>
                <p className="text-white text-base leading-relaxed mb-6">
                  {TESTIMONI[testiIdx].teks}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm bg-white/30">
                    {TESTIMONI[testiIdx].inisial}
                  </div>
                  <div>
                    <p className="font-bold text-white">{TESTIMONI[testiIdx].nama}</p>
                    <p className="text-white/80 text-sm">{TESTIMONI[testiIdx].profesi}</p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-2 mt-4 justify-center">
                <button
                  onClick={() =>
                    setTestiIdx((prev) => (prev - 1 + TESTIMONI.length) % TESTIMONI.length)
                  }
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-500" />
                </button>
                {TESTIMONI.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestiIdx(i)}
                    className={`h-2.5 rounded-full transition-all ${
                      i === testiIdx ? "bg-pink-500 w-6" : "bg-gray-200 w-2.5"
                    }`}
                  />
                ))}
                <button
                  onClick={() => setTestiIdx((prev) => (prev + 1) % TESTIMONI.length)}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all"
                >
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA / BANTUAN ===== */}
      <section className="py-16 bg-pink-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* FAQ */}
            <div className="bg-white rounded-2xl p-8">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-pink-50">
                <span className="text-xl">❓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mempunyai Pertanyaan?</h3>
              <p className="text-gray-600 text-sm mb-6">
                Temukan jawaban dari pertanyaan yang sering diajukan seputar pemesanan, pembayaran, dan lainnya.
              </p>
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-pink-500 hover:bg-pink-600 transition-colors"
              >
                Lihat FAQ
              </Link>
            </div>

            {/* WhatsApp */}
            <div className="rounded-2xl p-8 bg-pink-600">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-white/20">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Butuh Bantuan Langsung?</h3>
              <p className="text-white/80 text-sm mb-6">
                Tim Customer Service kami siap membantu 24/7. Hubungi Kami melalui WhatsApp untuk respon cepat.
              </p>
              <a
                href="https://wa.me/6281234567890?text=Halo, saya ingin bertanya tentang DzawaniKost"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white text-pink-500 hover:bg-gray-50 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Chat Via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

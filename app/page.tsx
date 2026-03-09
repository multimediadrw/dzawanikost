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
  Calendar,
  User,
  Search,
  ArrowRight,
} from "lucide-react";
import KamarCard from "@/components/KamarCard";
import SearchBar from "@/components/SearchBar";
import { kamarList, daftarArtikel } from "@/lib/data";

const TABS = ["Semua", "Yogyakarta", "Malang", "Bandung", "Jakarta", "Bali"];

const FASILITAS_UMUM = [
  { icon: Wifi, label: "WiFi Gratis", sub: "24 jam" },
  { icon: Car, label: "Parkir Luas", sub: "Motor & mobil" },
  { icon: Shield, label: "Keamanan 24 Jam", sub: "CCTV & satpam" },
  { icon: Utensils, label: "Dapur Bersama", sub: "Lengkap & bersih" },
  { icon: Wind, label: "AC", sub: "Setiap kamar" },
  { icon: MapPin, label: "Lokasi Strategis", sub: "Dekat kampus" },
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

export default function Home() {
  const [activeTab, setActiveTab] = useState("Semua");
  const [testiIdx, setTestiIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredKamar =
    activeTab === "Semua"
      ? kamarList.slice(0, 6)
      : kamarList.filter((k) => k.kota === activeTab).slice(0, 6);

  return (
    <main className="pb-20 md:pb-0">

      {/* ===== MOBILE HERO ===== */}
      <section className="md:hidden relative overflow-hidden" style={{ minHeight: "280px" }}>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 px-4 pt-6 pb-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full mb-4">
            <span>🏠</span>
            <span>Hunian Nyaman & Terjangkau</span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-bold text-white leading-tight mb-1">
            Temukan Kost Impianmu
          </h1>
          <p className="text-white/80 text-sm mb-5">
            23 properti tersedia di Yogyakarta, Malang, Bandung & Bali
          </p>

          {/* Mobile Search Bar */}
          <Link
            href="/kamar"
            className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 shadow-lg"
          >
            <Search className="w-4 h-4 text-pink-400 flex-shrink-0" />
            <span className="text-gray-400 text-sm flex-1">Cari kost di kota mana?</span>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#e879a0" }}>
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </Link>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 mx-4 mb-0">
          <div className="bg-white rounded-2xl shadow-lg px-2 py-4 flex items-center justify-around -mb-5">
            <div className="text-center px-1">
              <p className="text-lg font-bold text-gray-900">23</p>
              <p className="text-[11px] text-gray-500 whitespace-nowrap">Properti</p>
            </div>
            <div className="w-px h-8 bg-gray-100 flex-shrink-0" />
            <div className="text-center px-1">
              <p className="text-lg font-bold text-gray-900">5</p>
              <p className="text-[11px] text-gray-500 whitespace-nowrap">Kota</p>
            </div>
            <div className="w-px h-8 bg-gray-100 flex-shrink-0" />
            <div className="text-center px-1">
              <p className="text-lg font-bold text-gray-900">4.9</p>
              <p className="text-[11px] text-gray-500 whitespace-nowrap">Rating</p>
            </div>
            <div className="w-px h-8 bg-gray-100 flex-shrink-0" />
            <div className="text-center px-1">
              <p className="text-lg font-bold text-gray-900">24/7</p>
              <p className="text-[11px] text-gray-500 whitespace-nowrap">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DESKTOP HERO ===== */}
      <section className="hidden md:block relative overflow-visible">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=90"
            alt="Hero background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16 w-full">
          <div className="inline-flex items-center gap-2 text-white text-sm font-medium px-4 py-2 rounded-full mb-5 bg-white/20">
            <span>🏠</span>
            <span>Solusi untuk Memilih Hunian Ideal</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-2xl mb-12">
            Temukan Hunian Nyaman yang Cocok dengan Gaya Hidupmu
          </h1>
        </div>
        <div className="relative z-20 pb-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SearchBar variant="hero" />
          </div>
        </div>
      </section>

      {/* ===== MOBILE: QUICK FILTER KOTA ===== */}
      <section className="md:hidden pt-8 pb-4 bg-white">
        <div className="px-4 mb-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-pink-500 mb-1">Cari Berdasarkan Kota</p>
          <h2 className="text-lg font-bold text-gray-900">Pilih Kotamu</h2>
        </div>
        <div className="flex gap-3 px-4 overflow-x-auto pb-2 scrollbar-hide">
          {[
            {
              kota: "Yogyakarta",
              jumlah: kamarList.filter(k => k.kota === "Yogyakarta").length,
              color: "#f59e0b",
              bg: "#fffbeb",
              // Candi Prambanan
              icon: (
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                  <rect x="20" y="38" width="8" height="4" rx="1" fill="#f59e0b"/>
                  <rect x="22" y="32" width="4" height="6" fill="#f59e0b"/>
                  <polygon points="24,10 20,32 28,32" fill="#f59e0b"/>
                  <polygon points="24,14 21,28 27,28" fill="#fbbf24"/>
                  <rect x="18" y="36" width="12" height="2" rx="1" fill="#d97706"/>
                  <rect x="10" y="40" width="6" height="3" rx="1" fill="#f59e0b"/>
                  <rect x="11" y="35" width="4" height="5" fill="#f59e0b"/>
                  <polygon points="13,22 10,35 16,35" fill="#f59e0b"/>
                  <rect x="32" y="40" width="6" height="3" rx="1" fill="#f59e0b"/>
                  <rect x="33" y="35" width="4" height="5" fill="#f59e0b"/>
                  <polygon points="35,22 32,35 38,35" fill="#f59e0b"/>
                  <rect x="6" y="43" width="36" height="2" rx="1" fill="#d97706"/>
                </svg>
              ),
            },
            {
              kota: "Malang",
              jumlah: kamarList.filter(k => k.kota === "Malang").length,
              color: "#ef4444",
              bg: "#fef2f2",
              // Apel Malang
              icon: (
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                  <path d="M24 10 C24 10 26 6 30 7" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M30 7 C32 5 34 6 33 8" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/>
                  <ellipse cx="24" cy="28" rx="13" ry="15" fill="#ef4444"/>
                  <ellipse cx="20" cy="26" rx="5" ry="8" fill="#f87171" opacity="0.5"/>
                  <path d="M24 13 C24 13 24 16 24 18" stroke="#92400e" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M17 16 C19 18 21 19 24 18" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" fill="none"/>
                </svg>
              ),
            },
            {
              kota: "Bandung",
              jumlah: kamarList.filter(k => k.kota === "Bandung").length,
              color: "#8b5cf6",
              bg: "#f5f3ff",
              // Gedung Sate
              icon: (
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                  <rect x="8" y="32" width="32" height="10" rx="1" fill="#8b5cf6"/>
                  <rect x="12" y="22" width="24" height="10" fill="#7c3aed"/>
                  <rect x="16" y="16" width="16" height="6" fill="#8b5cf6"/>
                  <rect x="20" y="10" width="8" height="6" fill="#7c3aed"/>
                  <rect x="22" y="4" width="4" height="6" fill="#8b5cf6"/>
                  {/* Sate (tusukan) */}
                  <circle cx="24" cy="3" r="1.5" fill="#f59e0b"/>
                  <circle cx="24" cy="6.5" r="1.5" fill="#f59e0b"/>
                  <circle cx="24" cy="10" r="1.5" fill="#f59e0b"/>
                  <rect x="14" y="22" width="4" height="10" fill="#6d28d9"/>
                  <rect x="30" y="22" width="4" height="10" fill="#6d28d9"/>
                  <rect x="10" y="30" width="28" height="2" fill="#6d28d9"/>
                </svg>
              ),
            },
            {
              kota: "Jakarta",
              jumlah: kamarList.filter(k => k.kota === "Jakarta").length,
              color: "#0ea5e9",
              bg: "#f0f9ff",
              // Monas
              icon: (
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                  <rect x="10" y="38" width="28" height="5" rx="1" fill="#0ea5e9"/>
                  <rect x="14" y="34" width="20" height="4" fill="#0284c7"/>
                  <rect x="18" y="20" width="12" height="14" fill="#0ea5e9"/>
                  <polygon points="24,4 20,20 28,20" fill="#0ea5e9"/>
                  <polygon points="24,8 21,18 27,18" fill="#38bdf8"/>
                  {/* Api emas */}
                  <ellipse cx="24" cy="4" rx="2.5" ry="3.5" fill="#f59e0b"/>
                  <ellipse cx="24" cy="4" rx="1.5" ry="2.5" fill="#fbbf24"/>
                  <rect x="12" y="34" width="24" height="2" fill="#0369a1"/>
                </svg>
              ),
            },
            {
              kota: "Bali",
              jumlah: kamarList.filter(k => k.kota === "Bali").length,
              color: "#10b981",
              bg: "#ecfdf5",
              // Pura Bali
              icon: (
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                  <rect x="10" y="40" width="28" height="4" rx="1" fill="#10b981"/>
                  <rect x="14" y="36" width="20" height="4" fill="#059669"/>
                  <rect x="18" y="32" width="12" height="4" fill="#10b981"/>
                  <rect x="20" y="28" width="8" height="4" fill="#059669"/>
                  <rect x="21" y="22" width="6" height="6" fill="#10b981"/>
                  <polygon points="24,10 20,22 28,22" fill="#10b981"/>
                  <polygon points="24,14 21,20 27,20" fill="#34d399"/>
                  <polygon points="24,8 22,14 26,14" fill="#059669"/>
                  {/* Payung */}
                  <path d="M24 8 C24 8 20 5 16 8" stroke="#f59e0b" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M24 8 C24 8 28 5 32 8" stroke="#f59e0b" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <line x1="24" y1="5" x2="24" y2="8" stroke="#92400e" strokeWidth="1.5"/>
                </svg>
              ),
            },
          ].map((item) => (
            <Link
              key={item.kota}
              href={`/kamar?lokasi=${item.kota}`}
              className="flex-shrink-0 flex flex-col items-center gap-2 border rounded-2xl px-4 py-3 min-w-[88px] active:scale-95 transition-transform"
              style={{ backgroundColor: item.bg, borderColor: item.color + "33" }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: item.color + "15" }}>
                {item.icon}
              </div>
              <span className="text-xs font-bold" style={{ color: item.color }}>{item.kota}</span>
              <span className="text-[10px] text-gray-400">{item.jumlah} kost</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== KAMAR TERSEDIA ===== */}
      <section className="py-6 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 px-4 md:px-6 lg:px-8">
            <div>
              <p className="text-xs md:text-sm font-semibold uppercase tracking-widest mb-0.5 md:mb-1 text-pink-500">
                Kamar Tersedia
              </p>
              <h2 className="text-xl md:text-3xl font-bold text-gray-900">Harga Terbaik</h2>
            </div>
            <Link
              href="/kamar"
              className="text-xs md:text-sm font-semibold text-pink-500 flex items-center gap-1"
            >
              Lihat Semua <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
            </Link>
          </div>

          {/* Tab Filter - Horizontal Scroll on Mobile */}
          <div className="flex gap-2 mb-4 px-4 md:px-6 lg:px-8 overflow-x-auto pb-1 scrollbar-hide">
            {TABS.map((tab) => {
              const jumlah = tab === "Semua" ? kamarList.length : kamarList.filter((k) => k.kota === tab).length;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all ${
                    activeTab === tab
                      ? "text-white shadow-sm"
                      : "bg-white text-gray-600 border border-gray-200"
                  }`}
                  style={activeTab === tab ? { backgroundColor: "#e879a0" } : {}}
                >
                  <span>{tab}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
                    activeTab === tab ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                  }`}>{jumlah}</span>
                </button>
              );
            })}
          </div>

          {/* Cards - Horizontal Scroll on Mobile, Grid on Desktop */}
          {filteredKamar.length > 0 ? (
            <>
              {/* Mobile: Horizontal Scroll */}
              <div className="md:hidden flex gap-4 px-4 overflow-x-auto pb-2 scrollbar-hide">
                {filteredKamar.map((kamar) => (
                  <div key={kamar.id} className="flex-shrink-0 w-[280px]">
                    <KamarCard kamar={kamar} />
                  </div>
                ))}
              </div>
              {/* Desktop: Grid */}
              <div className="hidden md:grid grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
                {filteredKamar.map((kamar) => (
                  <KamarCard key={kamar.id} kamar={kamar} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12 text-gray-400 px-4">
              <p className="text-base">Belum ada kamar di lokasi ini.</p>
            </div>
          )}

          {/* Mobile CTA */}
          {activeTab !== "Semua" && (
            <div className="md:hidden px-4 mt-3">
              <Link
                href={`/kamar?lokasi=${activeTab}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 text-sm font-semibold transition-colors"
                style={{ borderColor: "#e879a0", color: "#e879a0" }}
              >
                Lihat semua di {activeTab} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ===== FASILITAS UMUM ===== */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-10">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-widest mb-1 md:mb-2 text-pink-500">
              Fasilitas
            </p>
            <h2 className="text-xl md:text-3xl font-bold text-gray-900">Fasilitas Lengkap</h2>
          </div>
          {/* Mobile: 3 col grid compact */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
            {FASILITAS_UMUM.map((fas) => (
              <div
                key={fas.label}
                className="bg-gray-50 md:bg-white rounded-2xl p-3 md:p-4 text-center md:shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 bg-pink-50">
                  <fas.icon className="w-4 h-4 md:w-5 md:h-5 text-pink-500" />
                </div>
                <p className="text-xs font-semibold text-gray-800 leading-tight">{fas.label}</p>
                <p className="text-[10px] md:text-xs text-gray-500 mt-0.5 hidden md:block">{fas.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONI ===== */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-10">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-widest mb-1 md:mb-2 text-pink-500">
              Testimoni
            </p>
            <h2 className="text-xl md:text-3xl font-bold text-gray-900">Apa Kata Mereka?</h2>
          </div>

          {/* Mobile: Compact Card */}
          <div className="md:hidden">
            <div className="rounded-2xl p-5 text-white mb-4" style={{ backgroundColor: "#e879a0" }}>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: TESTIMONI[testiIdx].rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-300 text-yellow-300" />
                ))}
              </div>
              <p className="text-white text-sm leading-relaxed mb-4">
                &ldquo;{TESTIMONI[testiIdx].teks}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm bg-white/30">
                  {TESTIMONI[testiIdx].inisial}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{TESTIMONI[testiIdx].nama}</p>
                  <p className="text-white/80 text-xs">{TESTIMONI[testiIdx].profesi}</p>
                </div>
              </div>
            </div>
            {/* Dots */}
            <div className="flex items-center gap-2 justify-center">
              {TESTIMONI.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestiIdx(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === testiIdx ? "w-6" : "w-2 bg-gray-300"
                  }`}
                  style={i === testiIdx ? { backgroundColor: "#e879a0", width: "24px" } : {}}
                />
              ))}
            </div>
          </div>

          {/* Desktop: Original Layout */}
          <div className="hidden md:grid grid-cols-2 gap-8 items-center">
            <div
              className="rounded-2xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center"
              style={{ aspectRatio: "16/9" }}
            >
              <div className="text-center p-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg bg-pink-500">
                  <svg className="w-6 h-6 text-white" style={{ marginLeft: "4px" }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm font-medium">Testimoni Video</p>
              </div>
            </div>
            <div>
              <div className="rounded-2xl p-6 text-white bg-pink-500">
                <div className="text-white/30 text-6xl font-serif leading-none mb-2">&ldquo;</div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: TESTIMONI[testiIdx].rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                  ))}
                </div>
                <p className="text-white text-base leading-relaxed mb-6">{TESTIMONI[testiIdx].teks}</p>
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
              <div className="flex items-center gap-2 mt-4 justify-center">
                <button onClick={() => setTestiIdx((prev) => (prev - 1 + TESTIMONI.length) % TESTIMONI.length)} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
                  <ChevronLeft className="w-4 h-4 text-gray-500" />
                </button>
                {TESTIMONI.map((_, i) => (
                  <button key={i} onClick={() => setTestiIdx(i)} className={`h-2.5 rounded-full transition-all ${i === testiIdx ? "bg-pink-500 w-6" : "bg-gray-200 w-2.5"}`} />
                ))}
                <button onClick={() => setTestiIdx((prev) => (prev + 1) % TESTIMONI.length)} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA WHATSAPP (Mobile Optimized) ===== */}
      <section className="py-8 md:py-16" style={{ backgroundColor: "#e879a0" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile: Stack */}
          <div className="md:hidden space-y-4">
            <div className="bg-white rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-pink-50">
                  <span className="text-lg">❓</span>
                </div>
                <h3 className="text-base font-bold text-gray-900">Ada Pertanyaan?</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Temukan jawaban seputar pemesanan, pembayaran, dan lainnya.</p>
              <Link href="/kontak" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: "#e879a0" }}>
                Lihat FAQ
              </Link>
            </div>
            <a
              href="https://wa.me/628112833993?text=Halo, saya ingin bertanya tentang DzawaniKost"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-2xl p-5 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#25D366" }}>
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 text-sm">Chat WhatsApp Sekarang</p>
                <p className="text-gray-500 text-xs">Respon cepat 24/7</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </a>
          </div>

          {/* Desktop: Side by side */}
          <div className="hidden md:grid grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-pink-50">
                <span className="text-xl">❓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mempunyai Pertanyaan?</h3>
              <p className="text-gray-600 text-sm mb-6">Temukan jawaban dari pertanyaan yang sering diajukan seputar pemesanan, pembayaran, dan lainnya.</p>
              <Link href="/kontak" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-pink-500 hover:bg-pink-600 transition-colors">
                Lihat FAQ
              </Link>
            </div>
            <div className="rounded-2xl p-8 bg-pink-600">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-white/20">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Butuh Bantuan Langsung?</h3>
              <p className="text-white/80 text-sm mb-6">Tim Customer Service kami siap membantu 24/7. Hubungi Kami melalui WhatsApp untuk respon cepat.</p>
              <a href="https://wa.me/628112833993?text=Halo, saya ingin bertanya tentang DzawaniKost" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white text-pink-500 hover:bg-gray-50 transition-colors">
                <MessageCircle className="w-4 h-4" />
                Chat Via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BLOG ===== */}
      <section className="py-8 md:py-14 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-5 px-4 md:px-6 lg:px-8">
            <div>
              <span className="text-pink-500 text-xs md:text-sm font-semibold">✦ Blog & Artikel</span>
              <h2 className="text-xl md:text-3xl font-bold text-gray-900 mt-1">
                Tips & Info <span className="text-pink-500">Kost</span>
              </h2>
            </div>
            <Link href="/blog" className="hidden md:flex items-center gap-1 text-pink-500 font-semibold text-sm hover:underline">
              Lihat Semua <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden flex gap-4 px-4 overflow-x-auto pb-2 scrollbar-hide">
            {daftarArtikel.slice(0, 5).map((artikel) => (
              <Link
                key={artikel.id}
                href={`/blog/${artikel.slug}`}
                className="flex-shrink-0 w-[240px] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <div className="relative h-36 overflow-hidden">
                  <Image src={artikel.gambar} alt={artikel.judul} fill className="object-cover" unoptimized />
                  <div className="absolute top-2 left-2">
                    <span className="bg-pink-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                      {artikel.kategori}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-gray-900 text-xs leading-snug line-clamp-2 mb-2">{artikel.judul}</h3>
                  <div className="flex items-center gap-1 text-[10px] text-gray-400">
                    <Calendar className="w-2.5 h-2.5" />
                    <span>{new Date(artikel.tanggal).toLocaleDateString("id-ID", { day: "numeric", month: "short" })}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile: Lihat Semua */}
          <div className="md:hidden px-4 mt-4">
            <Link href="/blog" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 text-sm font-semibold" style={{ borderColor: "#e879a0", color: "#e879a0" }}>
              Lihat Semua Artikel <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
            {daftarArtikel.slice(0, 3).map((artikel) => (
              <Link key={artikel.id} href={`/blog/${artikel.slug}`} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image src={artikel.gambar} alt={artikel.judul} fill className="object-cover group-hover:scale-105 transition-transform duration-300" unoptimized />
                  <div className="absolute top-3 left-3">
                    <span className="bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">{artikel.kategori}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-pink-500 transition-colors line-clamp-2">{artikel.judul}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">{artikel.ringkasan}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{artikel.penulis}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(artikel.tanggal).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

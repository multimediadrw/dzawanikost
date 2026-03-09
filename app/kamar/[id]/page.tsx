"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  MapPin,
  CheckCircle,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Phone,
  Share2,
} from "lucide-react";
import { kamarList, formatHarga } from "@/lib/data";
import KamarCard from "@/components/KamarCard";

interface Props {
  params: Promise<{ id: string }>;
}

function PeriodeDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const options = ["1 Bulan", "3 Bulan", "6 Bulan"];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-2 px-4 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 transition-colors"
      >
        <span className={value ? "text-gray-900" : "text-gray-400"}>
          {value || "Pilih Periode Sewa"}
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
          <button type="button" onClick={() => { onChange(""); setOpen(false); }} className="w-full text-left px-4 py-3 text-sm font-semibold text-gray-500 hover:bg-pink-50 transition-colors border-b border-gray-100">
            Pilih Periode Sewa
          </button>
          {options.map((opt) => (
            <button key={opt} type="button" onClick={() => { onChange(opt); setOpen(false); }} className={`w-full text-left px-4 py-3 text-sm hover:bg-pink-50 transition-colors ${value === opt ? "text-pink-600 font-semibold bg-pink-50" : "text-gray-700"}`}>
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function KamarDetailPage({ params }: Props) {
  const { id } = use(params);
  const kamar = kamarList.find((k) => k.slug === id || k.id === parseInt(id));

  if (!kamar) notFound();

  const [currentImg, setCurrentImg] = useState(0);
  const [periode, setPeriode] = useState("");

  const hargaMap: Record<string, number> = {
    "1 Bulan": kamar.harga,
    "3 Bulan": kamar.harga3Bulan,
    "6 Bulan": kamar.harga6Bulan,
  };

  const hargaTampil = periode ? hargaMap[periode] : kamar.harga;

  const kamarLainnya = kamarList
    .filter((k) => k.id !== kamar.id && k.tersedia > 0)
    .slice(0, 3);

  const waUrl = `https://wa.me/628112833993?text=Halo, saya tertarik dengan ${kamar.nama} (${periode || "1 Bulan"}) di DzawaniKost. Apakah masih tersedia?`;

  return (
    <main className="bg-gray-50 min-h-screen pb-28 md:pb-0">

      {/* ===== MOBILE: Full-screen Image Hero ===== */}
      <div className="md:hidden relative">
        {/* Image */}
        <div className="relative h-72 bg-gray-200">
          <Image
            src={kamar.gambarList[currentImg]}
            alt={kamar.nama}
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          {/* Back button */}
          <Link
            href="/kamar"
            className="absolute top-4 left-4 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-gray-700" />
          </Link>

          {/* Share button */}
          <button className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
            <Share2 className="w-4 h-4 text-gray-700" />
          </button>

          {/* Badge penghuni */}
          <div className="absolute bottom-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              kamar.penghuni === "Putri" ? "bg-pink-500 text-white" :
              kamar.penghuni === "Putra" ? "bg-blue-500 text-white" :
              "bg-purple-500 text-white"
            }`}>
              Kost {kamar.penghuni}
            </span>
          </div>

          {/* Image counter */}
          {kamar.gambarList.length > 1 && (
            <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
              {currentImg + 1}/{kamar.gambarList.length}
            </div>
          )}

          {/* Swipe arrows */}
          {kamar.gambarList.length > 1 && (
            <>
              <button
                onClick={() => setCurrentImg((p) => p === 0 ? kamar.gambarList.length - 1 : p - 1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/70 rounded-full flex items-center justify-center"
              >
                <ChevronLeft className="w-4 h-4 text-gray-700" />
              </button>
              <button
                onClick={() => setCurrentImg((p) => p === kamar.gambarList.length - 1 ? 0 : p + 1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/70 rounded-full flex items-center justify-center"
              >
                <ChevronRight className="w-4 h-4 text-gray-700" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail dots */}
        {kamar.gambarList.length > 1 && (
          <div className="flex gap-1 justify-center py-2 bg-white">
            {kamar.gambarList.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImg(i)}
                className={`h-1.5 rounded-full transition-all ${i === currentImg ? "w-5" : "w-1.5 bg-gray-300"}`}
                style={i === currentImg ? { backgroundColor: "#e879a0", width: "20px" } : {}}
              />
            ))}
          </div>
        )}
      </div>

      {/* ===== MOBILE: Content ===== */}
      <div className="md:hidden px-4 pt-4 space-y-4">
        {/* Nama & Lokasi */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h1 className="text-xl font-bold text-gray-900 leading-tight">{kamar.nama}</h1>
            <span className={`flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold ${
              kamar.tersedia > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
            }`}>
              {kamar.tersedia > 0 ? `${kamar.tersedia} tersedia` : "Penuh"}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-3">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-pink-400" />
            <span className="text-xs">{kamar.alamat}</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{kamar.deskripsi}</p>
        </div>

        {/* Harga */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <p className="text-xs text-gray-400 mb-1">Harga sewa mulai</p>
          <div className="flex items-end gap-2 mb-3">
            <span className="text-2xl font-bold" style={{ color: "#e879a0" }}>{formatHarga(hargaTampil)}</span>
            <span className="text-sm text-gray-500 mb-0.5">/ {periode || "bulan"}</span>
          </div>
          {periode === "3 Bulan" && (
            <p className="text-xs text-green-600 font-medium mb-3">
              Hemat {formatHarga(kamar.harga * 3 - kamar.harga3Bulan)} dari harga normal
            </p>
          )}
          {periode === "6 Bulan" && (
            <p className="text-xs text-green-600 font-medium mb-3">
              Hemat {formatHarga(kamar.harga * 6 - kamar.harga6Bulan)} dari harga normal
            </p>
          )}
          <PeriodeDropdown value={periode} onChange={setPeriode} />
        </div>

        {/* Info singkat */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-2 bg-gray-50 rounded-xl">
              <p className="text-xs text-gray-400 mb-1">Tipe</p>
              <p className="text-xs font-bold text-gray-800">{kamar.tipe}</p>
            </div>
            <div className="text-center p-2 bg-gray-50 rounded-xl">
              <p className="text-xs text-gray-400 mb-1">Penghuni</p>
              <p className="text-xs font-bold text-gray-800">{kamar.penghuni}</p>
            </div>
            <div className="text-center p-2 bg-gray-50 rounded-xl">
              <p className="text-xs text-gray-400 mb-1">Kota</p>
              <p className="text-xs font-bold text-gray-800">{kamar.kota}</p>
            </div>
          </div>
        </div>

        {/* Fasilitas */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h2 className="text-base font-bold text-gray-900 mb-3">Fasilitas Kamar</h2>
          <div className="grid grid-cols-2 gap-2">
            {kamar.fasilitas.map((f) => (
              <div key={f} className="flex items-center gap-2 text-xs text-gray-700">
                <CheckCircle className="w-3.5 h-3.5 text-pink-500 flex-shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Peraturan */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h2 className="text-base font-bold text-gray-900 mb-3">Peraturan Kost</h2>
          <ul className="space-y-2">
            {kamar.peraturan.map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                <span className="w-4 h-4 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Kamar Lainnya */}
        {kamarLainnya.length > 0 && (
          <div className="pb-4">
            <h2 className="text-base font-bold text-gray-900 mb-3">Kamar Lainnya</h2>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
              {kamarLainnya.map((k) => (
                <div key={k.id} className="flex-shrink-0 w-[260px]">
                  <KamarCard kamar={k} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ===== MOBILE STICKY BOTTOM CTA ===== */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-3 pb-safe">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-xs text-gray-400">Harga mulai</p>
            <p className="text-lg font-bold" style={{ color: "#e879a0" }}>{formatHarga(hargaTampil)}<span className="text-xs text-gray-400 font-normal">/{periode || "bln"}</span></p>
          </div>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-2xl text-white font-semibold text-sm shadow-md flex-shrink-0"
            style={{ backgroundColor: "#e879a0" }}
          >
            <MessageCircle className="w-4 h-4" />
            Tanya via WA
          </a>
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="hidden md:block max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-700 transition-colors">Beranda</Link>
          <span>/</span>
          <Link href="/kamar" className="hover:text-gray-700 transition-colors">Kamar</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{kamar.nama}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6">
            {/* Galeri */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative h-80 group">
                <Image src={kamar.gambarList[currentImg]} alt={kamar.nama} fill className="object-cover" priority />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1.5 rounded-full text-sm font-semibold ${
                    kamar.penghuni === "Putri" ? "bg-pink-500 text-white" :
                    kamar.penghuni === "Putra" ? "bg-blue-500 text-white" :
                    "bg-purple-500 text-white"
                  }`}>
                    Kost {kamar.penghuni}
                  </span>
                </div>
                {kamar.gambarList.length > 1 && (
                  <>
                    <button onClick={() => setCurrentImg((p) => p === 0 ? kamar.gambarList.length - 1 : p - 1)} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <button onClick={() => setCurrentImg((p) => p === kamar.gambarList.length - 1 ? 0 : p + 1)} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronRight className="w-5 h-5 text-gray-700" />
                    </button>
                  </>
                )}
              </div>
              {kamar.gambarList.length > 1 && (
                <div className="flex gap-2 p-4">
                  {kamar.gambarList.map((img, i) => (
                    <button key={i} onClick={() => setCurrentImg(i)} className={`relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${i === currentImg ? "border-pink-500" : "border-transparent"}`}>
                      <Image src={img} alt={`Foto ${i + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{kamar.nama}</h1>
              <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
                <MapPin className="w-4 h-4 flex-shrink-0 text-pink-400" />
                <span>{kamar.alamat}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{kamar.deskripsi}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Fasilitas Kamar</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {kamar.fasilitas.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-pink-500 flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Peraturan Kost</h2>
              <ul className="space-y-2">
                {kamar.peraturan.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <div className="mb-5">
                <p className="text-xs text-gray-400 mb-1">Harga sewa</p>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold text-gray-900">{formatHarga(hargaTampil)}</span>
                  <span className="text-sm text-gray-500 mb-0.5">/ {periode || "bulan"}</span>
                </div>
                {periode === "3 Bulan" && <p className="text-xs text-green-600 font-medium mt-1">Hemat {formatHarga(kamar.harga * 3 - kamar.harga3Bulan)} dari harga normal</p>}
                {periode === "6 Bulan" && <p className="text-xs text-green-600 font-medium mt-1">Hemat {formatHarga(kamar.harga * 6 - kamar.harga6Bulan)} dari harga normal</p>}
              </div>
              <div className="mb-5">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Periode Sewa</p>
                <PeriodeDropdown value={periode} onChange={setPeriode} />
              </div>
              <div className="space-y-2 mb-5 p-4 bg-gray-50 rounded-xl">
                <div className="flex justify-between text-sm"><span className="text-gray-500">Tipe</span><span className="font-semibold text-gray-800">{kamar.tipe}</span></div>
                <div className="flex justify-between text-sm"><span className="text-gray-500">Penghuni</span><span className="font-semibold text-gray-800">{kamar.penghuni}</span></div>
                <div className="flex justify-between text-sm"><span className="text-gray-500">Lokasi</span><span className="font-semibold text-gray-800">{kamar.kota}</span></div>
                <div className="flex justify-between text-sm"><span className="text-gray-500">Tersedia</span><span className={`font-semibold ${kamar.tersedia > 0 ? "text-green-600" : "text-red-500"}`}>{kamar.tersedia > 0 ? `${kamar.tersedia} kamar` : "Penuh"}</span></div>
              </div>
              <div className="space-y-3">
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 text-white font-semibold rounded-xl transition-colors shadow-md shadow-pink-100" style={{ backgroundColor: "#e879a0" }}>
                  <MessageCircle className="w-5 h-5" />
                  Hubungi via WhatsApp
                </a>
                <Link href="/kamar" className="flex items-center justify-center gap-2 w-full py-3 border-2 border-pink-500 text-pink-500 hover:bg-pink-50 font-semibold rounded-xl transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  Lihat Kamar Lain
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Kamar Lainnya */}
        {kamarLainnya.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Kamar Lainnya</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {kamarLainnya.map((k) => (
                <KamarCard key={k.id} kamar={k} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

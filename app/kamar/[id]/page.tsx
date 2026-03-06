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
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
          <button
            type="button"
            onClick={() => { onChange(""); setOpen(false); }}
            className="w-full text-left px-4 py-3 text-sm font-semibold text-gray-500 hover:bg-pink-50 transition-colors border-b border-gray-100"
          >
            Pilih Periode Sewa
          </button>
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`w-full text-left px-4 py-3 text-sm hover:bg-pink-50 transition-colors ${
                value === opt
                  ? "text-pink-600 font-semibold bg-pink-50"
                  : "text-gray-700"
              }`}
            >
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

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-700 transition-colors">
            Beranda
          </Link>
          <span>/</span>
          <Link href="/kamar" className="hover:text-gray-700 transition-colors">
            Kamar
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{kamar.nama}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT: Galeri + Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Galeri */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative h-80 group">
                <Image
                  src={kamar.gambarList[currentImg]}
                  alt={kamar.nama}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Badge penghuni */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1.5 rounded-full text-sm font-semibold ${
                      kamar.penghuni === "Putri"
                        ? "bg-pink-500 text-white"
                        : kamar.penghuni === "Putra"
                        ? "bg-blue-500 text-white"
                        : "bg-purple-500 text-white"
                    }`}
                  >
                    Kost {kamar.penghuni}
                  </span>
                </div>

                {/* Nav arrows */}
                {kamar.gambarList.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setCurrentImg((p) =>
                          p === 0 ? kamar.gambarList.length - 1 : p - 1
                        )
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentImg((p) =>
                          p === kamar.gambarList.length - 1 ? 0 : p + 1
                        )
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-700" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail strip */}
              {kamar.gambarList.length > 1 && (
                <div className="flex gap-2 p-4">
                  {kamar.gambarList.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImg(i)}
                      className={`relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                        i === currentImg
                          ? "border-pink-500"
                          : "border-transparent"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Foto ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info Kamar */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {kamar.nama}
              </h1>
              <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
                <MapPin className="w-4 h-4 flex-shrink-0 text-pink-400" />
                <span>{kamar.alamat}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {kamar.deskripsi}
              </p>
            </div>

            {/* Fasilitas */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Fasilitas Kamar
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {kamar.fasilitas.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle className="w-4 h-4 text-pink-500 flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Peraturan */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Peraturan Kost
              </h2>
              <ul className="space-y-2">
                {kamar.peraturan.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
              {/* Harga */}
              <div className="mb-5">
                <p className="text-xs text-gray-400 mb-1">Harga sewa</p>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold text-gray-900">
                    {formatHarga(hargaTampil)}
                  </span>
                  <span className="text-sm text-gray-500 mb-0.5">
                    / {periode || "bulan"}
                  </span>
                </div>
                {periode === "3 Bulan" && (
                  <p className="text-xs text-green-600 font-medium mt-1">
                    Hemat {formatHarga(kamar.harga * 3 - kamar.harga3Bulan)} dari harga normal
                  </p>
                )}
                {periode === "6 Bulan" && (
                  <p className="text-xs text-green-600 font-medium mt-1">
                    Hemat {formatHarga(kamar.harga * 6 - kamar.harga6Bulan)} dari harga normal
                  </p>
                )}
              </div>

              {/* Periode Sewa Dropdown */}
              <div className="mb-5">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Periode Sewa
                </p>
                <PeriodeDropdown value={periode} onChange={setPeriode} />
              </div>

              {/* Info Kamar */}
              <div className="space-y-2 mb-5 p-4 bg-gray-50 rounded-xl">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Tipe</span>
                  <span className="font-semibold text-gray-800">{kamar.tipe}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Penghuni</span>
                  <span className="font-semibold text-gray-800">{kamar.penghuni}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Luas</span>
                  <span className="font-semibold text-gray-800">{kamar.luas} m²</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Tersedia</span>
                  <span
                    className={`font-semibold ${
                      kamar.tersedia > 0 ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {kamar.tersedia > 0
                      ? `${kamar.tersedia} kamar`
                      : "Penuh"}
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <a
                  href={`https://wa.me/6281234567890?text=Halo, saya tertarik dengan ${kamar.nama} (${periode || "1 Bulan"}) di DzawaniKost. Apakah masih tersedia?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl transition-colors shadow-md shadow-pink-100"
                >
                  <MessageCircle className="w-5 h-5" />
                  Hubungi via WhatsApp
                </a>
                <Link
                  href="/kamar"
                  className="flex items-center justify-center gap-2 w-full py-3 border-2 border-pink-500 text-pink-500 hover:bg-pink-50 font-semibold rounded-xl transition-colors"
                >
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
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Kamar Lainnya
            </h2>
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

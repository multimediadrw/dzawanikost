"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { MapPin, Search, X, ChevronDown } from "lucide-react";
import KamarCard from "@/components/KamarCard";
import { kamarList } from "@/lib/data";

// Kota yang benar-benar ada di data
const KOTA_LIST = [
  { label: "Semua Kota", value: "" },
  { label: "Yogyakarta", value: "Yogyakarta", emoji: "🏛️" },
  { label: "Malang", value: "Malang", emoji: "🌿" },
];

const PENGHUNI_LIST = [
  { label: "Semua", value: "" },
  { label: "Putra", value: "Putra" },
  { label: "Putri", value: "Putri" },
  { label: "Pasutri", value: "Pasutri" },
];

function KamarPageContent() {
  const searchParams = useSearchParams();
  const [kota, setKota] = useState(searchParams.get("lokasi") || "");
  const [penghuni, setPenghuni] = useState(searchParams.get("penghuni") || "");
  const [cari, setCari] = useState("");
  const [filtered, setFiltered] = useState(kamarList);

  // Hitung jumlah kost per kota
  const jumlahPerKota = (kotaVal: string) => {
    if (!kotaVal) return kamarList.length;
    return kamarList.filter((k) => k.kota === kotaVal).length;
  };

  useEffect(() => {
    let result = kamarList;
    if (kota) result = result.filter((k) => k.kota === kota);
    if (penghuni) result = result.filter((k) => k.penghuni === penghuni);
    if (cari) {
      const q = cari.toLowerCase();
      result = result.filter(
        (k) =>
          k.nama.toLowerCase().includes(q) ||
          k.lokasi.toLowerCase().includes(q) ||
          k.kota.toLowerCase().includes(q)
      );
    }
    setFiltered(result);
  }, [kota, penghuni, cari]);

  const resetFilter = () => {
    setKota("");
    setPenghuni("");
    setCari("");
  };

  const hasFilter = kota || penghuni || cari;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* ===== HERO HEADER ===== */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-pink-500 uppercase tracking-widest mb-1">
                Jelajahi Kamar
              </p>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Temukan Kost{" "}
                {kota ? (
                  <span className="text-pink-500">di {kota}</span>
                ) : (
                  <span className="text-pink-500">Terbaik</span>
                )}
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                {filtered.length} properti tersedia
                {kota ? ` di ${kota}` : " di semua kota"}
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Cari nama kost atau area..."
                value={cari}
                onChange={(e) => setCari(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 bg-gray-50"
              />
              {cari && (
                <button
                  onClick={() => setCari("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ===== FILTER KOTA (TAB BESAR) ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {KOTA_LIST.map((k) => {
            const jumlah = jumlahPerKota(k.value);
            const isActive = kota === k.value;
            return (
              <button
                key={k.value}
                onClick={() => setKota(k.value)}
                className={`relative flex items-center gap-3 px-5 py-4 rounded-2xl border-2 text-left transition-all ${
                  isActive
                    ? "border-pink-500 bg-pink-50 shadow-md shadow-pink-100"
                    : "border-gray-200 bg-white hover:border-pink-300 hover:bg-pink-50/50"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${
                    isActive ? "bg-pink-500" : "bg-gray-100"
                  }`}
                >
                  {k.value === "" ? (
                    <MapPin className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-500"}`} />
                  ) : (
                    <span>{k.emoji}</span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={`font-bold text-sm ${
                      isActive ? "text-pink-600" : "text-gray-800"
                    }`}
                  >
                    {k.label}
                  </p>
                  <p
                    className={`text-xs mt-0.5 ${
                      isActive ? "text-pink-400" : "text-gray-400"
                    }`}
                  >
                    {jumlah} properti
                  </p>
                </div>
                {isActive && (
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-pink-500" />
                )}
              </button>
            );
          })}
        </div>

        {/* ===== FILTER PENGHUNI + RESET ===== */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-sm font-semibold text-gray-500 mr-1">Penghuni:</span>
          {PENGHUNI_LIST.map((p) => (
            <button
              key={p.value}
              onClick={() => setPenghuni(p.value)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                penghuni === p.value
                  ? "bg-pink-500 text-white border-pink-500"
                  : "bg-white text-gray-600 border-gray-200 hover:border-pink-300"
              }`}
            >
              {p.label}
            </button>
          ))}

          {hasFilter && (
            <button
              onClick={resetFilter}
              className="ml-auto flex items-center gap-1.5 text-sm text-pink-500 hover:text-pink-600 font-medium border border-pink-200 px-4 py-1.5 rounded-full hover:bg-pink-50 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              Reset Filter
            </button>
          )}
        </div>

        {/* ===== HASIL ===== */}
        {filtered.length > 0 ? (
          <>
            {/* Label area jika filter kota aktif */}
            {kota && (
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-pink-500" />
                <span className="text-sm font-semibold text-gray-700">
                  Menampilkan kost di{" "}
                  <span className="text-pink-500">{kota}</span>
                </span>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((kamar) => (
                <KamarCard key={kamar.id} kamar={kamar} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-24">
            <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏠</span>
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Kamar Tidak Ditemukan
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Tidak ada kamar yang sesuai dengan filter yang dipilih.
            </p>
            <button
              onClick={resetFilter}
              className="px-6 py-2.5 bg-pink-500 text-white rounded-full text-sm font-semibold hover:bg-pink-600 transition-colors"
            >
              Lihat Semua Kamar
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default function KamarPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-pink-500 text-lg font-medium">Memuat...</div>
        </div>
      }
    >
      <KamarPageContent />
    </Suspense>
  );
}

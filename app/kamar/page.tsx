import { kamarList } from "@/lib/data";
import KamarCard from "@/components/KamarCard";
import { BedDouble, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daftar Kamar - DzawaniKost",
  description:
    "Lihat semua pilihan kamar kost DzawaniKost. Tersedia tipe Standard, Deluxe, Superior, dan Premium dengan harga terjangkau.",
};

export default function KamarPage() {
  const tersedia = kamarList.filter((k) => k.tersedia).length;
  const penuh = kamarList.filter((k) => !k.tersedia).length;

  return (
    <>
      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#fce4ef" }}
            >
              <BedDouble className="w-5 h-5" style={{ color: "#e879a0" }} />
            </div>
            <span className="text-sm font-medium" style={{ color: "#e879a0" }}>
              Semua Kamar
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Pilih Kamar <span style={{ color: "#e879a0" }}>Terbaik</span> Anda
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Kami menyediakan berbagai pilihan kamar untuk memenuhi kebutuhan dan
            anggaran Anda. Semua kamar dilengkapi dengan fasilitas modern dan
            terjaga kebersihannya.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-xl">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">
                {tersedia} Kamar Tersedia
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-red-50 rounded-xl">
              <div className="w-4 h-4 rounded-full bg-red-400" />
              <span className="text-sm font-medium text-red-600">
                {penuh} Kamar Penuh
              </span>
            </div>
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-xl"
              style={{ backgroundColor: "#fce4ef" }}
            >
              <BedDouble className="w-4 h-4" style={{ color: "#e879a0" }} />
              <span className="text-sm font-medium" style={{ color: "#c0527a" }}>
                Total {kamarList.length} Kamar
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Kamar Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tipe Filter Labels */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Semua Tipe Kamar
            </h2>
            <div className="flex flex-wrap gap-2">
              {["Standard", "Deluxe", "Superior", "Premium"].map((tipe) => {
                const count = kamarList.filter((k) => k.tipe === tipe).length;
                return (
                  <div
                    key={tipe}
                    className="px-4 py-2 rounded-xl text-sm font-medium border border-gray-200 bg-white text-gray-700"
                  >
                    {tipe}{" "}
                    <span
                      className="ml-1 px-1.5 py-0.5 rounded-md text-xs font-bold text-white"
                      style={{ backgroundColor: "#e879a0" }}
                    >
                      {count}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Kamar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kamarList.map((kamar) => (
              <KamarCard key={kamar.id} kamar={kamar} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Kamar, formatHarga } from "@/lib/data";
import { BedDouble, Maximize2, Building2, CheckCircle, XCircle } from "lucide-react";

interface KamarCardProps {
  kamar: Kamar;
}

export default function KamarCard({ kamar }: KamarCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={kamar.gambar}
          alt={kamar.nama}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Badge Tipe */}
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white"
          style={{ backgroundColor: "#e879a0" }}
        >
          {kamar.tipe}
        </div>
        {/* Badge Tersedia */}
        <div
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
            kamar.tersedia
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {kamar.tersedia ? (
            <>
              <CheckCircle className="w-3 h-3" /> Tersedia
            </>
          ) : (
            <>
              <XCircle className="w-3 h-3" /> Penuh
            </>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{kamar.nama}</h3>
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{kamar.deskripsi}</p>

        {/* Info Grid */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
            <Maximize2 className="w-4 h-4 text-gray-400 mb-1" />
            <span className="text-xs text-gray-600 font-medium">{kamar.luas} m²</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
            <Building2 className="w-4 h-4 text-gray-400 mb-1" />
            <span className="text-xs text-gray-600 font-medium">Lantai {kamar.lantai}</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
            <BedDouble className="w-4 h-4 text-gray-400 mb-1" />
            <span className="text-xs text-gray-600 font-medium">{kamar.tipe}</span>
          </div>
        </div>

        {/* Fasilitas */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {kamar.fasilitas.slice(0, 4).map((f) => (
            <span
              key={f}
              className="text-xs px-2 py-1 rounded-md font-medium"
              style={{ backgroundColor: "#fce4ef", color: "#c0527a" }}
            >
              {f}
            </span>
          ))}
          {kamar.fasilitas.length > 4 && (
            <span className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-500 font-medium">
              +{kamar.fasilitas.length - 4} lainnya
            </span>
          )}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-gray-900">{formatHarga(kamar.harga)}</span>
            <span className="text-xs text-gray-500">/bulan</span>
          </div>
          <Link
            href={`/kamar/${kamar.id}`}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
              kamar.tersedia
                ? "text-white hover:opacity-90"
                : "bg-gray-100 text-gray-400 cursor-not-allowed pointer-events-none"
            }`}
            style={kamar.tersedia ? { backgroundColor: "#e879a0" } : {}}
          >
            {kamar.tersedia ? "Lihat Detail" : "Tidak Tersedia"}
          </Link>
        </div>
      </div>
    </div>
  );
}

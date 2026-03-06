import { kamarList, formatHarga } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BedDouble,
  Maximize2,
  Building2,
  CheckCircle,
  XCircle,
  Phone,
  MessageCircle,
  Star,
} from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const kamar = kamarList.find((k) => k.id === parseInt(id));
  if (!kamar) return { title: "Kamar Tidak Ditemukan" };
  return {
    title: `${kamar.nama} - DzawaniKost`,
    description: kamar.deskripsi,
  };
}

export async function generateStaticParams() {
  return kamarList.map((k) => ({ id: k.id.toString() }));
}

export default async function KamarDetailPage({ params }: Props) {
  const { id } = await params;
  const kamar = kamarList.find((k) => k.id === parseInt(id));

  if (!kamar) notFound();

  const kamarLainnya = kamarList
    .filter((k) => k.id !== kamar.id && k.tersedia)
    .slice(0, 3);

  return (
    <>
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
          {/* Left: Images & Details */}
          <div className="lg:col-span-2">
            {/* Back Button */}
            <Link
              href="/kamar"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 mb-5 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Daftar Kamar
            </Link>

            {/* Main Image */}
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden mb-4 shadow-md">
              <Image
                src={kamar.gambar}
                alt={kamar.nama}
                fill
                className="object-cover"
                priority
              />
              <div
                className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-sm font-semibold text-white"
                style={{ backgroundColor: "#e879a0" }}
              >
                {kamar.tipe}
              </div>
              <div
                className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 ${
                  kamar.tersedia
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {kamar.tersedia ? (
                  <>
                    <CheckCircle className="w-4 h-4" /> Tersedia
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4" /> Penuh
                  </>
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {kamar.gambarList.map((img, i) => (
                <div key={i} className="relative h-24 rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src={img}
                    alt={`${kamar.nama} ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 33vw, 200px"
                  />
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-6">
              <h1 className="text-2xl font-extrabold text-gray-900 mb-2">
                {kamar.nama}
              </h1>
              <p className="text-gray-600 leading-relaxed">{kamar.deskripsi}</p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm text-center">
                <Maximize2 className="w-6 h-6 mx-auto mb-2" style={{ color: "#e879a0" }} />
                <div className="text-lg font-bold text-gray-900">{kamar.luas} m²</div>
                <div className="text-xs text-gray-500">Luas Kamar</div>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm text-center">
                <Building2 className="w-6 h-6 mx-auto mb-2" style={{ color: "#e879a0" }} />
                <div className="text-lg font-bold text-gray-900">Lantai {kamar.lantai}</div>
                <div className="text-xs text-gray-500">Lokasi Kamar</div>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm text-center">
                <BedDouble className="w-6 h-6 mx-auto mb-2" style={{ color: "#e879a0" }} />
                <div className="text-lg font-bold text-gray-900">{kamar.tipe}</div>
                <div className="text-xs text-gray-500">Tipe Kamar</div>
              </div>
            </div>

            {/* Fasilitas */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Fasilitas Kamar
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {kamar.fasilitas.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2 p-3 rounded-xl"
                    style={{ backgroundColor: "#fce4ef" }}
                  >
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "#e879a0" }} />
                    <span className="text-sm font-medium" style={{ color: "#c0527a" }}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md">
                <div className="mb-4">
                  <div className="text-3xl font-extrabold text-gray-900">
                    {formatHarga(kamar.harga)}
                  </div>
                  <div className="text-sm text-gray-500">per bulan</div>
                </div>

                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#e879a0" }} />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">(5.0)</span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tipe</span>
                    <span className="font-semibold text-gray-900">{kamar.tipe}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Luas</span>
                    <span className="font-semibold text-gray-900">{kamar.luas} m²</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Lantai</span>
                    <span className="font-semibold text-gray-900">{kamar.lantai}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Status</span>
                    <span
                      className={`font-semibold ${
                        kamar.tersedia ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {kamar.tersedia ? "Tersedia" : "Penuh"}
                    </span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-5 space-y-3">
                  {kamar.tersedia ? (
                    <>
                      <a
                        href={`https://wa.me/6281234567890?text=Halo, saya tertarik dengan ${kamar.nama} di DzawaniKost. Apakah masih tersedia?`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 shadow-sm"
                        style={{ backgroundColor: "#e879a0" }}
                      >
                        <MessageCircle className="w-4 h-4" />
                        Hubungi via WhatsApp
                      </a>
                      <a
                        href="tel:+6281234567890"
                        className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-sm font-semibold transition-all"
                        style={{ backgroundColor: "#fce4ef", color: "#c0527a" }}
                      >
                        <Phone className="w-4 h-4" />
                        Telepon Sekarang
                      </a>
                    </>
                  ) : (
                    <div className="text-center py-4">
                      <XCircle className="w-10 h-10 mx-auto text-red-300 mb-2" />
                      <p className="text-sm text-gray-500">
                        Kamar ini sedang penuh. Lihat kamar lain yang tersedia.
                      </p>
                      <Link
                        href="/kamar"
                        className="inline-block mt-3 px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                        style={{ backgroundColor: "#e879a0" }}
                      >
                        Lihat Kamar Lain
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Info */}
              <div
                className="mt-4 rounded-2xl p-4"
                style={{ backgroundColor: "#fce4ef" }}
              >
                <p className="text-xs font-medium mb-1" style={{ color: "#c0527a" }}>
                  Butuh bantuan?
                </p>
                <p className="text-xs text-gray-600">
                  Hubungi kami di{" "}
                  <a
                    href="tel:+6281234567890"
                    className="font-semibold"
                    style={{ color: "#e879a0" }}
                  >
                    +62 812-3456-7890
                  </a>{" "}
                  atau kunjungi halaman{" "}
                  <Link
                    href="/kontak"
                    className="font-semibold"
                    style={{ color: "#e879a0" }}
                  >
                    Kontak
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Kamar Lainnya */}
        {kamarLainnya.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
              Kamar <span style={{ color: "#e879a0" }}>Lainnya</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {kamarLainnya.map((k) => (
                  <Link
                    key={k.id}
                    href={`/kamar/${k.id}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={k.gambar}
                        alt={k.nama}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div
                        className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold text-white"
                        style={{ backgroundColor: "#e879a0" }}
                      >
                        {k.tipe}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-1">{k.nama}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold" style={{ color: "#e879a0" }}>
                          {formatHarga(k.harga)}/bln
                        </span>
                        <span className="text-xs text-gray-500">{k.luas} m²</span>
                      </div>
                    </div>
                  </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}

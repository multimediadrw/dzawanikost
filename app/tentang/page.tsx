import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Shield,
  Star,
  Users,
  Home,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami - DzawaniKost",
  description:
    "Kenali lebih dekat DzawaniKost, hunian kost nyaman dan terpercaya untuk mahasiswa dan pekerja.",
};

const nilaiKami = [
  {
    icon: <Heart className="w-6 h-6" />,
    judul: "Kenyamanan",
    deskripsi:
      "Kami mengutamakan kenyamanan penghuni dengan menjaga kebersihan dan kelengkapan fasilitas setiap saat.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    judul: "Keamanan",
    deskripsi:
      "Keamanan penghuni adalah prioritas utama kami dengan sistem CCTV dan petugas keamanan 24 jam.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    judul: "Kualitas",
    deskripsi:
      "Setiap kamar dirancang dan dirawat dengan standar kualitas tinggi untuk memberikan pengalaman terbaik.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    judul: "Komunitas",
    deskripsi:
      "Kami membangun komunitas yang harmonis dan saling mendukung di antara para penghuni.",
  },
];

const timKami = [
  {
    nama: "Bapak Ahmad",
    jabatan: "Pemilik",
    avatar: "BA",
    deskripsi: "Berpengalaman lebih dari 10 tahun dalam pengelolaan properti kost.",
  },
  {
    nama: "Ibu Sari",
    jabatan: "Manajer Operasional",
    avatar: "IS",
    deskripsi: "Bertanggung jawab atas operasional harian dan kepuasan penghuni.",
  },
  {
    nama: "Pak Budi",
    jabatan: "Petugas Keamanan",
    avatar: "PB",
    deskripsi: "Menjaga keamanan dan ketertiban lingkungan kost 24 jam penuh.",
  },
];

export default function TentangPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-5"
                style={{ backgroundColor: "#fce4ef", color: "#c0527a" }}
              >
                <Home className="w-4 h-4" />
                Tentang DzawaniKost
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
                Hunian Nyaman,{" "}
                <span style={{ color: "#e879a0" }}>Rumah Kedua</span> Anda
              </h1>
              <p className="text-gray-600 leading-relaxed mb-5">
                DzawaniKost hadir sejak 2015 dengan misi menyediakan hunian
                kost yang nyaman, bersih, dan aman untuk mahasiswa dan pekerja.
                Kami percaya bahwa tempat tinggal yang baik adalah fondasi
                produktivitas dan kebahagiaan.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Dengan pengalaman lebih dari 9 tahun, kami telah melayani
                ratusan penghuni dan terus berkomitmen untuk memberikan
                pelayanan terbaik dengan harga yang terjangkau.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "9+", label: "Tahun Berpengalaman" },
                  { value: "200+", label: "Alumni Penghuni" },
                  { value: "50+", label: "Kamar Tersedia" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="text-center p-3 rounded-xl"
                    style={{ backgroundColor: "#fce4ef" }}
                  >
                    <div className="text-2xl font-extrabold" style={{ color: "#e879a0" }}>
                      {s.value}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl h-80">
                <Image
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"
                  alt="DzawaniKost Building"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "#fce4ef" }}
                >
                  <Star className="w-5 h-5 fill-current" style={{ color: "#e879a0" }} />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Rating 5.0</div>
                  <div className="text-xs text-gray-500">Dari 200+ ulasan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai Kami */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
              Nilai-Nilai <span style={{ color: "#e879a0" }}>Kami</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Prinsip-prinsip yang menjadi landasan kami dalam memberikan
              pelayanan terbaik kepada setiap penghuni.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nilaiKami.map((nilai) => (
              <div
                key={nilai.judul}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#fce4ef", color: "#e879a0" }}
                >
                  {nilai.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{nilai.judul}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{nilai.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Peraturan */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Peraturan <span style={{ color: "#e879a0" }}>Kost</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Demi kenyamanan bersama, kami memiliki beberapa peraturan yang
                wajib dipatuhi oleh seluruh penghuni.
              </p>
              <ul className="space-y-3">
                {[
                  "Tamu hanya boleh berkunjung hingga pukul 22.00 WIB",
                  "Dilarang membawa hewan peliharaan",
                  "Menjaga kebersihan kamar dan area bersama",
                  "Tidak membuat keributan yang mengganggu penghuni lain",
                  "Pembayaran sewa dilakukan setiap awal bulan",
                  "Lapor kepada pengelola jika ada kerusakan fasilitas",
                  "Dilarang merokok di dalam kamar",
                  "Tamu lawan jenis dilarang masuk ke kamar",
                ].map((rule) => (
                  <li key={rule} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: "#e879a0" }}
                    />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Tim <span style={{ color: "#e879a0" }}>Kami</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Kami memiliki tim yang berdedikasi untuk memastikan kenyamanan
                dan kepuasan setiap penghuni.
              </p>
              <div className="space-y-4">
                {timKami.map((anggota) => (
                  <div
                    key={anggota.nama}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ backgroundColor: "#e879a0" }}
                    >
                      {anggota.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{anggota.nama}</div>
                      <div className="text-xs font-medium mb-1" style={{ color: "#e879a0" }}>
                        {anggota.jabatan}
                      </div>
                      <div className="text-xs text-gray-500">{anggota.deskripsi}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            Tertarik Bergabung dengan <span style={{ color: "#e879a0" }}>DzawaniKost</span>?
          </h2>
          <p className="text-gray-600 mb-6">
            Lihat pilihan kamar kami dan temukan hunian yang sesuai dengan
            kebutuhan Anda.
          </p>
          <Link
            href="/kamar"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white transition-all hover:opacity-90 shadow-md"
            style={{ backgroundColor: "#e879a0" }}
          >
            Lihat Kamar Tersedia <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

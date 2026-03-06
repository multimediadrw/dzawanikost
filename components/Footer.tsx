import Link from "next/link";
import { Home, Phone, MapPin, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "#e879a0" }}
              >
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                Dzawani<span style={{ color: "#e879a0" }}>Kost</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Hunian kost nyaman, bersih, dan aman untuk mahasiswa dan pekerja.
              Kami menyediakan berbagai pilihan kamar dengan fasilitas lengkap
              dan harga terjangkau.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-gray-800 hover:bg-pink-500 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-gray-800 hover:bg-pink-500 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigasi</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Beranda" },
                { href: "/kamar", label: "Daftar Kamar" },
                { href: "/tentang", label: "Tentang Kami" },
                { href: "/kontak", label: "Kontak" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#e879a0" }} />
                <span>Jl. Contoh No. 123, Kota Anda, Indonesia</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "#e879a0" }} />
                <a href="tel:+6281234567890" className="hover:text-pink-400 transition-colors">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "#e879a0" }} />
                <a href="mailto:info@dzawanikost.com" className="hover:text-pink-400 transition-colors">
                  info@dzawanikost.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} DzawaniKost. Semua hak dilindungi.
          </p>
          <p className="text-xs text-gray-500">
            Dibuat dengan ❤️ untuk hunian terbaik Anda
          </p>
        </div>
      </div>
    </footer>
  );
}

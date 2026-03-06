"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/kamar", label: "Jelajahi Kamar" },
    { href: "/tentang", label: "Tentang Kami" },
  ];

  return (
    <>
      {/* Navbar floating pill - posisi absolute di atas hero */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 pt-5">
        {/* Pill card putih */}
        <div className="bg-white rounded-full shadow-lg px-6 py-3 flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="DzawaniKost Logo"
              width={36}
              height={36}
              className="object-contain"
            />
            <span className="text-lg font-bold text-gray-900">
              Dzawani<span style={{ color: "#e879a0" }}>Kost</span>
            </span>
          </Link>

          {/* Desktop Nav - Center */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isHighlight = link.href === "/kamar";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? "text-white"
                      : isHighlight
                      ? "border-2 font-semibold"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  style={
                    isActive
                      ? { backgroundColor: "#e879a0" }
                      : isHighlight
                      ? { borderColor: "#e879a0", color: "#e879a0" }
                      : {}
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right CTA - icon bulat seperti livioo */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/kontak"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700"
              title="Hubungi Kami"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-full text-gray-600 hover:bg-gray-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu - dropdown di bawah pill */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-lg mt-2 px-4 py-4 space-y-2 max-w-7xl mx-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                    isActive ? "text-white" : "text-gray-700 hover:bg-gray-50"
                  }`}
                  style={isActive ? { backgroundColor: "#e879a0" } : {}}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/kontak"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 rounded-full text-sm font-semibold text-white text-center mt-2"
              style={{ backgroundColor: "#e879a0" }}
            >
              Hubungi Kami
            </Link>
          </div>
        )}
      </nav>

      {/* Sticky navbar - muncul setelah scroll melewati hero, hanya untuk halaman non-home */}
      <div className="sticky top-0 z-40 hidden" id="sticky-nav-placeholder" />
    </>
  );
}

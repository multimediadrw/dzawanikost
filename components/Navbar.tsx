"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Home, Search, BookOpen, Info, Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/kamar", label: "Jelajahi Kamar" },
    { href: "/blog", label: "Blog" },
    { href: "/tentang", label: "Tentang Kami" },
  ];

  const bottomNavLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/kamar", label: "Kamar", icon: Search },
    { href: "/blog", label: "Blog", icon: BookOpen },
    { href: "/tentang", label: "Tentang", icon: Info },
    { href: "/kontak", label: "Kontak", icon: Phone },
  ];

  return (
    <>
      {/* ===== DESKTOP NAVBAR (hidden on mobile) ===== */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 pt-5 hidden md:block">
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
          <div className="flex items-center gap-1">
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

          {/* Right CTA */}
          <div className="flex items-center gap-3">
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
        </div>
      </nav>

      {/* ===== MOBILE TOP BAR (only on mobile) ===== */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="DzawaniKost Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="text-base font-bold text-gray-900">
              Dzawani<span style={{ color: "#e879a0" }}>Kost</span>
            </span>
          </Link>

          {/* WA Button */}
          <a
            href="https://wa.me/628112833993"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-sm"
            style={{ backgroundColor: "#25D366" }}
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat WA
          </a>
        </div>
      </nav>

      {/* ===== MOBILE BOTTOM NAVIGATION ===== */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-around px-2 py-1 pb-safe">
          {bottomNavLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl transition-all min-w-[56px]"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    isActive ? "shadow-sm" : ""
                  }`}
                  style={isActive ? { backgroundColor: "#fce7f3" } : {}}
                >
                  <Icon
                    className="w-5 h-5 transition-colors"
                    style={{ color: isActive ? "#e879a0" : "#9ca3af" }}
                  />
                </div>
                <span
                  className="text-[10px] font-medium transition-colors"
                  style={{ color: isActive ? "#e879a0" : "#9ca3af" }}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Spacer for mobile top bar */}
      <div className="md:hidden h-[60px]" />
    </>
  );
}

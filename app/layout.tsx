import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DzawaniKost - Hunian Nyaman & Terjangkau",
  description:
    "DzawaniKost menyediakan kamar kost nyaman, bersih, dan aman untuk mahasiswa dan pekerja. Berbagai pilihan kamar dengan fasilitas lengkap dan harga terjangkau.",
  keywords: ["kost", "kos", "hunian", "sewa kamar", "dzawanikost"],
  openGraph: {
    title: "DzawaniKost - Hunian Nyaman & Terjangkau",
    description:
      "Kamar kost nyaman, bersih, dan aman dengan fasilitas lengkap.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

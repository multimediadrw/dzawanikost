export interface Kamar {
  id: number;
  nama: string;
  tipe: string;
  harga: number;
  luas: number;
  lantai: number;
  tersedia: boolean;
  deskripsi: string;
  fasilitas: string[];
  gambar: string;
  gambarList: string[];
}

export const kamarList: Kamar[] = [
  {
    id: 1,
    nama: "Kamar Deluxe A",
    tipe: "Deluxe",
    harga: 1200000,
    luas: 16,
    lantai: 1,
    tersedia: true,
    deskripsi:
      "Kamar deluxe yang nyaman dengan pencahayaan alami yang baik. Dilengkapi dengan AC, kasur spring bed, dan kamar mandi dalam. Cocok untuk mahasiswa atau pekerja yang menginginkan kenyamanan maksimal.",
    fasilitas: [
      "AC",
      "Kasur Spring Bed",
      "Kamar Mandi Dalam",
      "Lemari Pakaian",
      "Meja Belajar",
      "WiFi",
      "Listrik",
      "Air",
    ],
    gambar: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    gambarList: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    ],
  },
  {
    id: 2,
    nama: "Kamar Deluxe B",
    tipe: "Deluxe",
    harga: 1200000,
    luas: 16,
    lantai: 1,
    tersedia: false,
    deskripsi:
      "Kamar deluxe dengan suasana yang tenang dan nyaman. Dilengkapi dengan semua fasilitas standar untuk kehidupan sehari-hari yang praktis.",
    fasilitas: [
      "AC",
      "Kasur Spring Bed",
      "Kamar Mandi Dalam",
      "Lemari Pakaian",
      "Meja Belajar",
      "WiFi",
      "Listrik",
      "Air",
    ],
    gambar: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&q=80",
    gambarList: [
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    ],
  },
  {
    id: 3,
    nama: "Kamar Superior A",
    tipe: "Superior",
    harga: 1500000,
    luas: 20,
    lantai: 2,
    tersedia: true,
    deskripsi:
      "Kamar superior yang lebih luas dengan view yang menyenangkan. Dilengkapi dengan fasilitas premium termasuk TV dan kulkas mini untuk kenyamanan ekstra.",
    fasilitas: [
      "AC",
      "Kasur Spring Bed",
      "Kamar Mandi Dalam",
      "Lemari Pakaian",
      "Meja Belajar",
      "WiFi",
      "Listrik",
      "Air",
      "TV",
      "Kulkas Mini",
    ],
    gambar: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
    gambarList: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    ],
  },
  {
    id: 4,
    nama: "Kamar Superior B",
    tipe: "Superior",
    harga: 1500000,
    luas: 20,
    lantai: 2,
    tersedia: true,
    deskripsi:
      "Kamar superior dengan desain modern dan elegan. Ruangan yang luas memberi kenyamanan lebih untuk beristirahat dan bekerja.",
    fasilitas: [
      "AC",
      "Kasur Spring Bed",
      "Kamar Mandi Dalam",
      "Lemari Pakaian",
      "Meja Belajar",
      "WiFi",
      "Listrik",
      "Air",
      "TV",
      "Kulkas Mini",
    ],
    gambar: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
    gambarList: [
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    ],
  },
  {
    id: 5,
    nama: "Kamar Premium",
    tipe: "Premium",
    harga: 2000000,
    luas: 25,
    lantai: 3,
    tersedia: true,
    deskripsi:
      "Kamar premium terluas dengan fasilitas lengkap dan mewah. Ideal untuk profesional yang menginginkan hunian berkualitas tinggi dengan semua kemudahan.",
    fasilitas: [
      "AC",
      "Kasur Spring Bed King",
      "Kamar Mandi Dalam",
      "Bathtub",
      "Lemari Pakaian",
      "Meja Kerja",
      "WiFi",
      "Listrik",
      "Air",
      "TV 32\"",
      "Kulkas",
      "Sofa",
      "Balkon",
    ],
    gambar: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    gambarList: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    ],
  },
  {
    id: 6,
    nama: "Kamar Standard",
    tipe: "Standard",
    harga: 800000,
    luas: 12,
    lantai: 1,
    tersedia: true,
    deskripsi:
      "Kamar standard yang bersih dan nyaman dengan harga terjangkau. Cocok untuk mahasiswa dengan budget terbatas namun tetap menginginkan kenyamanan.",
    fasilitas: [
      "Kipas Angin",
      "Kasur",
      "Kamar Mandi Luar",
      "Lemari Pakaian",
      "Meja Belajar",
      "WiFi",
      "Listrik",
      "Air",
    ],
    gambar: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
    gambarList: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    ],
  },
];

export const fasilitasUmum = [
  { icon: "wifi", label: "WiFi Gratis", deskripsi: "Internet cepat 24 jam" },
  { icon: "parking", label: "Parkir Luas", deskripsi: "Motor & mobil" },
  { icon: "security", label: "Keamanan 24 Jam", deskripsi: "CCTV & satpam" },
  { icon: "laundry", label: "Laundry", deskripsi: "Layanan cuci kiloan" },
  { icon: "kitchen", label: "Dapur Bersama", deskripsi: "Lengkap & bersih" },
  { icon: "mosque", label: "Mushola", deskripsi: "Fasilitas ibadah" },
];

export const formatHarga = (harga: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(harga);
};

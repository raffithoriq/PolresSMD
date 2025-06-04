export default function GaleriSection() {
  const galeri = [
    {
      imgSrc: "https://selasar.co/assets/images/news/2025/06/polresta-samarinda-raih-skor-citra-publik-9-dari-10-dinilai-aktif-humanis-dan-transparan-683ecc0c31431.jpeg",
      title: "Kantor Polisi",
      description: "Foto kantor polisi pusat dengan layanan lengkap dan ramah.",
    },
    {
      imgSrc: "https://polrestasamarinda.id/wp-content/uploads/2025/05/1000010555-1024x578.jpg",
      title: "Patroli",
      description: "Kendaraan patroli yang siap menjaga keamanan jalan raya.",
    },
    {
      imgSrc: "https://polrestasamarinda.id/wp-content/uploads/2025/05/IMG-20250528-WA0281-1024x768.jpg",
      title: "Sosialisasi Masyarakat",
      description: "Kegiatan polisi bersama masyarakat untuk edukasi keamanan.",
    },
    {
      imgSrc: "https://polrestasamarinda.id/wp-content/uploads/2025/06/1000356487-853x1024.jpg",
      title: "Event",
      description: "Tim Black List FDT 37 Polresta Samarinda Raih Prestasi di Kejurprov Road Race Piala Wali Kota Balikpapan 2025",
    },
    {
      imgSrc: "https://polrestasamarinda.id/wp-content/uploads/2025/06/1000354899-853x1024.jpg",
      title: "Upacara",
      description: "Upacara Hari Lahir Pancasila 2025",
    },
    {
      imgSrc: "https://polrestasamarinda.id/wp-content/uploads/2025/06/1000118173-1024x768.jpg",
      title: "Pengamanan",
      description: "POLSEK SUNGAI PINANG KAWAL PENGAMANAN UPACARA HARI LAHIR PANCASILA TAHUN 2025",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 mb-32 mt-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-28">
          Informasi Galeri
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galeri.map((item, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4 bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

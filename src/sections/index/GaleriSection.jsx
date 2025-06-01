export default function GaleriSection() {
  const galeri = [
    {
      imgSrc: "https://source.unsplash.com/400x300/?police,station",
      title: "Kantor Polisi",
      description: "Foto kantor polisi pusat dengan layanan lengkap dan ramah.",
    },
    {
      imgSrc: "https://source.unsplash.com/400x300/?police,car",
      title: "Patroli Jalan",
      description: "Kendaraan patroli yang siap menjaga keamanan jalan raya.",
    },
    {
      imgSrc: "https://source.unsplash.com/400x300/?community,police",
      title: "Sosialisasi Masyarakat",
      description: "Kegiatan polisi bersama masyarakat untuk edukasi keamanan.",
    },
    {
      imgSrc: "https://source.unsplash.com/400x300/?police,helmet",
      title: "Peralatan Polisi",
      description: "Berbagai perlengkapan yang digunakan oleh petugas polisi.",
    },
    {
      imgSrc: "https://source.unsplash.com/400x300/?police,team",
      title: "Tim Khusus",
      description: "Tim khusus polisi dalam penanganan kasus penting.",
    },
    {
      imgSrc: "https://source.unsplash.com/400x300/?police,building",
      title: "Gedung Pelayanan",
      description: "Fasilitas gedung pelayanan masyarakat di kepolisian.",
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

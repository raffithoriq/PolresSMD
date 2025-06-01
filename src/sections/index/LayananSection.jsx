import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayananSection() {
  const layanan = [
    {
      title: "Layanan SPKT",
      description: "Layanan Sentra Pelayanan Kepolisian Terpadu untuk pelaporan dan pengaduan masyarakat.",
      iconColor: "text-blue-600",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      link: "/layanan/sim",
    },
    {
      title: "Layanan SIM",
      description: "Informasi pembuatan, perpanjangan, dan syarat administrasi Surat Izin Mengemudi.",
      iconColor: "text-green-600",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6h13M3 6h18M3 12h6m-6 6h6" />
      ),
      link: "/layanan/sim",
    },
    {
      title: "Layanan BPKB dan STNK",
      description: "Pelayanan terkait dokumen kendaraan bermotor seperti BPKB dan STNK.",
      iconColor: "text-yellow-600",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h10M4 18h6" />
      ),
      link: "/layanan/sim",
    },
    {
      title: "Layanan SKCK",
      description: "Pembuatan dan perpanjangan Surat Keterangan Catatan Kepolisian.",
      iconColor: "text-red-500",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      ),
      link: "/layanan/sim",
    },
    {
      title: "Layanan SP2HP",
      description: "Informasi perkembangan hasil penyelidikan atas laporan Anda.",
      iconColor: "text-indigo-600",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      link: "/layanan/sim",
    },
    {
      title: "Izin Keramaian",
      description: "Permohonan dan informasi izin keramaian untuk kegiatan masyarakat.",
      iconColor: "text-pink-500",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      ),
      link: "/layanan/sim",
    },
    {
      title: "Pengawalan Jalan",
      description: "Layanan pengawalan untuk rombongan, kendaraan penting, dan event besar.",
      iconColor: "text-emerald-600",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18" />
      ),
      link: "/layanan/sim",
    },
    {
      title: "Pengamanan Objek Khusus",
      description: "Pengamanan untuk objek vital dan tempat kegiatan penting masyarakat.",
      iconColor: "text-purple-600",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 5h14v14H5z" />
      ),
      link: "/layanan/sim",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };


  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12 lg:px-24 mb-32 mt-16 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-20">
          Layanan Umum
        </h2>

        <Slider {...settings}>
          {layanan.map((item, index) => (
            <div key={index} className="px-4">
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.03] cursor-pointer h-60 relative mb-9">
                <div className={`${item.iconColor} mb-4`}>
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>

                {/* Tombol selengkapnya */}
                <div className="absolute bottom-6 left-6">
                  <a
                    href={item.link}
                    className="text-yellow-500 hover:text-black font-semibold transition-colors duration-200"
                  >
                    Selengkapnya
                  </a>
                </div>
              </div>
            </div>

          ))}
        </Slider>
      </div>
    </section>
  );
}

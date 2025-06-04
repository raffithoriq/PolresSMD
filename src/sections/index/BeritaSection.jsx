export default function InformasiBeritaSection() {
    const berita = [
        {
            id: 1,
            title: "Kapolresta Samarinda Pimpin Upacara Penghormatan Terakhir Alm. Aipda Yagung Trisyantho",
            date: "2025-06-04",
            summary:
                "Polresta Samarinda – Suasana Duka Menyelimuti Keluarga Besar Polresta Samarinda Polda Kalimantan Timur. Salah Satu.",
            link: "/loading",
            image: "images/foto/1.jpg",
        },
        {
            id: 2,
            title: "POLSEK PALARAN WUJUDKAN RASA AMAN MELALUI KEGIATAN KRYD",
            date: "2025-06-04",
            summary:
                "Guna terwujudnya stabilitas keamanan dan ketertiban di masyarakat polri dalam hal ini Polsek Palaran, Polresta Samarinda, Polda Kaltim selaku pelindung, pelayan dan pengayoman masyarakat selalu hadir melalui kegiatan patroli dalam rangka harkamtibmas.",
            link: "/loading",
            image: "images/foto/2.jpg",
        },
        {
            id: 3,
            title: "Si Propam Polresta Samarinda Melakukan Gaktibplin terhadap Personil",
            date: "2025-06-04",
            summary:
                "Polresta Samarinda — Di Halaman Mako Polresta Samarinda personel Seksi Profesi dan Pengamanan (Si Propam) Polresta Samarinda menggelar kegiatan Penegakan Ketertiban dan Disiplin (Gaktibplin) terhadap anggota Polresta Samarinda. Kegiatan ini dipimpin langsung oleh Kasi Propam Polresta Samarinda, AKP Sujatmiko Amron, S.H., dengan melibatkan sejumlah personel Propam. Rabu (04/06/2025).",
            link: "/loading",
            image: "images/foto/3.jpg",
        },
    ];

    return (
        <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24 mb-32 mt-24">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-20">
                    Berita terkini
                </h2>

                <div className="space-y-8">
                    {berita.map(({ id, title, date, summary, link, image }) => (
                        <article
                            key={id}
                            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row gap-6 min-h-[260px]"
                        >
                            <div className="w-full md:w-48 flex-shrink-0">
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-32 md:h-full rounded-lg object-cover"
                                    loading="lazy"
                                />
                            </div>

                            <div className="flex flex-col justify-between flex-1 h-full">
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[56px]">
                                        {title}
                                    </h3>
                                    <time
                                        dateTime={date}
                                        className="block text-sm text-gray-500 mb-3"
                                    >
                                        {new Date(date).toLocaleDateString("id-ID", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </time>
                                    <p className="text-gray-700 text-sm line-clamp-4 min-h-[88px]">
                                        {summary}
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <a
                                        href={link}
                                        className="text-yellow-500 font-semibold hover:text-black transition-colors duration-200"
                                    >
                                        Baca Selengkapnya
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

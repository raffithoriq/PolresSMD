export default function InformasiBeritaSection() {
    const berita = [
        {
            id: 1,
            title: "Patroli Malam Personil Polsek Sangkulirang Jaga Keamanan di Kantor Pos",
            date: "2025-06-03",
            summary:
                "Sangkulirang, 03 Juni 2025– Dalam upaya menjaga keamanan dan ketertiban masyarakat, personil Polsek Sangkulirang melaksanakan kegiatan patroli di kantor pos Kecamatan Sangkulirang pada malam hari. Patroli ini dilakukan untuk memastikan lingkungan sekitar tetap aman, terutama menjelang waktu pengiriman barang yang meningkat.",
            link: "/berita/1",
            image: "images/foto/1.jpg",
        },
        {
            id: 2,
            title: "Polres Kutim Permudah Layanan Pembuatan SKCK Bagi Masyarakat",
            date: "2025-06-03",
            summary:
                "Polres Kutai Timur terus meningkatkan kualitas pelayanan publik, salah satunya melalui kemudahan dalam proses pembuatan Surat Keterangan Catatan Kepolisian (SKCK). Pelayanan ini menjadi salah satu bentuk komitmen Polri dalam memberikan kemudahan dan kenyamanan bagi masyarakat yang membutuhkan dokumen pendukung untuk keperluan administrasi.",
            link: "/berita/2",
            image: "images/foto/2.jpg",
        },
        {
            id: 3,
            title: "Pengecekan Tahanan di Rutan Polres Kutim",
            date: "2025-05-30",
            summary:
                "Dalam rangka memastikan keamanan dan ketertiban di lingkungan rumah tahanan, personel Polres Kutai Timur melaksanakan pengecekan rutin terhadap para tahanan yang berada di Rutan Polres Kutim, Jumat (30/5/2025).",
            link: "/berita/3",
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

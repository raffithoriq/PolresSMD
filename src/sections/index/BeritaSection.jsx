export default function InformasiBeritaSection() {
    const berita = [
        {
            id: 1,
            title: "Berikan Penghormatan Terakhir, Polresta Samarinda Lakukan Upacara Pemakaman Aiptu Suwondo",
            date: "2025-05-30",
            summary:
                "Suasana Duka Menyelimuti Keluarga Besar Polresta Samarinda Polda Kalimantan Timur. Salah Satu Anggota Terbaik Mereka,…",
            link: "/berita/1",
            image: "images/foto/1.jpg",
        },
        {
            id: 2,
            title: "Jumat Berkah, Sat Samapta dan Bhayangkari Polresta Samarinda Bagikan Ratusan Nasi Kotak untuk Warga",
            date: "2025-05-30",
            summary:
                "SAMARINDA – Kepedulian terhadap sesama terus ditunjukkan oleh jajaran Satuan Samapta Polresta Samarinda bersama Bhayangkari…",
            link: "/berita/2",
            image: "images/foto/2.jpg",
        },
        {
            id: 3,
            title: "Patroli Dialogis Malam Hari, Sat Samapta Polsek KP Samarinda di Jl. P. Suriansyah Kota Samarinda",
            date: "2025-05-15",
            summary:
                "Polsek Kawasan Pelabuhan Samarinda – Kegiatan Patroli Dialogis dan Memberikan Himbauan Kamtibmas kepada pemuda pemudi…",
            link: "/berita/3",
            image: "images/foto/3.jpg",
        },
    ];

    return (
        <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24 mb-32 mt-24">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-28">
                    Berita terkini
                </h2>

                <div className="space-y-10">
                    {berita.map(({ id, title, date, summary, link, image }) => (
                        <article
                            key={id}
                            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row gap-6"
                        >
                            <img
                                src={image}
                                alt={title}
                                className="w-full md:w-48 h-32 md:h-auto rounded-lg object-cover flex-shrink-0"
                                loading="lazy"
                            />
                            <div className="flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
                                    <time
                                        dateTime={date}
                                        className="block text-sm text-gray-500 mb-4"
                                    >
                                        {new Date(date).toLocaleDateString("id-ID", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </time>
                                    <p className="text-gray-700">{summary}</p>
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

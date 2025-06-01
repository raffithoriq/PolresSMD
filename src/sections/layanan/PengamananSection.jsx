import React from 'react';
import Image from 'next/image';

const PengamananSection = () => {
    return (
        <section className="py-20 bg-white text-black">
            <div className="max-w-5xl mx-auto px-6">
                {/* Title */}
                <h2 className="text-4xl font-bold text-center mb-10">
                    Pengamanan Objek Khusus
                </h2>

                {/* Image */}
                <div className="mb-8">
                    <Image
                        src="/images/foto/pengamanan.jpg"
                        alt="Izin Keramaian"
                        width={1000}
                        height={600}
                        className="rounded-xl object-cover w-full h-auto shadow-md"
                    />
                </div>

                {/* Content */}
                <div className="space-y-6 text-justify leading-relaxed text-lg">
                    <p>
                        Sesuai dengan perintah perundangan, Polri berkewajiban untuk melaksanakan pengamanan obyek-obyek khusus. Dasar hukumnya adalah:
                    </p>

                    <ul className="list-disc pl-5 space-y-1">
                        <li>UU No. 2 Tahun 2002 tentang Kepolisian Negara Republik Indonesia</li>
                        <li>Perpres nomor 52 Tahun 2010 tentang Susunan Organisasi Dan Tata Kerja Kepolisian Negara Republik Indonesia</li>
                        <li>Keputusan Presiden RI No 63 Tahun 2004 tentang Pengamanan Obyek Vital Nasional</li>
                        <li>Perkap No 22 Tahun 2010 tentang Susunan Organisasi Dan Tata Kerja Pada Tingkat Kepolisian Daerah</li>
                        <li>Perkap No 23 Tahun 2010 Tentang Susunan Organisasi Dan Tata Kerja Pada Tingkat Kepolisian Resort Dan Sektor</li>
                        <li>Surat Keputusan Kapolri No.Pol : Skep/551/VIII/2003, Tanggal 12 Agustus 2003 tentang Petunjuk Pelaksanaan Pembinaan Pengamanan Obyek Khusus</li>
                        <li>Surat Keputusan Kapolri No.Pol : Skep/738/X/2005, Tanggal 13 Oktober 2005 tentang Sistem Pengamanan Obyek Vital Nasional</li>
                        <li>Direktif Kapolri No.Pol. : R/Dir/680/IX/2004 tentang Pengamanan Obyek Vital</li>
                    </ul>

                    <p>
                        Objek khusus adalah obyek yang karena kedudukan dan kepentingannya memerlukan perhatian dan tindakan pengamanan.
                    </p>

                    <p className="font-semibold">Objek khusus meliputi:</p>

                    <ul className="list-disc pl-5 space-y-1">
                        <li>
                            <strong>Obyek Vital</strong>, yaitu kawasan, tempat, bangunan dan usaha yang menyangkut harkat hidup orang banyak, kepentingan dan/atau sumber pendapatan besar negara yang memiliki potensi kerawanan dan dapat menggoyahkan stabilitas ekonomi, politik, dan keamanan bila terjadi gangguan keamanan
                        </li>
                        <li>
                            <strong>Obyek Wisata</strong>, yaitu tempat-tempat dan/atau kegiatan-kegiatan tertentu yang dikunjungi orang sehubungan dengan nilai-nilai sosial budaya atau kondisi alamnya.
                        </li>
                        <li>
                            <strong>Obyek Khusus Tertentu</strong>, seperti:
                            <ul className="list-disc pl-5 space-y-1 mt-2">
                                <li>Kantor bank/lembaga keuangan</li>
                                <li>Rumah sakit</li>
                                <li>Lembaga permasyarakatan</li>
                                <li>Terminal</li>
                                <li>Pasar tradisional</li>
                                <li>Hotel</li>
                                <li>Rumah ibadah</li>
                                <li>Kantor Media Massa</li>
                                <li>Mal</li>
                                <li>Dan lain-lain</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Objek Vital Nasional</strong>adalah kawasan/lokasi, bangunan/instalasi dan/atau usaha yang menyangkut hajat hidup orang banyak, kepentingan negara dan/atau sumber pendapatan negara yang bersifat strategis. Status obyek vital nasional harus ditetapkan berdasarkan keputusan menteri dan/atau kepala lembaga pemerintah non departemen. (Kepres Nomor 63 Tahun 2004 Pasal 3)
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default PengamananSection;

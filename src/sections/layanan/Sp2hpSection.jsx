import React from 'react';
import Image from 'next/image';

const Sp2hpSection = () => {
    return (
        <section className="py-20 bg-white text-black">
            <div className="max-w-5xl mx-auto px-6">
                {/* Title */}
                <h2 className="text-4xl font-bold text-center mb-10">
                    Surat Pemberitahuan Perkembangan Hasil Penyelidikan (SP2HP)
                </h2>

                {/* Image */}
                <div className="mb-8">
                    <Image
                        src="/images/foto/sp2hp.jpg"
                        alt="BPKB"
                        width={1000}
                        height={600}
                        className="rounded-xl object-cover w-full h-auto shadow-md"
                    />
                </div>

                {/* Content */}
                <div className="space-y-6 text-justify leading-relaxed text-lg">
                    <p>
                        <strong>SP2HP</strong> merupakan hak bagi pelapor. Dalam rangka menjamin akuntabilitas dan transparansi penyelidikan atau penyidikan, penyidik wajib memberikan SP2HP kepada pihak pelapor baik diminta atau tidak diminta secara berkala.
                    </p>

                    <p>
                        Berdasarkan <strong>Peraturan Kapolri Nomor 12 Tahun 2009</strong> tentang Pengawasan dan Pengendalian Penanganan Perkara Pidana, pasal 39 ayat 1 menyebutkan bahwa dalam rangka menjamin akuntabilitas dan transparansi penyidikan, penyidik wajib memberikan SP2HP kepada pelapor sekurang-kurangnya 1 kali setiap bulan.
                    </p>

                    <div>
                        <p className="font-semibold mb-2">SP2HP memuat informasi mengenai:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Pokok perkara</li>
                            <li>Tindakan penyidikan yang telah dilaksanakan dan hasilnya</li>
                            <li>Masalah atau kendala yang dihadapi dalam penyidikan</li>
                            <li>Rencana tindakan penyidikan selanjutnya</li>
                            <li>Himbauan atau penegasan kepada pelapor tentang hak dan kewajiban demi kelancaran penyidikan</li>
                        </ul>
                    </div>

                    <p>
                        SP2HP ditandatangani oleh Ketua Tim Penyidik dan diketahui oleh Pengawas Penyidik. Tembusannya wajib disampaikan kepada atasan langsung.
                    </p>

                    <p>
                        SP2HP adalah bentuk layanan kepolisian yang memberikan informasi kepada masyarakat mengenai perkembangan perkara. Ini memungkinkan masyarakat menilai transparansi dan kinerja pihak Kepolisian.
                    </p>

                    <div>
                        <p className="font-semibold mb-2">Kode SP2HP:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>A1</strong>: Perkembangan hasil penelitian laporan</li>
                            <li><strong>A2</strong>: Penyelidikan belum dapat ditindaklanjuti ke penyidikan</li>
                            <li><strong>A3</strong>: Penyelidikan akan ditingkatkan ke penyidikan</li>
                            <li><strong>A4</strong>: Perkembangan hasil penyidikan</li>
                            <li><strong>A5</strong>: SP3 (Surat Perintah Pemberhentian Penyelidikan)</li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-semibold mb-2">Interval Pemberian SP2HP:</p>
                        <p>SP2HP pertama diberikan dalam 3 hari sejak Laporan Polisi dibuat, memuat nama penyidik dan nomor kontak.</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Kasus ringan:</strong> hari ke-10, 20, dan 30</li>
                            <li><strong>Kasus sedang:</strong> hari ke-15, 30, 45, dan 60</li>
                            <li><strong>Kasus sulit:</strong> hari ke-15, 30, 45, 60, 75, dan 90</li>
                            <li><strong>Kasus sangat sulit:</strong> hari ke-20, 40, 60, 80, 100, dan 120</li>
                        </ul>
                        <p>Waktu dihitung sejak penyerahan berkas perkara pertama.</p>
                    </div>

                    <div>
                        <p className="font-semibold mb-2">Jika SP2HP Tidak Diberikan:</p>
                        <p>
                            Meski dalam <strong>Perkap No. 14 Tahun 2012</strong> tidak lagi mengatur waktu pemberian SP2HP, pelapor tetap berhak memintanya. Berdasarkan <strong>Pasal 11 ayat (1) huruf a Perkap No. 21 Tahun 2011</strong> juncto <strong>Pasal 12 huruf c Perkap No. 16 Tahun 2010</strong>, pelapor dapat mengajukan permohonan kepada kepolisian terkait untuk diberikan SP2HP.
                        </p>
                        <p>
                            Setiap penerbitan dan penyampaian SP2HP wajib ditandatangani oleh penyidik.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sp2hpSection;

import React from 'react';
import Image from 'next/image';

const KeramaianSection = () => {
    return (
        <section className="py-20 bg-white text-black">
            <div className="max-w-5xl mx-auto px-6">
                {/* Title */}
                <h2 className="text-4xl font-bold text-center mb-10">
                    Izin Keramaian
                </h2>

                {/* Image */}
                <div className="mb-8">
                    <Image
                        src="/images/foto/izinkeramaian.jpg"
                        alt="Izin Keramaian"
                        width={1000}
                        height={600}
                        className="rounded-xl object-cover w-full h-auto shadow-md"
                    />
                </div>

                {/* Content */}
                <div className="space-y-6 text-justify leading-relaxed text-lg">
                    <p>
                        Izin keramaian dimaksudkan untuk menjaga suasana yang kondusif bagi semua pihak. Kelancaran suatu acara keramaian pasti harus didukung dengan persiapan pengamanan yang pas. Pemberian izin dipertimbangkan dengan resiko-resiko yang mungkin timbul, kesiapan kuantitas personil, sarana dan prasarana Polri untuk antisipasinya.
                    </p>

                    <div>
                        <p className="font-semibold mb-2">IZIN KERAMAIAN</p>
                        <p><strong>Dasar:</strong></p>
                        <p>Juklap Kapolri No. Pol / 02 / XII / 95 tentang perizinan dan pemberitahuan kegiatan masyarakat.</p>
                        <p>Dalam hal ini kegiatan yang dimaksud adalah:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Pentas musik band / dangdut</li>
                            <li>Wayang Kulit</li>
                            <li>Ketoprak</li>
                            <li>Dan pertunjukan lain</li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-semibold mb-2">Persyaratan :</p>
                        <p>Izin keramaian yang mendatangkan massa 300 – 500 orang (Kecil)</p>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                            <li>Surat Keterangan dari kelurahan Setempat</li>
                            <li>Fotocopy Kartu Tanda Penduduk (KTP) yang punya Hajad sebanyak 1 (satu) Lembar</li>
                            <li>Fotocopy Kartu Keluarga (KK) yang punya hajad sebanyak 1 (satu) lembar</li>
                        </ul>
                        <p>Izin keramaian yang mendatangkan massa lebih dari 1000 orang (Besar)</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Surat Permohonan Izin Keramaian</li>
                            <li>Proposal kegiatan</li>
                            <li>Identitas penyelenggara / Penanggung Jawab</li>
                            <li>Izin Tempat berlangsungnya kegiatan</li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-semibold mb-2">IZIN KERAMAIAN DENGAN KEMBANG API</p>
                        <p><strong>Dasar:</strong></p>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                            <li>KUHP pasal 510 tentang Keramaian Umum.</li>
                            <li>Petunjuk pelaksanaan Kapolri No.Pol : Juklak / 29 / VII / 1991 Tgl 23 Juli 1991 tentang Pengawasan, Pengendalian dan Pengamanan bahan Peledak Non Organik ABRI.</li>
                            <li>Petunjuk lapangan Kapolri no. Pol : Juklap / 02 / XII / 1995 / Tentang Perijinan dan Pemberitahuan Kegiatan Masyarakat.</li>
                        </ul>
                        <p><strong>Persyaratan:</strong></p>
                        <p>Surat Permohonan dari Pemohon tentang pelaksanaan Pesta Kembang Api, yang mencakup:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Pesta Kembang api tersebut digunakan dalam acara apa</li>
                            <li>Jumlah dan Jenis Kembang api</li>
                            <li>Waktu / Durasi Penyalaan Kembang Api</li>
                            <li>Identitas Penyala Kembang Api</li>
                            <li>Identitas Penanggung jawab Kegiatan</li>
                            <li>Ijin Tempat Pelaksanaan Pesta Kembang Api</li>
                            <li>Rekomendasi dari Polsek setempat</li>
                            <li>Surat ijin Impor (asal – usul kembang api) yang didatangkan untuk kegiatan tersebut.</li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-semibold mb-2">PERIJINAN PENYAMPAIAN PENDAPAT DI MUKA UMUM</p>
                        <p><strong>Dasar:</strong></p>
                        <p>Undang – Undang No. 9 Th 1998 tentang Kemerdekaan Menyampaikan Pendapat di Muka Umum</p>
                        <p>Bentuk Penyampaian pendapat di muka umum :</p>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                            <li>Unjuk rasa / Demonstrasi</li>
                            <li>Pawai</li>
                            <li>Rapat Umum</li>
                            <li>Mimbar Bebas</li>
                        </ul>
                        <p><strong>Ketentuan</strong></p>
                        <p>
                            Penyampaian Pendapat di Muka Umum disampaikan di tempat terbuka dan tidak membawa yang dapat membahayakan keselamatan umum.<br />
                            Pembatalan pelaksanaan penyampaian pendapat di muka umum disampaikan secara tertulis selambat–selambatnya 24 jam sebelum pelaksanaan.<br />
                            Setelah menerima pemberitahuan tentang kegiatan penyamapain pendapat di Muka Umum Polri wajib:<br />
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                            <li>Memberikan surat tanda terima pemberitahuan</li>
                            <li>Melakukan koordinasi dengan penanggung jawab penyampaian pendapat di Muka Umum</li>
                            <li>Melakukan koordinasi dengan pimpinan, instansi / lembaga yang menjadi tujuan penyampaian pendapat</li>
                            <li>Mempersiapakan pengamanan tempat lokasi dan route yang dilalui.</li>
                            <li>Bertanggung Jawab untuk melindungi para peserta penyampaian pendapat di muka umum</li>
                            <li>Bertanggung jawab untuk menyelenggarakan Pengamanan.</li>
                        </ul>
                        <p><strong>Sanksi – sanksi yang diperoleh apabila tidak sesuai dengan ketentuan antara lain:</strong></p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Dibubarkan bila tidak memenuhi dengan ketentuan</li>
                            <li>Perbuatan melanggar hukum dikenakan sanksi hukuman sesuai dengan ketentuan Perundang–undangan yang berlaku.</li>
                            <li>Penanggung Jawab melakukan tindak pidana, dipidana sesuai dengan ketentuan Perundang–undangan yang berlaku ditambah sepertiga dari pidana pokok.</li>
                            <li>Barang siapa dengan kekerasan / ancaman dalam penyampaian pendapat di muka umum dipidana penjara paling lama 1 (satu) Tahun.</li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-semibold mb-2">Persyaratan:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Maksud dan tujuan</li>
                            <li>Lokasi dan rute</li>
                            <li>Waktu dan lama Pelaksanaan</li>
                            <li>Bentuk</li>
                            <li>Penanggung jawab / Korlap</li>
                            <li>Nama dan alamat organisasi, kelompok dan perorangan</li>
                            <li>Alat peraga yang digunakan</li>
                            <li>Jumlah peserta</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KeramaianSection;

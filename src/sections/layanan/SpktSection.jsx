import React from 'react';
import Image from 'next/image';

const SpktSection = () => {
  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-10">
          Sentra Pelayanan Kepolisian Terpadu (SPKT)
        </h2>

        {/* Image */}
        <div className="mb-8">
          <Image
            src="/images/foto/spkt.jpg"
            alt="SPKT"
            width={1000}
            height={600}
            className="rounded-xl object-cover w-full h-auto shadow-md"
          />
        </div>

        {/* Paragraphs */}
        <div className="space-y-6 text-justify leading-relaxed text-lg">
          <p>
            SPKT bertugas memberikan pelayanan kepolisian kepada masyarakat dalam bentuk penerimaan
            dan penanganan pertama laporan/pengaduan, pelayanan bantuan/pertolongan kepolisian,
            bersama fungsi terkait mendatangi TKP untuk melaksanakan kegiatan pengamanan dan olah
            TKP sesuai ketentuan hukum dan peraturan yang berlaku.
          </p>

          <div>
            <p className="font-semibold mb-2">SPKT dapat melayani:</p>
            <ul className="list-disc list-outside pl-5 space-y-1">
              <li>Laporan Polisi (LP)</li>
              <li>Surat Tanda Terima Laporan Polisi (STTPLP)</li>
              <li>Surat Pemberitahuan Perkembangan Hasil Penyidikan (SP2HP)</li>
              <li>Surat Keterangan Tanda Lapor Kehilangan (SKTLK)</li>
              <li>Surat Keterangan Catatan Kepolisian (SKCK)</li>
              <li>Surat Tanda Terima Pemberitahuan (STTP)</li>
              <li>Surat Keterangan Lapor Diri (SKLD)</li>
              <li>Surat Izin Keramaian</li>
              <li>Surat Rekomendasi Izin Usaha Jasa Pengamanan</li>
              <li>Surat Izin Mengemudi (SIM)</li>
              <li>Surat Tanda Nomor Kendaraan Bermotor (STNK)</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Fungsi SPKT lainnya:</p>
            <ul className="list-disc list-outside pl-5 space-y-2">
              <li>
                Pengkoordinasian dan pemberian bantuan serta pertolongan, antara lain penanganan TKP
                (Tempat Kejadian Perkara), meliputi TPTKP (Tindakan Pertama di TKP) dan pengolahan TKP,
                turjawali (pengaturan dan pengawalan lalu lintas), serta pengamanan.
              </li>
              <li>
                Pelayanan masyarakat melalui telepon, pesan singkat, faksimili, internet (media sosial),
                dan surat.
              </li>
              <li>
                Penyajian informasi umum yang berkaitan dengan kepentingan masyarakat sesuai dengan
                ketentuan peraturan perundang-undangan.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpktSection;

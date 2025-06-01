import React from 'react';
import Image from 'next/image';

const SimSection = () => {
  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-10">
          Buku Pemilik Kendaraan Bermotor (BPKB)
        </h2>

        {/* Image */}
        <div className="mb-8">
          <Image
            src="/images/foto/bpkb.jpg"
            alt="BPKB"
            width={1000}
            height={600}
            className="rounded-xl object-cover w-full h-auto shadow-md"
          />
        </div>

        {/* Content */}
        <div className="space-y-6 text-justify leading-relaxed text-lg">
          <p>
            <strong>BPKB</strong> adalah Buku yang dikeluarkan/diterbitkan oleh Satuan Lalu Lintas Polri sebagai bukti kepemilikan kendaraan bermotor. BPKB berfungsi sebagai Surat Bukti Kepemilikan Kendaraan Bermotor. Penerbitan BPKB dilaksanakan oleh Satuan Lalu Lintas Kepolisian Negara Republik Indonesia. Spesifikasi teknis dan pengadaan BPKB ditetapkan oleh Kepolisian Negara Republik Indonesia. Bersamaan dengan pendaftaran BPKB diberikan Surat Tanda Nomor Kendaraan Bermotor dan Tanda Nomor Kendaraan Bermotor (STNK).
          </p>

          <p>
            <strong>Tujuan:</strong> Penyelenggaraan Registrasi dan Identifikasi Kendaraan Bermotor dalam bentuk BPKB adalah untuk kepentingan pelaksanaan tugas-tugas Kepolisian Negara Republik Indonesia dalam menciptakan keamanan dan ketertiban masyarakat, terutama yang berkaitan dengan penyelidikan/penyidikan pada kasus pelanggaran dan kejahatan yang berkaitan dengan kendaraan bermotor.
          </p>

          <p>
            Perkembangan kejahatan semakin canggih dan kompleks, sehingga mengharuskan Polri mengerahkan segenap kekuatan untuk menanggulangi, antara lain melalui Registrasi dan Identifikasi lalulintas/pendaftaran Kendaraan Bermotor.
          </p>

          <p>
            Untuk itu perlu diambil langkah-langkah guna menyamakan persepsi dan tindakan dalam proses penerbitan BPKB terutama mekanisme dan prosedur penerbitan BPKB.
          </p>

          <div>
            <p className="font-semibold mb-2">Dasar Hukum:</p>
            <ul className="list-disc list-outside pl-5 space-y-1">
              <li>Undang-undang RI No. 2 Tahun 2002 tentang Kepolisian Negara Republik Indonesia</li>
              <li>Undang-undang RI No. 22 Tahun 2009 tentang Lalu Lintas dan Angkutan Jalan</li>
              <li>Inpres RI No. 5 Tahun 2004 tentang Percepatan Pemberantasan Korupsi</li>
              <li>PP No. 50 Tahun 2010 tentang Jenis dan Tarif PNBP di Kepolisian</li>
              <li>Kep Menpan RI No. 63/2003, 25/2004, dan 26/2004 tentang pelayanan publik</li>
              <li>Surat Telegram Dirlantas Polri STR/14/II/2007</li>
              <li>Surat Telegram Kababinkam Polri ST/175/X/2007</li>
              <li>Rencana kerja Ditlantas Polda Riau Tahun 2010 bidang Regident</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Fungsi dan Peranan BPKB:</p>
            <ul className="list-disc list-outside pl-5 space-y-1">
              <li>Menjadi tanda pengenal kendaraan bermotor yang sah</li>
              <li>Dokumen penting dan disamakan dengan Certificate of Ownership</li>
              <li>Meningkatkan daya guna administrasi dan public service</li>
              <li>Alat pengawasan terhadap pemasukan keuangan negara non-pajak</li>
              <li>Dapat dijadikan jaminan dalam pinjam-meminjam</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Prosedur dan Persyaratan:</p>
            <p><strong>1. Surat Keterangan Kehilangan STNK (Status BPKB Leasing):</strong></p>
            <ul className="list-disc list-outside pl-5">
              <li>Formulir permohonan</li>
              <li>Laporan Polisi kehilangan STNK</li>
              <li>Cek Fisik kendaraan yang sudah dilegalisir</li>
              <li>Fotokopi BPKB dan legalisir dari Leasing</li>
              <li>Surat keterangan dari Leasing</li>
              <li>Identitas pemilik</li>
            </ul>

            <p><strong>2. Surat Keterangan Asal Usul BPKB Hilang:</strong></p>
            <ul className="list-disc list-outside pl-5">
              <li>Formulir permohonan</li>
              <li>Laporan Polisi kehilangan BPKB</li>
              <li>Cek fisik yang sudah dilegalisir</li>
              <li>Kliping koran di dua media massa</li>
              <li>Surat keterangan dari Reskrim</li>
              <li>Pemblokiran BPKB (cek bank dup)</li>
            </ul>

            <p><strong>3. Ralat BPKB:</strong></p>
            <ul className="list-disc list-outside pl-5">
              <li>BPKB yang akan diralat</li>
              <li>Faktur pemilik</li>
              <li>STNK asli</li>
              <li>Surat keterangan ralat dokumen dari yang berwenang</li>
            </ul>

            <p><strong>4. Penghidupan BPKB Asli Timbul Duplikat:</strong></p>
            <ul className="list-disc list-outside pl-5">
              <li>BPKB asli dan duplikat</li>
              <li>Cek fisik kendaraan</li>
              <li>STNK atas nama pemilik sekarang</li>
              <li>Surat permohonan penghidupan BPKB bermaterai</li>
            </ul>

            <p><strong>5. Penerbitan BPKB Duplikat:</strong></p>
            <ul className="list-disc list-outside pl-5">
              <li>Laporan Polisi kehilangan BPKB (min. tingkat Polsek)</li>
              <li>KTP (perorangan)</li>
              <li>Salinan akta pendirian & surat domisili (badan hukum)</li>
              <li>Surat kuasa (instansi pemerintah / badan hukum)</li>
              <li>Surat pernyataan BPKB hilang bermaterai</li>
              <li>Iklan kehilangan di media cetak 3 kali berturut-turut</li>
              <li>Surat keterangan dari Reskrim</li>
              <li>Sket dari bank bahwa tidak dalam status jaminan</li>
              <li>Cek fisik kendaraan (tingkat Polda)</li>
              <li>Fotokopi STNK</li>
              <li>Pemilik hadir untuk foto dan scan KTP</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimSection;

import React from 'react';
import Image from 'next/image';

const SKCKSection = () => {
  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-10">
          Surat Keterangan Catatan Kepolisian (SKCK)
        </h2>

        {/* Image */}
        <div className="mb-8">
          <Image
            src="/images/foto/skck.jpg"
            alt="SKCK"
            width={1000}
            height={600}
            className="rounded-xl object-cover w-full h-auto shadow-md"
          />
        </div>

        {/* Content */}
        <div className="space-y-6 text-justify leading-relaxed text-lg">
          <p>
            <strong>Surat Keterangan Catatan Kepolisian (SKCK)</strong>, sebelumnya dikenal sebagai Surat Keterangan Kelakuan Baik (SKKB), adalah surat keterangan yang diterbitkan oleh Polri yang berisikan catatan kejahatan seseorang. Dahulu, surat ini hanya diberikan kepada yang tidak/belum pernah tercatat melakukan tindakan kejahatan hingga tanggal diterbitkannya.
          </p>

          <p>
            SKCK adalah surat resmi dari POLRI melalui fungsi Intelkam kepada pemohon/warga masyarakat, diterbitkan berdasarkan hasil penelitian biodata dan catatan Kepolisian tentang yang bersangkutan. (Vide: Peraturan Kapolri Nomor 18 Tahun 2014)
          </p>

          <p>
            <strong>Masa Berlaku:</strong> SKCK berlaku selama 6 (enam) bulan sejak tanggal diterbitkan. Bila masa berlaku habis, SKCK dapat diperpanjang.
          </p>

          <div>
            <p className="font-semibold mb-2">Tata Cara Mendapatkan SKCK:</p>
            <p className="font-semibold">1. Membuat SKCK Baru:</p>
            <ul className="list-disc list-outside pl-5 space-y-1">
              <li>Surat Pengantar dari Kelurahan sesuai domisili</li>
              <li>Fotokopi KTP/SIM sesuai domisili</li>
              <li>Fotokopi Kartu Keluarga</li>
              <li>Fotokopi Akta Kelahiran/Kenal Lahir</li>
              <li>Pas Foto berwarna ukuran 4×6 sebanyak 6 lembar</li>
              <li>Mengisi Formulir Daftar Riwayat Hidup</li>
              <li>Pengambilan Sidik Jari oleh petugas</li>
            </ul>

            <p className="font-semibold mt-4">2. Memperpanjang Masa Berlaku SKCK:</p>
            <ul className="list-disc list-outside pl-5 space-y-1">
              <li>SKCK lama yang asli/legalisir (maks. kadaluarsa 1 tahun)</li>
              <li>Fotokopi KTP/SIM</li>
              <li>Fotokopi Kartu Keluarga</li>
              <li>Fotokopi Akta Kelahiran/Kenal Lahir</li>
              <li>Pas Foto berwarna ukuran 4×6 sebanyak 3 lembar</li>
              <li>Mengisi Formulir Perpanjangan SKCK</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Catatan:</p>
            <ul className="list-disc list-outside pl-5 space-y-1">
              <li>Polsek tidak menerbitkan SKCK untuk keperluan melamar PNS/CPNS atau pembuatan visa</li>
              <li>SKCK harus diterbitkan oleh Polsek/Polres sesuai dengan alamat di KTP/SIM</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">SKCK Online:</p>
            <p>
              Polri menyediakan layanan pendaftaran SKCK secara online. Pemohon dapat mengunggah dokumen dan mengisi formulir secara digital sesuai dengan urutan yang ditentukan.
            </p>
            <p className="mt-2">
              <a
                href="https://skck.polri.go.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Klik di sini untuk informasi dan pendaftaran online
              </a>
            </p>
          </div>

          <div>
            <p className="font-semibold mb-2">Biaya Pembuatan SKCK:</p>
            <p>
              Berdasarkan:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-1">
              <li>UU RI No. 20 Tahun 1997 tentang PNBP</li>
              <li>UU RI No. 2 Tahun 2002 tentang Kepolisian Negara RI</li>
              <li>PP RI No. 50 Tahun 2010 dan PP No. 60 Tahun 2016</li>
              <li>Surat Telegram Kapolri ST/1928/VI/2010</li>
            </ul>
            <p className="mt-2">
              Biaya resmi pembuatan SKCK adalah <strong>Rp30.000</strong> dan dibayarkan kepada petugas POLRI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SKCKSection;

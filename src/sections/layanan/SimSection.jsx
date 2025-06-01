import React from 'react';
import Image from 'next/image';

const SimSection = () => {
  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-10">
          Surat Izin Mengemudi (SIM)
        </h2>

        {/* Image */}
        <div className="mb-8">
          <Image
            src="/images/foto/sim.jpg"
            alt="SPKT"
            width={1000}
            height={600}
            className="rounded-xl object-cover w-full h-auto shadow-md"
          />
        </div>

        {/* Paragraphs */}
        <div className="space-y-6 text-justify leading-relaxed text-lg">
          <p>
            SIM (Surat Izin Mengemudi) adalah bukti registrasi dan identifikasi yang diberikan oleh Polri kepada seseorang yang telah memenuhi persyaratan administrasi, sehat jasmani dan rohani, memahami peraturan lalu lintas dan trampil mengemudikan kendaraan bermotor.
          </p>

          {/* Dasar Hukum */}
          <div>
            <p className="font-semibold mb-2">Dasar Hukum:</p>
            <ul className="list-disc list-outside pl-5 space-y-1">
              <li>UU No. 2 Tahun 2002</li>
              <li>Pasal 14 ayat (1) b</li>
              <li>Pasal 15 ayat (2) c</li>
              <li>Peraturan Pemerintah No. 44 / 1993 Pasal 216</li>
            </ul>
          </div>

          {/* Fungsi dan Peranan */}
          <div>
            <p className="font-semibold mb-2">Fungsi dan Peranan:</p>
            <ul className="list-disc list-outside pl-5 space-y-1">
              <li>Sebagai sarana identifikasi / jati diri seseorang</li>
              <li>Sebagai alat bukti</li>
              <li>Sebagai sarana upaya paksa</li>
              <li>Sebagai sarana pelayanan masyarakat</li>
            </ul>
          </div>

          {/* Kewajiban Memiliki SIM */}
          <p>
            Setiap pengemudi kendaraan bermotor wajib memiliki SIM. Peraturan ini tercantum pada Pasal 18 ayat (1) UU No. 14 Tahun 1992 tentang Lalu Lintas dan Angkutan Jalan, bahwa setiap pengemudi kendaraan bermotor di wilayah Indonesia wajib memiliki Surat Izin Mengemudi (SIM).
          </p>

          {/* Penggunaan Golongan SIM */}
          <div>
            <p className="font-semibold mb-2">Penggunaan Golongan SIM:</p>
            <p className="mb-2">Pasal 211 ayat (2) PP No. 44 Tahun 1993</p>
            <ul className="list-disc list-outside pl-5 space-y-2">
              <li>
                <strong>Golongan A:</strong> untuk mengemudikan mobil penumpang, mobil bus dan mobil barang yang mempunyai jumlah berat yang diperbolehkan tidak lebih dari 3.500 kilogram;
              </li>
              <li>
                <strong>Golongan B I:</strong> untuk mengemudikan mobil bus dan mobil barang yang mempunyai jumlah berat yang diperbolehkan lebih dari 3.500 kilogram;
              </li>
              <li>
                <strong>Golongan B II:</strong> untuk mengemudikan traktor atau kendaraan bermotor dengan menarik kereta tempelan atau gandengan berat yang diperbolehkan untuk kereta tempelan atau kereta gandengan lebih dari 1.000 kilogram;
              </li>
              <li>
                <strong>Golongan C:</strong> untuk mengemudikan sepeda motor yang dirancang mampu mencapai kecepatan lebih dari 40 kilometer per jam;
              </li>
              <li>
                <strong>Golongan D:</strong> untuk mengemudikan sepeda motor yang dirancang dengan kecepatan tidak lebih dari 40 kilometer per jam.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimSection;

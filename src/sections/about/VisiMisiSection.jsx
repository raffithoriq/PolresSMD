import React from 'react';
import { Lightbulb, Target } from 'lucide-react';

const VisiMisiSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Visi & Misi Polri</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Komitmen Polresta Samarinda dalam menjaga keamanan dan memberikan pelayanan terbaik kepada seluruh masyarakat Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* VISI */}
          <div className="bg-stone-950 rounded-2xl shadow-lg p-8 transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="flex items-center mb-5">
              <Target className="text-blue-600 w-8 h-8 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Visi</h3>
            </div>
            <p className="text-white text-base leading-relaxed">
              Tergelarnya Polisi yang dipercaya masyarakat disemua lini Pelayanan masyarakat disetiap waktu dalam mewujudkan Kamdagri dan penegakan hukum searah dengan hasil pembangunan yang berwawasan dengan keamanan.
            </p>
          </div>

          {/* MISI */}
          <div className="bg-stone-950 rounded-2xl shadow-lg p-8 transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="flex items-center mb-5">
              <Lightbulb className="text-yellow-500 w-8 h-8 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Misi</h3>
            </div>
            <ul className="list-disc list-outside text-white space-y-3 text-base pl-6">
              <li>
                Laksanakan deteksi dini dan peringatan dini melalui kegiatan penyelidikan, pengamanan dan penggalangan.
              </li>
              <li>
                Memberikan perlindungan, pengayoman dan pelayanan masyarakat secara mudah, responsif dan tidak diskriminatif.
              </li>
              <li>
                Menjaga keamanan, ketertiban dan kelancaran lalu lintas untuk menjamin keselamatan dan kelancaran arus orang dan barang.
              </li>
              <li>
                Mengembangkan perpolisian masyarakat yang berbasis pada masyarakat yang patuh hukum.
              </li>
              <li>
                Mengelola secara profesional, transparan, akuntabel dan internal seluruh sumber daya Polri guna mendukung operasional tugas Polri.
              </li>
              <li>
                Menegakkan hukum secara profesional, obyektif, proporsional, transparan dan akuntabel untuk menjamin kepastian hukum dan rasa keadilan dengan mengedepankan aspek pencegahan, dialogis dalam pemecahan konflik, pendekatan HAM serta memperhatikan aspek manusiawi para pelaku kejahatan sebelumnya, selama dan sesudah peradilan dijalankan.
              </li>
              <li>
                Melakukan koordinasi dan menjalin kerjasama dengan TNI, Pemkot Samarinda, Pemprov Kaltim, DPRD, unsur criminal justice system, serta instansi terkait lainnya dalam menyelesaikan berbagai permasalahan yang terjadi.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisiSection;

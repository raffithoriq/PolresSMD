export default function VisiMisiSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-24 mb-32 mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-28">
          Visi & Misi Kami
        </h2>

        <div className="flex flex-col space-y-10 md:space-y-0 md:flex-col">
          {/* VISI - di atas */}
          <div className="bg-black p-8 rounded-2xl shadow-md transition-all duration-300 ease-in-out
            hover:shadow-2xl hover:bg-gradient-to-r  hover:scale-[1.03] cursor-pointer mb-11"
          >
            <h3 className="text-2xl font-semibold text-yellow-600 mb-4">Visi</h3>
            <p className="text-amber-50 leading-relaxed">
              Tergelarnya Polisi yang dipercaya masyarakat disemua lini Pelayanan masyarakat disetiap waktu dalam mewujudkan Kamdagri dan penegakan hukum searah dengan hasil pembangunan yang berwawasan dengan keamanan.
            </p>
          </div>

          {/* MISI - di bawah */}
          <div className="bg-black p-8 rounded-2xl shadow-md transition-all duration-300 ease-in-out
            hover:shadow-2xl hover:bg-gradient-to-r  hover:scale-[1.03] cursor-pointer"
          >
            <h3 className="text-2xl font-semibold text-yellow-600 mb-4">Misi</h3>
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
}

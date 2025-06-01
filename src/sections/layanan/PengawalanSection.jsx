import React from 'react';
import Image from 'next/image';

const PengawalanSection = () => {
    return (
        <section className="py-20 bg-white text-black">
            <div className="max-w-5xl mx-auto px-6">
                {/* Title */}
                <h2 className="text-4xl font-bold text-center mb-10">
                    Pengawalan Jalan
                </h2>

                {/* Image */}
                <div className="mb-8">
                    <Image
                        src="/images/foto/pengawalanjalan.jpg"
                        alt="Izin Keramaian"
                        width={1000}
                        height={600}
                        className="rounded-xl object-cover w-full h-auto shadow-md"
                    />
                </div>

                {/* Content */}
                <div className="space-y-6 text-justify leading-relaxed text-lg">
                    <p>
                        Pada dasarnya menggunakan sarana dan prasana jalan untuk keperluan berlalu lintas adalah hak asasi setiap orang. Semua orang mempunyai hak yang sama untuk menggunakan jalan untuk berlalu lintas. Tidak ada seorang pun mempunyai hak untuk diutamakan, kecuali didasarkan pada peraturan perundang-undangan yang berlaku. Peraturan perundang-undangan yang ada memberikan peluang bagi orang tertentu atau kendaraan yang digunakan bagi keperluan tertentu mendapatkan prioritas menggunakan jalan untuk berlalu lintas. Hak utama itu diatur dalam Peraturan Pemerintah (PP) Nomor 43 Tahun 1993.
                    </p>

                    <p>
                        Dalam Pasal 65 ayat 1 disebutkan, pemakai jalan wajib mendahulukan sesuai urutan prioritas sebagai berikut:
                    </p>

                    <ul className="list-disc pl-5 space-y-1">
                        <li>Kendaraan pemadam kebakaran yang sedang melaksanakan tugas</li>
                        <li>Ambulans yang mengangkut orang sakit</li>
                        <li>Kendaraan untuk memberi pertolongan pada kecelakaan lalu lintas</li>
                        <li>Kendaraan Kepala Negara (Presiden dan Wakil Presiden) atau Pemerintah Asing yang menjadi tamu negara</li>
                        <li>Iring-iringan pengantar jenazah</li>
                        <li>Konvoi, pawai atau kendaraan orang cacat</li>
                        <li>Kendaraan yang penggunaannya untuk keperluan khusus atau mengangkut barang-barang khusus.</li>
                    </ul>

                    <p>
                        Semua kendaraan tersebut di atas wajib didahulukan dalam berlalu lintas. Kendaraan yang mendapatkan prioritas tersebut, berdasarkan ayat 2 Pasal 65 PP diatas harus disertai dengan peng-awalan petugas yang berwenang atau dilengkapi dengan isyarat atau tanda-tanda lain.
                    </p>

                    <p>
                        Dalam ayat 3 ditegaskan lagi, petugas yang berwenang melakukan pengamanan apabila mengetahui adanya pemakai jalan yang diprioritaskan tersebut.
                    </p>

                    <p>
                        Dalam ayat 4 ditambahkan, perintah atau larangan yang dinyatakan dengan alat pemberi isyarat lalu-lintas tentang isyarat berhenti tidak diberlakukan kepada kendaraan-kendaraan sebagaimana dimaksud dalam ayat 1 huruf “a” sampai dengan “e”.
                    </p>

                    <h3 className="font-semibold">Kewenangan Pengawalan Jalan oleh Polri</h3>
                    <p>
                        Esensi dari pengawalan tidak lain memang memberikan pengamanan, baik terhadap kendaraan yang dikawal, maupun pengguna jalan lain yang berada di sekitar kendaraan yang dikawal. Karena menyangkut pengamanan, pihak yang paling berwenang adalah POLRI. Karena pengamanan adalah bagian dari tugas pokok Polri.
                    </p>

                    <p>
                        Dalam Pasal 14 ayat 1 huruf “a” UU Nomor 2 tahun 2002 tentang Kepolisian Negara Republik Indonesia disebutkan, dalam melaksanakan tugas pokoknya, Polri bertugas melaksanakan pengaturan, penjagaan, pengawalan, dan patroli terhadap kegiatan masyarakat dan pemerintah sesuai kebutuhan.
                    </p>

                    <h3 className="font-semibold">Konsekuensi Pengguna Jalan Lainnya</h3>
                    <p>
                        Bila terdapat tindakan pengawalan jalan, maka menjadi kewajiban kepada pengguna jalan lain untuk memberikan prioritas kepada kendaraan yang dikawal.
                    </p>

                    <p>
                        Dalam Pasal 34 ayat 1 PP Nomor 43 Tahun 1993 ditegaskan bahwa dalam keadaan tertentu petugas Kepolisian Negara Republik Indonesia dapat melakukan tindakan:
                    </p>

                    <ul className="list-disc pl-5 space-y-1">
                        <li>Memberhentikan arus lalu lintas dan/atau pemakai jalan tertentu</li>
                        <li>Memerintahkan pemakai jalan untuk jalan terus</li>
                        <li>Mempercepat arus lalu lintas</li>
                        <li>Memperlambat arus lalu lintas</li>
                        <li>Mengubah arah arus lalu lintas</li>
                    </ul>

                    <p>
                        Dalam Pasal 34 Ayat 2 PP Nomor 43 Tahun 1993 juga ditekankan, pemakai jalan wajib mematuhi perintah yang diberikan oleh petugas polisi. Pada ayat 2 dipertegas lagi, perintah yang diberikan oleh petugas polisi sebagaimana dimaksud dalam ayat 1, wajib didahulukan daripada perintah yang diberikan oleh alat pemberi isyarat lalu lintas.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PengawalanSection;

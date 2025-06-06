import React from 'react';
import Image from 'next/image';

const sejarahList = [
    {
        title: 'Zaman Kerajaan',
        image: '/images/foto/bhayangkara.jpg',
        description:
            'Pada zaman Kerajaan Majapahit patih Gajah Mada membentuk pasukan pengamanan yang disebut dengan Bhayangkara yang bertugas melindungi raja dan kerajaan.',
    },
    {
        title: 'Masa Kolonial Belanda',
        image: '/images/foto/kolonial.jpg',
        description:
            'Pada masa kolonial Belanda, pembentukan pasukan keamanan diawali oleh pembentukan pasukan-pasukan jaga yang diambil dari orang-orang pribumi untuk menjaga aset dan kekayaan orang-orang Eropa di Hindia Belanda pada waktu itu. Pada tahun 1867 sejumlah warga Eropa di Semarang, merekrut 78 orang pribumi untuk menjaga keamanan mereka. ewenang operasional kepolisian ada pada residen yang dibantu asisten residen.Rechts politie dipertanggungjawabkan pada procureur generaal(jaksa agung).Pada masa Hindia Belanda terdapat bermacam- macam bentuk kepolisian, seperti veld politie(polisi lapangan), stands politie(polisi kota), cultur politie(polisi pertanian), bestuurs politie(polisi pamong praja), dan lain - lain. Sejalan dengan administrasi negara waktu itu, pada kepolisian juga diterapkan pembedaan jabatan bagi bangsa Belanda dan pribumi.Pada dasarnya pribumi tidak diperkenankan menjabat hood agent(bintara), inspekteur van politie, dan commisaris van politie.Untuk pribumi selama menjadi agen polisi diciptakan jabatan seperti mantri polisi, asisten wedana, dan wedana polisi. Kepolisian modern Hindia Belanda yang dibentuk antara tahun 1897 - 1920 adalah merupakan cikal bakal dari terbentuknya Kepolisian Negara Republik Indonesia saat ini.',
    },
    {
        title: 'Masa Pendudukan Jepang',
        image: '/images/foto/jepang.jpg',
        description:
            'Pada masa ini Jepang membagi wiliyah kepolisian Indonesia menjadi Kepolisian Jawa dan Madura yang berpusat di Jakarta, Kepolisian Sumatera yang berpusat di Bukittinggi, Kepolisian wilayah Indonesia Timur berpusat di Makassar dan Kepolisian Kalimantan yang berpusat di Banjarmasin. Tiap-tiap kantor polisi di daerah meskipun dikepalai oleh seorang pejabat kepolisian bangsa Indonesia, tapi selalu didampingi oleh pejabat Jepang yang disebut sidookaan yang dalam praktik lebih berkuasa dari kepala polisi.',
    },
    {
        title: 'Awal Kemerdekaan (1945–1950)',
        image: '/images/foto/awal.png',
        description:
            'Setelah Jepang menyerah pada 1945, kepolisian Indonesia tetap bertugas dan pada 19 Agustus 1945 dibentuk Badan Kepolisian Negara (BKN). Pada 21 Agustus 1945, Polisi Mochammad Jassin memproklamasikan Pasukan Polisi Republik Indonesia untuk melucuti senjata Jepang dan membangkitkan semangat perjuangan. R.S. Soekanto diangkat sebagai Kepala Kepolisian Negara pada September 1945. Awalnya kepolisian berada di bawah Kementerian Dalam Negeri dan Jaksa Agung, namun sejak 1 Juli 1946 langsung bertanggung jawab kepada Perdana Menteri, yang diperingati sebagai Hari Bhayangkara. Selain penegak hukum, Polri juga berperan sebagai pasukan tempur dalam perjuangan kemerdekaan. Pada masa Republik Indonesia Serikat (RIS), kepolisian terpecah, namun pada 1950 disatukan kembali menjadi lembaga kepolisian nasional yang terpusat dan profesional.',
    },
    {
        title: 'Periode 1950–1959',
        image: '/images/foto/1950.png',
        description:
            'Setelah pembentukan negara kesatuan pada 17 Agustus 1950 dan diberlakukannya UUDS 1950 dengan sistem parlementer, R.S. Soekanto tetap menjabat Kepala Kepolisian Negara yang bertanggung jawab kepada perdana menteri atau presiden. Markas Besar Kepolisian dipindahkan ke Gedung Djawatan Kepolisian di Jalan Trunojoyo, Jakarta Selatan, yang menjadi kantor utama hingga kini. Pada masa ini, Polri memiliki status tersendiri yang membedakan antara sipil dan militer, dengan organisasi pegawai sendiri, Persatuan Pegawai Polisi Republik Indonesia (P3RI), dan organisasi istri polisi, Bhayangkari, yang beroperasi secara independen dan pernah terlibat politik melalui Pemilu 1955. P3RI juga berhasil memperjuangkan perbaikan gaji anggota Polri, sehingga gaji polisi lebih baik dibanding pegawai negeri lainnya berdasarkan standar internasional.',
    },
    {
        title: 'Masa Orde Lama',
        image: '/images/foto/ordelama.png',
        description:
            'Setelah Dekrit Presiden 5 Juli 1959 yang mengembalikan Indonesia ke UUD 1945, jabatan Perdana Menteri diganti Menteri Pertama, dan Polri berada di bawah Menteri Pertama hingga Kepala Kepolisian Negara diberi status Menteri Negara ex-officio pada Juli 1959. Kepala Kepolisian Negara kemudian menjadi Menteri Muda Kepolisian yang memimpin Departemen Kepolisian. R.S. Soekanto menolak penggabungan kepolisian ke dalam ABRI untuk menjaga profesionalisme dan mengundurkan diri pada Desember 1959. Pada 1960, ABRI resmi terdiri dari Angkatan Perang dan Polisi Negara, dan Polri setara dengan TNI AD, AL, dan AU menurut UU No. 13/1961. Selanjutnya, jabatan kepemimpinan Polri berganti nama beberapa kali dan langsung bertanggung jawab kepada Presiden. Keppres 290/1964 menetapkan tugas Polri sebagai penegak hukum, koordinator polisi khusus, pelaksana pertahanan, pembina keamanan dan ketertiban, serta alat revolusi. Pendidikan AKABRI disamakan antara Angkatan Perang dan Polri pada 1965. Pada masa itu, pengaruh PKI dalam ABRI meningkat akibat politik NASAKOM Presiden Soekarno.',
    },
    {
        title: 'Masa Orde Baru',
        image: '/images/foto/ordebaru.webp',
        description:
            'Karena pengalaman yang pahit dari peristiwa G30S/PKI yang mencerminkan tidak adanya integrasi antar unsur-unsur ABRI, maka untuk meningkatkan integrasi ABRI, tahun 1967 dengan SK Presiden No. 132/1967 tanggal 24 Agustus 1967 ditetapkan Pokok-Pokok Organisasi dan Prosedur Bidang Pertahanan dan Keamanan yang menyatakan ABRI merupakan bagian dari organisasi Departemen Hankam meliputi AD, AL, AU , dan AK yang masing-masing dipimpin oleh Panglima Angkatan dan bertanggung jawab atas pelaksanaan tugas dan kewajibannya kepada Menhankam/Pangab. Jenderal Soeharto sebagai Menhankam/Pangab yang pertama. Setelah Soeharto dipilih sebagai presiden pada tahun 1968, jabatan Menhankam/Pangab berpindah kepada Jenderal M. Panggabean. Kemudian ternyata betapa ketatnya integrasi ini yang dampaknya sangat menyulitkan perkembangan Polri yang secara universal memang bukan angkatan perang. Pada tahun 1969 dengan Keppres No. 52/1969 sebutan Panglima Angkatan Kepolisian diganti kembali sesuai UU No. 13/1961 menjadi Kepala Kepolisian Negara RI, namun singkatannya tidak lagi KKN tetapi Kapolri. Pergantian sebutan ini diresmikan pada tanggal 1 Juli 1969.',
    },
];

const SejarahSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-gray-800">Sejarah Polri</h2>
                    <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                        Perjalanan panjang institusi Kepolisian Republik Indonesia dari masa kerajaan hingga era modern.
                    </p>
                </div>

                <div className="space-y-16">
                    {sejarahList.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                                } items-center gap-8`}
                        >
                            <div className="md:w-1/2">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={600}
                                    height={400}
                                    className="rounded-xl shadow-lg object-cover w-full h-full"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SejarahSection;

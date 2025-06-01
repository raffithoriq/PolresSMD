import { FaInstagram, FaTwitter, FaTiktok, FaFacebookF } from "react-icons/fa";

export default function MediaSosialKamiSection() {
  const mediaSosial = [
    {
      name: "Instagram",
      icon: <FaInstagram className="text-pink-500 w-6 h-6" />,
      url: "https://www.instagram.com/polrestasamarinda/",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="text-blue-400 w-6 h-6" />,
      url: "https://x.com/Polresta_SMD",
    },
    {
      name: "TikTok",
      icon: <FaTiktok className="text-black w-6 h-6" />,
      url: "https://www.tiktok.com/@polresta_samarinda",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF className="text-blue-600 w-6 h-6" />,
      url: "https://www.facebook.com/Polrestsamarinda",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 mb-32 mt-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Media Sosial Kami
        </h2>
        <p className="text-gray-600 mb-20">
          Ikuti kami di platform media sosial untuk informasi terbaru, kegiatan, dan layanan masyarakat.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {mediaSosial.map(({ name, icon, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-gray-100 p-6 rounded-xl w-60 hover:bg-gray-200 transition duration-300 shadow-sm hover:shadow-md"
            >
              <div className="mb-3">{icon}</div>
              <span className="font-semibold text-gray-700">{name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

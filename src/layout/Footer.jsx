import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#171717] text-white pt-16 pb-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between gap-12">

          {/* Logo */}
          <div className="flex-1 min-w-[240px]">
            <Image
              src="/images/logo/logo.png"
              alt="Polresta Samarinda"
              width={200}
              height={60}
              className="mb-6"
            />
            <p className="text-senary text-sm">
              Bersama Masyarakat Mewujudkan Keamanan dan Ketertiban.
            </p>
          </div>

          {/* Quick Links & Contact */}
          <div className="flex-[2] flex flex-wrap gap-10 justify-between">

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-senary text-sm">
                <li><Link href="/" className="hover:text-quinary">Home</Link></li>
                <li><Link href="/about" className="hover:text-quinary">About</Link></li>
                <li><Link href="/" className="hover:text-quinary">Informasi</Link></li>
                <li><Link href="/gallery" className="hover:text-quinary">Galeri</Link></li>
                <li><Link href="/" className="hover:text-quinary">Layanan</Link></li>
                <li><Link href="/kontak" className="hover:text-quinary">Kontak</Link></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Details</h4>
              <p className="text-senary text-sm leading-relaxed mb-2">
                Jl. Slamet Riyadi No.1, Karang Asam Ulu, Kec. Sungai Kunjang, <br />
                Kota Samarinda, Kalimantan Timur 75126
              </p>
              <p className="text-senary text-sm">
                Phone:{" "}
                <a href="tel:0541742434" className="hover:text-quinary underline">
                  (0541) 742434
                </a>
              </p>
              <p className="text-senary text-sm">
                Email:{" "}
                <a href="mailto:humaspolrestasamarinda@gmail.com" className="hover:text-quinary underline">
                  humaspolrestasamarinda@gmail.com
                </a>
              </p>
              <p className="text-senary text-sm">
                Website:{" "}
                <a
                  href="https://polrestasamarinda.id/"
                  className="hover:text-quinary underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  polrestasamarinda.id
                </a>
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="w-full lg:w-[260px]">
            <h4 className="text-lg font-semibold mb-4">Lokasi Kami</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6561393849565!2d117.11577630000001!3d-0.5166096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df67e481e848a23%3A0xd8697b4e366f75cf!2sPolresta%20Samarinda!5e0!3m2!1sid!2sid!4v1749059072220!5m2!1sid!2sid"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-senary text-sm">
          <p>© {new Date().getFullYear()} POLRESTA SAMARINDA | All Rights Reserved.</p>
          <div className="flex gap-4 text-xl">
            <a
              href="https://www.tiktok.com/@polresta_samarinda"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:text-quinary"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a href="https://www.facebook.com/Polrestsamarinda" target="_blank" rel="noopener noreferrer" className="hover:text-quinary">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/polrestasamarinda/" target="_blank" rel="noopener noreferrer" className="hover:text-quinary">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://x.com/Polresta_SMD" target="_blank" rel="noopener noreferrer" className="hover:text-quinary">
              <FontAwesomeIcon icon={faTwitter} />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}


import React from 'react';
import { MapPin, Link, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-black mb-16">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <div className="relative bg-gradient-to-b from-white to-gray-100 border border-yellow-500 rounded-lg p-6 pt-12 text-black">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#f4c07c] p-2 rounded-md">
              <MapPin className="text-black" />
            </div>
            <p className="text-sm leading-relaxed">
              Jl. Slamet Riyadi No.1, Karang Asam Ulu, Kec. Sungai Kunjang, Kota Samarinda, Kalimantan Timur 75126
            </p>
          </div>

          {/* Social Media */}
          <div className="relative bg-white border border-yellow-500 rounded-lg p-6 pt-12 text-black">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#f4c07c] p-2 rounded-md">
              <Link className="text-black" />
            </div>
            <ul className="list-none flex flex-col items-center text-sm space-y-1">
              <li>Facebook: @Polrestsamarinda</li>
              <li>Twitter: @Polresta_SMD</li>
              <li>Instagram: @polrestasamarinda</li>
              <li>Tiktok: @polresta_samarinda</li>
            </ul>
          </div>


          {/* Phone */}
          <div className="relative bg-gradient-to-b from-white to-gray-100 border border-yellow-500 rounded-lg p-6 pt-12 text-black">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#f4c07c] p-2 rounded-md">
              <Phone className="text-black" />
            </div>
            <p className="text-sm mb-2">Untuk Dukungan dan Pertanyaan Umum:</p>
            <p className="text-xl font-semibold text-black">(0541) 742434</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

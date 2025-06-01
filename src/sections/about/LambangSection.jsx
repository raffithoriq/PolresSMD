import React from 'react';
import { ShieldCheck, Star, Leaf, Flame, ScrollText } from 'lucide-react';

const LambangSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b ">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">Arti Lambang Polda Kalimantan Timur</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Lambang Polda Kaltim menggambarkan identitas dan semangat kepolisian daerah dalam melindungi masyarakat Kalimantan Timur.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <img
            src="/images/logo/logo.png"
            alt="Lambang Polda Kalimantan Timur"
            className="w-48 h-auto drop-shadow-md"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-start space-x-4 hover:shadow-2xl transition">
            <ShieldCheck className="w-8 h-8 text-blue-600 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Perisai</h4>
              <p className="text-gray-600 text-sm">Melambangkan perlindungan dan keamanan yang diberikan Polda Kaltim kepada masyarakat.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex items-start space-x-4 hover:shadow-2xl transition">
            <Star className="w-8 h-8 text-yellow-500 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Bintang</h4>
              <p className="text-gray-600 text-sm">Simbol Pancasila sebagai landasan moral dalam pengabdian Polda Kaltim.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex items-start space-x-4 hover:shadow-2xl transition">
            <Leaf className="w-8 h-8 text-green-600 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Pohon Khas Kaltim</h4>
              <p className="text-gray-600 text-sm">Melambangkan kekayaan alam dan lingkungan hidup Kalimantan Timur.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex items-start space-x-4 hover:shadow-2xl transition">
            <Flame className="w-8 h-8 text-red-500 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Api</h4>
              <p className="text-gray-600 text-sm">Simbol semangat yang tak pernah padam dalam menjaga keamanan daerah.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex items-start space-x-4 hover:shadow-2xl transition sm:col-span-2">
            <ScrollText className="w-8 h-8 text-purple-600 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Tulisan "KALIMANTAN TIMUR"</h4>
              <p className="text-gray-600 text-sm">Menunjukkan identitas wilayah hukum Polda Kalimantan Timur.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LambangSection;
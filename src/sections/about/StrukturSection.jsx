import React from 'react';
import Image from 'next/image';

const StrukturSection = () => {
    return (
        <section className="py-20 bg-gradient-to-b ">
            <div className="max-w-screen-xl mx-auto px-0">
                <h2 className="text-4xl font-bold text-center text-gray-800 pt-20 pb-10">
                    Struktur Organisasi Polri
                </h2>
                <div className="relative w-full h-[800px]">
                    <Image
                        src="/images/foto/struktur.jpg"
                        alt="Struktur Organisasi Polri"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default StrukturSection;

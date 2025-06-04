import React from 'react';

const MapSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-10">Lokasi Polresta Samarinda</h2>
                <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6561393849565!2d117.11577630000001!3d-0.5166096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df67e481e848a23%3A0xd8697b4e366f75cf!2sPolresta%20Samarinda!5e0!3m2!1sid!2sid!4v1749059072220!5m2!1sid!2sid"
                        width="100%"
                        height="100%"
                        allowFullScreen=""
                        loading="lazy"
                        className="w-full h-full border-0"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default MapSection;

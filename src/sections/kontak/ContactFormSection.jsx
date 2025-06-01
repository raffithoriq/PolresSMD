import React from 'react';

const ContactFormSection = () => {
  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Form Kontak</h2>

        <form className="space-y-8">
          {/* Nama & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full mt-1 p-3 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full mt-1 p-3 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full mt-1 p-3 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full mt-1 p-3 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>

          {/* Tombol Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-500 text-black font-semibold px-8 py-3 rounded-md hover:bg-[#e2ae65] transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;

// src/components/Contact.jsx

import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  // Ganti dengan access key Anda dari web3forms.com
  const WEB3FORMS_ACCESS_KEY = 'GANTI_DENGAN_ACCESS_KEY_ANDA';

  return (
    <section id="contact" className="bg-slate-100 py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Judul Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900">
            Contact Me
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Saya selalu terbuka untuk diskusi, kolaborasi, atau peluang baru. Jangan ragu untuk menghubungi saya.
          </p>
        </div>

        {/* Kontainer utama dengan layout dua kolom */}
        <div className="flex flex-col md:flex-row gap-12">

          {/* Kolom Kiri: Info Kontak */}
          <div className="md:w-1/3">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Let's Connect</h3>
            <div className="space-y-4">
              <a href="mailto:emailanda@example.com" className="flex items-center gap-4 text-gray-700 hover:text-cyan-600 transition-colors">
                <FaEnvelope className="text-2xl text-cyan-600" />
                <span>mfazaqowamudin25@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 text-gray-700">
                <FaMapMarkerAlt className="text-2xl text-cyan-600" />
                <span>Pekalongan, Indonesia</span>
              </div>
              <a href="https://linkedin.com/in/zaast" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-700 hover:text-cyan-600 transition-colors">
                <FaLinkedin className="text-2xl text-cyan-600" />
                <span>LinkedIn</span>
              </a>
               <a href="https://github.com/Faza25" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-700 hover:text-cyan-600 transition-colors">
                <FaGithub className="text-2xl text-cyan-600" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Formulir Kontak */}
          <div className="md:w-2/3">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="c69fbdff-e85b-42d9-b06a-b065a38d690c"/>
                <input type="hidden" name="subject" value="Pesan Baru dari Portofolio Anda" />
                <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Nama Lengkap</label>
                    <input type="text" name="name" id="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"/>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Alamat Email</label>
                    <input type="email" name="email" id="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"/>
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Pesan Anda</label>
                  <textarea name="message" id="message" rows="5" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-slate-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-600 transition-all duration-300 shadow-lg">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
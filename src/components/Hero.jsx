// src/components/Hero.jsx

import React from 'react';
// Langkah 2 akan dijelaskan di bawah: cara mengimpor foto Anda
import profilePhoto from '../assets/images/profile.webp'; // Ganti dengan path foto Anda

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kontainer utama dengan flexbox, dibuat reverse di mobile */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          
          {/* Kolom Kiri: Teks Perkenalan */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Hai, Saya <span className="text-cyan-400">[M.Faza Qowamudin]</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mt-2">
              [Junior Web Developer]
            </h2>
            <p className="mt-4 text-gray-400 max-w-lg mx-auto md:mx-0">
              Saya adalah seorang developer yang bersemangat dalam menciptakan aplikasi web yang fungsional, modern, dan memberikan pengalaman pengguna yang luar biasa.
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <a
                href="#project"
                className="px-6 py-3 font-semibold text-white bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-all duration-300"
              >
                Project
              </a>
              <a
                href="#contact"
                className="px-6 py-3 font-semibold text-cyan-400 border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Gambar/Foto */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-cyan-500 shadow-2xl shadow-cyan-500/20">
              <img 
                src={profilePhoto} 
                alt="Foto Profil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import aboutPhoto from '../assets/images/about.webp'; // Ganti dengan path foto Anda

const About = () => {
  return (
    <section id="about" className="bg-white py-20 md:py-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Kolom Kiri: Foto */}
          <div className="md:w-5/12">
            <img 
              src={aboutPhoto} 
              alt="Foto Tentang Saya" 
              className="w-full h-auto rounded-lg border border-gray-200 shadow-lg"
            />
          </div>

          {/* Kolom Kanan: Deskripsi Teks */}
          <div className="md:w-7/12 text-center md:text-left">
            
            {/* Judul dan garis bawah dekoratif */}
            <h2 className="text-3xl font-bold text-slate-900">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mt-2 mx-auto md:mx-0"></div>

            {/* Paragraf Deskripsi */}
            <p className="mt-6 text-gray-600 leading-relaxed">
              Hai, saya M.Faza Qowamudin, seorang Junior Web Developer Juga sebagai mahasiswa Informatika yang memiliki ketertarikan pada teknologi dan kreativitas.
              Selama beberapa tahun terakhir, saya telah mengasah keterampilan saya dalam jaringan dan pemrograman, sambil mengeksplorasi pada bidang Video Editing.
              Walaupun berstatus Junior, Saya terus belajar dan mengeksplorasi perkembangan teknologi untuk menambah wawasan saya.
              Pengalaman ini tidak hanya memperkuat keterampilan teknis saya, tetapi juga memicu ambisi saya untuk mendalami pemrograman dan pengeditan video.
            </p>
            
            {/* Tombol Download CV */}
            <div className="mt-8">
              <a
                href="/[NAMA-FILE-CV-ANDA].pdf" // Letakkan CV di folder 'public'
                download
                className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-md"
              >
                Download CV
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
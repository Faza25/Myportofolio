import React from 'react';

import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiVite,
  SiPhp,
} from 'react-icons/si';

// Di sini Anda bisa menambahkan atau mengurangi skill sesuai keahlian Anda
const skillsData = [
  { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <SiCss3 className="text-blue-500" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'React', icon: <SiReact className="text-cyan-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
  { name: 'Php', icon: <SiPhp className="text-slate-500" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
];

const Skills = () => {
  return (
    // Section dengan background abu-abu muda untuk kontras
    <section id="skill" className="bg-slate-100 py-20 md:py-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Judul Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900">
            My Skills
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Teknologi yang saya gunakan untuk mengubah ide menjadi produk digital.
          </p>
        </div>

        {/* Grid untuk Skill Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="text-5xl mb-4">
                {skill.icon}
              </div>
              <p className="text-md font-semibold text-slate-800">{skill.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
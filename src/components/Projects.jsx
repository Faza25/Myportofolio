// src/components/Projects.jsx

import React from 'react';
// Impor ikon dari react-icons
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Impor gambar proyek Anda dari folder assets
import projectImage1 from '../assets/images/comingsoon.webp';
import projectImage2 from '../assets/images/comingsoon.webp';
import projectImage3 from '../assets/images/comingsoon.webp';


// Array data untuk proyek Anda. Tambah atau kurangi sesuai kebutuhan.
const projectsData = [
  {
    title: 'Nama Proyek 1',
    image: projectImage1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    liveUrl: '#', // Ganti dengan URL Live Demo Anda
    githubUrl: '#', // Ganti dengan URL GitHub repo Anda
  },
  {
    title: 'Nama Proyek 2',
    image: projectImage2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    tags: ['Next.js', 'Express', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
  },
   {
    title: 'Nama Proyek 3',
    image: projectImage3,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    tags: ['React Native', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

const Projects = () => {
  return (
    <section id="project" className="bg-white py-20 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Judul Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900">
            My Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Beberapa project yang saya buat.
          </p>
        </div>

        {/* Grid untuk Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="bg-slate-50 rounded-lg shadow-lg overflow-hidden flex flex-col group"
            >
              {/* Gambar Proyek */}
              <div className="overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`Screenshot dari ${project.title}`}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                {/* Judul dan Deskripsi */}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
                
                {/* Tags Teknologi */}
                <div className="mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="inline-block bg-cyan-100 text-cyan-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Tombol Link */}
                <div className="mt-auto flex justify-start gap-4">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-800 font-semibold hover:text-cyan-600 transition-colors">
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-800 font-semibold hover:text-cyan-600 transition-colors">
                    <FaGithub />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
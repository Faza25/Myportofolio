// src/components/Footer.jsx

import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm mb-4 sm:mb-0">
          &copy; {currentYear} Zaast. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="https://github.com/Faza25" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/zaast" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="https://instagram.com/mf_zaast" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
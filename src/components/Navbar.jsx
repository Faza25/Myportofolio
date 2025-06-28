import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const menuItems = ['Home', 'About', 'Skill', 'Project', 'Contact'];
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 shadow-md">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="home" smooth={true} duration={500} className="text-4xl font-bold text-cyan-400 cursor-pointer">
              Zaast
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {menuItems.map((item) => (
                <Link
                  activeClass="active"
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  key={item}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden md:block">
             <a 
              href="/CV-Anda.pdf"
              download="CV-[Nama-Anda].pdf"
              className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-cyan-700 transition-colors"
             >
                <FiDownload />
                Unduh CV
             </a>
          </div>

          {/* INI BAGIAN YANG DIPERBAIKI: Atribut pada tombol hamburger dikembalikan */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Buka menu</span>
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
          
        </div>
      </div>

      <div ref={menuRef}>
        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <Link
                  onClick={closeMenu}
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  key={item}
                  className="text-gray-300 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                >
                  {item}
                </Link>
              ))}
               <a 
                href="/CV-Anda.pdf"
                download="CV-[Nama-Anda].pdf"
                className="flex items-center justify-center gap-2 bg-cyan-600 text-white mx-3 mt-2 px-3 py-3 rounded-md text-base font-medium hover:bg-cyan-700 transition-colors"
              >
                <FiDownload />
                Unduh CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
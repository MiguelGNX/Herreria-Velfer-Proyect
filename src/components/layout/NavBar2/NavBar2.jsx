import React, { useState } from 'react';
import Logo2 from '../../../assets/images/Logo2.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b0602] border-b border-[#95918c]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-3 flex items-center justify-between relative z-50 bg-[#0b0602]">
        
        {/* LOGO */}
        <a href="#inicio" onClick={closeMenu} className="flex items-center gap-2 sm:gap-3 shrink-0">
          <img 
            src={Logo2} 
            alt="Herrería Velfer Logo" 
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
          />
          <span className="font-bold text-base sm:text-lg lg:text-xl tracking-wider uppercase whitespace-nowrap">
            <span className="text-[#e95918]">HERRERÍA</span>{' '}
            <span className="text-[#f1ece3]">VELFER</span>
          </span>
        </a>

        {/* MENÚ ESCRITORIO (Visibilidad en pantallas 'lg') */}
        <div className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-[0.2em] text-[#95918c] uppercase">
          <a href="#servicios" className="hover:text-[#f1ece3] transition-colors duration-200">
            Servicios
          </a>
          <a href="#galeria" className="hover:text-[#f1ece3] transition-colors duration-200">
            Galería
          </a>
          <a href="#nosotros" className="hover:text-[#f1ece3] transition-colors duration-200">
            Nosotros
          </a>
          {/* <a 
            href="#contacto" 
            className="border border-[#e95918]/60 text-[#e95918] px-4 py-2 hover:bg-[#e95918] hover:text-[#0b0602] transition-all duration-200"
          >
            Contacto
          </a> */}
        </div>

        {/* BOTÓN HAMBURGUESA / CERRAR */}
        <button
          onClick={toggleMenu}
          type="button"
          className="lg:hidden p-2 text-[#f1ece3] hover:text-[#e95918] focus:outline-none transition-colors"
          aria-label="Abrir menú"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* MENÚ DESPLEGABLE MÓVIL (PANTALLA COMPLETA SEPARADA) */}
      <div
        className={`fixed inset-0 top-0 left-0 w-screen h-[100dvh] bg-[#0b0602] z-40 flex flex-col justify-center items-center gap-8 text-sm font-semibold tracking-[0.25em] text-[#95918c] uppercase transition-all duration-300 ease-in-out lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <a 
          href="#servicios" 
          onClick={closeMenu} 
          className="hover:text-[#e95918] text-xl transition-colors duration-200"
        >
          Servicios
        </a>
        <a 
          href="#galeria" 
          onClick={closeMenu} 
          className="hover:text-[#e95918] text-xl transition-colors duration-200"
        >
          Galería
        </a>
        <a 
          href="#nosotros" 
          onClick={closeMenu} 
          className="hover:text-[#e95918] text-xl transition-colors duration-200"
        >
          Nosotros
        </a>
        <a 
          href="#contacto" 
          onClick={closeMenu} 
          className="mt-4 border border-[#e95918] text-[#e95918] text-base px-8 py-3.5 hover:bg-[#e95918] hover:text-[#0b0602] transition-all duration-200"
        >
          Contacto
        </a>
      </div>
    </header>
  );
}
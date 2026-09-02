import React from 'react';
import Logo from '../../../assets/images/Logo.png';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0b0602]/90 backdrop-blur-md border-b border-[#95918c]/20">
      <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* LOGO Y MARCA */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <img 
            src={Logo} 
            alt="Herrería Velfer Logo" 
            className="w-12 h-12 object-contain"
          />
          <span className="font-bold text-xl md:text-2xl tracking-wider uppercase">
            <span className="text-[#e95918]">HERRERÍA</span>{' '}
            <span className="text-[#f1ece3]">VELFER</span>
          </span>
        </a>

        {/* ENLACES DE NAVEGACIÓN */}
        <nav className="flex items-center gap-8 md:gap-10">
          <a 
            href="#servicios" 
            className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#95918c] hover:text-[#f1ece3] uppercase transition-colors duration-200"
          >
            Servicios
          </a>
          <a 
            href="#galeria" 
            className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#95918c] hover:text-[#f1ece3] uppercase transition-colors duration-200"
          >
            Galería
          </a>
          <a 
            href="#nosotros" 
            className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#95918c] hover:text-[#f1ece3] uppercase transition-colors duration-200"
          >
            Nosotros
          </a>
          <a 
            href="#contacto" 
            className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#95918c] hover:text-[#f1ece3] uppercase transition-colors duration-200"
          >
            Contacto
          </a>
        </nav>

      </div>
    </header>
  );
}
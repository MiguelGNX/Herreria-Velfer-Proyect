import React from 'react';

// 1. Importación de las secciones creadas
import HomePage from './components/sections/HomePage/HomePage';

// (Aquí iremos importando los demás componentes a medida que los construyamos):
// import Navbar from './components/layout/Navbar';
// import Services from './components/sections/Services';
// import Gallery from './components/sections/Gallery';
// import About from './components/sections/About';
// import Contact from './components/sections/Contact';
// import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0602] text-[#f1ece3] flex flex-col font-body selection:bg-[#e95918] selection:text-[#0b0602]">
      
      {/* Futuro Menú Superior */}
      {/* <Navbar /> */}

      {/* Contenido Principal de la Página */}
      <main className="flex-grow">
        {/* Primera Sección: Inicio / Hero */}
        <HomePage />

        {/* Futuras secciones */}
        {/* <Services /> */}
        {/* <Gallery /> */}
        {/* <About /> */}
        {/* <Contact /> */}
      </main>

      {/* Futuro Pie de Página */}
      {/* <Footer /> */}

    </div>
  );
}
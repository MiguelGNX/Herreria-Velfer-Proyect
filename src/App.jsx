import React from 'react';
import Navbar from './components/layout/Navbar/NavBar';
import HomePage from './components/sections/HomePage/HomePage';
import ServicesSection from './components/sections/NuestrosServicios/ServicesSection';
import GallerySection from './components/sections/GaleriaTrabajo/GallerySection';
import AboutUsSection from './components/sections/SobreNosotros/AboutSection';
function App() {
  return (
    <div className="bg-[#0b0602] min-h-screen">
      <Navbar />
      <HomePage />
      <ServicesSection />
      <GallerySection />
      <AboutUsSection />
    </div>
  );
}

export default App;
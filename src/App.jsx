import React from 'react';
import Navbar from './components/layout/Navbar/NavBar';
import HomePage from './components/sections/HomePage/HomePage';
import ServicesSection from './components/sections/SobreNosotros/SobreNosotros';
import GallerySection from './components/sections/GaleriaTrabajo/GallerySection';
function App() {
  return (
    <div className="bg-[#0b0602] min-h-screen">
      <Navbar />
      <HomePage />
      <ServicesSection />
      <GallerySection />
    </div>
  );
}

export default App;
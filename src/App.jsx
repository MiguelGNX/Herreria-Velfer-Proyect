import React from 'react';
import NavBar from './components/layout/Navbar/NavBar';
import Navbar2 from './components/layout/NavBar2/NavBar2';
import HomePage from './components/sections/HomePage/HomePage';
import ServicesSection from './components/sections/NuestrosServicios/ServicesSection';
import GallerySection from './components/sections/GaleriaTrabajo/GallerySection';
import AboutUsSection from './components/sections/SobreNosotros/AboutSection';
import Footer from './components/layout/Footer/Footer';
function App() {
  return (
    <div className="bg-[#0b0602] min-h-screen">
      <Navbar2 />
      <HomePage />
      <ServicesSection />
      <GallerySection />
      <AboutUsSection />
      <Footer />
    </div>
  );
}

export default App;
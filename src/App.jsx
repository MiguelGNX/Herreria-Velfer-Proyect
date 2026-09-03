import React from 'react';
import Navbar from './components/layout/Navbar/NavBar';
import HomePage from './components/sections/HomePage/HomePage';
import ServicesSection from './components/sections/SobreNosotros/SobreNosotros';

function App() {
  return (
    <div className="bg-[#0b0602] min-h-screen">
      <Navbar />
      <HomePage />
      <ServicesSection />
    </div>
  );
}

export default App;
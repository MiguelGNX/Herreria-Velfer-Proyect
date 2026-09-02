import React from 'react';
import Navbar from './components/layout/Navbar/NavBar';
import HomePage from './components/sections/HomePage/HomePage';

function App() {
  return (
    <div className="bg-[#0b0602] min-h-screen">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
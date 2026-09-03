import React, { useState } from 'react';

// Datos de ejemplo para los proyectos
const projects = [
  {
    id: 1,
    title: 'Reja de ventana',
    location: 'Col. Narvarte',
    beforeImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Puerta de acceso',
    location: 'Tlalpan',
    beforeImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Ventanal de herrería',
    location: 'Coyoacán',
    beforeImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Portón principal',
    location: 'Pedregal',
    beforeImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=800&q=80',
  },
];

// Subcomponente individual para manejar el estado de cada tarjeta
function GalleryCard({ project }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="bg-[#0b0602] border border-[#95918c]/20 flex flex-col overflow-hidden">
      
      {/* Contenedor de Imagen */}
      <div className="relative aspect-[4/3] w-full bg-[#120f0d] overflow-hidden">
        
        {/* Insignia / Badge dinámico */}
        <div className="absolute top-4 left-4 z-20 bg-[#0b0602] border border-[#95918c]/30 px-3 py-1">
          <span className="text-xs font-bold tracking-widest text-[#f1ece3] uppercase">
            {showAfter ? 'DESPUÉS' : 'ANTES'}
          </span>
        </div>

        {/* Imagen ANTES */}
        <img
          src={project.beforeImg}
          alt={`${project.title} - Antes`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
            showAfter ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Imagen DESPUÉS */}
        <img
          src={project.afterImg}
          alt={`${project.title} - Después`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
            showAfter ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Pie de la Tarjeta */}
      <div className="p-4 flex items-center justify-between border-t border-[#95918c]/20 bg-[#0b0602]">
        <p className="text-xs md:text-sm text-[#95918c]">
          <span className="text-[#f1ece3] font-medium">{project.title}</span> — {project.location}
        </p>

        <button
          onClick={() => setShowAfter(!showAfter)}
          className="text-[11px] font-bold tracking-wider text-[#e95918] hover:bg-[#e95918] hover:text-[#0b0602] border border-[#e95918]/60 px-3 py-1.5 uppercase transition-all duration-200 whitespace-nowrap ml-2"
        >
          {showAfter ? 'VER ANTES' : 'VER DESPUÉS'}
        </button>
      </div>

    </div>
  );
}

export default function GallerySection() {
  return (
    <section id="galeria" className="bg-[#0b0602] text-[#f1ece3] py-24 px-6 lg:px-12 border-t border-[#95918c]/10">
      <div className="container mx-auto">
        
        {/* ENCABEZADO */}
        <div className="mb-12">
          <span className="text-[#e95918] text-xs md:text-sm font-semibold tracking-[0.25em] uppercase block mb-2">
            RESULTADOS REALES
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#f1ece3] mb-3">
            GALERÍA DE TRABAJOS
          </h2>
          <p className="text-[#95918c] text-sm md:text-base font-light">
            Haz clic en cada tarjeta para ver el antes y después de nuestros proyectos.
          </p>
        </div>

        {/* REJILLA DE PROYECTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <GalleryCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
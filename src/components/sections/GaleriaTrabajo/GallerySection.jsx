import React, { useState, useEffect } from 'react';
import { client, urlFor } from '../../../sanity/client';

// Subcomponente individual para manejar el estado y visualización de cada tarjeta
function GalleryCard({ project }) {
  const [showAfter, setShowAfter] = useState(false);

  // Conversión de las imágenes almacenadas en Sanity a URLs de alta calidad
  const beforeUrl = project.beforeImg ? urlFor(project.beforeImg).url() : '';
  const afterUrl = project.afterImg ? urlFor(project.afterImg).url() : '';

  return (
    <div className="bg-[#e8e2d8] dark:bg-[#0b0602] border border-[#0b0602]/10 dark:border-[#95918c]/20 flex flex-col overflow-hidden transition-colors duration-300">
      
      {/* Contenedor de Imagen */}
      <div className="relative aspect-[4/3] w-full bg-[#d8d2c8] dark:bg-[#120f0d] overflow-hidden">
        
        {/* Insignia / Badge dinámico */}
        <div className="absolute top-4 left-4 z-20 bg-[#f1ece3] dark:bg-[#0b0602] border border-[#0b0602]/20 dark:border-[#95918c]/30 px-3 py-1 shadow-sm transition-colors duration-300">
          <span className="text-xs font-bold tracking-widest text-[#0b0602] dark:text-[#f1ece3] uppercase">
            {showAfter ? 'DESPUÉS' : 'ANTES'}
          </span>
        </div>

        {/* Imagen ANTES */}
        {beforeUrl && (
          <img
            src={beforeUrl}
            alt={`${project.title} - Antes`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
              showAfter ? 'opacity-0' : 'opacity-100'
            }`}
          />
        )}

        {/* Imagen DESPUÉS */}
        {afterUrl && (
          <img
            src={afterUrl}
            alt={`${project.title} - Después`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
              showAfter ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
      </div>

      {/* Pie de la Tarjeta con Título, Botón y Detalles Técnicos */}
      <div className="p-5 flex flex-col gap-4 border-t border-[#0b0602]/10 dark:border-[#95918c]/20 bg-[#f1ece3] dark:bg-[#0b0602] transition-colors duration-300">
        
        {/* Cabecera de la tarjeta */}
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-[#0b0602] dark:text-[#f1ece3] uppercase tracking-wide">
            {project.title}
          </h3>

          <button
            onClick={() => setShowAfter(!showAfter)}
            className="text-[11px] font-bold tracking-wider text-[#e95918] hover:bg-[#e95918] hover:text-[#f1ece3] dark:hover:text-[#0b0602] border border-[#e95918]/60 px-3 py-1.5 uppercase transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            {showAfter ? 'VER ANTES' : 'VER DESPUÉS'}
          </button>
        </div>

        {/* Grilla de Especificaciones Técnicas */}
        <div className="grid grid-cols-2 gap-2 text-xs pt-3 border-t border-[#0b0602]/10 dark:border-[#95918c]/10 text-[#55504a] dark:text-[#95918c]">
          {project.materials && (
            <div>
              <span className="font-semibold text-[#0b0602] dark:text-[#f1ece3] block">Material:</span>
              {project.materials}
            </div>
          )}
          {project.paint && (
            <div>
              <span className="font-semibold text-[#0b0602] dark:text-[#f1ece3] block">Pintura:</span>
              {project.paint}
            </div>
          )}
          {project.dimensions && (
            <div>
              <span className="font-semibold text-[#0b0602] dark:text-[#f1ece3] block">Medidas:</span>
              {project.dimensions}
            </div>
          )}
          {project.installationTime && (
            <div>
              <span className="font-semibold text-[#0b0602] dark:text-[#f1ece3] block">Instalación:</span>
              {project.installationTime}
            </div>
          )}
        </div>

      </div>

    </div>
  );
}

export default function GallerySection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Consulta a Sanity solicitando los proyectos publicados
    const query = `*[_type == "project"]{
      _id,
      title,
      materials,
      paint,
      dimensions,
      installationTime,
      beforeImg,
      afterImg
    }`;

    client
      .fetch(query)
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar proyectos desde Sanity:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section 
      id="galeria" 
      className="bg-[#f1ece3] text-[#0b0602] dark:bg-[#0b0602] dark:text-[#f1ece3] py-24 px-6 lg:px-12 border-t border-[#0b0602]/10 dark:border-[#95918c]/10 transition-colors duration-300"
    >
      <div className="container mx-auto">
        
        {/* ENCABEZADO */}
        <div className="mb-12">
          <span className="text-[#e95918] text-xs md:text-sm font-semibold tracking-[0.25em] uppercase block mb-2">
            RESULTADOS REALES
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#0b0602] dark:text-[#f1ece3] mb-3">
            GALERÍA DE TRABAJOS
          </h2>
          <p className="text-[#55504a] dark:text-[#95918c] text-sm md:text-base font-normal dark:font-light">
            Haz clic en cada tarjeta para ver el antes y después de nuestros proyectos.
          </p>
        </div>

        {/* CONTENIDO DINÁMICO */}
        {loading ? (
          <div className="text-center py-12 text-[#55504a] dark:text-[#95918c]">
            Cargando proyectos de la galería...
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-12 text-[#55504a] dark:text-[#95918c]">
            No hay proyectos publicados aún.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <GalleryCard key={project._id} project={project} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

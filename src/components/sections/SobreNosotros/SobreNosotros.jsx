import React from 'react';

const services = [
  {
    id: 'ventanales',
    title: 'VENTANALES',
    description:
      'Diseño y fabricación de ventanales de herrería a medida, con acabados pintados o galvanizados para mayor durabilidad.',
    icon: (
      <svg className="w-9 h-9 text-[#e95918]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5h16v14H4V5z M12 5v14 M4 12h16" />
      </svg>
    ),
    
  },
  {
    id: 'puertas',
    title: 'PUERTAS',
    description:
      'Puertas de acceso residencial e industrial, corredizas, batientes o enrollables, con distintos niveles de seguridad.',
    icon: (
      <svg className="w-9 h-9 text-[#e95918]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 3h8a1 1 0 011 1v16H7V4a1 1 0 011-1z M14 12v.01" />
      </svg>
    ),
    
  },
  {
    id: 'rejas',
    title: 'REJAS Y CERCAS',
    description:
      'Rejas para ventanas, perímetros y balcones, diseñadas para brindar seguridad sin sacrificar la estética.',
    icon: (
      <svg className="w-9 h-9 text-[#e95918]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
     // Tarjeta destacada con fondo oscuro igual que en la imagen
  },
  {
    id: 'estructuras',
    title: 'ESTRUCTURAS METÁLICAS',
    description:
      'Techumbres, escaleras, barandales y estructuras de acero para proyectos residenciales y comerciales.',
    icon: (
      <svg className="w-9 h-9 text-[#e95918]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-[#0b0602] text-[#f1ece3] py-24 px-6 lg:px-12 border-t border-[#95918c]/10">
      <div className="container mx-auto">
        
        {/* ENCABEZADO DE SECCIÓN */}
        <div className="mb-16">
          <span className="text-[#e95918] text-xs md:text-sm font-semibold tracking-[0.25em] uppercase block mb-2">
            LO QUE HACEMOS
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#f1ece3]">
            NUESTROS SERVICIOS
          </h2>
        </div>

        {/* REJILLA DE SERVICIOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 items-stretch">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`p-8 flex flex-col justify-between transition-all duration-300 border-r border-[#95918c]/15 last:border-r-0 ${
                service.featured
                  ? 'bg-[#151210] border-y border-[#e95918]/30 shadow-2xl relative z-10'
                  : 'hover:bg-[#120f0d]'
              }`}
            >
              <div>
                {/* ICONO */}
                <div className="mb-8">
                  {service.icon}
                </div>

                {/* TÍTULO */}
                <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-wide text-[#f1ece3] mb-4">
                  {service.title}
                </h3>

                {/* DESCRIPCIÓN */}
                <p className="text-[#95918c] text-sm md:text-base leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
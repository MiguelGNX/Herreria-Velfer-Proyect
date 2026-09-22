import React from 'react';

const services = [
  {
    title: 'VENTANALES',
    description:
      'Diseño y fabricación de ventanales de herrería a medida, con acabados pintados o galvanizados para mayor durabilidad.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4zM4 12h16M12 4v16" />
      </svg>
    ),
  },
  {
    title: 'PUERTAS',
    description:
      'Puertas de acceso residencial e industrial, corredizas, batientes o enrollables, con distintos niveles de seguridad.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 3h8a1 1 0 011 1v16a1 1 0 01-1 1H8a1 1 0 01-1-1V4a1 1 0 011-1zM14 12h.01" />
      </svg>
    ),
  },
  {
    title: 'REJAS Y CERCAS',
    description:
      'Rejas para ventanas, perímetros y balcones, diseñadas para brindar seguridad sin sacrificar la estética.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'ESTRUCTURAS METÁLICAS',
    description:
      'Techumbres, escaleras, barandales y estructuras de acero para proyectos residenciales y comerciales.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section 
      id="servicios" 
      className="bg-[#f1ece3] text-[#0b0602] dark:bg-[#0b0602] dark:text-[#f1ece3] py-24 px-6 lg:px-12 transition-colors duration-300"
    >
      <div className="container mx-auto">
        
        {/* ENCABEZADO */}
        <div className="mb-16">
          <span className="text-[#e95918] text-xs md:text-sm font-semibold tracking-[0.25em] uppercase block mb-2">
            LO QUE HACEMOS
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#0b0602] dark:text-[#f1ece3] leading-none">
            NUESTROS SERVICIOS
          </h2>
        </div>

        {/* CUADRO COMPLETO CON LA INFORMACIÓN (SIN HOVER) */}
        <div className="border border-[#0b0602]/20 dark:border-[#95918c]/20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 border-b md:border-b-0 lg:border-r border-[#0b0602]/20 dark:border-[#95918c]/20 last:border-b-0 lg:last:border-r-0"
            >
              {/* ÍCONO */}
              <div className="text-[#e95918] mb-8">
                {service.icon}
              </div>

              {/* TÍTULO */}
              <h3 className="text-xl font-extrabold uppercase tracking-wide text-[#0b0602] dark:text-[#f1ece3] mb-4">
                {service.title}
              </h3>

              {/* DESCRIPCIÓN */}
              <p className="text-[#55504a] dark:text-[#95918c] text-sm leading-relaxed font-normal dark:font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
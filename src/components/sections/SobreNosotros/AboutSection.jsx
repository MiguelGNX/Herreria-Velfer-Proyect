import React from 'react';

const values = [
  {
    number: '01',
    title: 'CALIDAD',
    description:
      'Cada soldadura, cada corte y cada acabado es revisado con rigor antes de entregarse. No hay atajos en nuestro proceso.',
  },
  {
    number: '02',
    title: 'PUNTUALIDAD',
    description:
      'Cumplimos los plazos acordados porque sabemos que tu tiempo y tu obra no esperan.',
  },
  {
    number: '03',
    title: 'HONESTIDAD',
    description:
      'Presupuestos claros y sin letra chica. Lo que cotizamos es lo que pagas al final.',
  },
  {
    number: '04',
    title: 'TRADICIÓN',
    description:
      'Más de 20 años de oficio herramental transmitido de generación en generación.',
  },
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="bg-[#0b0602] text-[#f1ece3] py-24 px-6 lg:px-12 border-t border-[#95918c]/10">
      <div className="container mx-auto">
        
        {/* ENCABEZADO */}
        <div className="mb-16">
          <span className="text-[#e95918] text-xs md:text-sm font-semibold tracking-[0.25em] uppercase block mb-2">
            QUIÉNES SOMOS
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#f1ece3] leading-none">
            MISIÓN, VISIÓN <br /> & VALORES
          </h2>
        </div>

        {/* MISIÓN Y VISIÓN (Ambas con hover dinámico) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* TARJETA MISIÓN */}
          <div className="p-8 md:p-10 border border-[#95918c]/15 transition-all duration-300 hover:bg-[#151210] hover:border-[#e95918]/40 hover:shadow-xl group">
            <span className="text-[#e95918] text-xs font-bold tracking-[0.25em] uppercase block mb-4">
              MISIÓN
            </span>
            <p className="text-[#95918c] text-sm md:text-base font-light leading-relaxed group-hover:text-[#f1ece3]/90 transition-colors duration-200">
              Brindar soluciones en herrería de alta calidad que protejan y embellezcan los espacios de nuestros clientes, con un servicio honesto, puntual y responsable que supere sus expectativas en cada proyecto.
            </p>
          </div>

          {/* TARJETA VISIÓN */}
          <div className="p-8 md:p-10 border border-[#95918c]/15 transition-all duration-300 hover:bg-[#151210] hover:border-[#e95918]/40 hover:shadow-xl group">
            <span className="text-[#e95918] text-xs font-bold tracking-[0.25em] uppercase block mb-4">
              VISIÓN
            </span>
            <p className="text-[#95918c] text-sm md:text-base font-light leading-relaxed group-hover:text-[#f1ece3]/90 transition-colors duration-200">
              Ser la herrería de referencia en la región, reconocida por la durabilidad de nuestros trabajos, la excelencia en el trato y la capacidad de transformar cualquier espacio con metal. Queremos que cada reja, cada puerta y cada ventanal que salga de nuestro taller sea una obra que perdure décadas.
            </p>
          </div>

        </div>

        {/* REJILLA DE VALORES (01 - 04) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-[#95918c]/15">
          {values.map((val) => (
            <div
              key={val.number}
              className="p-8 border-r border-b lg:border-b-0 border-[#95918c]/15 last:border-r-0 hover:bg-[#151210] transition-colors duration-300 group relative"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-extrabold uppercase tracking-wide text-[#f1ece3] group-hover:text-[#e95918] transition-colors duration-200">
                  {val.title}
                </h3>
                <span className="text-4xl font-black text-[#95918c]/20 group-hover:text-[#e95918]/40 transition-colors duration-200">
                  {val.number}
                </span>
              </div>
              <p className="text-[#95918c] text-sm leading-relaxed font-light group-hover:text-[#f1ece3]/80 transition-colors duration-200">
                {val.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
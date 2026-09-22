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
    <section 
      id="nosotros" 
      className="bg-[#f1ece3] text-[#0b0602] dark:bg-[#0b0602] dark:text-[#f1ece3] py-24 px-6 lg:px-12 border-t border-[#0b0602]/10 dark:border-[#95918c]/10 transition-colors duration-300"
    >
      <div className="container mx-auto">
        
        {/* ENCABEZADO */}
        <div className="mb-16">
          <span className="text-[#e95918] text-xs md:text-sm font-semibold tracking-[0.25em] uppercase block mb-2">
            QUIÉNES SOMOS
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#0b0602] dark:text-[#f1ece3] leading-none">
            MISIÓN, VISIÓN <br /> & VALORES
          </h2>
        </div>

        {/* MISIÓN Y VISIÓN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* TARJETA MISIÓN */}
          <div className="p-8 md:p-10 border border-[#0b0602]/10 dark:border-[#95918c]/15 group">
            <span className="text-[#e95918] text-xs font-bold tracking-[0.25em] uppercase block mb-4">
              MISIÓN
            </span>
            <p className="text-[#55504a] dark:text-[#95918c] text-sm md:text-base font-normal dark:font-light leading-relaxed">
              Brindar soluciones en herrería de alta calidad que protejan y embellezcan los espacios de nuestros clientes, con un servicio honesto, puntual y responsable que supere sus expectativas en cada proyecto.
            </p>
          </div>

          {/* TARJETA VISIÓN */}
          <div className="p-8 md:p-10 border border-[#0b0602]/10 dark:border-[#95918c]/15 group">
            <span className="text-[#e95918] text-xs font-bold tracking-[0.25em] uppercase block mb-4">
              VISIÓN
            </span>
            <p className="text-[#55504a] dark:text-[#95918c] text-sm md:text-base font-normal dark:font-light leading-relaxed">
              Ser la herrería de referencia en la región, reconocida por la durabilidad de nuestros trabajos, la excelencia en el trato y la capacidad de transformar cualquier espacio con metal. Queremos que cada reja, cada puerta y cada ventanal que salga de nuestro taller sea una obra que perdure décadas.
            </p>
          </div>

        </div>

        {/* REJILLA DE VALORES ENMARCADA (CUADRO COMPLETO SIN HOVER BG) */}
        <div className="border border-[#0b0602]/20 dark:border-[#95918c]/20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {values.map((val) => (
            <div
              key={val.number}
              className="p-8 border-b md:border-b-0 lg:border-r border-[#0b0602]/20 dark:border-[#95918c]/20 last:border-b-0 lg:last:border-r-0 group"
            >
              {/* ALINEACIÓN FLEX ENTRE TÍTULO Y NÚMERO SIN SUPERPOSICIÓN */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <h3 className="text-lg xl:text-xl font-extrabold uppercase tracking-wide text-[#0b0602] dark:text-[#f1ece3]">
                  {val.title}
                </h3>
                <span className="text-3xl xl:text-4xl font-black text-[#0b0602] dark:text-[#f1ece3] shrink-0 leading-none">
                  {val.number}
                </span>
              </div>

              {/* DESCRIPCIÓN */}
              <p className="text-[#55504a] dark:text-[#95918c] text-sm leading-relaxed font-normal dark:font-light">
                {val.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
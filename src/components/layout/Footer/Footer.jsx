import React from 'react';
import Logo2 from '../../../assets/images/Logo2.png';

export default function Footer() {
  return (
    <footer className="bg-[#0b0602] border-t border-[#95918c]/20 text-[#f1ece3] pt-16 pb-8 px-6 lg:px-12">
      <div className="container mx-auto">
        
        {/* BLOQUE PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#95918c]/15">
          
          {/* COLUMNA 1: LOGO, DESCRIPCIÓN Y REDES SOCIALES */}
          <div className="md:col-span-2 space-y-4">
            <a href="#inicio" className="flex items-center gap-3">
              <img 
                src={Logo2} 
                alt="Herrería Velfer Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold text-xl tracking-wider uppercase">
                <span className="text-[#e95918]">HERRERÍA</span>{' '}
                <span className="text-[#f1ece3]">VELFER</span>
              </span>
            </a>
            <p className="text-[#95918c] text-sm max-w-sm font-light leading-relaxed">
              Trabajos en estructuras metálicas, puertas, rejas y ventanales a medida. Más de 20 años de experiencia garantizando calidad, precisión y resistencia.
            </p>

            {/* REDES SOCIALES */}
            <div className="pt-2 flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/herreria.velfer" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#151210] border border-[#95918c]/20 flex items-center justify-center text-[#95918c] hover:text-[#1877F2] hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/5210000000000" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-[#151210] border border-[#95918c]/20 flex items-center justify-center text-[#95918c] hover:text-[#25D366] hover:border-[#25D366]/50 hover:bg-[#25D366]/10 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMNA 2: NAVEGACIÓN RÁPIDA */}
          <div>
            <h4 className="text-[#e95918] font-bold text-xs tracking-[0.2em] uppercase mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm text-[#95918c]">
              <li><a href="#inicio" className="hover:text-[#f1ece3] transition-colors duration-200">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-[#f1ece3] transition-colors duration-200">Servicios</a></li>
              <li><a href="#galeria" className="hover:text-[#f1ece3] transition-colors duration-200">Galería</a></li>
              <li><a href="#nosotros" className="hover:text-[#f1ece3] transition-colors duration-200">Nosotros</a></li>
            </ul>
          </div>

          {/* COLUMNA 3: HORARIOS DE ATENCIÓN */}
          <div>
            <h4 className="text-[#e95918] font-bold text-xs tracking-[0.2em] uppercase mb-4">
              Horario de Atención
            </h4>
            <ul className="space-y-2 text-sm text-[#95918c] font-light">
              <li>Lunes a Viernes: 8:00 - 18:00</li>
              <li>Sábados: 8:00 - 14:00</li>
              <li>Domingos: Cerrado</li>
            </ul>
          </div>

        </div>

        {/* PIE DE PÁGINA INFERIOR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#95918c]">
          <p>© {new Date().getFullYear()} Herrería Velfer. Todos los derechos reservados.</p>
          <p className="font-light">Diseño y desarrollo con precisión metálica.</p>
        </div>

      </div>
    </footer>
  );
}
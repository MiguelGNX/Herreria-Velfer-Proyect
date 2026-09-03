import React, { useState } from 'react';
import ImgPortonHome from '../../../assets/images/ImgPortonHome.jpg';
//import Logo from '../../../assets/images/Logo.png';
//import Logo2 from '../../../assets/images/Logo2.png';

export default function HomePage() {
    const [showNotice, setShowNotice] = useState(false);

    const handleQuoteClick = (e) => {
        e.preventDefault();
        setShowNotice(true);
        // Oculta automáticamente la notificación después de 4 segundos
        setTimeout(() => {
            setShowNotice(false);
        }, 4000);
    };

    return (
        <section id="inicio" className="relative min-h-screen bg-[#0b0602] text-[#f1ece3] flex items-center pt-20 pb-12 overflow-hidden">

            {/* NOTIFICACIÓN FLOTANTE / TOAST */}
            {showNotice && (
                <div className="fixed bottom-6 right-6 z-50 bg-[#191613] border border-[#e95918] text-[#f1ece3] px-5 py-4 rounded shadow-2xl flex items-start gap-3 max-w-sm transition-all duration-300">
                    <div className="text-[#e95918] text-lg mt-0.5">⚙️</div>
                    <div className="space-y-1">
                        <p className="font-display font-semibold text-xs tracking-wider uppercase text-[#e95918]">
                            Próximamente Cotizador en Línea
                        </p>
                        <p className="font-body text-xs text-[#95918c] leading-relaxed">
                            Estamos trabajando en esta función. Por el momento, contáctanos por WhatsApp para atenderte de inmediato.
                        </p>
                    </div>
                </div>
            )}

            {/* 1. CAPA DE FONDO E IMAGEN CON OVERLAY */}
            <div className="absolute inset-0 z-0">
                <img
                    src={ImgPortonHome}
                    alt="Herrería de rejas artesanales"
                    className="w-full h-full object-cover opacity-50 filter blur-none"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b0602] via-[#0b0602]/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0602] via-transparent to-[#0b0602]/40" /> 
            </div>

            {/* 2. CONTENEDOR PRINCIPAL */}
            <div className="relative z-10 container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* COLUMNA IZQUIERDA: MENSAJE PRINCIPAL */}
                    <div className="lg:col-span-8 space-y-4 sm:space-y-6">

                        {/* Encabezado H1 Principal */}
                        <h1 className="font-display text-4xl sm:text-6xl lg:text-8xl font-bold uppercase leading-[0.95] lg:leading-[0.9] tracking-tight">
                            Herrería <br />
                            <span className="text-[#e95918]">de Precisión</span>
                        </h1>

                        {/* Párrafo Descriptivo */}
                        <p className="font-body text-[#95918c] text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
                            Fabricamos ventanales, puertas, rejas y estructuras metálicas a medida.
                            Trabajo artesanal con materiales de primera, entregado a tiempo y con garantía.
                        </p>

                        {/* Botones de Acción */}
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                            <button
                                onClick={handleQuoteClick}
                                className="bg-[#e95918] hover:bg-[#d04b0f] text-[#0b0602] font-display font-semibold text-xs sm:text-sm tracking-wider uppercase px-6 sm:px-8 py-3.5 sm:py-4 transition-colors duration-200 cursor-pointer"
                            >
                                Solicitar Cotización
                            </button>
                            <a
                                href="#galeria"
                                className="bg-[#191613] hover:bg-[#231f1c] border border-[#95918c]/30 text-[#f1ece3] font-display font-semibold text-xs sm:text-sm tracking-wider uppercase px-6 sm:px-8 py-3.5 sm:py-4 transition-colors duration-200"
                            >
                                Ver Trabajos
                            </a>
                        </div>

                    </div>

                    {/* COLUMNA DERECHA: ESTADÍSTICAS */}
                    <div className="lg:col-span-4 flex flex-row lg:flex-col justify-between lg:justify-center gap-6 lg:space-y-8 lg:border-l lg:border-[#95918c]/20 lg:pl-12 pt-4 lg:pt-0">
                        <div>
                            <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e95918] tracking-tight">
                                500+
                            </div>
                            <div className="font-display text-[10px] sm:text-xs text-[#95918c] tracking-widest uppercase mt-1">
                                Proyectos
                            </div>
                        </div>

                        <div>
                            <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e95918] tracking-tight">
                                20+
                            </div>
                            <div className="font-display text-[10px] sm:text-xs text-[#95918c] tracking-widest uppercase mt-1">
                                Años
                            </div>
                        </div>

                        <div>
                            <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e95918] tracking-tight">
                                100%
                            </div>
                            <div className="font-display text-[10px] sm:text-xs text-[#95918c] tracking-widest uppercase mt-1">
                                Garantía
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}
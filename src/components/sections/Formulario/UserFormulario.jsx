import React, { useState } from 'react';

export default function UserFormulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    servicio: 'Puertas y Portones',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reemplaza con el número real de la herrería (10 dígitos con LADA 52)
    const numeroWhatsApp = '523511152066';

    // Formato de texto con saltos de línea y emojis
    const textoMensaje = 
      `*NUEVA SOLICITUD DE COTIZACIÓN - WEB VELFER*\n\n` +
      `👤 *Nombre:* ${formData.nombre}\n` +
      `📞 *Teléfono:* ${formData.telefono}\n` +
      `🛠️ *Servicio de interés:* ${formData.servicio}\n` +
      `📝 *Detalles del proyecto:* ${formData.mensaje}`;

    // Codificación segura para URL
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoMensaje)}`;

    // Abrir WhatsApp en una pestaña nueva
    window.open(urlWhatsApp, '_blank');
  };

  return (
    <section id="contacto" className="bg-[#0b0602] text-[#f1ece3] py-20 px-6 lg:px-12 border-t border-[#95918c]/20">
      <div className="container mx-auto max-w-4xl">
        
        {/* ENCABEZADO */}
        <div className="text-center space-y-3 mb-12">
          <span className="font-display text-xs font-semibold tracking-[0.25em] text-[#e95918] uppercase">
            Contacto Directo
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight">
            Solicita tu <span className="text-[#e95918]">Cotización</span>
          </h2>
          <p className="text-[#95918c] text-sm sm:text-base max-w-xl mx-auto font-light">
            Completa el siguiente formulario y te enviaremos un presupuesto detallado directamente a WhatsApp.
          </p>
        </div>

        {/* FORMULARIO */}
        <form 
          onSubmit={handleSubmit}
          className="bg-[#151210] border border-[#95918c]/20 p-6 sm:p-10 space-y-6 shadow-2xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* NOMBRE */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#95918c]">
                Nombre Completo *
              </label>
              <input
                type="text"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej. Juan Pérez"
                className="w-full bg-[#0b0602] border border-[#95918c]/30 text-[#f1ece3] px-4 py-3 text-sm focus:outline-none focus:border-[#e95918] transition-colors"
              />
            </div>

            {/* TELÉFONO */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#95918c]">
                Teléfono de Contacto *
              </label>
              <input
                type="tel"
                name="telefono"
                required
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Ej. 123 456 7890"
                className="w-full bg-[#0b0602] border border-[#95918c]/30 text-[#f1ece3] px-4 py-3 text-sm focus:outline-none focus:border-[#e95918] transition-colors"
              />
            </div>

          </div>

          {/* TIPO DE SERVICIO */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#95918c]">
              Tipo de Servicio Requerido
            </label>
            <select
              name="servicio"
              value={formData.servicio}
              onChange={handleChange}
              className="w-full bg-[#0b0602] border border-[#95918c]/30 text-[#f1ece3] px-4 py-3 text-sm focus:outline-none focus:border-[#e95918] transition-colors"
            >
              <option value="Puertas y Portones">Puertas y Portones</option>
              <option value="Ventanales y Ventanas">Ventanales y Ventanas</option>
              <option value="Rejas y Protecciones">Rejas y Protecciones</option>
              <option value="Estructuras Metálicas">Estructuras Metálicas</option>
              <option value="Trabajo Especializado / Otro">Trabajo Especializado / Otro</option>
            </select>
          </div>

          {/* MENSAJE / DETALLES */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#95918c]">
              Detalles del Trabajo o Medidas Aproximadas *
            </label>
            <textarea
              name="mensaje"
              required
              rows={4}
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Describe las medidas, materiales o características de la obra..."
              className="w-full bg-[#0b0602] border border-[#95918c]/30 text-[#f1ece3] px-4 py-3 text-sm focus:outline-none focus:border-[#e95918] transition-colors resize-none"
            />
          </div>

          {/* BOTÓN ENVIAR */}
          <button
            type="submit"
            className="w-full bg-[#e95918] hover:bg-[#d04b0f] text-[#0b0602] font-semibold text-xs sm:text-sm tracking-widest uppercase py-4 transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Enviar por WhatsApp</span>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </button>
        </form>

      </div>
    </section>
  );
}
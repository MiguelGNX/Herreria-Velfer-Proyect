export default {
  name: 'project',
  title: 'Proyecto de Galería',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título del Trabajo',
      type: 'string',
    },
    {
      name: 'material',
      title: 'Material Utilizado',
      type: 'string',
    },
    {
      name: 'paint',
      title: 'Tipo / Color de Pintura',
      type: 'string',
    },
    {
      name: 'dimensions',
      title: 'Medidas / Dimensiones',
      type: 'string',
    },
    {
      name: 'installationTime',
      title: 'Tiempo de Instalación',
      type: 'string',
    },
    {
      name: 'imageBefore',
      title: 'Foto Antes (Opcional)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageAfter',
      title: 'Foto Después / Trabajo Finalizado',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
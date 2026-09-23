import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'ciisovqa', // El ID de tu proyecto herreria-velfer
  dataset: 'production',
  useCdn: true, // Carga rápida desde la red CDN de Sanity
  apiVersion: '2024-01-01',
});

// Helper para convertir las referencias de imagen de Sanity en URLs utilizables
const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  if (!source) return '';
  return builder.image(source);
};
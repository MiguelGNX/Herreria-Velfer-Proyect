import { useEffect } from 'react';

export default function useDarkMode() {
  useEffect(() => {
    // Escucha el tema actual del dispositivo del cliente
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleThemeChange = (e) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    // Aplicar el tema actual al cargar
    handleThemeChange(mediaQuery);

    // Escuchar si el usuario cambia el tema de su sistema en tiempo real
    mediaQuery.addEventListener('change', handleThemeChange);
    return () => mediaQuery.removeEventListener('change', handleThemeChange);
  }, []);
}
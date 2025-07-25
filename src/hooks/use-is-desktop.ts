// src/hooks/use-is-desktop.ts
import { useState, useEffect } from 'react';

// El punto de corte 'lg' de Tailwind es 1024px
const DESKTOP_BREAKPOINT = 1024;

export const useIsDesktop = () => {
    const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

    useEffect(() => {
        // Esta función solo se ejecuta en el cliente
        const mediaQuery = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
        
        const handleResize = () => {
        setIsDesktop(mediaQuery.matches);
        };

        // Llama una vez para establecer el estado inicial
        handleResize();

        // Escucha los cambios en el tamaño de la ventana
        mediaQuery.addEventListener('change', handleResize);

        // Limpia el listener al desmontar el componente
        return () => mediaQuery.removeEventListener('change', handleResize);
    }, []);

    return isDesktop;
};
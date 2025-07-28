// src/hooks/use-is-desktop.ts
import { useState, useEffect } from 'react';

const DESKTOP_BREAKPOINT = 1024; // Punto de corte 'lg' de Tailwind

export const useIsDesktop = () => {
    const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
        
        const handleResize = () => {
        setIsDesktop(mediaQuery.matches);
        };

        handleResize();
        mediaQuery.addEventListener('change', handleResize);

        return () => mediaQuery.removeEventListener('change', handleResize);
    }, []);

    return isDesktop;
};
// src/components/layout/client-layout.tsx
'use client';

import { useState, useEffect } from 'react';
import { LauncherPage } from '@/components/homepage/LauncherPage';
import { useIsDesktop } from '@/hooks/use-is-desktop';

export function ClientLayout({ children }: { children: React.ReactNode }) {
    // Estado para la pantalla de carga inicial. Evita el "parpadeo".
    const [isLoading, setIsLoading] = useState(true);
    
    // Estado para decidir si se muestra el launcher.
    const [showLauncher, setShowLauncher] = useState(false);
    const isDesktop = useIsDesktop();

    useEffect(() => {
        // Esta lógica solo se ejecuta una vez en el cliente.
        if (isDesktop !== null) {
        const hasVisited = sessionStorage.getItem('hasVisitedLauncherpage') === 'true';

        // Decide si mostrar el launcher (solo en PC y en la primera visita).
        if (!hasVisited && isDesktop) {
            setShowLauncher(true);
        }
        
        // Una vez tomada la decisión, terminamos la carga.
        setIsLoading(false);
        }
    }, [isDesktop]);
    
    const handleEnterPortfolio = () => {
        sessionStorage.setItem('hasVisitedLauncherpage', 'true');
        setShowLauncher(false);
    };
    
    // Mientras isLoading es true, mostramos la pantalla de carga.
    if (isLoading) {
        // Usamos el mismo fondo que la LauncherPage para una transición perfecta.
        return (
        <div className="fixed inset-0 z-[10001] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1C304A] via-[#0A192F] to-[#01091A]"></div>
        );
    }

    // Una vez cargado, mostramos el portfolio y, si es necesario, el launcher por encima.
    return (
        <>
        {showLauncher && <LauncherPage onEnterPortfolio={handleEnterPortfolio} />}
        {children}
        </>
    );
}
// src/components/layout/client-layout.tsx
'use client'; // <-- Esta directiva es VITAL aquí.

import { useState, useEffect } from 'react';
import { LauncherPage } from '@/components/homepage/LauncherPage'; // Ajusta la ruta si es necesario

export function ClientLayout({ children }: { children: React.ReactNode }) {
  // Toda la lógica de estado (useState) y efectos (useEffect) vive aquí.
    const [showLauncher, setShowLauncher] = useState<boolean | null>(null);

    useEffect(() => {
        const hasVisited = sessionStorage.getItem('hasVisitedLauncherpage') === 'true';
        setShowLauncher(!hasVisited);
    }, []);

    useEffect(() => {
        if (showLauncher) {
        document.body.classList.add('overflow-hidden');
        } else {
        document.body.classList.remove('overflow-hidden');
        }
    }, [showLauncher]);

    const handleEnterPortfolio = () => {
        sessionStorage.setItem('hasVisitedLauncherpage', 'true');
        setShowLauncher(false);
    };

    // Mientras no sabemos qué mostrar, no renderizamos nada.
    if (showLauncher === null) {
        return null;
    }

    // Si debemos mostrar el launcher, lo hacemos.
    if (showLauncher) {
        return <LauncherPage onEnterPortfolio={handleEnterPortfolio} />;
    }

    // Si no, mostramos el contenido principal de la app (el portfolio).
    return <>{children}</>;
}
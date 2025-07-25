// src/components/layout/client-layout.tsx
'use client';

import { useState, useEffect } from 'react';
import { LauncherPage } from '@/components/homepage/LauncherPage';

export function ClientLayout({ children }: { children: React.ReactNode }) {
    const [showLauncher, setShowLauncher] = useState<boolean | null>(null);

    useEffect(() => {
        // Esta lógica se mantiene igual
        const hasVisited = sessionStorage.getItem('hasVisitedLauncherpage') === 'true';
        setShowLauncher(!hasVisited);
    }, []);
    
    const handleEnterPortfolio = () => {
        sessionStorage.setItem('hasVisitedLauncherpage', 'true');
        setShowLauncher(false);
    };
    
    // Mientras esperamos a saber si mostrar el launcher, no mostramos nada
    if (showLauncher === null) {
        return null; 
    }

    // Ahora la condición es simple: solo depende de si ya se ha visitado o no
    if (showLauncher) {
        return <LauncherPage onEnterPortfolio={handleEnterPortfolio} />;
    }

    // Si no, muestra el portfolio
    return <>{children}</>;
}
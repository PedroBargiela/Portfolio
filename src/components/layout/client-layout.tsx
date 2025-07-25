// src/components/layout/client-layout.tsx
'use client';

import { useState, useEffect } from 'react';
import { LauncherPage } from '@/components/homepage/LauncherPage';
import { useIsDesktop } from '@/hooks/use-is-desktop';

export function ClientLayout({ children }: { children: React.ReactNode }) {
    const [showLauncher, setShowLauncher] = useState<boolean | null>(null);
    const isDesktop = useIsDesktop(); // <-- 2. Usa el hook

    useEffect(() => {
        const hasVisited = sessionStorage.getItem('hasVisitedLauncherpage') === 'true';
        setShowLauncher(!hasVisited);
    }, []);
    
    const handleEnterPortfolio = () => {
        sessionStorage.setItem('hasVisitedLauncherpage', 'true');
        setShowLauncher(false);
    };
    
    // Mientras no sepamos el tamaño de la pantalla, no mostramos nada
    if (isDesktop === null) {
        return null;
    }

    // 3. Modifica la condición: solo muestra el launcher SI es escritorio Y es la primera visita
    if (isDesktop && showLauncher) {
        return <LauncherPage onEnterPortfolio={handleEnterPortfolio} />;
    }

    // Para móvil, o si ya se visitó en escritorio, muestra directamente el portfolio
    return <>{children}</>;
}
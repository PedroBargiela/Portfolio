// src/components/layout/client-layout.tsx
'use client';

import { useState, useEffect } from 'react';
import { LauncherPage } from '@/components/homepage/LauncherPage';
import { useIsDesktop } from '@/hooks/use-is-desktop';

export function ClientLayout({ children }: { children: React.ReactNode }) {
    const [showLauncher, setShowLauncher] = useState<boolean | null>(null);
    const isDesktop = useIsDesktop();

    useEffect(() => {
        const hasVisited = sessionStorage.getItem('hasVisitedLauncherpage') === 'true';
        setShowLauncher(!hasVisited);
    }, []);
    
    const handleEnterPortfolio = () => {
        sessionStorage.setItem('hasVisitedLauncherpage', 'true');
        setShowLauncher(false);
    };
    
    if (isDesktop === null) {
        return null; 
    }

    if (isDesktop && showLauncher) {
        return <LauncherPage onEnterPortfolio={handleEnterPortfolio} />;
    }

    return <>{children}</>;
}
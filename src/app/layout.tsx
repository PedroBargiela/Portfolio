// src/app/layout.tsx
"use client";

import { useState, useEffect } from 'react';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { LeftSocialBar, RightEmailBar } from '@/components/layout/side-bars';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { LauncherPage } from '@/components/homepage/LauncherPage'; // Ruta de importación

// La metadata sigue sin ir aquí
// export const metadata: Metadata = { ... };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showLauncher, setShowLauncher] = useState(true);
  // Nuevo estado para controlar la visibilidad del CustomCursor
  const [showCustomCursor, setShowCustomCursor] = useState(false); // Inicialmente oculto en la lanzadera

  useEffect(() => {
    if (showLauncher) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [showLauncher]);

  const handleEnterPortfolio = () => {
    setShowLauncher(false);
    // Cuando entramos al portfolio, mostramos el CustomCursor
    setShowCustomCursor(true);
  };

  // Función para que LauncherPage notifique su estado de actividad
  const handleLauncherActive = (isActive: boolean) => {
    // Si la lanzadera está activa, ocultamos el CustomCursor
    // Si la lanzadera está saliendo (no activa), esperamos a que handleEnterPortfolio lo muestre
    if (isActive) {
      setShowCustomCursor(false);
    }
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {/* Renderiza CustomCursor solo si showCustomCursor es true */}
        {showCustomCursor && <CustomCursor />}

        {showLauncher && (
          <LauncherPage
            onEnterPortfolio={handleEnterPortfolio}
            onLauncherActive={handleLauncherActive} // Pasamos la nueva prop
          />
        )}

        {!showLauncher && (
          <div className="flex min-h-screen flex-col">
            <Header />
            <LeftSocialBar />
            <RightEmailBar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        )}

        <Toaster />
      </body>
    </html>
  );
}
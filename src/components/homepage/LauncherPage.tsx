// src/components/homepage/LauncherPage.tsx
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface LauncherPageProps {
    onEnterPortfolio: () => void;
    onLauncherActive: (isActive: boolean) => void;
}

export function LauncherPage({ onEnterPortfolio, onLauncherActive }: LauncherPageProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        onLauncherActive(true);

        const handleMouseMove = (event: MouseEvent) => {
            if (containerRef.current) {
                const { clientX, clientY } = event;
                const { offsetWidth, offsetHeight } = containerRef.current;

                const x = (clientX / offsetWidth) - 0.5;
                const y = (clientY / offsetHeight) - 0.5;
                setMousePosition({ x, y });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            onLauncherActive(false);
        };
    }, [onLauncherActive]);

    const getParallaxStyle = (depth: number) => {
        return {
            transform: `translate3d(calc(${mousePosition.x * depth}px - 50%), calc(${mousePosition.y * depth}px - 50%), 0)`,
            transition: 'transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        };
    };

    const handleButtonClick = () => {
        setExiting(true);
        setTimeout(() => {
            onEnterPortfolio();
        }, 500);
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "fixed inset-0 flex flex-col items-center justify-center text-center z-[10000] overflow-hidden",
                "transition-opacity duration-500 ease-out",
                "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1C304A] via-[#0A192F] to-[#01091A]",
                "bg-cover bg-center", // Asegura que el degradado ocupe toda la pantalla
                { "opacity-0": exiting }
            )}
        >
            {/* Elementos de fondo (formas y texto) con un div wrapper para el parallax */}
            <div
                className="absolute"
                style={{ ...getParallaxStyle(70), top: '10%', left: '15%' }}
            >
                <div className="w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-float-slow"></div>
            </div>
            <div
                className="absolute"
                style={{ ...getParallaxStyle(40), bottom: '5%', right: '10%' }}
            >
                <div className="w-48 h-48 bg-green-500/10 rounded-full blur-2xl animate-float"></div>
            </div>
            <div
                className="absolute"
                style={{ ...getParallaxStyle(30), top: '20%', right: '5%' }}
            >
                <div className="text-muted-foreground text-opacity-20 text-7xl font-mono select-none animate-float-fast">
                    {'{}'}
                </div>
            </div>
            <div
                className="absolute"
                style={{ ...getParallaxStyle(55), bottom: '15%', left: '20%' }}
            >
                <div className="text-muted-foreground text-opacity-20 text-6xl font-mono select-none animate-float-slow">
                    {'</>'}
                </div>
            </div>

            {/* --- Logos de tecnologías flotando y con parallax --- */}
            <div
                className="absolute"
                style={{ ...getParallaxStyle(80), top: '40%', left: '10%' }}
            >
                <img
                    src="/logos/javascript.svg"
                    alt="JavaScript Logo"
                    className="w-16 h-16 opacity-30 animate-float-slow"
                />
            </div>
            <div
                className="absolute"
                style={{ ...getParallaxStyle(70), top: '60%', left: '15%' }}
            >
                <img
                    src="/logos/react.svg"
                    alt="React Logo"
                    className="w-16 h-16 opacity-30 animate-float"
                />
            </div>
            <div
                className="absolute"
                style={{ ...getParallaxStyle(90), top: '15%', left: '40%' }}
            >
                <img
                    src="/logos/nextjs.svg"
                    alt="Next.js Logo"
                    className="w-20 h-20 opacity-30 animate-float-fast"
                />
            </div>
            <div
                className="absolute"
                style={{ ...getParallaxStyle(60), bottom: '20%', right: '10%' }}
            >
                <img
                    src="/logos/python.svg"
                    alt="Python Logo"
                    className="w-16 h-16 opacity-30 animate-float-slow"
                />
            </div>
            <div
                className="absolute"
                style={{ ...getParallaxStyle(45), bottom: '10%', left: '45%' }}
            >
                <img
                    src="/logos/php.svg"
                    alt="PHP Logo"
                    className="w-16 h-16 opacity-30 animate-float"
                />
            </div>
            <div
                className="absolute"
                style={{ ...getParallaxStyle(85), top: '25%', left: '25%' }}
            >
                <img
                    src="/logos/css.svg"
                    alt="CSS Logo"
                    className="w-16 h-16 opacity-30 animate-float-fast"
                />
            </div>
            <div
                className="absolute"
                style={{ ...getParallaxStyle(55), top: '50%', right: '5%' }}
            >
                <img
                    src="/logos/docker.svg"
                    alt="Docker Logo"
                    className="w-20 h-20 opacity-30 animate-float-slow"
                />
            </div>
            <div
                className="absolute"
                style={{ ...getParallaxStyle(70), bottom: '70%', left: '80%' }}
            >
                <img
                    src="/logos/git.svg"
                    alt="Git Logo"
                    className="w-16 h-16 opacity-30 animate-float"
                />
            </div>
            <div
                className="absolute"
                style={{ ...getParallaxStyle(95), top: '10%', right: '25%' }}
            >
                <img
                    src="/logos/github.svg"
                    alt="GitHub Logo"
                    className="w-20 h-20 opacity-30 animate-float-fast"
                />
            </div>
            <div
                className="absolute"
                style={{ ...getParallaxStyle(50), bottom: '5%', right: '40%' }}
            >
                <img
                    src="/logos/nodejs.svg"
                    alt="Node.js Logo"
                    className="w-20 h-20 opacity-30 animate-float-slow"
                />
            </div>
            <div
                className="absolute"
                style={{ ...getParallaxStyle(65), top: '75%', left: '30%' }}
            >
                <img
                    src="/logos/codeigniter.svg"
                    alt="CodeIgniter Logo"
                    className="w-16 h-16 opacity-30 animate-float"
                />
            </div>
            <div
                className="absolute"
                style={{ ...getParallaxStyle(80), top: '10%', left: '20%' }}
            >
                <img
                    src="/logos/prestashop.svg"
                    alt="PrestaShop Logo"
                    className="w-16 h-16 opacity-30 animate-float-fast"
                />
            </div>
            <div
                className="absolute"
                style={{ ...getParallaxStyle(70), bottom: '15%', left: '75%' }}
            >
                <img
                    src="/logos/wordpress.svg"
                    alt="WordPress Logo"
                    className="w-20 h-20 opacity-30 animate-float-slow"
                />
            </div>

            {/* Contenido principal (más cercano, fijo en su posición) */}
            <div className="relative z-10 flex flex-col items-center space-y-6">
                <h1 className="text-6xl md:text-8xl font-bold text-foreground transition-colors duration-300">
                    Pedro Bargiela
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                    Desarrollador Full Stack | Transformando ideas en experiencias digitales interactivas.
                </p>
                <Button
                    onClick={handleButtonClick}
                    className="px-8 py-4 text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                >
                    Entrar al Portfolio
                </Button>
            </div>
        </div>
    );
}
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

    // Función para aplicar el estilo de transformación parallax
    // Ajustamos la transición para mayor soltura
    const getParallaxStyle = (depth: number) => {
        return {
        transform: `translate(calc(${mousePosition.x * depth}px - 50%), calc(${mousePosition.y * depth}px - 50%))`,
        // Una transición ligeramente más larga y con una función de tiempo que da más "soltura"
        transition: 'transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Ease-out quad para un movimiento más elástico
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
            "fixed inset-0 bg-background flex flex-col items-center justify-center text-center z-[10000] overflow-hidden",
            "transition-opacity duration-500 ease-out",
            { "opacity-0": exiting }
        )}
        >
        {/* Elementos de fondo con parallax (ajustados para diferentes "pesos") */}
        {/* Juega con los valores de 'depth'. Más alto = más movimiento = "más ligero" */}
        <div
            className="absolute w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"
            style={{ ...getParallaxStyle(70), top: '10%', left: '15%' }} // Muy ligero, se mueve mucho
        ></div>
        <div
            className="absolute w-60 h-60 bg-green-500/10 rounded-full blur-2xl"
            style={{ ...getParallaxStyle(40), bottom: '5%', right: '10%' }} // Medio
        ></div>
        <div
            className="absolute text-muted-foreground text-opacity-20 text-9xl font-mono select-none"
            style={{ ...getParallaxStyle(30), top: '20%', right: '5%' }} // Más "pesado", se mueve menos
        >
            {'{}'}
        </div>
        <div
            className="absolute text-muted-foreground text-opacity-20 text-8xl font-mono select-none"
            style={{ ...getParallaxStyle(55), bottom: '15%', left: '20%' }} // Ligero
        >
            {'</>'}
        </div>

        {/* Logos de tecnologías (ejemplos con diferentes pesos) */}
        <img
            src="/logos/react.svg"
            alt="React Logo"
            className="absolute w-20 h-20 opacity-30"
            style={{ ...getParallaxStyle(80), top: '50%', left: '10%' }} // Muy ligero, cerca
        />
        <img
            src="/logos/tailwind.svg"
            alt="Tailwind Logo"
            className="absolute w-20 h-20 opacity-30"
            style={{ ...getParallaxStyle(65), bottom: '30%', right: '20%' }} // Ligero
        />
        <img
            src="/logos/nextjs.svg"
            alt="Next.js Logo"
            className="absolute w-24 h-24 opacity-30"
            style={{ ...getParallaxStyle(90), top: '15%', left: '40%' }} // Súper ligero, muy cercano
        />
        <img
            src="/logos/php.svg"
            alt="PHP Logo"
            className="absolute w-28 h-28 opacity-30"
            style={{ ...getParallaxStyle(45), bottom: '10%', left: '45%' }} // Más pesado
        />
        <img
            src="/logos/vscode.svg"
            alt="VS Code Logo"
            className="absolute w-32 h-32 opacity-30"
            style={{ ...getParallaxStyle(75), top: '65%', right: '15%' }} // Ligero
        />
        {/* Puedes añadir más elementos y seguir variando los valores de 'depth' */}

        {/* Contenido principal (más cercano, pero fijo en su posición) */}
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
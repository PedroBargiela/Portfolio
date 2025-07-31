'use client';

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useIsDesktop } from '@/hooks/use-is-desktop';

interface LauncherPageProps {
    onEnterPortfolio: () => void;
}

export function LauncherPage({ onEnterPortfolio }: LauncherPageProps) {
    const isDesktop = useIsDesktop();
    const containerRef = useRef<HTMLDivElement>(null);
    const [exiting, setExiting] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // Lógica del giroscopio
    const handleOrientation = (event: DeviceOrientationEvent) => {
        if (event.gamma !== null && event.beta !== null) {
        const x = event.gamma / 45; // Aumentamos la sensibilidad
        const y = event.beta / 90;
        setPosition({ x: Math.min(Math.max(x, -1), 1), y: Math.min(Math.max(y, -1), 1) });
        }
    };

    // Función para pedir permiso e iniciar la escucha
    const startGyroscope = async () => {
        if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
        const permission = await (DeviceOrientationEvent as any).requestPermission();
        if (permission === 'granted') {
            window.addEventListener('deviceorientation', handleOrientation);
        }
        } else {
        // Para navegadores que no requieren permiso (ej. Android)
        window.addEventListener('deviceorientation', handleOrientation);
        }
    };

    useEffect(() => {
        // Lógica para PC (ratón)
        const handleMouseMove = (event: MouseEvent) => {
        if (containerRef.current) {
            const { clientX, clientY } = event;
            const { offsetWidth, offsetHeight } = containerRef.current;
            const x = (clientX / offsetWidth) - 0.5;
            const y = (clientY / offsetHeight) - 0.5;
            setPosition({ x, y });
        }
        };

        if (isDesktop) {
        window.addEventListener('mousemove', handleMouseMove);
        }

        // Limpieza del efecto
        return () => {
        if (isDesktop) {
            window.removeEventListener('mousemove', handleMouseMove);
        } else {
            window.removeEventListener('deviceorientation', handleOrientation);
        }
        };
    }, [isDesktop]);

    const getParallaxStyle = (depth: number) => {
        return {
        transform: `translate3d(calc(${position.x * depth}px - 50%), calc(${position.y * depth}px - 50%), 0)`,
        transition: 'transform 0.1s ease-out',
        };
    };

    const handleButtonClick = () => {
        // Si es móvil, intentamos activar el giroscopio
        if (!isDesktop) {
        startGyroscope();
        }

        setExiting(true);
        setTimeout(() => {
        onEnterPortfolio();
        }, 500);
    };
    
    if (isDesktop === null) return null;

    return (
        <div
        ref={containerRef}
        className={cn(
            "fixed inset-0 flex flex-col items-center justify-center text-center z-[10000] overflow-hidden",
            "transition-opacity duration-500 ease-out",
            "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1C304A] via-[#0A192F] to-[#01091A]",
            { "opacity-0": exiting }
        )}
        >
            {/* ====================================================== */}
            {/* RENDERIZADO CONDICIONAL DE ICONOS DE FONDO */}
            {/* ====================================================== */}
            {isDesktop ? (
                <>
                {/* --- ICONOS PARA ESCRITORIO (PC) - La versión original --- */}
                <div className="absolute" style={{ ...getParallaxStyle(70), top: '10%', left: '15%' }}><div className="w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-float-slow"></div></div>
                <div className="absolute" style={{ ...getParallaxStyle(40), bottom: '5%', right: '10%' }}><div className="w-48 h-48 bg-green-500/10 rounded-full blur-2xl animate-float"></div></div>
                <div className="absolute" style={{ ...getParallaxStyle(30), top: '20%', right: '5%' }}><div className="text-muted-foreground text-opacity-20 text-7xl font-mono select-none animate-float-fast">{'{}'}</div></div>
                <div className="absolute" style={{ ...getParallaxStyle(55), bottom: '15%', left: '20%' }}><div className="text-muted-foreground text-opacity-20 text-6xl font-mono select-none animate-float-slow">{'</>'}</div></div>
                <div className="absolute" style={{ ...getParallaxStyle(80), top: '40%', left: '10%' }}><img src="/logos/javascript.svg" alt="Pedro Bargiela | Desarrollador FullStack. JavaScript" className="w-16 h-16 opacity-30 animate-float-slow" /></div>
                <div className="absolute" style={{ ...getParallaxStyle(70), top: '65%', left: '15%' }}><img src="/logos/react.svg" alt="Pedro Bargiela | Desarrollador FullStack. React" className="w-16 h-16 opacity-30 animate-float" /></div>
                <div className="absolute" style={{ ...getParallaxStyle(90), top: '15%', left: '40%' }}><img src="/logos/nextjs.svg" alt="Pedro Bargiela | Desarrollador FullStack. Next.js" className="w-20 h-20 opacity-30 animate-float-fast" /></div>
                <div className="absolute" style={{ ...getParallaxStyle(60), bottom: '20%', right: '10%' }}><img src="/logos/python.svg" alt="Pedro Bargiela | Desarrollador FullStack. Python" className="w-16 h-16 opacity-30 animate-float-slow" /></div>
                <div className="absolute" style={{ ...getParallaxStyle(45), bottom: '10%', left: '45%' }}><img src="/logos/php.svg" alt="Pedro Bargiela | Desarrollador FullStack. PHP" className="w-16 h-16 opacity-30 animate-float" /></div>
                <div className="absolute" style={{ ...getParallaxStyle(85), top: '25%', left: '25%' }}><img src="/logos/css.svg" alt="Pedro Bargiela | Desarrollador FullStack. CSS" className="w-16 h-16 opacity-30 animate-float-fast" /></div>
                <div className="absolute" style={{ ...getParallaxStyle(55), top: '50%', right: '5%' }}><img src="/logos/docker.svg" alt="Pedro Bargiela | Desarrollador FullStack. Docker" className="w-20 h-20 opacity-30 animate-float-slow" /></div>
                <div className="absolute" style={{ ...getParallaxStyle(70), bottom: '70%', left: '80%' }}><img src="/logos/git.svg" alt="Pedro Bargiela | Desarrollador FullStack. Git" className="w-16 h-16 opacity-30 animate-float" /></div>
                <div className="absolute" style={{ ...getParallaxStyle(95), top: '10%', right: '25%' }}><img src="/logos/github.svg" alt="Pedro Bargiela | Desarrollador FullStack. GitHub" className="w-20 h-20 opacity-30 animate-float-fast" /></div>
                <div className="absolute" style={{ ...getParallaxStyle(40), top: '15%', right: '40%' }}><img src="/logos/aws.svg" alt="Pedro Bargiela | Desarrollador FullStack. AWS" className="w-20 h-20 opacity-30 animate-float-fast" /></div>
                <div className="absolute" style={{ ...getParallaxStyle(50), bottom: '5%', right: '40%' }}><img src="/logos/nodejs.svg" alt="Pedro Bargiela | Desarrollador FullStack. Node.js" className="w-20 h-20 opacity-30 animate-float-slow" /></div>
                <div className="absolute" style={{ ...getParallaxStyle(65), top: '75%', left: '30%' }}><img src="/logos/codeigniter.svg" alt="Pedro Bargiela | Desarrollador FullStack. CodeIgniter" className="w-16 h-16 opacity-30 animate-float" /></div>
                <div className="absolute" style={{ ...getParallaxStyle(80), top: '10%', left: '20%' }}><img src="/logos/prestashop.svg" alt="Pedro Bargiela | Desarrollador FullStack. PrestaShop" className="w-16 h-16 opacity-30 animate-float-fast" /></div>
                <div className="absolute" style={{ ...getParallaxStyle(70), bottom: '15%', left: '75%' }}><img src="/logos/wordpress.svg" alt="Pedro Bargiela | Desarrollador FullStack. WordPress" className="w-20 h-20 opacity-30 animate-float-slow" /></div>
                </>
            ) : (
                <>
                {/* --- ICONOS PARA MÓVIL (RESPONSIVE) - La versión con 8 logos --- */}
                <div className="absolute" style={{ ...getParallaxStyle(80), top: '15%', left: '15%' }}><img src="/logos/react.svg" alt="Pedro Bargiela | Desarrollador FullStack. React" className="w-16 h-16 opacity-20 animate-float" /></div>
                <div className="absolute" style={{ ...getParallaxStyle(90), top: '13%', right: '30%' }}><img src="/logos/nextjs.svg" alt="Pedro Bargiela | Desarrollador FullStack. Next.js" className="w-20 h-20 opacity-20 animate-float-fast" /></div>
                <div className="absolute" style={{ ...getParallaxStyle(70), top: '13%', right: '8%' }}><img src="/logos/javascript.svg" alt="Pedro Bargiela | Desarrollador FullStack. JavaScript" className="w-14 h-14 opacity-20 animate-float-slow" /></div>
                <div className="absolute" style={{ ...getParallaxStyle(60), bottom: '2%', left: '15%' }}><img src="/logos/python.svg" alt="Pedro Bargiela | Desarrollador FullStack. Python" className="w-16 h-16 opacity-20 animate-float-slow" /></div>
                <div className="absolute" style={{ ...getParallaxStyle(50), bottom: '0%', right: '0%' }}><img src="/logos/nodejs.svg" alt="Pedro Bargiela | Desarrollador FullStack. Node.js" className="w-20 h-20 opacity-20 animate-float" /></div>
                <div className="absolute" style={{ ...getParallaxStyle(85), top: '65%', left: '20%' }}><img src="/logos/codeigniter.svg" alt="Pedro Bargiela | Desarrollador FullStack. CodeIgniter" className="w-20 h-20 opacity-20 animate-float-fast" /></div>
                <div className="absolute" style={{ ...getParallaxStyle(75), bottom: '25%', right: '5%' }}><img src="/logos/php.svg" alt="Pedro Bargiela | Desarrollador FullStack. PHP" className="w-16 h-16 opacity-20 animate-float" /></div>
                <div className="absolute" style={{ ...getParallaxStyle(65), top: '90%', right: '30%' }}><img src="/logos/git.svg" alt="Pedro Bargiela | Desarrollador FullStack. Git" className="w-20 h-20 opacity-20 animate-float-slow" /></div>
                </>
            )}
            {/* Contenido principal (más cercano, fijo en su posición) */}
            <div className="relative z-10 flex w-4/5 flex-col items-center md:w-full">
                <h1 className="text-5xl font-bold text-foreground transition-colors duration-300 md:text-8xl">
                    Pedro Bargiela
                </h1>
                <p className="mt-5 mb-2 max-w-2xl text-lg text-muted-foreground md:text-2xl">
                    Desarrollador Full Stack | ML, Data Science & IA
                </p>
                <p className="mt-0 mb-10 max-w-xl text-base text-muted-foreground md:text-xl">
                    Transformo datos en aplicaciones inteligentes y funcionales para el mundo real
                </p>
                {/* <Button
                    onClick={handleButtonClick}
                    className="px-8 py-4 text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                >
                    Entrar al Portfolio
                </Button> */}
                    <div className="sp">

                    <button className="sparkle-button" onClick={handleButtonClick}>
                        <span className="spark"></span>
                        
                        <span className="backdrop"></span>
                        <svg className="sparkle" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z" fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z" fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z" fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <span className="text">Entrar al Portfolio</span>
                    </button>
                    <div className="bodydrop"></div>
                    <span aria-hidden="true" className="particle-pen">
                        <svg className="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <svg className="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <svg className="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <svg className="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <svg className="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <svg className="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <svg className="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <svg className="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <svg className="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <svg className="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg><svg className="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg><svg className="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <svg className="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg><svg className="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg><svg className="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg><svg className="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg><svg className="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg><svg className="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg><svg className="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg><svg className="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </span>
                    </div>
            </div>
        </div>
    );
}
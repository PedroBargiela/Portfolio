// src/components/ui/mobile-contact-bar.tsx
'use client';

import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileContactBarProps {
    showBackToTop: boolean;
    onScrollToTop: () => void;
}

export function MobileContactBar({ showBackToTop, onScrollToTop }: MobileContactBarProps) {
    return (
        <div className="fixed bottom-0 left-0 z-50 w-full border-t border-border bg-background/95 p-2 backdrop-blur-sm lg:hidden">
        {/* Usamos flexbox para alinear los dos botones */}
            <div className="flex items-center justify-between">
                
                {/* Botón de Contactar a la izquierda */}
                <Link 
                href="#contact"
                className="rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-105 active:scale-95"
                >
                    Contactar
                </Link>

                {/* Botón "Volver Arriba" a la derecha (aparece con animación) */}
                <button
                onClick={onScrollToTop}
                className={cn(
                    "rounded-full bg-card p-3 text-primary transition-opacity duration-300",
                    showBackToTop ? "opacity-100" : "opacity-0"
                )}
                aria-label="Volver arriba"
                >
                <ArrowUp className="h-6 w-6" />
                </button>

            </div>
        </div>
    );
}
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // Ya no necesitamos 'isVisible' para controlar la visibilidad del div,
  // ya que siempre estará visible.
  // const [isVisible, setIsVisible] = useState(false); // <--- Puedes eliminar esta línea

  const textElementsRef = useRef<HTMLElement[]>([]);
  const currentHoveredText = useRef<HTMLElement | null>(null);

  useEffect(() => {
    textElementsRef.current = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, span.interactive-text'));

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      // Ya no necesitamos esta línea porque el div siempre estará visible
      // if (!isVisible) setIsVisible(true); // <--- Puedes eliminar o comentar esta línea

      // Lógica para el efecto de texto cercano (se mantiene igual)
      const radius = 100;
      let foundTextElement: HTMLElement | null = null;

      for (const el of textElementsRef.current) {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
        );

        if (distance < radius) {
          foundTextElement = el;
          break;
        }
      }

      if (foundTextElement && foundTextElement !== currentHoveredText.current) {
        if (currentHoveredText.current) {
          currentHoveredText.current.classList.remove('highlighted-text');
        }
        foundTextElement.classList.add('highlighted-text');
        currentHoveredText.current = foundTextElement;
      } else if (!foundTextElement && currentHoveredText.current) {
        currentHoveredText.current.classList.remove('highlighted-text');
        currentHoveredText.current = null;
      }
    };

    // Quitamos los manejadores de mouseleave/mouseenter que controlaban la opacidad del cursor
    // const handleMouseLeave = () => {
    //     setIsVisible(false); // <--- Eliminar o comentar
    //     if (currentHoveredText.current) {
    //       currentHoveredText.current.classList.remove('highlighted-text');
    //       currentHoveredText.current = null;
    //     }
    // }

    // const handleMouseEnter = () => {
    //     setIsVisible(true); // <--- Eliminar o comentar
    // }

    window.addEventListener('mousemove', updatePosition);
    // Eliminar estas líneas, ya no las necesitamos para la visibilidad del cursor
    // document.body.addEventListener('mouseleave', handleMouseLeave);
    // document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      // Eliminar estas líneas también del cleanup
      // document.body.removeEventListener('mouseleave', handleMouseLeave);
      // document.body.removeEventListener('mouseenter', handleMouseEnter);
      if (currentHoveredText.current) {
        currentHoveredText.current.classList.remove('highlighted-text');
      }
    };
  }, []); // El array de dependencias se puede dejar vacío si ya no depende de isVisible

  return (
    <div
      className={cn(
        "fixed z-[9999] pointer-events-none rounded-full transition-opacity duration-150 ease-out",
        "hidden md:block",
        "w-96 h-96 -translate-x-48 -translate-y-48", // Ajusta estos valores a tu tamaño deseado
        "bg-[#00F0FF]/[0.08] blur-3xl", // Tu tono de antorcha
        // Eliminamos las clases de opacidad condicionales
        // {
        //   "opacity-0": !isVisible, // <--- Eliminar o comentar
        //   "opacity-100": isVisible, // <--- Eliminar o comentar
        // }
      )}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}
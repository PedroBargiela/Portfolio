// src/components/layout/footer.tsx
import React from 'react';

export default async function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py- text-center text-slate-500 font-mono text-sm">
      <p>
        Diseñado y desarrollado por Pedro Bargiela.
      </p>
      <p>
        Construido con React, Next.js y Tailwind CSS. Desplegado en Vercel.
      </p>
      <p className="mt-4">
        &copy;{currentYear}. Todos los derechos reservados.
      </p>
    </footer>
  );
}
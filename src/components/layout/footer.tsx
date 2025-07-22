// src/components/layout/footer.tsx
// NO 'use client'; aquí. Este es un Server Component.

import React from 'react';

// Puedes hacerlo async si necesitas obtener datos del servidor (ej: fecha de copyright dinámica)
export default async function Footer() {
  // const currentYear = await fetch('/api/current-year').then(res => res.json());

  return (
    <footer className="w-full py-4 text-center bg-gray-900 text-gray-400">
      <p>&copy; {new Date().getFullYear()} Mi Portfolio. Todos los derechos reservados.</p>
    </footer>
  );
}
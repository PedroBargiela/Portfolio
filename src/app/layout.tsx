// src/app/layout.tsx

// NO debe haber 'use client' aquí para que metadata funcione
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { ClientLayout } from '@/components/layout/client-layout';
import { MobileContactBar } from '@/components/ui/mobile-contact-bar';
import Header from '@/components/layout/header';
import { LeftSocialBar, RightEmailBar } from '@/components/layout/side-bars';
import { Analytics } from '@/components/analytics';


// Configuración de fuentes optimizada con next/font
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});
const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-fira-code',
});

// Metadatos completos para SEO
export const metadata: Metadata = {
  title: 'Pedro Bargiela | Desarrollador Full Stack & IA',
  description: 'Portfolio de Pedro Bargiela, un desarrollador de software Full Stack con especialización en Machine Learning, Data Science e Inteligencia Artificial.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} dark`} suppressHydrationWarning={true}>
      <head>
        {/* Aquí va tu script de datos estructurados (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Pedro Bargiela",
              "url": "https://www.pedrobargiela.com",
              "sameAs": [
                  "https://www.linkedin.com/in/pedrobargielalemos/",
                  "https://github.com/PedroBargiela"
              ],
              "jobTitle": "Desarrollador Full Stack | Machine Learning, Data Science & IA"
          })}}
        />
      </head>
      {/* Usamos font-sans para que se aplique la fuente 'Inter' desde tu tailwind.config */}
      <body className="font-sans antialiased bg-background text-foreground pb-24 lg:pb-0">
        
        {/* Componentes que se cargan en todas las vistas */}
        <Analytics measurementId="G-VVPVRSJE4P" />
        <CustomCursor />
        
        <div className="flex min-h-screen flex-col">
          <main className="flex-grow">
            {/* ClientLayout gestiona si se muestra la LauncherPage o el contenido */}
            <ClientLayout>{children}</ClientLayout>
          </main>
        </div>

        <Toaster />
      </body>
    </html>
  );
}
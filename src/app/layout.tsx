import './globals.css';
import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { ClientLayout } from '@/components/layout/client-layout';
import { MobileContactBar } from '@/components/ui/mobile-contact-bar';
import Header from '@/components/layout/header';
import { Analytics } from '@/components/analytics';


const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});
const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-fira-code',
});

// 2. Metadatos completos para SEO
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
        
      </head>
      <body className="font-body antialiased bg-background text-foreground pb-24 lg:pb-0">
        <Analytics measurementId="G-VVPVRSJE4P" />
        {/* Renderiza CustomCursor solo si showCustomCursor es true */}
        { <CustomCursor />}

        <div className="flex min-h-screen flex-col">
            <main className="flex-grow"><ClientLayout>{children}</ClientLayout></main>
          </div>

        <Toaster />
      </body>
    </html>
  );
}
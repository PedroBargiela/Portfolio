
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { LeftSocialBar, RightEmailBar } from '@/components/layout/side-bars';
import { CustomCursor } from '@/components/ui/custom-cursor';

export const metadata: Metadata = {
  title: 'Pedro Bargiela | Software Developer',
  description: 'A dynamic and personal portfolio for Pedro Bargiela, Software Developer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <CustomCursor />
        <div className="flex min-h-screen flex-col">
          <Header />
          <LeftSocialBar />
          <RightEmailBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}

    
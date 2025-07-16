
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { ReactLogo } from '../icons/react-logo';

const navLinks = [
  { href: '#about', label: 'Sobre Mí' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#skills', label: 'Conocimientos' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#contact', label: 'Contacto' },
];

export default function Header() {
  const isMobile = useIsMobile();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const NavLinks = ({ className, onLinkClick }: { className?: string; onLinkClick?: () => void }) => (
    <nav className={cn("flex items-center gap-4 lg:gap-6", className)}>
      {navLinks.map((link, index) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onLinkClick}
          className="font-mono text-sm text-slate-300 transition-colors hover:text-primary"
        >
          <span className="mr-1 text-primary">0{index + 1}.</span>
          {link.label}
        </Link>
      ))}
      <Button asChild variant="outline" className="ml-4 font-mono">
        <a href="/resume.pdf" target="_blank">CV</a>
      </Button>
    </nav>
  );

  return (
    <header className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "h-16 bg-background/80 shadow-lg backdrop-blur" : "h-20 bg-transparent"
      )}>
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <Link href="#home" className="flex items-center gap-2 text-primary transition-transform hover:scale-105">
          <ReactLogo className="h-8 w-8" />
        </Link>
        
        {isMobile ? (
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-8 w-8 text-primary" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-card">
              <div className="flex h-full flex-col justify-center p-6 text-center">
                 <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} className="absolute top-4 right-4">
                    <X className="h-8 w-8 text-primary" />
                    <span className="sr-only">Cerrar menú</span>
                 </Button>
                <NavLinks 
                  className="flex-col items-center space-y-8 text-lg" 
                  onLinkClick={() => setMobileMenuOpen(false)} 
                />
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <NavLinks />
        )}
      </div>
    </header>
  );
}

    
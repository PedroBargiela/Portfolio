'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ArrowRight, Briefcase, GraduationCap, Brain, Mail, Send, Github, Instagram, Linkedin } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { TechIcon } from '@/components/tech-icon';
import { SiGoodreads, SiLetterboxd, SiSpotify } from 'react-icons/si';
import { SendButton } from '@/components/ui/send-button';
import { ExperienceTabs } from '@/components/ui/experience-tabs';
import { BrutalistContactButton } from '@/components/ui/brutalist-contact-button';
import { MobileContactBar } from '@/components/ui/mobile-contact-bar';


type FormattedParagraph = {
    part1: string;
    bold1: string;
    part2?: string;
    bold2?: string;
    part3?: string;
};
// Definición de tipos de datos (ajusta según tu archivo /lib/data.ts)
type Profile = { 
    name: string; 
    title: string; 
    shortDescription: string; 
    aboutMe: (string | FormattedParagraph)[]; 
    profileImageURL: string; 
    contact: { email: string } 
};
type Project = { 
    id: string; 
    name: string; 
    featured: boolean; 
    images: string[]; 
    liveDemo: string; 
    githubRepo: string; 
    longDescription: string; 
    technologies: string[] 
};
type Experience = { 
    id: string; 
    title: string; 
    company: string; 
    startDate: string; 
    endDate: string; 
    description: string[] 
};
type Education = { 
    id: string; 
    degree: string; 
    institution: string; 
    endDate: string 
};
type SkillCategory = { 
    id: string; 
    category: string; 
    items: { name: string }[] 
};

interface PortfolioClientLayoutProps {
    profile: Profile;
    projects: Project[];
    experience: Experience[];
    education: Education[];
    skills: SkillCategory[];
    children: React.ReactNode;
}

const navLinks = [
    { href: '#about', label: 'Sobre Mí' },
    { href: '#experience', label: 'Experiencia' },
    { href: '#skills', label: 'Conocimientos' },
    { href: '#projects', label: 'Proyectos' },
];

const getTechColor = (techName: string) => {
    const lowerCaseName = techName.toLowerCase();
    
    // Este switch actúa como un diccionario de colores
    switch (lowerCaseName) {
      // Frontend
        case 'javascript':
            return 'bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-300';
        case 'react':
            return 'bg-sky-500/20 hover:bg-sky-500/30 text-sky-400';
        case 'html':
            return 'bg-orange-600/20 hover:bg-orange-600/30 text-orange-400';
        case 'css':
            return 'bg-blue-600/20 hover:bg-blue-600/30 text-blue-400';
        case 'jquery':
            return 'bg-blue-800/20 hover:bg-blue-800/30 text-blue-300';
    
        // Backend
        case 'php':
            return 'bg-indigo-400/20 hover:bg-indigo-400/30 text-indigo-300';
        case 'codeigniter':
            return 'bg-red-600/20 hover:bg-red-600/30 text-red-400';
        case 'python':
            return 'bg-blue-400/20 hover:bg-blue-400/30 text-blue-300';
        
        // IA & Data Science
        case 'machine learning':
        case 'ciencia de datos':
            return 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-400';
        case 'pandas':
            return 'bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-400';
        case 'tensorflow':
            return 'bg-orange-500/20 hover:bg-orange-500/30 text-orange-400';
        case 'scikit-learn':
            return 'bg-orange-400/20 hover:bg-orange-400/30 text-orange-300';
        case 'numpy':
            return 'bg-sky-400/20 hover:bg-sky-400/30 text-sky-300';
            
        // CMS
        case 'wordpress':
            return 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-400';
        case 'prestashop':
            return 'bg-pink-500/20 hover:bg-pink-500/30 text-pink-400';
    
        // Herramientas y Otros
        case 'git':
        case 'github':
            return 'bg-gray-800/80 hover:bg-gray-700/80 text-gray-300';
        case 'figma':
            return 'bg-pink-600/20 hover:bg-pink-600/30 text-pink-400';
        
        // Color por defecto si no encuentra coincidencia
        default:
            return 'bg-card/50 hover:bg-card text-slate-300';
    }
};

export function PortfolioClientLayout({
    profile,
    projects,
    experience,
    education,
    skills,
    children,
    }: PortfolioClientLayoutProps) {
    const [activeSection, setActiveSection] = useState('');
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 400) { // Aparece después de 400px de scroll
            setShowBackToTop(true);
            } else {
            setShowBackToTop(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
      // Función para hacer scroll suave hacia arriba
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        };

    const sectionsRef = useRef<Map<string, HTMLElement>>(new Map());

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
            });
        },
        { rootMargin: '-30% 0px -70% 0px' }
        );

        const currentSections = sectionsRef.current;
        currentSections.forEach((section) => {
        if (section) observer.observe(section);
        });

        return () => {
        currentSections.forEach((section) => {
            if (section) observer.unobserve(section);
        });
        };
    }, []);
    
    const setRef = (id: string) => (el: HTMLElement | null) => {
        if (el) sectionsRef.current.set(id, el);
        else sectionsRef.current.delete(id);
    };

    return (
        <>
        <MobileContactBar 
            showBackToTop={showBackToTop} 
            onScrollToTop={scrollToTop} 
        />
        <div className="w-[85%] lg:w-full mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            
            {/* ================================== */}
            {/* ==      COLUMNA IZQUIERDA (FIJA)      == */}
            {/* ================================== */}
            <header className="flex flex-col items-center text-center px-0 py-16 sm:px-8 lg:sticky lg:top-0 lg:items-start lg:text-left lg:max-h-screen lg:w-full lg:flex-col lg:justify-between lg:px-0 lg:py-24">
            <div>
                <h1 className="font-headline text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <Link href="/">{profile.name}</Link>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                {profile.title.split('|').map((part, index) => (
                    <span key={index} className="block">
                        {part.trim()}
                    </span>
                ))}
                </h2>
                <p className="mt-4 max-w-md leading-normal text-slate-400">
                {profile.shortDescription}
                </p>

                <nav className="mt-7 hidden lg:block">
                <ul className="space-y-2">
                    {navLinks.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href} className="group inline-flex items-center gap-4">
                            <span className={cn(
                                "h-px w-8 bg-slate-500 transition-all group-hover:w-16 group-hover:bg-slate-200",
                                activeSection === link.href.substring(1) && "w-16 bg-slate-200"
                            )}></span>
                            <div className="relative">
                                <span className={cn(
                                    "text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200",
                                    activeSection === link.href.substring(1) && "text-slate-200"
                                )}>
                                    {link.label}
                                </span>
                                {link.label === 'Proyectos' && (
                                    <span className="absolute -top-2 -right-0 translate-x-1/2 text-[10px] font-bold uppercase new-badge">
                                        Nuevos
                                    </span>
                                )}
                            </div>
                        </Link>
                    </li>
                    ))}
                </ul>
                </nav>
            </div>

            <div className="mt-10 hidden lg:flex lg:justify-start">
            <SendButton />
            </div>
            
            <div className="mt- flex items-center gap-4 text-slate-400">
                <ul className="mt-8 flex items-center" aria-label="Social media">
                    <li className="mr-5">
                        <a href="https://github.com/PedroBargiela" target="_blank" rel="noreferrer noopener" aria-label="GitHub" className="block text-slate-400 hover:text-slate-200 transition-all duration-300 hover:-translate-y-1">
                            <span className="sr-only">GitHub</span>
                            <Github className="h-6 w-6" />
                        </a>
                    </li>
                    <li className="mr-5">
                        <a href="https://www.linkedin.com/in/pedrobargielalemos/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="block text-slate-400 hover:text-slate-200 transition-all duration-300 hover:-translate-y-1">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="h-6 w-6" />
                        </a>
                    </li>
                    <li className="mr-5">
                        <a href="https://www.instagram.com/_pedro15_/" target="_blank" rel="noreferrer noopener" aria-label="Instagram" className="block text-slate-400 hover:text-slate-200 transition-all duration-300 hover:-translate-y-1">
                            <span className="sr-only">Instagram</span>
                            <Instagram className="h-6 w-6" />
                        </a>
                    </li>
                    <li className="mr-5">
                        <a href="https://www.goodreads.com/user/show/156574565-pedro-bargiela" target="_blank" rel="noreferrer noopener" aria-label="Goodreads" className="block text-slate-400 hover:text-slate-200 transition-all duration-300 hover:-translate-y-1">
                            <span className="sr-only">Goodreads</span>
                            <SiGoodreads className="h-6 w-6" />
                        </a>
                    </li>
                    <li className="mr-5">
                        <a href="https://letterboxd.com/pedrobargiela/" target="_blank" rel="noreferrer noopener" aria-label="Letterboxd" className="block text-slate-400 hover:text-slate-200 transition-all duration-300 hover:-translate-y-1">
                            <span className="sr-only">Letterboxd</span>
                            <SiLetterboxd className="h-6 w-6" />
                        </a>
                    </li>
                    <li>
                        <a href="https://open.spotify.com/user/1191717155" target="_blank" rel="noreferrer noopener" aria-label="Spotify" className="block text-slate-400 hover:text-slate-200 transition-all duration-300 hover:-translate-y-1">
                            <span className="sr-only">Spotify</span>
                            <SiSpotify className="h-6 w-6" />
                        </a>
                    </li>
                </ul>
            </div>
        </header>

        {/* ================================== */}
        {/* ==     COLUMNA DERECHA (SCROLL)     == */}
        {/* ================================== */}
        <main className="pb-6 pt-8 lg:py-24">
            {/* About Section */}
            <AnimatedSection>
                <section ref={setRef('about')} id="about" className="mb-12 scroll-mt-24 md:mb-16 lg:mb-20">
                <h2 className="sticky top-0 z-30 bg-background/75 backdrop-blur-md -mx-4 sm:-mx-8 px-4 sm:px-8 py-4 mb-1 flex items-center font-headline text-xl font-semibold text-slate-200 sm:text-2xl lg:static lg:bg-transparent lg:backdrop-blur-none lg:mx-0 lg:px-0 lg:py-0 lg:mb-8">
                    <span className="mr-2 font-mono text-2xl font-normal text-primary">01.</span>
                    Sobre Mí
                </h2>
                <div>
                    <div className="space-y-4 text-slate-400">
                        {profile.aboutMe.map((paragraph, index) => (
                            <p key={index}>
                                {typeof paragraph === 'string' ? (
                                    paragraph
                                ) : (
                                    <>
                                        {paragraph.part1}
                                        <strong className="text-slate-200">{paragraph.bold1}</strong>
                                        {paragraph.part2}
                                        {paragraph.bold2 && <strong className="text-slate-200">{paragraph.bold2}</strong>}
                                        {paragraph.part3 && paragraph.part3}
                                    </>
                                )}
                            </p>
                        ))}
                    </div>
                </div>
                </section>
            </AnimatedSection>

            {/* Experience Section */}
            <AnimatedSection>
                <section ref={setRef('experience')} id="experience" className="mb-12 scroll-mt-24 md:mb-16 lg:mb-20">
                <h2 className="sticky top-0 z-30 bg-background/75 backdrop-blur-md -mx-4 sm:-mx-8 px-4 sm:px-8 py-4 mb-1 flex items-center font-headline text-xl font-semibold text-slate-200 sm:text-2xl lg:static lg:bg-transparent lg:backdrop-blur-none lg:mx-0 lg:px-0 lg:py-0 lg:mb-8">
                    <span className="mr-2 font-mono text-2xl font-normal text-primary">02.</span>
                    Experiencia
                </h2>
                <ul className="group/list space-y-12">
                    {experience.map((item) => (
                        <li key={item.id}>
                            <a 
                            href={item.companyUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block transition-all duration-300 sm:grid sm:grid-cols-8 sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                            >                           
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md bg-primary/10 opacity-0 transition-all duration-300 motion-reduce:transition-none lg:block lg:group-hover:opacity-100 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <header className="z-10 mb-2 mt-1 font-mono text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                                {item.startDate} — {item.endDate || 'Presente'}
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="inline-flex items-baseline text-xl font-medium text-slate-200 group-hover:text-primary transition-colors duration-300">
                                <span>{item.title} ・ {item.company}</span>
                                <ArrowUpRight className="ml-2 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </h3>
                                <ul className="mt-2 list-none space-y-2 pl-0">
                                    {item.description}
                                </ul>
                                <div className="mt-3 flex flex-wrap gap-2">
                                {item.technologies.map(tech => (
                                    <span key={tech} className="rounded-full bg-primary/10 px-3 py-1 font-mono text-sm text-primary">
                                    {tech}
                                    </span>
                                ))}
                                </div>
                            </div>
                            </a>
                        </li>
                        ))}
                </ul>
                <div className="mt-12">
                    <a 
                    href="/CV Pedro Bargiela.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group inline-flex items-center font-semibold leading-tight text-slate-200 transition-colors duration-300 hover:text-primary"
                    aria-label="Ver currículum completo (se abre en una nueva pestaña)"
                    >
                        <span>Ver CV Completo</span>
                        <ArrowUpRight className="ml-2 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                </div>
                </section>
            </AnimatedSection>

            {/* Skills & Education Section */}
            <AnimatedSection>
                <section ref={setRef('skills')} id="skills" className="mb-12 scroll-mt-24 md:mb-16 lg:mb-20">
                    <h2 className="sticky top-0 z-30 bg-background/75 backdrop-blur-md -mx-4 sm:-mx-8 px-4 sm:px-8 py-4 flex items-center font-headline text-xl font-semibold text-slate-200 sm:text-2xl lg:static lg:bg-transparent lg:backdrop-blur-none lg:mx-0 lg:px-0 lg:py-0 lg:mb-8">
                        <span className="mr-2 font-mono text-2xl font-normal text-primary">03.</span>
                        Formación y Conocimientos
                    </h2>
                    
                    <div className="space-y-16">
                        <div>
                            <h3 className="mb-3 lg:mb-8 flex items-center gap-3 font-headline text-xl font-semibold text-slate-300">
                                <GraduationCap className="h-6 w-6 text-primary" /> Formación Académica
                            </h3>
                            
                            {/* El contenedor principal de la lista, nombrado 'list' para el group-hover. */}
                            <ul className="group/list space-y-12">
                                {education.map(item => (
                                <li key={item.id}>
                                    {/* 1. Eliminamos el grid y las columnas. Ahora es un bloque simple. */}
                                    <div className="group relative transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        
                                        {/* El fondo del hover sigue funcionando igual */}
                                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all duration-300 motion-reduce:transition-none lg:block lg:group-hover:bg-primary/10 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                        
                                        {/* Contenido principal en una sola columna */}
                                        <div className="relative z-10">
                                            <h3 className="text-xl font-medium text-slate-200 group-hover:text-primary transition-colors duration-300">
                                                {item.degree}
                                            </h3>
                                
                                            {/* 2. Usamos flexbox para poner la institución a la izquierda y la fecha a la derecha */}
                                            <div className="mt-1 flex justify-between items-baseline">
                                                <p className="text-slate-400">{item.institution}</p>
                                                <p className="font-mono text-sm text-slate-400">{item.endDate || 'Cursando'}</p>
                                            </div>
                                            
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {item.skills.map(skill => (
                                                    <span key={skill} className="rounded-full bg-primary/10 px-3 py-1 font-mono text-sm text-primary">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-3 lg:mb-8 flex items-center gap-3 font-headline text-xl font-semibold text-slate-300">
                                <Brain className="h-6 w-6 text-primary" />Conocimientos Técnicos
                            </h3>
                            <div className="space-y-12">
                                {skills.map(category => (
                                <div key={category.id}>
                                    <h4 className="mb-4 font-headline text-lg font-semibold text-slate-300">{category.category}</h4>
                                    <div className="flex flex-wrap gap-4">
                                    {category.items.map(skill => (
                                        <div key={skill.name} className={cn(
                                            "flex items-center gap-3 rounded-md px-4 py-2 transition-colors",
                                            getTechColor(skill.name)
                                            )}>
                                            {/* El TechIcon ahora también puede usar el color */}
                                            <TechIcon name={skill.name} className={cn("h-6 w-6", getTechColor(skill.name))} />
                                            <span className="font-mono text-sm text-slate-300">{skill.name}</span>
                                        </div>
                                    ))}
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* Projects Section */}
            <AnimatedSection>
                <section ref={setRef('projects')} id="projects" className="mb-12 scroll-mt-24 md:mb-16 lg:mb-20">
                    <h2 className="sticky top-0 z-30 bg-background/75 backdrop-blur-md -mx-4 sm:-mx-8 px-4 sm:px-8 py-4 mb-1 flex items-center font-headline text-xl font-semibold text-slate-200 sm:text-2xl lg:static lg:bg-transparent lg:backdrop-blur-none lg:mx-0 lg:px-0 lg:py-0 lg:mb-8">
                        <span className="mr-2 font-mono text-2xl font-normal text-primary">04.</span>
                        Proyectos
                    </h2>
                    <div className="space-y-16 group/list">
                    {projects.filter(p => p.featured).map((project, index) => (
                        <a 
                            key={project.id}
                            href={project.liveDemo || project.githubRepo || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative grid grid-cols-1 items-center gap-6 md:grid-cols-2 transition-all duration-300 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                        >
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md bg-primary/10 opacity-0 transition-all duration-300 motion-reduce:transition-none lg:block lg:group-hover:opacity-100 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            
                            <div className={cn("relative h-80 w-full", index % 2 === 0 ? 'md:order-2' : '')}>
                            <Image
                                src={project.images[0]}
                                alt={project.name}
                                fill
                                className="rounded-md object-cover"
                            />
                            </div>

                            <div className={cn("relative z-10", index % 2 === 0 ? 'md:order-1 md:text-left' : 'md:text-right')}>
                            <p className="font-mono text-sm text-primary">Proyecto Destacado</p>
                            
                            <h3 className="mt-2 inline-flex items-baseline font-headline text-2xl font-bold text-slate-200 group-hover:text-primary transition-colors duration-300">
                                <span>{project.name}</span>
                                <ArrowUpRight className="ml-2 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </h3>

                            <div className="my-4 rounded-md bg-[hsl(230,35%,15%)] p-6 shadow-lg">
                                <p className="text-slate-400">{project.longDescription}</p>
                            </div>

                            <div className={cn("flex flex-wrap gap-2", index % 2 !== 0 && "md:justify-end")}>
                                {project.technologies.map(tech => (
                                <span key={tech} className="rounded-full bg-primary/10 px-3 py-1 font-mono text-sm text-primary">
                                    {tech}
                                </span>
                                ))}
                            </div>

                            {/* Los enlaces pequeños de abajo se mantienen */}
                            <div className={cn("mt-4 flex gap-4", index % 2 !== 0 && "justify-end")}>
                            {project.githubRepo && (
                                <Link 
                                    href={project.githubRepo} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 font-mono text-sm text-slate-400 transition-colors hover:text-primary"
                                    aria-label="Ver código en GitHub (se abre en una nueva pestaña)"
                                >
                                    <Github className="h-5 w-5" /> 
                                    <span>Ver código en GitHub</span>
                                </Link>
                                )}
                            </div>
                            </div>
                        </a>
                        ))}
                    </div>
                </section>
            </AnimatedSection>
            
            {/* Contact Section */}
            <AnimatedSection>
                <section ref={setRef('contact')} id="contact" className="mb-12 scroll-mt-24 text-center md:mb-16 lg:mb-20">
                    <h2 className="top-0 z-30 bg-background/75 backdrop-blur-md -mx-4 sm:-mx-8 px-4 sm:px-8 py-4 flex items-center justify-center font-headline text-xl font-semibold text-slate-200 sm:text-2xl lg:static lg:bg-transparent lg:backdrop-blur-none lg:mx-0 lg:px-0 lg:py-0">
                        <span className="mr-2 font-mono text-2xl font-normal text-primary">05.</span>
                        ¿Qué es lo siguiente?
                    </h2>
                    <h2 className="top-0 z-30 bg-background/75 backdrop-blur-md py-4 font-headline text-4xl md:text-5xl font-bold text-slate-200">Ponte en Contacto</h2>
                    <p className="mx-auto mt-4 mb-4 max-w-xl text-balance text-lg text-slate-400">
                        Actualmente estoy abierto a nuevas oportunidades y mi bandeja de entrada está siempre disponible. No te olvides de visitar mis redes sociales y si tienes alguna pregunta o simplemente quieres saludar, ¡ahí estaré para responderte!
                    </p>
                    <div className="mt-12 hidden lg:flex lg:justify-center">
                        <BrutalistContactButton email={profile.contact.email} />
                    </div>
                </section>
            </AnimatedSection>
            {children}
        </main>
        </div>
    </div>
    </>
    );
}
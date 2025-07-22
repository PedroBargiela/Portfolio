'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, GraduationCap, Mail, Send } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { TechIcon } from '@/components/tech-icon';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { SiGoodreads, SiLetterboxd, SiSpotify } from 'react-icons/si';
import { StarIcon } from '@/components/ui/star-icon';

// Definición de tipos de datos (ajusta según tu archivo /lib/data.ts)
type Profile = { name: string; title: string; shortDescription: string; aboutMe: string; profileImageURL: string; contact: { email: string } };
type Project = { id: string; name: string; featured: boolean; images: string[]; liveDemo: string; githubRepo: string; longDescription: string; technologies: string[] };
type Experience = { id: string; title: string; company: string; startDate: string; endDate: string; description: string[] };
type Education = { id: string; degree: string; institution: string; endDate: string };
type SkillCategory = { id: string; category: string; items: { name: string }[] };

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

export function PortfolioClientLayout({
    profile,
    projects,
    experience,
    education,
    skills,
    children,
    }: PortfolioClientLayoutProps) {
    const [activeSection, setActiveSection] = useState('');
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
        if (el) {
        sectionsRef.current.set(id, el);
        } else {
        sectionsRef.current.delete(id);
        }
    };

    return (
        <div className="container mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            
            {/* ================================== */}
            {/* ==      COLUMNA IZQUIERDA (FIJA)      == */}
            {/* ================================== */}
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-full lg:flex-col lg:justify-between lg:py-24">
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

                <nav className="mt-12 hidden lg:block">
                <ul className="space-y-4">
                    {navLinks.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href} className="group inline-flex items-center gap-4">
                        <span className={cn(
                            "h-px w-8 bg-slate-500 transition-all group-hover:w-16 group-hover:bg-slate-200",
                            activeSection === link.href.substring(1) && "w-16 bg-slate-200"
                        )}></span>
                        <span className={cn(
                            "text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200",
                            activeSection === link.href.substring(1) && "text-slate-200"
                        )}>
                            {link.label}
                        </span>
                        </Link>
                    </li>
                    ))}
                </ul>
                </nav>
            </div>

            <div className="mt-12">
                <a href="mailto:pedrobargiela@gmail.com" className='button-contact'>
                    Contáctame
                    <StarIcon className="star-1" />
                    <StarIcon className="star-2" />
                    <StarIcon className="star-3" />
                    <StarIcon className="star-4" />
                    <StarIcon className="star-5" />
                    <StarIcon className="star-6" />
                </a>
            </div>
            
            <div className="mt-8 flex items-center gap-4 text-slate-400">
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
        <main className="py-24">
            {/* About Section */}
            <AnimatedSection>
                <section ref={setRef('about')} id="about" className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36">
                <h2 className="mb-8 flex items-center font-headline text-xl font-semibold text-slate-200 sm:text-2xl">
                    <span className="mr-2 font-mono text-2lg font-normal text-primary">01.</span>
                    Sobre Mí
                </h2>
                <div>
                    <div className="space-y-4 text-slate-400">
                    <p>{profile.aboutMe.split('. ')[0]}.</p>
                    <p>{profile.aboutMe.split('. ').slice(1).join('. ')}</p>
                    </div>
                </div>
                </section>
            </AnimatedSection>

            {/* Experience Section */}
            <AnimatedSection>
                <section ref={setRef('experience')} id="experience" className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36">
                <h2 className="mb-8 flex items-center font-headline text-xl font-semibold text-slate-200 sm:text-2xl">
                    <span className="mr-2 font-mono text-2xl font-normal text-primary">02.</span>
                    Experiencia
                </h2>
                <div className="relative space-y-12 before:absolute before:left-2.5 before:top-2.5 before:h-full before:w-0.5 before:bg-border md:before:left-[calc(50%-1px)]">
                    {experience.map((item, index) => (
                    <div key={item.id} className="relative flex items-start gap-6 md:gap-8">
                        <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-card ring-4 ring-background ring-offset-0 md:absolute md:left-1/2 md:top-1.5 md:-translate-x-1/2">
                            <Briefcase className="h-3 w-3 text-primary" />
                        </div>
                        <div className={cn('w-full space-y-2 rounded-lg bg-card/50 p-6 shadow-lg transition-all hover:scale-[1.02] hover:bg-card',
                            'md:w-[calc(50%-2rem)]', 
                            index % 2 === 0 ? 'md:text-left' : 'md:ml-[calc(50%+2rem)] md:text-left')}>
                            <h3 className="text-xl font-medium text-slate-200">
                                {item.title} <span className="text-primary">@ {item.company}</span>
                            </h3>
                            <p className="font-mono text-sm text-slate-400">{item.startDate} - {item.endDate || 'Presente'}</p>
                            <ul className="mt-4 list-none space-y-2 pl-0">
                                {item.description.map((desc, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="mr-3 pt-1 text-primary">▹</span> 
                                    <span className="text-slate-400">{desc}</span>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    ))}
                </div>
                </section>
            </AnimatedSection>

            {/* Skills & Education Section */}
            <AnimatedSection>
                <section ref={setRef('skills')} id="skills" className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36">
                    <h2 className="mb-8 flex items-center font-headline text-xl font-semibold text-slate-200 sm:text-2xl">
                        <span className="mr-2 font-mono text-2xl font-normal text-primary">03.</span>
                        Formación y Conocimientos
                    </h2>
                    
                    <div className="space-y-12">
                        <div>
                            <h3 className="mb-6 flex items-center gap-3 font-headline text-xl font-semibold text-slate-300">
                                <GraduationCap className="h-6 w-6 text-primary" /> Formación Académica
                            </h3>
                            <div className="space-y-6">
                                {education.map(item => (
                                <div key={item.id} className="rounded-lg bg-card/50 p-4 transition-colors hover:bg-card">
                                    <div className="flex justify-between">
                                        <h4 className="font-semibold text-slate-200">{item.degree}</h4>
                                        <p className="font-mono text-sm text-slate-400">{item.endDate || 'Cursando'}</p>
                                    </div>
                                    <p className="text-sm text-slate-400">{item.institution}</p>
                                </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-8">
                            {skills.map(category => (
                            <div key={category.id}>
                                <h3 className="mb-4 font-headline text-xl font-semibold text-slate-300">{category.category}</h3>
                                <div className="flex flex-wrap gap-4">
                                {category.items.map(skill => (
                                    <div key={skill.name} className="flex items-center gap-3 rounded-md bg-card/50 px-4 py-2 transition-colors hover:bg-card">
                                        <TechIcon name={skill.name} className="h-6 w-6" />
                                        <span className="font-mono text-sm text-slate-300">{skill.name}</span>
                                    </div>
                                ))}
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* Projects Section */}
            <AnimatedSection>
                <section ref={setRef('projects')} id="projects" className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36">
                    <h2 className="mb-8 flex items-center font-headline text-xl font-semibold text-slate-200 sm:text-2xl">
                        <span className="mr-2 font-mono text-2xl font-normal text-primary">04.</span>
                        Proyectos
                    </h2>
                    <div className="space-y-16">
                        {projects.filter(p => p.featured).map((project, index) => (
                        <div key={project.id} className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 transition-transform duration-300 hover:!opacity-100 hover:scale-[1.02] group-hover/list:opacity-50">
                            <div className={cn("relative h-80 w-full group", index % 2 === 0 ? 'md:order-2' : '')}>
                                <Link href={project.liveDemo || project.githubRepo || '#'} target="_blank">
                                    <Image
                                        src={project.images[0]}
                                        alt={project.name}
                                        fill
                                        className="rounded-md object-cover"
                                        data-ai-hint="abstract project"
                                    />
                                    <div className="absolute inset-0 rounded-md bg-primary/60 transition-all duration-300 group-hover:bg-transparent"></div>
                                </Link>
                            </div>
                            <div className={cn("relative", index % 2 === 0 ? 'md:order-1 md:text-left' : 'md:text-right')}>
                                <p className="font-mono text-sm text-primary">Proyecto Destacado</p>
                                <h3 className="mt-2 font-headline text-2xl font-bold text-slate-200 hover:text-primary">
                                    <Link href={project.liveDemo || project.githubRepo || '#'} target="_blank">{project.name}</Link>
                                </h3>
                                <div className="my-4 rounded-md bg-card p-6 shadow-lg">
                                    <p className="text-slate-400">{project.longDescription}</p>
                                </div>
                                <ul className={cn("flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm text-slate-400", index % 2 !== 0 && "justify-end")}>
                                    {project.technologies.map(tech => (
                                    <li key={tech}>{tech}</li>
                                    ))}
                                </ul>
                                <div className={cn("mt-4 flex gap-4", index % 2 !== 0 && "justify-end")}>
                                    {project.githubRepo && (
                                    <Link href={project.githubRepo} target="_blank" className="text-slate-400 transition-colors hover:text-primary">
                                        <ArrowRight className="h-6 w-6" />
                                        <span className="sr-only">GitHub Repo</span>
                                    </Link>
                                    )}
                                    {project.liveDemo && project.liveDemo !== '#' && (
                                    <Link href={project.liveDemo} target="_blank" className="text-slate-400 transition-colors hover:text-primary">
                                        <ArrowRight className="h-6 w-6" />
                                        <span className="sr-only">Live Demo</span>
                                    </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </section>
            </AnimatedSection>
            
            {/* Contact Section */}
            <AnimatedSection>
                <section ref={setRef('contact')} id="contact" className="mb-16 scroll-mt-24 text-center md:mb-24 lg:mb-36">
                    <p className="font-mono text-lg text-primary">05. ¿Qué es lo siguiente?</p>
                    <h2 className="mt-2 font-headline text-5xl font-bold text-slate-200">Ponte en Contacto</h2>
                    <p className="mx-auto mt-4 max-w-xl text-balance text-lg text-slate-400">
                        Actualmente estoy abierto a nuevas oportunidades y mi bandeja de entrada está siempre disponible. Si tienes alguna pregunta o simplemente quieres saludar, ¡haré todo lo posible por responderte!
                    </p>
                    <div className="mt-8">
                        <Button asChild size="lg" variant="outline" className="group">
                            <a href={`mailto:${profile.contact.email}`}>
                                Di Hola <Mail className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                        </Button>
                    </div>
                </section>
            </AnimatedSection>
            {children}
        </main>
        </div>
    </div>
    );
}
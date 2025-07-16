
import { getProfile, getProjects, getExperience, getEducation, getSkills } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/animated-section';
import { ArrowRight, Briefcase, GraduationCap, Mail, Send } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { TechIcon } from '@/components/tech-icon';

export default async function Home() {
  const profile = await getProfile();
  const projects = await getProjects();
  const experience = await getExperience();
  const education = await getEducation();
  const skills = await getSkills();

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
      {/* Home Section */}
      <AnimatedSection>
        <section id="home" className="flex min-h-[calc(100vh-10rem)] flex-col justify-center py-24">
            <p className="mb-4 font-mono text-primary">Hola, mi nombre es</p>
            <h1 className="font-headline text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl md:text-6xl lg:text-7xl">
              {profile.name}.
            </h1>
            <h2 className="mt-2 font-headline text-4xl font-bold tracking-tight text-slate-400 sm:text-5xl md:text-6xl lg:text-7xl">
              {profile.title}.
            </h2>
            <p className="mt-6 max-w-xl text-balance text-lg text-slate-400">
              {profile.shortDescription}
            </p>
            <div className="mt-8 flex gap-4">
               <Button asChild size="lg" variant="outline" className="group">
                <a href="#contact">
                  Ponte en contacto <Send className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Button>
            </div>
        </section>
      </AnimatedSection>
      
      {/* About Section */}
      <AnimatedSection>
        <section id="about" className="py-24">
          <h2 className="section-heading mb-8 flex items-center font-headline text-2xl font-semibold text-slate-200 sm:text-3xl">
            <span className="mr-2 font-mono text-xl font-normal text-primary">01.</span>
            Sobre Mí
          </h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
            <div className="space-y-4 text-slate-400 md:col-span-3">
              <p>{profile.aboutMe.split('. ')[0]}.</p>
              <p>{profile.aboutMe.split('. ').slice(1).join('. ')}</p>
              <p className="mt-4">Aquí hay algunas tecnologías con las que he estado trabajando recientemente:</p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-sm">
                  {["JavaScript (ES6+)", "React", "Next.js", "TypeScript", "PHP", "WordPress"].map(tech => (
                      <li key={tech} className="flex items-center">
                          <span className="mr-2 text-primary">▹</span> {tech}
                      </li>
                  ))}
              </ul>
            </div>
            <div className="relative h-64 w-64 md:col-span-2 md:h-auto md:w-full">
              {profile.profileImageURL && (
                <div className="group relative h-full w-full">
                    <div className="absolute inset-0 rounded-md border-2 border-primary transition-all duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
                    <Image
                      src={profile.profileImageURL}
                      alt={profile.name}
                      fill
                      priority
                      className="rounded-md object-cover transition-all duration-300 group-hover:saturate-[.25]"
                      data-ai-hint="profile picture"
                    />
                     <div className="absolute inset-0 rounded-md bg-primary/40 transition-all duration-300 group-hover:bg-transparent"></div>
                </div>
              )}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection>
        <section id="experience" className="py-24">
          <h2 className="section-heading mb-8 flex items-center font-headline text-2xl font-semibold text-slate-200 sm:text-3xl">
            <span className="mr-2 font-mono text-xl font-normal text-primary">02.</span>
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
        <section id="skills" className="py-24">
          <h2 className="section-heading mb-8 flex items-center font-headline text-2xl font-semibold text-slate-200 sm:text-3xl">
            <span className="mr-2 font-mono text-xl font-normal text-primary">03.</span>
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
        <section id="projects" className="py-24">
          <h2 className="section-heading mb-8 flex items-center font-headline text-2xl font-semibold text-slate-200 sm:text-3xl">
            <span className="mr-2 font-mono text-xl font-normal text-primary">04.</span>
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
        <section id="contact" className="py-24 text-center">
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
    </div>
  );
}

    
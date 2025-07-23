// src/components/ui/experience-tabs.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import type { Experience } from '@/lib/data'; // Asegúrate de que la ruta sea correcta
import { cn } from '@/lib/utils';

interface ExperienceTabsProps {
    experience: Experience[];
}

export function ExperienceTabs({ experience }: ExperienceTabsProps) {
    const [activeTabId, setActiveTabId] = useState(experience[0]?.id || '');
    const [tabFocus, setTabFocus] = useState(0);
    const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

    const activeJob = experience.find((job) => job.id === activeTabId);

    return (
        <div className="flex flex-col md:flex-row gap-8 min-h-[300px]">
        {/* Pestañas (Nombres de las empresas) */}
        <div className="relative">
            <div className="flex md:flex-col overflow-x-auto">
            {experience.map((job, index) => (
                <button
                key={job.id}
                onClick={() => setActiveTabId(job.id)}
                className={cn(
                    "w-full h-12 px-5 py-2 text-left whitespace-nowrap font-mono text-sm transition-colors duration-300",
                    activeTabId === job.id
                    ? "text-primary bg-card/50"
                    : "text-slate-400 hover:text-primary hover:bg-card/20"
                )}
                ref={(el) => (tabsRef.current[index] = el)}
                >
                {job.company}
                </button>
            ))}
            </div>
        </div>

        {/* Contenido de la pestaña activa */}
        <div className="w-full">
            {activeJob && (
            <div>
                <h3 className="text-xl font-medium text-slate-200">
                {activeJob.title}
                <span className="text-primary">
                    {' '}
                    @{' '}
                    <a href={activeJob.companyUrl || '#'} target="_blank" rel="noreferrer" className="inline-block hover:underline">
                    {activeJob.company}
                    </a>
                </span>
                </h3>
                <p className="mt-1 font-mono text-sm text-slate-400">
                {activeJob.startDate} - {activeJob.endDate || 'Presente'}
                </p>
                <ul className="mt-4 list-none space-y-2 pl-0">
                {activeJob.description.map((desc, i) => (
                    <li key={i} className="flex items-start">
                    <span className="mr-3 pt-1 text-primary">▹</span>
                    <span className="text-slate-400">{desc}</span>
                    </li>
                ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                    {activeJob.technologies.map(tech => (
                        <span key={tech} className="rounded-full bg-primary/10 px-3 py-1 font-mono text-sm text-primary">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            )}
        </div>
        </div>
    );
}
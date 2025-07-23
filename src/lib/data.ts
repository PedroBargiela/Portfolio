
import type { Profile, Experience, Education, SkillCategory, Project, Language } from '@/types';

const profile: Profile = {
    name: "Pedro Bargiela",
    title: "Desarrollador Full Stack | Machine Learning, Data Science & IA",
    shortDescription: "Construyo la aplicación, luego la hago inteligente. Desarrollo full-stack con un cerebro de IA.",
    aboutMe: [
        {
            part1: "Construyo el presente y el futuro del software. Mi experiencia como ",
            bold1: "desarrollador Full Stack",
            part2: " es el punto de partida para crear aplicaciones completas hoy, mientras que mi profunda inmersión en ",
            bold2: "Inteligencia Artificial, Machine Learning y Data Science",
            part3: " son mis herramientas para diseñar las soluciones predictivas e interactivas del mañana."
        },
        {
            part1: "A lo largo de mi experiencia he construido la arquitectura completa de diversas aplicaciones web, pero es en el back-end, donde la lógica y los datos convergen, donde más disfruto. Esta fascinación me ha impulsado a ampliar mi perfil técnico y formarme activamente en ",
            bold1: "Inteligencia Artificial y Ciencia de Datos",
            part2: ". Mi objetivo es claro: utilizar el ",
            bold2: "Machine Learning y el análisis de datos",
            part3: " para construir la próxima generación de aplicaciones; software que no solo sea robusto, sino verdaderamente inteligente."
        },
        {
            part1: "Me considero una persona en ",
            bold1: "constante formación, motivada por los desafíos complejos",
            part2: " y la oportunidad de aprender nuevas tecnologías. Mi foco ahora está en afrontar los retos del universo de la IA: quiero utilizar el poder predictivo de los datos para ir más allá de la funcionalidad tradicional y construir soluciones que no solo respondan, sino que se anticipen a las necesidades del futuro."
        }
    ],
    contact: {
        phone: "+34 697972968",
        email: "pedrobargiela@gmail.com",
        linkedin: "linkedin.com/in/pedrobargielalemos/",
        github: "github.com/pedrobargiela",
        location: "Pontevedra, Galicia, España"
    },
    profileImageURL: "https://placehold.co/450x450.png"
};

export const experience: Experience[] = [
    {
        id: 'exp1',
        title: 'Programador Full Stack',
        company: 'PONTECERCA',
        companyUrl: 'https://www.pontecerca.es/',
        startDate: 'ABR 2024',
        endDate: 'MAY 2025',
        description: 'Desarrollador Full Stack responsable del ciclo de vida completo de proyectos e-commerce y corporativos sobre WordPress y PrestaShop. Mi labor principal incluyó el desarrollo a medida de componentes para extender funcionalidades , aplicando un alto nivel de PHP (CodeIgniter), JavaScript y CSS , y la gestión de bases de datos MySQL. Adicionalmente, realicé tareas de maquetación avanzada con Divi, Elementor y Gutenberg , y optimización para buscadores (SEO/SEM).',
        technologies: ['PHP', 'CodeIgniter', 'JavaScript', 'CSS', 'WordPress', 'PrestaShop', 'MySQL']
    },
    {
        id: 'exp2',
        title: 'Desarrollador Frontend',
        company: 'INNOVACIÓN ÁGIL',
        companyUrl: 'https://innovacionagil.com/', 
        startDate: 'MAR 2024',
        endDate: 'ABR 2024',
        description: 'Como desarrollador frontend, mi labor se enfocó en el desarrollo, diseño y mantenimiento de sitios web sobre WordPress , utilizando Elementor para la maquetación de interfaces dinámicas y funcionales. Además, apliqué estrategias de SEO y SEM para mejorar el posicionamiento y el alcance digital de los proyectos.',
        technologies: ['WordPress', 'Elementor', 'PHP', 'MySQL', 'SEO/SEM']
    },
    {
        id: 'exp3',
        title: 'Frontend Developer',
        company: 'TECONSITE SL',
        companyUrl: 'https://www.teconsite.es/',
        startDate: 'SEP 2023',
        endDate: 'FEB 2024',
        description: 'En este puesto, me especialicé en la maquetación de interfaces web responsive con HTML, CSS y JavaScript. Apliqué mis conocimientos en el desarrollo con PHP sobre el framework CodeIgniter y trabajé en la implementación de proyectos sobre los CMS WordPress y PrestaShop.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'CodeIgniter', 'WordPress']
    }
];

export const education: Education[] = [
    {
        id: 'edu1',
        degree: 'Programa Profesional en Inteligencia Artificial y Data Science',
        institution: 'UNIR',
        endDate: 'actualidad',
        skills: ['Machine Learning', 'Python', 'Ciencia de datos']
    },
    {
        id: 'edu2',
        degree: 'Ciclo Superior de Desarrollo de Aplicaciones Web',
        institution: 'UNIVERSAE',
        endDate: '2022-2024',
        skills: ['PHP', 'JavaScript', 'HTML', 'CSS', 'SQL', 'React', 'CodeIgniter']
    }
];

export const skills: SkillCategory[] = [
    {
        id: 'skills1',
        category: 'Frontend',
        items: [
            { name: 'JavaScript' },
            { name: 'React' },
            { name: 'HTML' },
            { name: 'CSS' },
            { name: 'JQuery' },
            { name: 'Elementor' },
            { name: 'Divi' },
        ]
    },
    {
        id: 'skills2',
        category: 'Backend',
        items: [
            { name: 'PHP' },
            { name: 'CodeIgniter' },
            { name: 'Python' },
            { name: 'MySQL' },
            { name: 'MariaDB' },
            { name: 'SQL' },
        ]
    },
    {
        id: 'skills3',
        category: 'Inteligencia Artificial y Data Science',
        items: [
            { name: 'Machine Learning' },
            { name: 'Ciencia de datos' },
            { name: 'Python' },
            { name: 'Pandas' },
            { name: 'TensorFlow' },
            { name: 'Scikit-learn' },
            { name: 'NumPy' },
        ]
    },
    {
        id: 'skills4',
        category: 'CMS',
        items: [
            { name: 'WordPress' },
            { name: 'PrestaShop' },
        ]
    },
    {
        id: 'skills5',
        category: 'Herramientas y Otros',
        items: [
            { name: 'Git' },
            { name: 'GitHub' },
            { name: 'SEO' },
            { name: 'SEM' },
            { name: 'Figma' },
            { name: 'Adobe XD' },
            { name: 'Paquete Office' },
        ]
    }
];

const projects: Project[] = [
    {
        id: "portfolio-website",
        name: "Portafolio Personal v2",
        shortDescription: "Este mismo portafolio, creado para mostrar mis habilidades y proyectos.",
        longDescription: "Un portafolio personal diseñado e implementado con una estética moderna, inspirado en las mejores prácticas de la industria. Construido con Next.js y Tailwind CSS para un rendimiento óptimo y un diseño totalmente responsivo.",
        technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        images: ["https://placehold.co/1200x800.png"],
        githubRepo: "https://github.com/pedrobargiela/portfolio-v2",
        liveDemo: "#",
        featured: true,
    },
    {
        id: "e-commerce-platform",
        name: "Plataforma E-commerce con PrestaShop",
        shortDescription: "Una plataforma de comercio electrónico completa construida con PrestaShop.",
        longDescription: "Desarrollo y mantenimiento de tiendas online basadas en PrestaShop, incluyendo personalización de temas, desarrollo de módulos a medida (pasarelas de pago, logística) y optimización de rendimiento.",
        technologies: ["PrestaShop", "PHP", "MySQL", "JavaScript", "CSS"],
        images: ["https://placehold.co/1200x800.png"],
        featured: true,
    },
    {
        id: "legacy-app-maintenance",
        name: "Mantenimiento App Legacy en CodeIgniter",
        shortDescription: "Mantenimiento y desarrollo de nuevas features en una aplicación PHP con CodeIgniter.",
        longDescription: "Responsable de la corrección de errores, refactorización de código y desarrollo de nuevas funcionalidades para una aplicación web existente construida sobre el framework PHP CodeIgniter, mejorando su estabilidad y rendimiento.",
        technologies: ["PHP", "CodeIgniter", "MySQL", "JQuery", "Bootstrap"],
        images: ["https://placehold.co/1200x800.png"],
        featured: true,
    }
];

const languages: Language[] = [
    { id: "es", name: "Español", level: "Nativo" },
    { id: "gl", name: "Gallego", level: "Nativo" },
    { id: "en", name: "Inglés", level: "Medio-Alto" },
    { id: "pt", name: "Portugués", level: "Básico" }
];


// Simulate fetching data from a database
export const getProfile = async (): Promise<Profile> => Promise.resolve(profile);
export const getExperience = async (): Promise<Experience[]> => Promise.resolve(experience.sort((a, b) => a.order - b.order));
export const getEducation = async (): Promise<Education[]> => Promise.resolve(education);
export const getSkills = async (): Promise<SkillCategory[]> => Promise.resolve(skills);
export const getProjects = async (): Promise<Project[]> => Promise.resolve(projects);
export const getProjectById = async (id: string): Promise<Project | undefined> => Promise.resolve(projects.find(p => p.id === id));
export const getLanguages = async (): Promise<Language[]> => Promise.resolve(languages);

    
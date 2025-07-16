
import type { Profile, Experience, Education, SkillCategory, Project, Language } from '@/types';

const profile: Profile = {
    name: "Pedro Bargiela",
    title: "Construyo cosas para la web",
    shortDescription: "Soy un desarrollador de software con sede en Galicia, España, especializado en la creación de experiencias web excepcionales. Actualmente, estoy centrado en ampliar mi perfil técnico hacia la Inteligencia Artificial y la Ciencia de Datos.",
    aboutMe: "¡Hola! Mi nombre es Pedro y disfruto creando cosas que viven en internet. Mi interés por el desarrollo web comenzó en 2022 cuando decidí probar a editar temas personalizados de WordPress, ¡lo que me enseñó mucho sobre HTML y CSS!. Estoy en constante formación y en búsqueda de un puesto a largo plazo. Tengo muchas ganas de trabajar y disfruto de aprender nuevas tecnologías y métodos de trabajo, por lo que si fuese necesario me formaré en aquello que se precise y buscaré la forma de hacerlo lo mejor posible. Si confías en mi obtendrás a cambio trabajo duro para estar a la altura de las expectativas.",
    contact: {
        phone: "+34 697972968",
        email: "pedrobargiela@gmail.com",
        linkedin: "linkedin.com/in/pedrobargielalemos/",
        github: "github.com/pedrobargiela",
        location: "Pontevedra, Galicia, España"
    },
    profileImageURL: "https://placehold.co/450x450.png"
};

const experience: Experience[] = [
    {
        id: "pontececa",
        title: "Programador Full Stack",
        company: "PONTECERCA",
        startDate: "Abril 2024",
        endDate: "Presente",
        type: "Beca FEUGA",
        description: [
            "Desarrollo y Mantenimiento en WordPress y PrestaShop.",
            "Desarrollo a medida de componentes en Wordpress y Prestashop.",
            "Trabajo diario con PHP (CodeIgniter), JavaScript (jQuery, React) y CSS (Tailwind).",
            "Maquetación avanzada con Divi, Elementor y Gutenberg.",
            "Implementación de estrategias SEO y SEM para mejorar la visibilidad y el rendimiento.",
        ],
        order: 1
    },
    {
        id: "innovacion-agil",
        title: "Desarrollador Frontend",
        company: "INNOVACIÓN ÁGIL",
        startDate: "Marzo 2024",
        endDate: "Abril 2024",
        type: "Beca FEUGA",
        description: ["Desarrollo con WordPress.", "Maquetación con Elementor.", "SEO-SEM.", "Diseño Web.", "Programación con PHP.", "Bases de datos MySQL."],
        order: 2
    },
    {
        id: "tecsite",
        title: "Frontend Developer",
        company: "TECONSITE SL",
        startDate: "Septiembre 2023",
        endDate: "Febrero 2024",
        type: "Prácticas curriculares",
        description: ["Maquetación web con HTML, CSS y JavaScript.", "WordPress y PrestaShop.", "Programación con JavaScript.", "Programación con PHP en CodeIgniter.", "Bases de datos MySQL."],
        order: 3
    }
];

const education: Education[] = [
    {
        id: "unir",
        degree: "Programa Profesional en IA y Data Science",
        institution: "UNIR",
        startDate: "2024",
        endDate: null,
        current: true,
        description: ["Machine Learning", "Python", "Ciencia de datos"]
    },
    {
        id: "universae",
        degree: "Ciclo Superior de Desarrollo de Aplicaciones Web",
        institution: "UNIVERSAE",
        startDate: "2022",
        endDate: "2024",
        current: false,
        description: []
    }
];

const skills: SkillCategory[] = [
    {
        id: "frontend",
        category: "Frontend",
        items: [
            { name: "HTML", level: "Alto" },
            { name: "CSS", level: "Alto" },
            { name: "JavaScript", level: "Alto" },
            { name: "TypeScript", level: "Medio" },
            { name: "React", level: "Alto" },
            { name: "Next.js", level: "Alto" },
            { name: "JQuery", level: "Medio" },
            { name: "Tailwind CSS", level: "Alto" },
        ]
    },
    {
        id: "backend",
        category: "Backend",
        items: [
            { name: "PHP", level: "Alto" },
            { name: "CodeIgniter", level: "Alto" },
            { name: "Node.js", level: "Básico" },
        ]
    },
    {
        id: "databases",
        category: "Bases de Datos",
        items: [
            { name: "MySQL", level: "Alto" },
            { name: "PostgreSQL", level: "Básico" },
        ]
    },
    {
        id: "ai",
        category: "IA & Data Science",
        items: [
            { name: "Python", level: "Medio" },
            { name: "Scikit-learn", level: "Básico" },
            { name: "Pandas", level: "Básico" },
        ]
    },
    {
        id: "cms",
        category: "CMS",
        items: [
            { name: "WordPress", level: "Alto" },
            { name: "PrestaShop", level: "Alto" },
        ]
    },
     {
        id: "tools",
        category: "Herramientas y Otros",
        items: [
            { name: "Git", level: "Alto" },
            { name: "GitHub", level: "Alto" },
            { name: "Docker", level: "Básico" },
            { name: "Figma", level: "Medio" },
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

    
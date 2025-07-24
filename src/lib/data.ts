
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
            { name: 'TypeScript' },
            { name: 'React' },
            { name: 'HTML' },
            { name: 'CSS' },
            { name: 'Tailwind CSS' },
            { name: 'JQuery' },
        ]
    },
    {
        id: 'skills2',
        category: 'Backend',
        items: [
            { name: 'PHP' },
            { name: 'CodeIgniter' },
            { name: 'Node.js' },
            { name: 'Python' },
            { name: 'MySQL' },
            { name: 'MariaDB' },
            { name: 'MongoDB' },
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
            { name: 'PyTorch' },
            { name: 'Scikit-learn' },
            { name: 'NumPy' },
            { name: 'Seaborn' },
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
            { name: 'Docker' },
            { name: 'SEO' },
            { name: 'SEM' },
            { name: 'Figma' },
            { name: 'Adobe XD' },
        ]
    }
];

export const projects: Project[] = [
    {
        id: 'proj1',
        name: 'Conservas Areoso',
        featured: true,
        images: ['/images/projects/areoso.png'],
        longDescription: 'Tienda online desarrollada en WordPress para una conservera gourmet. Mi trabajo incluyó la creación completa de la web a partir de un diseño , la configuración de módulos de pago y envío, y la optimización del rendimiento para una experiencia de compra fluida.',
        technologies: ['PrestaShop', 'PHP', 'MySQL', 'JavaScript', 'CSS'],
        liveDemo: 'https://www.conservasareoso.es/',
        githubRepo: '' // Deja en blanco si es privado
    },
    {
        id: 'proj2',
        name: 'Recambios Touriño',
        featured: true,
        images: ['/images/projects/tourino.png'],
        longDescription: 'Desarrollo de una tienda e-commerce con un extenso catálogo de recambios para automoción sobre PrestaShop. Implementé una estructura de categorías compleja, optimicé la búsqueda de productos y aseguré la compatibilidad en dispositivos móviles.',
        technologies: ['PrestaShop', 'PHP', 'MySQL', 'JavaScript', 'CSS'],
        liveDemo: 'https://www.recambiostourino.com/',
        githubRepo: ''
    },
    {
        id: 'proj3',
        name: 'Apartamentos de Mar',
        featured: true,
        images: ['/images/projects/demar.png'],
        longDescription: 'Página web corporativa y de reservas para un complejo de apartamentos turísticos. El proyecto fue construido sobre WordPress y Elementor, con un enfoque en el diseño visual, la presentación de galerías de imágenes y la integración de un sistema de contacto.',
        technologies: ['WordPress', 'Elementor', 'PHP', 'JavaScript', 'CSS'],
        liveDemo: 'https://www.apartamentosdemar.es/',
        githubRepo: ''
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

    
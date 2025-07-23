// src/components/tech-icon.tsx
'use client';

import {
    SiJavascript, SiReact, SiHtml5, SiCss3, SiJquery, SiPhp, SiCodeigniter,
    SiPython, SiMysql, SiMariadb, SiWordpress, SiPrestashop, SiGit,
    SiGithub, SiFigma, SiAdobe, SiPandas, SiTensorflow, SiNumpy, SiScikitlearn
} from 'react-icons/si';
import { FaDatabase, FaQuestionCircle } from 'react-icons/fa';
import { TbSeo } from 'react-icons/tb';
import { AiOutlineFileSearch } from 'react-icons/ai';

// El componente recibe el nombre de la tecnología y las clases de estilo
export function TechIcon({ name, className }: { name: string; className?: string }) {
  // Convertimos el nombre a minúsculas para que coincida sin importar mayúsculas/minúsculas
    const lowerCaseName = name.toLowerCase();

    switch (lowerCaseName) {
        // Frontend
        case 'javascript':
            return <SiJavascript className={className} />;
        case 'react':
            return <SiReact className={className} />;
        case 'html':
            return <SiHtml5 className={className} />;
        case 'css':
            return <SiCss3 className={className} />;
        case 'jquery':
            return <SiJquery className={className} />;
        case 'elementor': // No tiene un icono popular, usamos uno genérico
            return <FaQuestionCircle className={className} />;
        case 'divi': // No tiene un icono popular, usamos uno genérico
            return <FaQuestionCircle className={className} />;

        // Backend
        case 'php':
            return <SiPhp className={className} />;
        case 'codeigniter':
            return <SiCodeigniter className={className} />;
        case 'python':
            return <SiPython className={className} />;
        case 'mysql':
            return <SiMysql className={className} />;
        case 'mariadb':
            return <SiMariadb className={className} />;
        case 'sql':
            return <FaDatabase className={className} />; // Icono genérico para SQL
        
        // IA & Data Science
        case 'machine learning':
        case 'ciencia de datos':
            return <AiOutlineFileSearch className={className} />; // Icono genérico
        case 'pandas':
            return <SiPandas className={className} />;
        case 'tensorflow':
            return <SiTensorflow className={className} />;
        case 'scikit-learn':
            return <SiScikitlearn className={className} />;
        case 'numpy':
            return <SiNumpy className={className} />;

        // CMS
        case 'wordpress':
            return <SiWordpress className={className} />;
        case 'prestashop':
            return <SiPrestashop className={className} />;
        
        // Herramientas y Otros
        case 'git':
            return <SiGit className={className} />;
        case 'github':
            return <SiGithub className={className} />;
        case 'seo':
        case 'sem':
            return <TbSeo className={className} />; // Icono genérico para SEO/SEM
        case 'figma':
            return <SiFigma className={className} />;
        case 'adobe xd':
            return <SiAdobe className={className} />;
        case 'paquete office': // No tiene icono, usamos uno genérico
            return <FaQuestionCircle className={className} />;

        default:
        // Si no encuentra un icono, muestra uno de pregunta
        return <FaQuestionCircle className={className} />;
    }
}
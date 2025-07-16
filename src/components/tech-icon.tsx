
import React from 'react';
import { JSIcon } from './icons/js';
import { PHPIcon } from './icons/php';
import { PythonIcon } from './icons/python';
import { ReactLogo } from './icons/react-logo';
import { CodeigniterIcon } from './icons/codeigniter';
import { WordpressIcon } from './icons/wordpress';
import { GitIcon } from './icons/git';
import { Code, Database, BrainCircuit, Bot, Wind } from 'lucide-react';

// Simplified svgs for new icons
const NextjsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.043 3.01H15.01v10.334h-2.126V5.136h-.06l-4.23 8.208H6.522L2.29 5.136h-.06v8.208H.105V3.01h2.186l4.35 8.42h.06L11.053 3.01h2.126v2.126H11.053l-3.32 6.45-3.32-6.45H2.29v10.334H4.42V5.136h.06l4.563 8.848zM15.01 15.47v5.52h5.52v-5.52zm2.126 2.126h1.267v1.267h-1.267z" fill="currentColor"/></svg>
);
const TypeScriptIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0 h21 v21 h-21z M3.18 3.18 v17.64 h17.64 v-17.64z M5.27 16.23 h13.46 v-9.36 h-2.22 v7.14 h-3.33 v-7.14 h-2.22 v7.14 h-3.33 v-7.14 H5.27z" fill="currentColor"/><path d="M5.27 16.23 v2.36h13.46v-2.36z" fill="currentColor"/></svg>
);
const NodejsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.72 17.526c-1.334-.02-2.91-.4-3.832-1.314-.72-.683-.88-1.554-.837-2.657l.06-.983 2.132.327-.04.653c-.02.327.02.673.22.883.24.26.613.5 1.48.563.88.06 1.85-.14 2.45-1.1.4-.643.34-1.463-.22-2.073-.42-.483-1.053-.783-1.8-.9-1.213-.18-2.513-.3-3.26-.4-1.073-.14-1.927-.583-2.45-1.3-.44-.603-.44-1.343.08-2.013.6-.783 1.747-1.284 3.36-1.324 1.253-.02 2.513.26 3.493 1.023.76.583.98 1.403.92 2.373l-.06.983-2.112-.327.04-.653c.04-.347-.02-.693-.24-.9-.24-.26-.633-.52-1.52-.583-.88-.06-1.85.14-2.45 1.1-.4.643-.34-1.463.22 2.073.42.483 1.053.783 1.8.9 1.213.18 2.513.3 3.26.4 1.073.14 1.927.583 2.45 1.3.44.603.44-1.343-.08-2.013-.6.783-1.747-1.284-3.36-1.324a5.22 5.22 0 01-.64.04z" fill="currentColor"/></svg>
);
const TailwindCssIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.001,4.8c-3.001,0-5.4,1.72-6.6,3.6h13.2c-1.2-1.88-3.6-3.6-6.6-3.6Zm-6.6,4.8c-1.2,1.88-1.2,4.72,0,6.6,1.2,1.88,3.6,3.6,6.6,3.6s5.4-1.72,6.6-3.6c1.2-1.88,1.2-4.72,0-6.6-1.2-1.88-3.6-3.6-6.6-3.6Z" fill="currentColor"/></svg>
);
const HtmlIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m1.174 0 2.11 21.05L12 24l8.72-2.95L22.83 0ZM18.41 6.87h-9.28l.24 2.58h8.8l-.63 6.8-5.04 1.36-5.03-1.36-.34-3.67h2.55l.17 1.85 2.65.72.01-10.83h-.01l2.64-.72.2-2.11Z" fill="currentColor"/></svg>
);
const CssIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m1.174 0 2.11 21.05L12 24l8.72-2.95L22.83 0ZM18.41 6.87h-9.28l.24 2.58h8.8l-.63 6.8-5.04 1.36-5.03-1.36-.34-3.67h2.55l.17 1.85 2.65.72 2.64-.72.27-2.96h-8.2l-.24-2.58h8.66l.24-2.58Z" fill="currentColor"/></svg>
);
const MySqlIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.012 2.172c-5.518 0-9.456 3.6-9.456 4.968v.684c0 1.368 3.938 4.968 9.456 4.968s9.456-3.6 9.456-4.968v-.684c0-1.368-3.938-4.968-9.456-4.968zM3.483 13.918c-.468 0-.936.035-1.368.07.468 1.123 2.736 2.052 5.076 2.052 1.404 0 2.63-.28 3.534-.737-.869-.42-1.92-1.05-2.988-1.754-1.26-.772-2.556-1.579-3.9-1.579a11.107 11.107 0 0 0-.354 0zm17.929-1.298c.432-.035.864-.07 1.332-.07.468 0 .936.035 1.368.07.036 0 .036 0 .036.035v-.035c0 1.26-1.368 2.37-3.468 3.14-1.123.422-2.412.632-3.834.632-.504 0-1.008-.035-1.512-.105 1.512-1.228 2.232-2.58 2.232-3.35v-.613c.83-.07 1.62-.245 2.268-.42.21-.07.432-.14.612-.21zM2.618 8.826c0-1.018 3.168-1.825 7.092-2.123v4.246c-3.924.298-7.092 1.105-7.092 2.123v.579c0 1.017 3.168 1.824 7.092 2.122v-4.246c-3.924-.299-7.092-1.105-7.092-2.122v-.579zM12.012 19.386c5.518 0 9.456-3.6 9.456-4.968v-.684c0-1.368-3.938-4.968-9.456-4.968-5.518 0-9.456 3.6-9.456 4.968v.684c0 1.368 3.938 4.968 9.456 4.968zm2.34-10.536c-2.124 1.298-4.68 1.298-4.68 1.298V6.58c0 0 2.556 0 4.68 1.298zm-4.68 4.562V16.79c0 0 2.556 0 4.68-1.298 2.124-1.298 4.68-1.298 4.68-1.298v-3.562c0 0-2.556 0-4.68 1.298-2.124 1.298-4.68 1.298-4.68 1.298z" fill="currentColor"/></svg>
);
const PrestashopIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.999 2.158-7.61 4.145v8.526l7.61 4.145 7.61-4.145V6.303l-7.61-4.145zM8.36 9.079h1.794l2.81 4.628 2.768-4.628h1.794l-3.8 6.04-.872 1.408h-1.836l-2.654-7.448zm4.332-1.85c-.013.435.09.84.28 1.216.2.392.483.722.842.97.384.263.82.417 1.29.455.454.035.895-.045 1.304-.23l-.364 1.26a3.78 3.78 0 0 1-1.46.6c-.53.11-.98.11-1.533-.036a3.29 3.29 0 0 1-1.546-.927c-.432-.448-.689-.98-.77-1.597-.082-.616.014-1.22.28-1.71.267-.492.689-.882 1.227-1.127.538-.246 1.157-.33 1.812-.22l.364-1.224c-.668-.097-1.323.014-1.92.316a4.29 4.29 0 0 0-1.63 1.233z" fill="currentColor"/></svg>
);
const DockerIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.994 9.141c-.636-2.181-2.298-4.59-4.752-5.184-1.836-.468-3.564.084-4.824.636l-.048.024-4.8-2.4-8.52 4.668.624 8.652 4.416 2.496.024.012c.156.084.312.156.468.228 1.032.504 2.124.792 3.276.792 2.724 0 5.1-1.332 6.504-3.588.6-1.008.924-2.172.948-3.372l.012-.288c.024-.528.024-1.068-.024-1.596M8.346 9.873H5.37v2.976H2.406V9.873H-.546v2.976h-2.94v2.964h2.94v2.976h2.964v-2.976h2.976v2.976h2.964V12.85h-2.964V9.873m2.964-5.94h2.964v2.976H11.31V3.933m-2.964 0h2.964v2.976H8.346V3.933m-2.976 0h2.976v2.976H5.37V3.933M5.37 6.909h2.976v2.964H5.37V6.909Z" fill="currentColor"/></svg>
);
const FigmaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM7.5 12a3 3 0 0 1 3-3h1.5v6H9a1.5 1.5 0 0 1 0-3H7.5zM9 4.5a3 3 0 0 1 3-3v6a3 3 0 0 1-3 3v-6zm6 0v6h1.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0-1.5-3zM9 19.5a3 3 0 0 0 3 3v-6a3 3 0 0 0-3 3zM15 13.5a1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 0-3H15v1.5z" fill="currentColor"/></svg>
);


interface TechIconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}

const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  javascript: JSIcon,
  typescript: TypeScriptIcon,
  jquery: JSIcon,
  php: PHPIcon,
  python: PythonIcon,
  react: ReactLogo,
  'next.js': NextjsIcon,
  'node.js': NodejsIcon,
  'tailwind css': TailwindCssIcon,
  html: HtmlIcon,
  css: CssIcon,
  codeigniter: CodeigniterIcon,
  wordpress: WordpressIcon,
  prestashop: PrestashopIcon,
  mysql: MySqlIcon,
  postgresql: Database,
  'scikit-learn': BrainCircuit,
  pandas: Bot,
  git: GitIcon,
  github: GitIcon,
  docker: DockerIcon,
  figma: FigmaIcon,
};

export const TechIcon: React.FC<TechIconProps> = ({ name, ...props }) => {
  const normalizedName = name.toLowerCase();
  const IconComponent = iconMap[normalizedName] || Code;

  return <IconComponent {...props} />;
};

    
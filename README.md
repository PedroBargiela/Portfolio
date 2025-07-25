# Portfolio Personal de Pedro Bargiela 👋

¡Hola! Este es el repositorio de mi portfolio personal, un proyecto donde he volcado mis conocimientos actuales como desarrollador y mi pasión por la tecnología. El objetivo era crear no solo una galería de proyectos, sino una demostración viva de mis habilidades en el desarrollo web moderno.


## 🛠️ Tecnologías Utilizadas

Este proyecto fue construido desde cero utilizando un stack de tecnologías moderno, enfocado en el rendimiento, la escalabilidad y una excelente experiencia de desarrollo.

* ### 🎨 **Frontend**
    * **Next.js:** Framework de React para producción, utilizado por su renderizado en el servidor (SSR), optimizaciones automáticas y sistema de routing.
    * **React:** Biblioteca principal para la construcción de toda la interfaz de usuario y sus componentes.
    * **TypeScript:** Para añadir un sistema de tipos robusto, mejorar la mantenibilidad y prevenir errores.
    * **Tailwind CSS:** Framework de CSS "utility-first" para un diseño rápido, consistente y totalmente personalizable sin salir del HTML.

* ### ✨ **Animaciones e Interactividad**
    * **Hooks de React (`useState`, `useEffect`):** Para toda la lógica interactiva, como el "scroll-spy" de la navegación, los efectos de hover y la lógica de la `LauncherPage`.
    * **APIs del Navegador:** Uso de `IntersectionObserver` para detectar secciones visibles y `DeviceMotionEvent` para el efecto giroscopio en la versión móvil.
    * **CSS Personalizado:** Animaciones `@keyframes` y clases personalizadas en `globals.css` para los efectos de los botones y otros detalles visuales.
    * **Iconos:** `lucide-react` y `react-icons` para una iconografía limpia y consistente.

* ### 🚀 **Despliegue y Dominio**
    * **Vercel:** Plataforma de despliegue optimizada para Next.js, que proporciona hosting, integración continua y HTTPS de forma automática.
    * **Arsys:** Registrador utilizado para el dominio personalizado `pedrobargiela.com`.

## ✨ Características Principales

* **`LauncherPage` Inteligente:** Una página de bienvenida con un efecto parallax que funciona con el **ratón en escritorio** y con el **giroscopio en dispositivos móviles**, ofreciendo una experiencia única en cada plataforma.
* **Diseño Totalmente Responsive:**
    * Layout asimétrico de dos columnas en escritorio, con una columna de información fija.
    * Diseño de una sola columna en móvil, con una barra de contacto fija en la parte inferior para una mejor usabilidad.
    * Títulos de sección "sticky" en móvil para guiar al usuario durante el scroll.
* **Navegación con "Scroll-Spy":** La navegación de la columna izquierda detecta automáticamente en qué sección de la página se encuentra el usuario y la resalta.
* **Efectos de Foco:** Las secciones de "Experiencia" y "Proyectos" utilizan la técnica `group-hover` para atenuar los elementos no seleccionados, centrando la atención del usuario.
* **Componentes Modulares:** El proyecto está estructurado en componentes reutilizables (`TechIcon`, `SendButton`, `AnimatedSection`, etc.) para un código más limpio y mantenible.

## 🚀 Cómo Ejecutarlo Localmente

Si quieres probar el proyecto en tu propio entorno:

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/PedroBargiela/tu-repositorio.git](https://github.com/PedroBargiela/tu-repositorio.git)
    ```
2.  **Navega a la carpeta del proyecto:**
    ```bash
    cd tu-repositorio
    ```
3.  **Instala las dependencias:**
    ```bash
    npm install
    ```
4.  **Ejecuta el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
5.  Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

---

Gracias por visitar mi repositorio. ¡Espero que te guste el proyecto tanto como a mí me ha gustado construirlo!
# Gemini Video Generation Landing Page (React + TailwindCSS)

Este proyecto es una réplica de la landing page de Google Gemini Video Generation, desarrollada con React y TailwindCSS.

## Características

- Navbar fijo con logo de Google Gemini y menú animado
- Hero section con video de fondo y texto central
- Secciones intermedias con fondos oscuros y tipografía blanca
- Animaciones suaves al hacer scroll y hover
- Layout completamente responsive (desktop y móvil)
- Estilos con TailwindCSS que replican fielmente el diseño original

## Requisitos

- Node.js 14.0.0 o superior
- npm 6.0.0 o superior

## Instalación

1. Descomprime el archivo zip
2. Navega al directorio del proyecto
3. Instala las dependencias:

```bash
npm install
```

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm start
```

Esto abrirá la aplicación en [http://localhost:3000](http://localhost:3000) en tu navegador.

## Compilación para producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Esto generará los archivos estáticos en la carpeta `build/`, listos para ser desplegados en cualquier servidor web.

## Estructura del proyecto

- `src/components/`: Componentes React modulares
  - `Navbar.jsx`: Barra de navegación fija
  - `HeroSection.jsx`: Sección principal con video de fondo
  - `VeoSpeaksSection.jsx`: Sección "Veo 3 Speaks for itself"
  - `SceneSection.jsx`: Sección "Write the scene"
  - `UseCasesSection.jsx`: Sección de casos de uso
  - `VeoModelsSection.jsx`: Sección de modelos Veo
  - `FAQSection.jsx`: Preguntas frecuentes
  - `Footer.jsx`: Pie de página
- `src/assets/`: Recursos estáticos (imágenes, etc.)
- `src/index.css`: Estilos globales y configuración de TailwindCSS
- `tailwind.config.js`: Configuración personalizada de TailwindCSS

## Personalización

Para modificar el contenido, puedes editar los componentes individuales en la carpeta `src/components/`.

Para cambiar los estilos globales o añadir nuevas clases de utilidad, puedes modificar `src/index.css` o `tailwind.config.js`.

## Despliegue

Esta aplicación puede ser desplegada en cualquier servicio que soporte aplicaciones estáticas, como:

- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting
- AWS S3

## Licencia

Este proyecto es solo para fines educativos y de demostración.

# ForzaBoxWeb

ForzaBoxWeb es una plantilla / sitio web estático construida con Astro. El proyecto contiene la estructura mínima para un sitio frontend usando Astro (versión declarada en package.json: `astro ^5.5.4`) y está preparado para desarrollo local, construcción y previsualización.

## Estado
Proyecto inicial / plantilla. Contiene configuración base (astro.config.mjs, tsconfig.json) y carpetas típicas de un proyecto Astro (`src/`, `public/`).

## Tecnologías
- Astro (framework para sitios estáticos/SSG)
- TypeScript (configuración vía `tsconfig.json`)
- Node.js / npm para gestión de dependencias y scripts

## Requisitos previos
- Node.js (recomendado >= 18)
- npm (o pnpm/yarn si prefieres)

## Instalación y uso

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo (live reload):
```bash
npm run dev
```

3. Generar build de producción:
```bash
npm run build
```

4. Previsualizar el build localmente:
```bash
npm run preview
```

Los scripts disponibles (definidos en package.json):
- `dev` — `astro dev`
- `build` — `astro build`
- `preview` — `astro preview`
- `astro` — `astro`

## Estructura del proyecto (resumen)
- `astro.config.mjs` — configuración base de Astro.
- `package.json` — metadatos y scripts del proyecto (depende de `astro ^5.5.4`).
- `tsconfig.json` — configuración de TypeScript.
- `src/` — código fuente del sitio (páginas, componentes, estilos).
- `public/` — activos estáticos que se sirven tal cual.
- `.vscode/` — configuraciones propias de VSCode (opcional).
- `.gitignore` — archivos/paths ignorados por Git.

## Despliegue
Astro genera un sitio estático tras `npm run build`. Puedes desplegar el contenido generado en servicios como Vercel, Netlify, GitHub Pages o cualquier hosting de archivos estáticos. Para despliegues con SSR o adaptadores específicos, añade el adaptador correspondiente en `astro.config.mjs`.

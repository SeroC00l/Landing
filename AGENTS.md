# AGENTS.md — Proyecto Portfolio Alejandro Urrea

## Stack
- **Framework**: Astro 4 + TypeScript 5
- **Styling**: Tailwind CSS 3 (utility-first, no standalone CSS files)
- **i18n**: Sistema propio con `src/i18n/ui.ts` y `src/i18n/utils.ts`
- **Idiomas**: Español (default) e Inglés
- **Build**: `astro check && astro build`
- **Dev**: `astro dev` / `npm run dev`

## Estructura clave

| Ruta | Propósito |
|------|-----------|
| `src/pages/index.astro` | Página principal ES |
| `src/pages/en/index.astro` | Página principal EN |
| `src/components/Card.astro` | Componente base con efecto glow + glassmorphism |
| `src/sections/home.astro` | Sección home + grid adicional (toggle "Leer Más") |
| `src/sections/portfolio.astro` | Sección de proyectos |
| `src/i18n/ui.ts` | Traducciones ES/EN |
| `tailwind.config.mjs` | Tema Tailwind (colores, bg-images) |

## Convenciones

- **Card.astro**: No eliminar variables CSS `--border`, `--radius`, `--size`. El efecto glow usa `data-glow` y `pointermove`.
- **Glassmorphism**: Fondos con `backdrop-filter: blur(Npx)`, bordes sutiles `rgba(255,255,255,0.06)`, capas de profundidad.
- **Tipografía**: `text-purple-300` para headings semánticos, `text-gray-400` para cuerpo.
- **Footer**: Minimal: copyright + nombre + "Todos los derechos reservados" / "All Rights Reserved".
- **Traducciones**: Agregar nuevas claves en `ui.ts` (EN y ES) antes de usarlas en componentes.

## Scripts
```bash
npm run dev       # Desarrollo
npm run build     # Build con typecheck
npm run preview   # Preview del build
```

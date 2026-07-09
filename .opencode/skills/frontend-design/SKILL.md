---
name: frontend-design
description: Use when improving UI design, layout, glassmorphism, typography, color schemes, responsive design, or visual polish in Astro/Tailwind projects. Trigger on "frontend design", "mejora el diseño", "glassmorphism", "footer text", "background style".
---

# Frontend Design

## Core Principles
- **Glassmorphism**: transparent backgrounds with `backdrop-filter: blur(Npx)`, subtle borders (`rgba(255,255,255,0.06)`), layered depth
- **Typography**: clean hierarchy with semantic headings, proper line-height (`1.5` body, `1.2` headings), and adequate contrast (`text-gray-400` on dark bg)
- **Spacing**: use consistent padding/margin scale (`gap-6`, `px-8`, `py-[50px]`)
- **Colors**: prefer Tailwind's built-in palette; purple accent (`purple-300`, `#8B5CF6`) for interactive/highlight elements

## Code Patterns

### Footer
```astro
<footer class="w-full items-center gap-6 py-[50px] text-[#ffffff90] flex justify-center">
  <p>© 2025 Alejandro Urrea. Todos los derechos reservados</p>
</footer>
```

### Card with glassmorphism
```css
background: linear-gradient(0deg, #222b4580, #181a2280),
  linear-gradient(180deg, #21293280, #2d315a80 33.92%);
```

### Background image inside card
```astro
<div class="w-1/3 bg-robot h-full bg-cover"></div>
```

## When modifying
- Preserve existing glow effect (`data-glow`, CSS custom properties in Card.astro)
- Never remove the `--border`, `--radius`, `--size` CSS variables from Card.astro
- Keep footer minimal: copyright year + name + "Todos los derechos reservados" / "All Rights Reserved"
- Background images in cards use `bg-cover` / `bg-contain`, not absolute positioning or overlays

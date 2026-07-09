---
name: seo
description: Use when optimizing SEO, meta tags, Open Graph, Twitter Cards, structured data (JSON-LD), sitemap, robots.txt, hreflang, canonical URLs, and recruiter-focused discoverability for Astro projects. Trigger on "seo", "optimizar seo", "meta tags", "og tags", "structured data", "sitemap", "recruiters", "reclutadores", "google search".
---

# SEO Optimization

## Core Principles

- **Recruiter-first keywords**: Optimize for terms recruiters search: "Software Engineer", "Full Stack Developer", "Frontend Developer", "Portfolio", skills (React, Astro, TypeScript, Node.js, AWS, Kotlin, Python).
- **AI chat discoverability**: Include clear semantic HTML, structured data (JSON-LD Person/WebSite schema), and natural language about skills/experience so AI crawlers (GPT, Claude, Gemini) index the profile accurately.
- **i18n SEO**: Every page needs hreflang annotations (es, en) and locale-specific canonical URLs.
- **Social sharing**: Open Graph (Facebook/LinkedIn/Discord) and Twitter Cards require `og:image`, `og:title`, `og:description`, `twitter:card`.

## Required Meta Tags per Page

```astro
<!-- Primary -->
<meta name="description" content="..." />
<title>...</title>

<!-- Open Graph -->
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
<meta property="og:url" content="..." />
<meta property="og:type" content="website" />
<meta property="og:locale" content="es_ES" />
<meta property="og:site_name" content="Alejandro Urrea" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
<meta name="twitter:description" content="..." />
<meta name="twitter:image" content="..." />

<!-- i18n -->
<link rel="alternate" hreflang="es" href="https://domain.com/" />
<link rel="alternate" hreflang="en" href="https://domain.com/en/" />
<link rel="alternate" hreflang="x-default" href="https://domain.com/" />

<!-- Canonical -->
<link rel="canonical" href="https://domain.com/" />
```

## JSON-LD Structured Data

### Person Schema (primary — for recruiter discovery)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Alejandro Urrea",
  "jobTitle": "Software Engineer",
  "url": "https://domain.com/",
  "sameAs": [
    "https://github.com/SeroC00l",
    "https://www.linkedin.com/in/alejourrea/",
    "https://www.youtube.com/channel/UChgJX3QD_r-N__Tdg8va5Ug",
    "https://www.twitch.tv/blackproject33"
  ],
  "knowsAbout": ["Web Development", "Full Stack", "React", "Astro", "TypeScript", "AWS", "Python"]
}
```

### WebSite Schema
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Alejandro Urrea - Software Engineer",
  "url": "https://domain.com/",
  "inLanguage": ["es", "en"],
  "description": "Portfolio profesional de Alejandro Urrea, Ingeniero de Software"
}
```

## Astro Config Requirements

```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://domain.com/',
  integrations: [sitemap()],
  // ... i18n config
});
```

## robots.txt

```
User-agent: *
Allow: /
Sitemap: https://domain.com/sitemap-index.xml
```

## Title/Description Templates

| Page | Title (ES) | Title (EN) |
|------|-----------|------------|
| Home | "Alejandro Urrea — Ingeniero de Software | Full Stack Developer" | "Alejandro Urrea — Software Engineer | Full Stack Developer" |
| Desc (ES) | "Portfolio profesional de Alejandro Urrea. +5 años creando aplicaciones web, móviles y automatizaciones. React, Astro, TypeScript, Kotlin, AWS." | "Professional portfolio of Alejandro Urrea. +5 years building web apps, mobile apps, and automations. React, Astro, TypeScript, Kotlin, AWS." |

## Common Pitfalls
- Never use generic titles like "Web Developer" — use full name + role
- Include tech stack keywords in descriptions for AI crawler matching
- OG image must be absolute URL (https://...)
- Keep title under 60 chars, description under 160 chars
- Don't forget the `lang` attribute on `<html>`

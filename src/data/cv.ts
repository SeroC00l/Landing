export interface CVExperience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface CVProject {
  name: string;
  description: string;
  tech: string[];
  url?: string;
  github?: string;
}

export interface CVData {
  name: string;
  title: string;
  location: string;
  email: string;
  phone?: string;
  linkedin: string;
  github: string;
  website?: string;
  summary: string;
  experience: CVExperience[];
  education: {
    degree: string;
    institution: string;
    year: string;
  };
  skills: string[];
  languages: string[];
  projects: CVProject[];
}

export const cvData: Record<"es" | "en", CVData> = {
  es: {
    name: "Alejandro Urrea",
    title: "Ingeniero de Software",
    location: "Bogotá, Colombia",
    email: "aleurrea4@gmail.com",
    linkedin: "linkedin.com/in/alejourrea",
    github: "github.com/SeroC00l",
    website: "alejandro-urrea.com",
    summary:
      "Ingeniero de Software Full Stack con más de 5 años de experiencia construyendo aplicaciones web escalables, servicios backend y soluciones de automatización empresarial. Especializado en arquitectura moderna de software, desarrollo de interfaces de usuario y optimización de procesos mediante tecnología.",
    experience: [
      {
        role: "Ingeniero de Automatización Freelance",
        company: "Freelance",
        period: "2025 - Presente",
        highlights: [
          "Creación de contenido técnico sobre programación, computación e inteligencia artificial",
          "Desarrollo de automatizaciones empresariales con Python y n8n para clínicas, restaurantes y otros sectores",
          "Implementación de flujos de trabajo automatizados que reducen tareas manuales en un 70%",
          "Integración de APIs y servicios de terceros para optimizar procesos de negocio",
        ],
      },
      {
        role: "Líder de Desarrollo Móvil",
        company: "SODEXO Peru",
        period: "2024 - 2025",
        highlights: [
          "Desarrollo de aplicación móvil de transporte y entrega en motocicleta usando Kotlin y Kotlin Multiplatform",
          "Progresión de desarrollador frontend UI a líder del proyecto completo",
          "Despliegue de toda la infraestructura en AWS con arquitectura escalable",
          "Implementación de sistema de gestión de repartidores en tiempo real",
        ],
      },
      {
        role: "Desarrollador Frontend",
        company: "ASTRA TECH",
        period: "2023 - 2024",
        highlights: [
          "Desarrollo del frontend completo de AlgilC usando React, React Router y Material UI",
          "Integración con backend NestJS y base de datos MongoDB",
          "Diseño de arquitectura de componentes reutilizables y escalables",
          "Accionista de la empresa tras la finalización exitosa del proyecto",
        ],
      },
      {
        role: "Desarrollador Frontend",
        company: "PSIRIS",
        period: "2023",
        highlights: [
          "Desarrollo de interfaz de usuario para plataforma web durante 6 meses",
          "Proyecto discontinuado debido al impacto de IA en el producto",
          "Implementación de diseño responsive y optimización de performance",
        ],
      },
      {
        role: "Desarrollador Full Stack",
        company: "Airtech Communications",
        period: "2020 - 2023",
        highlights: [
          "Ingreso como técnico de IT con contrato indefinido, promovido a desarrollador tras logros demostrados",
          "Desarrollo del sistema ESAT utilizando el stack MERN (MongoDB, Express, React, Node.js)",
          "Mantenimiento y mejora continua de sistemas de gestión empresarial",
          "Soporte técnico y resolución de problemas críticos en producción",
        ],
      },
    ],
    education: {
      degree: "Ingeniería de Sistemas",
      institution: "Pontificia Universidad Javeriana Cali",
      year: "2019 - 2024",
    },
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Astro",
      "Node.js",
      "Python",
      "Kotlin",
      "React Native",
      "Tailwind CSS",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
      "AWS",
      "Docker",
      "Git",
      "REST APIs",
      "GraphQL",
      "Svelte",
      "NestJS",
      "n8n",
      "Three.js",
    ],
    languages: ["Español (Nativo)", "Inglés (Intermedio)"],
    projects: [
      {
        name: "SuperMegaFitness",
        description:
          "Plataforma de e-commerce completa para suplementos deportivos en Colombia. Desarrollada con Astro, Tailwind CSS, Supabase e integración con WhatsApp Business API para catálogo y pedidos.",
        tech: ["Astro", "Tailwind CSS", "Supabase", "WhatsApp API"],
        url: "https://supermegafitness.store",
        github: "https://github.com/SeroC00l/supermegafitness",
      },
      {
        name: "Sweet Niis",
        description:
          "Landing page de productos con animación 3D cinematográfica usando Astro, Three.js y Cannon.js. Incluye animación de 12 segundos estilo packshot y controles de órbita interactivos.",
        tech: ["Astro", "Tailwind CSS", "Three.js", "Cannon.js"],
        url: "https://seroc00l.github.io/sweet-niis/",
        github: "https://github.com/SeroC00l/sweet-niis",
      },
      {
        name: "Project Manager",
        description:
          "Aplicación web fullstack para listar y organizar tareas de proyecto. Desarrollada con Next.js, Tailwind CSS, Shadcn UI y Supabase como base de datos.",
        tech: ["Next.js", "Tailwind CSS", "Shadcn UI", "Supabase"],
        url: "https://project-manager-flame.vercel.app/",
        github: "https://github.com/SeroC00l/ProjectManager",
      },
    ],
  },
  en: {
    name: "Alejandro Urrea",
    title: "Software Engineer",
    location: "Bogotá, Colombia",
    email: "aleurrea4@gmail.com",
    linkedin: "linkedin.com/in/alejourrea",
    github: "github.com/SeroC00l",
    website: "alejandro-urrea.com",
    summary:
      "Full Stack Software Engineer with over 5 years of experience building scalable web applications, backend services, and business automation solutions. Specialized in modern software architecture, UI development, and process optimization through technology.",
    experience: [
      {
        role: "Freelance Automation Engineer",
        company: "Freelance",
        period: "2025 - Present",
        highlights: [
          "Creating technical content on programming, computing, and artificial intelligence",
          "Building business automations with Python and n8n for clinics, restaurants, and other sectors",
          "Implementing automated workflows that reduce manual tasks by 70%",
          "Integrating third-party APIs and services to optimize business processes",
        ],
      },
      {
        role: "Lead Mobile Developer",
        company: "SODEXO Peru",
        period: "2024 - 2025",
        highlights: [
          "Developed motorcycle ride-hailing and delivery app using Kotlin and Kotlin Multiplatform",
          "Progressed from frontend UI developer to full project lead",
          "Deployed entire infrastructure on AWS with scalable architecture",
          "Implemented real-time driver management system",
        ],
      },
      {
        role: "Frontend Developer",
        company: "ASTRA TECH",
        period: "2023 - 2024",
        highlights: [
          "Built complete frontend of AlgilC using React, React Router, and Material UI",
          "Integrated with NestJS backend and MongoDB database",
          "Designed reusable and scalable component architecture",
          "Became company shareholder after successful project completion",
        ],
      },
      {
        role: "Frontend Developer",
        company: "PSIRIS",
        period: "2023",
        highlights: [
          "Frontend developer for 6 months on web platform",
          "Project discontinued due to AI impact on the product",
          "Implemented responsive design and performance optimization",
        ],
      },
      {
        role: "Full Stack Developer",
        company: "Airtech Communications",
        period: "2020 - 2023",
        highlights: [
          "Hired as IT technician with indefinite contract, promoted to developer after demonstrated achievements",
          "Developed ESAT system using MERN stack (MongoDB, Express, React, Node.js)",
          "Maintained and continuously improved enterprise management systems",
          "Provided technical support and resolved critical production issues",
        ],
      },
    ],
    education: {
      degree: "Systems Engineering",
      institution: "Pontificia Universidad Javeriana Cali",
      year: "2019 - 2024",
    },
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Astro",
      "Node.js",
      "Python",
      "Kotlin",
      "React Native",
      "Tailwind CSS",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
      "AWS",
      "Docker",
      "Git",
      "REST APIs",
      "GraphQL",
      "Svelte",
      "NestJS",
      "n8n",
      "Three.js",
    ],
    languages: ["Spanish (Native)", "English (Intermediate)"],
    projects: [
      {
        name: "SuperMegaFitness",
        description:
          "Full-stack e-commerce platform for sports supplements in Colombia. Built with Astro, Tailwind CSS, Supabase, and WhatsApp Business API integration for catalog and orders.",
        tech: ["Astro", "Tailwind CSS", "Supabase", "WhatsApp API"],
        url: "https://supermegafitness.store",
        github: "https://github.com/SeroC00l/supermegafitness",
      },
      {
        name: "Sweet Niis",
        description:
          "Product landing page with 3D cinematic animation using Astro, Three.js, and Cannon.js. Features 12-second packshot-style animation and interactive orbit controls.",
        tech: ["Astro", "Tailwind CSS", "Three.js", "Cannon.js"],
        url: "https://seroc00l.github.io/sweet-niis/",
        github: "https://github.com/SeroC00l/sweet-niis",
      },
      {
        name: "Project Manager",
        description:
          "Fullstack web application for listing and organizing project tasks. Built with Next.js, Tailwind CSS, Shadcn UI, and Supabase as database.",
        tech: ["Next.js", "Tailwind CSS", "Shadcn UI", "Supabase"],
        url: "https://project-manager-flame.vercel.app/",
        github: "https://github.com/SeroC00l/ProjectManager",
      },
    ],
  },
};

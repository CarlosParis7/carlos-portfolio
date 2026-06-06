# Carlos París — Portfolio

Portfolio personal de [Carlos París](https://carlosparis.dev), Full-Stack Developer en Panamá.

## Stack

| Capa       | Tecnología                         |
| ---------- | ---------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack) |
| Lenguaje   | TypeScript                         |
| Estilos    | Tailwind CSS v4                    |
| Animaciones| Framer Motion                      |
| Fuentes    | Geist + Geist Mono (Vercel)        |
| Deploy     | Vercel                             |

## Desarrollo local

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # build de producción
```

## Estructura

```
src/
├── app/
│   ├── layout.tsx        # Metadata global, fuentes, JSON-LD
│   └── page.tsx          # Composición de secciones
├── components/
│   ├── sections/
│   │   ├── Hero.tsx          # Foto editorial, CTAs, hora de Panamá
│   │   ├── About.tsx         # Bio + stack tags
│   │   ├── Services.tsx      # Habilidades técnicas
│   │   ├── Showcase.tsx      # Proyectos: SwiftPOS, BoxExpress, Atlas Copilot
│   │   ├── Process.tsx       # Timeline de trabajo
│   │   ├── CodeShowcase.tsx  # Snippets animados (React, Node.js, Supabase)
│   │   ├── FAQ.tsx           # Habilidades blandas
│   │   └── Contact.tsx       # Formulario + copy-to-email
│   └── ui/
│       ├── Navbar.tsx        # Active section con IntersectionObserver
│       ├── Footer.tsx
│       ├── EmailFab.tsx      # FAB flotante de email
│       └── ScrollProgress.tsx
└── lib/
    └── site.ts           # Source of truth: nombre, rol, email, socials
```

## Variable de entorno

```env
NEXT_PUBLIC_SITE_URL=https://carlosparis.dev
```

## Contacto

- Email: [carlosparis391@gmail.com](mailto:carlosparis391@gmail.com)
- GitHub: [@CarlosParis7](https://github.com/CarlosParis7)
- LinkedIn: [carlos-paris21](https://www.linkedin.com/in/carlos-paris21/)

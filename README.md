# Carlos París — Portfolio

Portfolio personal de [Carlos París](https://carlos-portfolio-dusky.vercel.app), Full-Stack Developer en Panamá.

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
│   │   ├── Hero.tsx      # Foto, CTAs, hora de Panamá
│   │   ├── Showcase.tsx  # Caso de estudio de Cobrix + SwiftPOS, BoxExpress, Atlas, landings
│   │   ├── About.tsx     # Bio
│   │   ├── Trust.tsx     # Stack
│   │   └── Contact.tsx   # Formulario + copiar email
│   └── ui/               # Navbar, Footer, mockups de proyectos, idioma
└── lib/
    ├── site.ts           # Fuente de verdad: nombre, rol, email, redes
    └── translations.ts   # Textos ES/EN
public/cobrix-*.png       # Capturas reales de Cobrix
```

## Variable de entorno

```env
NEXT_PUBLIC_SITE_URL=https://carlos-portfolio-dusky.vercel.app
```

## Contacto

- Email: [carlosparis391@gmail.com](mailto:carlosparis391@gmail.com)
- GitHub: [@CarlosParis7](https://github.com/CarlosParis7)
- LinkedIn: [carlos-paris21](https://www.linkedin.com/in/carlos-paris21/)

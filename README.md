# Carlos París — Portfolio

Portfolio personal de [Carlos París](https://carlos-portfolio-dusky.vercel.app), desarrollador full-stack en Panamá. Bilingüe (ES/EN), estático y servido desde el CDN de Vercel.

## Stack

| Capa        | Tecnología                                   |
| ----------- | -------------------------------------------- |
| Framework   | Next.js 16 (App Router, Turbopack)           |
| Lenguaje    | TypeScript                                   |
| Estilos     | Tailwind CSS v4                              |
| Animaciones | Framer Motion (respeta `prefers-reduced-motion`) |
| Tests       | Playwright (e2e contra el build de producción) |
| CI          | GitHub Actions: lint, build y e2e en cada PR |
| Deploy      | Vercel                                       |

## Desarrollo

```bash
npm install
npm run dev         # http://localhost:3000
npm run typecheck   # genera tipos de rutas + tsc
npm run lint
npm run build
npm run test:e2e    # requiere `npm run build` antes
```

## Decisiones

- **Idioma en la URL (`/es`, `/en`).** Ambas versiones se prerenderizan con `generateStaticParams` y se sirven desde el CDN. `src/proxy.ts` redirige `/` según la cookie guardada o el `Accept-Language` del navegador. Antes el layout leía cookies en cada visita y toda la página se renderizaba bajo demanda.
- **SEO bilingüe.** Canonical por idioma, `hreflang` en el `<head>` y en `sitemap.xml`, imagen social por idioma.
- **Traducciones con chequeo de tipos.** `src/lib/translations.ts` falla el build si una clave existe en un idioma y no en el otro.
- **CSP sin nonces** (`next.config.ts`). Los nonces obligarían a renderizar bajo demanda; como todo es self-hosted, `'self'` basta.
- **CV como HTML.** `cv/cv-es.html` y `cv/cv-en.html` son la fuente; el PDF se genera con el comando del comentario al inicio de cada archivo.

## Estructura

```
src/
├── proxy.ts                   # / → /es o /en
├── app/
│   ├── [lang]/
│   │   ├── layout.tsx         # metadata por idioma, JSON-LD, fuentes
│   │   ├── page.tsx           # composición de secciones
│   │   ├── not-found.tsx      # 404 localizado
│   │   ├── [...rest]/page.tsx # rutas desconocidas → 404
│   │   └── opengraph-image.tsx
│   ├── icon.tsx · manifest.ts · robots.ts · sitemap.ts
├── components/
│   ├── sections/              # Hero, Showcase (caso Cobrix), About, Trust, Contact
│   └── ui/                    # Navbar, Footer, mockups de proyectos
└── lib/
    ├── site.ts                # nombre, URL, email, redes
    └── translations.ts        # textos ES/EN
e2e/site.spec.ts               # redirección, secciones, cambio de idioma, 404, CV
cv/                            # fuentes HTML de los CV
```

## Variable de entorno

```env
NEXT_PUBLIC_SITE_URL=https://carlos-portfolio-dusky.vercel.app
```

## Contacto

- Email: [carlosparis391@gmail.com](mailto:carlosparis391@gmail.com)
- GitHub: [@CarlosParis7](https://github.com/CarlosParis7)
- LinkedIn: [carlos-paris21](https://www.linkedin.com/in/carlos-paris21/)

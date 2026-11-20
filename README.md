# El Muralisto — web

Web para vender murales pintados a mano. Construida con:

- **Astro 7**: sitio estático muy rápido, con View Transitions entre páginas
- **Tailwind CSS 4**: diseño
- **astro:assets + sharp**: las fotos se convierten a AVIF/WebP en varios tamaños (≈2 MB → 30–150 KB)
- **Cloudflare Pages**: alojamiento gratuito en https://elmuralisto.es
- SEO: Open Graph, datos estructurados (LocalBusiness + FAQ), sitemap y robots.txt
- Animaciones con CSS nativo (scroll-driven) que respetan "reducir movimiento"

## Editar contenidos

Casi todo está en **`src/data/site.ts`**:

- `site`: email, teléfono, WhatsApp, Instagram
- `murals`: obras del portfolio (título, categoría, descripción, paleta, foto)
- `plans`: tarifas (€/m²), que también usa la calculadora
- `steps` y `faqs`: proceso y preguntas frecuentes

Las fotos están en `src/assets/murales/`. Para añadir una obra, copia la foto ahí y añade una entrada en `murals`.

El pedido mínimo de la calculadora está en `src/components/Calculator.astro` (`MINIMO`).

## Comandos

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Publicación

La web está en **Cloudflare Pages** (proyecto `elmuralisto`), conectada a este repositorio.
Cada cambio que se sube a `main` se publica solo en https://elmuralisto.es en uno o dos minutos.

- Build command: `npm run build` · Output: `dist` · Variable `NODE_VERSION=22`
- Las cabeceras de seguridad y caché están en `public/_headers`
- El dominio está registrado en Hostinger y sus DNS los gestiona Cloudflare

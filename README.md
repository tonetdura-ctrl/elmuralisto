# El Muralisto — web

Web para vender murales pintados a mano. Construida con:

- **Astro 7**: sitio estático muy rápido, con View Transitions entre páginas
- **Tailwind CSS 4**: diseño
- **astro:assets + sharp**: las fotos se convierten a AVIF/WebP en varios tamaños (≈2 MB → 30–150 KB)
- **Netlify Forms**: formulario de contacto con subida de foto, sin servidor propio
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

## Publicar en Netlify

Conecta el repositorio en Netlify con **Base directory** `el-muralisto`. El resto lo lee de `netlify.toml`.
Los mensajes del formulario aparecen en Netlify → Forms (puedes activar avisos por email).
Cuando tengas dominio, cámbialo en `astro.config.mjs` (`site`) y en `public/robots.txt`.

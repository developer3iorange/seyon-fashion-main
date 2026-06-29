# Seyon Fashion

Premium B2B marketing site for **Seyon Fashions** — a vertically integrated apparel manufacturer and exporter based in Tiruppur, India.

Built with React, TypeScript, Vite, Tailwind CSS, and React Router. Static content with RFQ and newsletter forms handled by the Readdy Forms API.

## Requirements

- **Node.js** 20 or later
- **npm** (or pnpm / yarn)

## Quick start

```bash
# Clone the repo
git clone https://github.com/nitheeshmohanepic/seyon-fashion.git
cd seyon-fashion

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite dev server on port 3000 |
| `npm run build` | Production build to `out/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint on `src/` |
| `npm run type-check` | Run TypeScript without emitting files |

## Project structure

```
src/
├── components/feature/   # Shared UI (Navbar, Footer, cursor, etc.)
├── pages/                # Route-level pages and page components
├── router/               # React Router config
├── hooks/                # Custom hooks
├── contexts/             # React context providers
├── i18n/                 # Internationalization setup
└── mocks/                # Static product/catalog data
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/about` | About / Our Story |
| `/capabilities` | Manufacturing capabilities |
| `/services` | Services |
| `/quality` | Quality & compliance |
| `/sustainability` | Sustainability |
| `/catalog` | Product catalog (RFQ model, no pricing) |
| `/contact` | Contact & RFQ form |

## Environment variables

No `.env` file is required for local development. Optional build-time variables:

| Variable | Default | Description |
| --- | --- | --- |
| `BASE_PATH` | `/` | Public base path for assets and routing |
| `IS_PREVIEW` | unset | Set to any value to enable preview mode |
| `PROJECT_ID` | `""` | Readdy project ID (build-time define) |
| `VERSION_ID` | `""` | Readdy version ID (build-time define) |
| `READDY_AI_DOMAIN` | `""` | Readdy AI domain (build-time define) |

Example for a subdirectory deploy:

```bash
BASE_PATH=/seyon-fashion/ npm run build
```

## Build

```bash
npm run build
```

Output is written to the `out/` directory (not `dist/`). Preview it locally:

```bash
npm run preview
```

## Deployment

This is a client-side React SPA. After building, deploy the contents of `out/` to any static host.

### Vercel

1. Import the GitHub repo in Vercel.
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `out`
5. Add a rewrite so client-side routes work:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Netlify

1. Connect the repo.
2. Build command: `npm run build`
3. Publish directory: `out`
4. Add a `_redirects` file in `public/` (or `netlify.toml`):

```
/*    /index.html   200
```

### Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `out`
- Enable **Single Page Application** mode, or add a `_redirects` / `_routes.json` rule for SPA fallback.

### Nginx

```nginx
server {
  listen 80;
  server_name example.com;
  root /var/www/seyon-fashion/out;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

### GitHub Pages (project site)

If deploying to `https://<user>.github.io/seyon-fashion/`:

```bash
BASE_PATH=/seyon-fashion/ npm run build
```

Upload the `out/` folder to the `gh-pages` branch or use GitHub Actions with the same `BASE_PATH`.

## Forms

Form submissions are sent to Readdy Forms:

- **RFQ / contact form** — `src/pages/contact/page.tsx`
- **Newsletter** — `src/components/feature/Footer.tsx`

No backend or database is required for the site itself. Form endpoints are configured in those components.

## Tech stack

- React 19
- TypeScript
- Vite 7
- Tailwind CSS
- React Router 7
- i18next (internationalization)
- Lucide React (icons)

## License

Private — all rights reserved.

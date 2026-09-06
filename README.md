# Daniel Saavedra — Portfolio

A personal developer portfolio for Daniel Saavedra, a BSIT student at Negros Oriental State University (NORSU) Bais Campus I. It presents active project work honestly: the TOR System and BAYANI are both marked **In Development**. The TOR System includes screenshots and a GitHub repository link; BAYANI has no public repository or demo yet.

## Stack

- React + TypeScript + Vite
- Tailwind CSS
- CSS-based, replaceable placeholder visuals (no copyrighted image assets)

## Run locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints. Create an optimized build with:

```bash
npm run build
npm run preview
```

## Update content

- Project text, technologies, features, and future improvements: `src/data/projects.ts`
- Homepage and section copy: `src/App.tsx`
- Navigation: `src/components/Header.tsx`
- Styling and color system: `tailwind.config.js` and `src/styles/index.css`
- Contact placeholders: search for `your-email@example.com` and `Add your profile URL` in `src/App.tsx`.

Repository links are rendered only for projects with a real `repository` URL in `src/data/projects.ts`. The TOR System repository is available; BAYANI intentionally has no public repository or demo, and its demo-unavailable button remains disabled.

## Add assets

Use `public/images/`:

- `public/images/profile-placeholder.png` for a profile photo
- `public/images/tor-system/` for TOR System screenshots
- `public/images/bayani/` for BAYANI screenshots, thumbnails, logos, and gameplay media

TOR System screenshots are already stored in `public/images/tor-system/`. BAYANI currently uses the code-based placeholder visual in `src/components/ProjectVisual.tsx`; replace it with approved gameplay media when available, using accurate alt text. See [`public/images/README.md`](public/images/README.md) for details.

## Add a future project

Add another object in the `projects` array in `src/data/projects.ts`. Reuse an existing `visual` style or add one to `ProjectVisual.tsx`. The home page cards and routed detail pages are generated from this data, so the new project remains consistent.

## Deploy to Vercel

1. Push this folder to a Git repository.
2. Import that repository in Vercel.
3. Vercel recognizes Vite automatically; use `npm run build` and the `dist` output directory if prompted.
4. Deploy.

`vercel.json` contains an SPA rewrite, so direct visits to `/projects/tor-system` and `/projects/bayani` work after deployment.

## Implementation notes

- The site uses a small native pathname router instead of an extra routing dependency; it is enough for the two stable detail routes and keeps the project approachable.
- It respects `prefers-reduced-motion`, uses semantic sections/headings, visible keyboard focus styles, descriptive labels for placeholder visuals, and high-contrast text.
- Update the Open Graph metadata in `index.html` with a final live URL/image when the site is deployed.

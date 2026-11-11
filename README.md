# DevOps & Cloud Engineering – Practical Bootcamp (landing page)

React + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide.

## Run locally
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # type-check + production build into dist/
    npm run preview

## Edit content
- `src/config.ts` – registration URL (used by every Register button), LinkedIn/GitHub/email links (empty = hidden), nav.
- `src/components/Sections.tsx` – technologies, project steps, benefits, pricing, FAQ text.
- Instructor photo: put `public/instructor.jpg` and swap the placeholder in `Instructor` (comment marks the spot).
- `public/privacy.html`, `public/terms.html` – draft pages; review before launch.

## Deploy on Vercel
1. Push to GitHub. 2. Vercel → Add New Project → import repo.
3. Framework: Vite (build `npm run build`, output `dist`). 4. Deploy.
Afterwards add an absolute `og:image` URL to `index.html` once you have a domain.

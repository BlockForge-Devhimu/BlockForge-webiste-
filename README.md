# BlockForge Website

A responsive React + Vite starter website for a freelance blockchain development team.

## Requirements
- Node.js (LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed in the terminal (usually `http://localhost:5173`).

## Production build
```bash
npm run build
npm run preview
```
The production site is generated in `dist/`.

## Deploy to Cloudflare Pages
1. Create a GitHub repository and upload this project.
2. In Cloudflare, open Workers & Pages and create a Pages project connected to the repository.
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Deploy. Cloudflare will provide a `*.pages.dev` address.

## Before launch
- Confirm that the BlockForge name and domain are available and do a trademark check.
- Replace the example contact email `hello@blockforge.dev` in `src/App.jsx` with your real business email.
- The contact form currently opens the visitor's email app using `mailto:`. For direct submissions, connect a form service or backend.
- Add verified team details, your preferred contact methods, and any project-specific case study facts.
- Confirm you have permission to display project names/logos and describe the team's contributions.
- Add a custom domain if you own one.
- Revisit SEO metadata in `index.html` when the final domain and positioning are decided.

## Portfolio note
Project descriptions are based on contribution details provided by the site owner. They should be reviewed for accuracy before public launch.

# Sri Pon Rama S — Portfolio

Personal portfolio of **Sri Pon Rama S**, AI & Software Engineering student at Sri Eshwar College of Engineering.
Live at **https://sriponrama-portfolio.onrender.com**.

> Build. Solve. Ship.

## Stack

- **Next.js 16** (App Router, Turbopack, fully static output) + **React 19**
- **Tailwind CSS 4** with design tokens for light and dark themes
- **Geist Sans / Geist Mono** via `next/font`
- No animation library: reveals use a tiny IntersectionObserver plus CSS and respect `prefers-reduced-motion`

## Features

- Recruiter-first layout: sticky identity sidebar with section nav, scrolling content
- Case-study page for every project (`/projects/[slug]`): problem → what I built → features → stack → learnings
- ⌘K / Ctrl+K command menu (navigate, open projects, copy email, open resume, toggle theme)
- Light / dark theme that follows the system and remembers your choice
- SEO: generated Open Graph image, monogram favicon, `sitemap.xml`, `robots.txt`, JSON-LD `Person` schema
- Accessible: skip link, visible focus rings, semantic landmarks, AA contrast, reduced-motion support

## Editing content

All content lives in two typed files, so the site, resume and GitHub profile stay in sync:

| File | What it holds |
| --- | --- |
| `src/content/profile.ts` | Bio, experience, achievements, skills, coding stats, education, certifications, links |
| `src/content/projects.ts` | Projects and their case studies |

Images live in `public/images/` (project screenshots in `public/images/projects/`).
The resume is served from `public/Sri_Pon_Rama_Resume.pdf`.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build && npm start
```

Deployed on Render (`render.yaml`): `npm run build` → `npm run start`.

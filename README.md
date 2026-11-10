# Sri Pon Rama S — Portfolio

Personal portfolio of **Sri Pon Rama S**, AI & Software Engineering student at Sri Eshwar College of Engineering.
Live at **https://sriponrama-portfolio.onrender.com**.

> Build. Solve. Ship.

## Stack

- **Next.js 16** (App Router, Turbopack, fully static output) + **React 19**
- **Tailwind CSS 4** with design tokens for light and dark themes
- **Geist Sans / Geist Mono** via `next/font`
- No animation library: one small client island (`src/components/fx/PageFx.tsx`) drives every effect with CSS, and all motion respects `prefers-reduced-motion`

## Features

- Recruiter-first, full-width layout: sticky top navbar with active-section tracking, hero with intent, résumé and email above the fold
- Motion with purpose: letter-by-letter name reveal, "decoding" role text, typing terminal, running-text bands, word-by-word section titles, count-up stats, 3D tilt and glare on screenshots, magnetic buttons, cursor-following card glow, scroll progress, hide-on-scroll navbar
- Case-study page for every project (`/projects/[slug]`): problem → what I built → features → stack → learnings
- ⌘K / Ctrl+K command menu (navigate, open projects, copy email, open resume, toggle theme)
- Light / dark theme that follows the system and remembers your choice
- SEO: generated Open Graph images (site + one per project), monogram favicon and Apple icon, web manifest, `sitemap.xml`, `robots.txt`, JSON-LD `Person` schema
- Security headers (nosniff, frame denial, referrer and permissions policies, HSTS); `X-Powered-By` removed
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

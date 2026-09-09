# StudyVize — marketing site

Premium, single-page marketing site for **StudyVize**, a boutique study-abroad
consultancy helping Indian students apply to universities across the US, UK,
Canada, Australia, Germany, Ireland, New Zealand and the Netherlands.

Built as a fully animated **Next.js 16** app — no headless CMS, all content
authored inline in components, no backend.

## Stack

- **Next.js 16** (App Router + Turbopack)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS v4** (design tokens via `@theme`)
- **framer-motion** — orchestrated scroll-in reveals, carousel transitions
- **lucide-react** — icon set
- **clsx** — conditional class merging
- **next/font** — Playfair Display (display serif) + Manrope (body sans), zero CLS
- **next/image** — remote-optimized Unsplash portraits for testimonials

## Sections (single-page long-scroll)

| # | Section     | Highlight                                                             |
| - | ----------- | --------------------------------------------------------------------- |
| 1 | Hero        | Animated mesh gradient, floating shapes, word-by-word headline reveal |
| 2 | Trust bar   | Four stats with scroll-triggered count-up animation                   |
| 3 | Countries   | 8-country grid, hover lift + subtle scale, staggered fade-in          |
| 4 | Services    | 6 service cards, sequential fade-in on scroll                         |
| 5 | Process     | Alternating vertical timeline with 5 sequenced reveals                |
| 6 | Stories     | Auto-advancing testimonial carousel with dot navigation               |
| 7 | FAQ         | Accordion with 8 questions, framer height animation                   |
| 8 | CTA         | Glassmorphism form (mock submit + success toast)                      |
| 9 | Footer      | Brand, link columns, socials, contact email                           |

Sticky nav is transparent on the hero, then blurs + shrinks after 20px of
scroll. Collapses to a hamburger under `md`.

## Local development

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

## Production build

```bash
pnpm build
pnpm start
```

## Project layout

```
app/
  layout.tsx        # root layout, font wiring, metadata
  page.tsx          # composes all sections
  globals.css       # Tailwind + custom animations, mesh gradient, theme tokens
components/
  Navbar.tsx        # sticky, shrink-on-scroll, mobile drawer
  Hero.tsx          # animated background + text reveal
  TrustBar.tsx      # IntersectionObserver number counters
  Countries.tsx     # 8-country grid
  Services.tsx      # 6-service cards
  Process.tsx       # 5-step alternating timeline
  Stories.tsx       # testimonial carousel
  FAQ.tsx           # accordion
  CTA.tsx           # lead form + success toast
  Footer.tsx        # brand + links
  Reveal.tsx        # shared framer scroll-in wrapper
public/
  favicon.svg       # gradient monogram
```

## Design tokens

Defined in `app/globals.css` via Tailwind v4's `@theme`. Brand palette centers
on **deep purple** (`--color-brand-*`) — matches the "-vize" (visa/vision)
brand angle. Two custom fonts wired through `next/font`:

- `font-display` — Playfair Display, used for all H1–H3
- default sans — Manrope, used for body copy

## Accessibility

- Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`)
- Every interactive element has `aria-label` or visible label + focus ring
- Alt text on every image
- `prefers-reduced-motion` honoured in the reveal + counter animations
- Heading hierarchy: single `h1`, one `h2` per section

## Deploy

Deployed via Vercel — connect the GitHub repo and it Just Works. No env vars
required for the static marketing site.

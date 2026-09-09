# studyvize-website

Public marketing website for **StudyVize**, a study-abroad consultancy. Static HTML, CSS, and vanilla JavaScript — no framework, no build step, deploys to any static host.

Part of the [StudyVize platform](https://github.com/Dev-Harsh0218/studyvize-platform).

## What it does

- Landing page introducing StudyVize and the study-abroad service
- Program / country pages describing available destinations
- Contact form → posts leads to [`studyvize-api`](https://github.com/Dev-Harsh0218/studyvize-api) → shows up in [`studyvize-portal`](https://github.com/Dev-Harsh0218/studyvize-portal) portal for consultants to follow up

## Layout

```
studyvize-website/
├── index.html          # main landing page
├── form.html           # lead-capture contact form
├── style1.css          # site styles (custom, no framework)
├── assets/             # images, icons, fonts
├── readme-images/      # screenshots referenced by this README
├── style-guide.md      # brand colors, type scale, spacing
└── favicon.svg
```

## Local dev

Any static server works. Simplest:

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

Or open `index.html` directly in a browser.

## Deploy

Static host — Vercel / Netlify / GitHub Pages / any S3 + CloudFront:

```bash
# Vercel
vercel --prod

# Netlify
netlify deploy --prod
```

## Design choices

- **No framework** — content-heavy, interaction-light; static HTML is the right tool
- **No build step** — zero-config deploy, no CI pipeline needed
- **Single stylesheet** — avoids fragmentation; whole site brand-consistent
- **Form posts to API** (not `mailto:`) — leads go straight into MongoDB via [`studyvize-api`](https://github.com/Dev-Harsh0218/studyvize-api), never touch consultant's personal inbox

## Related repos

- [`studyvize-platform`](https://github.com/Dev-Harsh0218/studyvize-platform) — platform meta-repo (architecture)
- [`studyvize-portal`](https://github.com/Dev-Harsh0218/studyvize-portal) — consultant-facing admin portal
- [`studyvize-api`](https://github.com/Dev-Harsh0218/studyvize-api) — backend (Node/Express/MongoDB/Nodemailer)

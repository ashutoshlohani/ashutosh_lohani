# Ashutosh Lohani — Portfolio

Personal portfolio website built with React, Vite, and Tailwind CSS. Achieves a perfect **100/100 Lighthouse performance score** in production.

## 🚀 Live

[ashutoshlohani.github.io/ashutosh_lohani](https://ashutoshlohani.github.io/ashutosh_lohani)

## ⚡ Performance

| Metric | Score |
|---|---|
| Performance | 100 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |
| First Contentful Paint | < 1.0s |
| Largest Contentful Paint | < 2.5s |
| Total Blocking Time | 50ms |
| Cumulative Layout Shift | 0.007 |

## 🛠 Tech Stack

- **Framework** — React 18
- **Build Tool** — Vite 5 (SWC compiler)
- **Styling** — Tailwind CSS + SCSS
- **Animations** — Framer Motion
- **Typography** — DM Sans (Google Fonts)
- **Deployment** — GitHub Pages

## 📁 Project Structure
```
src/
├── components/
│   ├── textEffect/     # HeroText scramble animation
│   ├── ui/             # BackgroundBeams and other UI
│   └── loader/         # Suspense loader
├── pages/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── ServiceTools.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
└── main.jsx
```

## 🏃 Getting Started
```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build (use this for Lighthouse testing)
npm run preview
```

## 🔑 Performance Optimisations

- **Eager Hero load** — Hero component is not lazy loaded, ensuring instant LCP
- **Lazy sections** — All below-fold sections use `React.lazy` with individual `Suspense` boundaries
- **Deferred BackgroundBeams** — Canvas animation lazy loaded after text is painted
- **Non-blocking fonts** — DM Sans loaded with `preload` + `onload` swap technique
- **Chunk splitting** — `react-vendor`, `framer-motion`, and `utils` split into separate chunks
- **Compression** — Brotli/gzip via `vite-plugin-compression2`
- **No artificial delays** — Removed intro loader setTimeout that was blocking FCP
- **Terser minification** — JS minified with console/debugger stripping in production

## 📦 Deploy
```bash
npm run deploy
```

Deploys to GitHub Pages via `gh-pages`.

> **Note** — Always run Lighthouse on `npm run preview` (port 4173), not the dev server (port 5174). Dev mode intentionally skips all optimisations.
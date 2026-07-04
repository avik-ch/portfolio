# Agent Notes

## Project Shape
- This is a single Vite React app, not a monorepo. The app entrypoint is `src/main.jsx`, which renders `src/App.jsx`.
- Tailwind is wired through `@tailwindcss/vite` in `vite.config.js`; the current Tailwind import lives in `src/App.css`.
- The package manager is npm; `package-lock.json` is present.

## Commands
- Start dev server: `npm run dev`.
- Production build: `npm run build`.
- Lint: `npm run lint`.
- Preview built app: `npm run preview`.
- There is no test script, formatter config, typecheck script, CI workflow, or pre-commit hook in the repo right now.

## Dependencies And Routing
- Use existing `react-router` for routes; do not add `react-router-dom` unless the dependency setup changes.
- Use existing `motion` for Framer Motion-style transitions; import from the package actually installed rather than adding `framer-motion`.
- Avoid adding external libraries unless the user explicitly approves them.

## Portfolio Direction
- Keep the portfolio simple: React + Tailwind, minimal custom logic, no gradients, no excessive styling.
- Use Rosé Pine Dawn for light mode and Rosé Pine Main for dark mode; default theme should be light, not system-derived dark mode.
- The landing page should be a centered single column with max width around 900px.
- Reuse one row component for section entries: image/GIF, title, and date only; rows link to detail pages.
- Detail pages should share the row image/title for morph transitions, then leave the rest as normal HTML content for later editing.
- Use `/placeholder.png` from `public/` for placeholder entry images.

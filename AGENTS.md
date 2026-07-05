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

## Dependencies
- Avoid adding external libraries unless the user explicitly approves them.

## Portfolio Direction
- Keep the portfolio simple: React + Tailwind, minimal custom logic, no gradients, no excessive styling.
- Use Rosé Pine Dawn for light mode and Rosé Pine Main for dark mode
- The landing page should be a centered single column with max width around 900px.
- Reuse one row component for section entries: image/GIF, title, and date only; rows link to detail pages.

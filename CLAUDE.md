# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mobile-first trailer rental website ("DVV RENT - Anhängervermietung") generated from Figma Make. German-language UI for a trailer rental business in northern Germany. The Figma source is at https://www.figma.com/design/ARiqVsKhhD0DyycwZpwjXu/Mobile-First-Trailer-Rental-Website.

## Commands

- `npm i` — install dependencies
- `npm run dev` — start Vite dev server
- `npm run build` — production build

No test runner or linter is configured.

## Architecture

**Stack:** React 18, TypeScript, Vite, Tailwind CSS v4, shadcn/ui (Radix primitives + CVA)

**Path alias:** `@` maps to `./src` (configured in `vite.config.ts`)

**Routing:** No router library — `App.tsx` uses `useState("home")` with a switch statement to render pages. Navigation is passed via `onNavigate` callback props. Pages: home, stationen, fuhrpark, legales, datenschutz, agb, widerrufsrecht, kontakt.

**Layout structure (App.tsx):**
- `TopBar` — fixed red announcement ticker bar (35px tall, z-50)
- `Header` — fixed nav below TopBar (top: 35px, z-40). Mobile: centered logo only. Desktop (md+): logo left, horizontal nav right
- Page content rendered in a container div
- `BottomNav` — fixed mobile-only bottom tab bar (z-50, hidden on md+)

**Key directories:**
- `src/app/components/` — page components (HomePage, FuhrparkPage, etc.) and shared layout (Header, BottomNav, TopBar)
- `src/app/components/ui/` — shadcn/ui primitives (button, card, dialog, etc.). Use the `cn()` utility from `ui/utils.ts` for merging class names
- `src/app/components/figma/` — Figma Make helper components (ImageWithFallback)
- `src/imports/` — large auto-generated Figma Make components with inline SVGs. These are machine-generated — avoid manual edits
- `src/assets/` — image assets (hashed PNGs from Figma export)
- `src/styles/` — CSS entry point: `index.css` imports `fonts.css`, `tailwind.css`, `theme.css`

**Styling:**
- Tailwind CSS v4 via `@tailwindcss/vite` plugin (not PostCSS-based)
- Custom theme colors defined in `tailwind.css`: `--color-dark: #0f172a`, `--color-primary: #E30613` (DVV red)
- CSS custom properties for shadcn theming in `theme.css` (light/dark mode via `:root` / `.dark`)
- Font: Inter (loaded from Google Fonts in `fonts.css`)
- Mobile breakpoint: 768px (`md:` prefix, also used by `useIsMobile()` hook)

## Conventions

- Components are TypeScript `.tsx` files with named exports (except `App.tsx` which uses default export)
- Icons come from `lucide-react`
- Raw SVG assets are in `src/imports/svg-*.ts` files as string constants — do not manually edit these
- The `vite.config.ts` comment says: never add `.css`, `.tsx`, or `.ts` to `assetsInclude`

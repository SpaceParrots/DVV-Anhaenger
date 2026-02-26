# Mobile-First Trailer Rental Website

DVV RENT — Anhängervermietung. A mobile-first trailer rental website for a business in northern Germany.

The original design is available at https://www.figma.com/design/ARiqVsKhhD0DyycwZpwjXu/Mobile-First-Trailer-Rental-Website.

## Tech Stack

- **React 18** with TypeScript
- **Vite** — build tool and dev server
- **Tailwind CSS v4** — utility-first styling via the `@tailwindcss/vite` plugin
- **shadcn/ui** — component primitives built on Radix UI and Class Variance Authority
- **Lucide React** — icons
- **Inter** — primary font (loaded from Google Fonts)

## Project Structure

```
src/
├── main.tsx                   # App entry point
├── styles/
│   ├── index.css              # CSS entry (imports fonts, tailwind, theme)
│   ├── fonts.css              # Google Fonts import (Inter)
│   ├── tailwind.css           # Tailwind v4 config & custom theme colors
│   └── theme.css              # shadcn/ui CSS custom properties (light/dark)
├── app/
│   ├── App.tsx                # Root component with state-based routing
│   └── components/
│       ├── TopBar.tsx         # Fixed announcement ticker bar
│       ├── Header.tsx         # Fixed navigation header (responsive)
│       ├── BottomNav.tsx      # Fixed mobile-only bottom tab bar
│       ├── HomePage.tsx       # Landing page
│       ├── StationenPage.tsx  # Rental station locations
│       ├── FuhrparkPage.tsx   # Trailer fleet overview
│       ├── KontaktPage.tsx    # Contact page
│       ├── LegalesPage.tsx    # Legal hub (links to AGB, Datenschutz, etc.)
│       ├── AGBPage.tsx        # Terms and conditions
│       ├── DatenschutzPage.tsx# Privacy policy
│       ├── WiderrufsrechtPage.tsx # Cancellation policy
│       ├── figma/             # Figma Make helper components
│       └── ui/                # shadcn/ui primitives (button, card, dialog…)
├── imports/                   # Auto-generated Figma Make components & SVGs
└── assets/                    # Exported image assets (PNGs)
```

## Getting Started

```bash
npm i          # Install dependencies
npm run dev    # Start the development server
npm run build  # Production build
```

## Scaffolding

This project was scaffolded with **Figma Make**, which auto-generates React + Tailwind code from Figma designs. Key things to know:

- **`src/imports/`** contains machine-generated components and inline SVG constants — avoid editing these files manually.
- **`src/assets/`** holds hashed PNG exports from Figma.
- **`src/app/components/figma/ImageWithFallback.tsx`** is a Figma Make utility that renders a fallback when images fail to load.
- The `@` path alias resolves to `./src` (configured in `vite.config.ts`).
- The Vite config comment notes: never add `.css`, `.tsx`, or `.ts` to `assetsInclude`.

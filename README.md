# DVV RENT - Anhängervermietung

Mobile-first trailer rental website for **DVV RENT**, a trailer rental business in northern Germany. German-language UI generated initially from [Figma Make](https://www.figma.com/design/ARiqVsKhhD0DyycwZpwjXu/Mobile-First-Trailer-Rental-Website).

## Goals

- Provide a responsive, mobile-first web presence for DVV RENT's trailer rental service
- Allow customers to browse available trailers (Fuhrpark), find pickup stations (Stationen), and get in touch (Kontakt)
- Present legal information (Impressum, Datenschutz, AGB, Widerrufsrecht) as required by German law

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite` plugin) |
| UI Primitives | shadcn/ui (Radix + CVA) |
| Icons | lucide-react |
| Font | Inter (Google Fonts) |

## Project Structure

```
src/
├── app/components/        # Page components & shared layout
│   ├── HomePage.tsx        # Landing page
│   ├── FuhrparkPage.tsx    # Trailer fleet overview
│   ├── StationenPage.tsx   # Pickup station locations
│   ├── KontaktPage.tsx     # Contact page
│   ├── LegalesPage.tsx     # Legal / Impressum
│   ├── DatenschutzPage.tsx # Privacy policy
│   ├── AgbPage.tsx         # Terms & conditions
│   ├── WiderrufsrechtPage.tsx # Cancellation policy
│   ├── Header.tsx          # Fixed nav (mobile: logo, desktop: logo + nav)
│   ├── BottomNav.tsx       # Mobile-only bottom tab bar
│   ├── TopBar.tsx          # Red announcement ticker bar
│   └── ui/                 # shadcn/ui primitives (button, card, dialog, …)
├── imports/                # Auto-generated Figma Make components (do not edit)
├── assets/                 # Image assets (hashed PNGs from Figma export)
└── styles/
    ├── index.css           # CSS entry point
    ├── fonts.css           # Inter font import
    ├── tailwind.css        # Tailwind config & custom theme colors
    └── theme.css           # shadcn CSS custom properties (light/dark)
```

### Routing

No router library — `App.tsx` uses `useState("home")` with a switch statement to render pages. Navigation is passed via `onNavigate` callback props.

**Pages:** home, stationen, fuhrpark, legales, datenschutz, agb, widerrufsrecht, kontakt.

### Layout

- **TopBar** — fixed red announcement ticker (35 px, z-50)
- **Header** — fixed nav below TopBar (top: 35 px, z-40). Mobile: centered logo. Desktop (md+): logo left, horizontal nav right
- **Page content** — rendered in a container div
- **BottomNav** — fixed mobile-only bottom tab bar (z-50, hidden on md+)

### Path Alias

`@` maps to `./src` (configured in `vite.config.ts`).

## Commands

```bash
npm i          # Install dependencies
npm run dev    # Start Vite dev server
npm run build  # Production build
```
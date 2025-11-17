# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a single-page React application built with TypeScript and Vite, styled with Tailwind CSS. It renders a catalog-like UI for GAMACZ products, with hardcoded product data and simple navigation between a home page and a few category pages.

Key technologies:
- React 18 with React Router for client-side routing.
- TypeScript with path aliasing (`@/*` → `src/*`).
- Vite for dev server and builds.
- Tailwind CSS for styling, with a small UI component layer (`src/components/ui`).
- `same-runtime` configured as the JSX runtime.

## Common Commands

All commands are defined in `package.json` scripts and can be run via your preferred Node package manager (`npm`, `pnpm`, `yarn`, or `bun`). Replace `npm run` with the equivalent for your tool of choice.

### Install dependencies

- Install: `npm install`

### Development server

- Start dev server (Vite, HMR enabled, listens on all interfaces):
  - `npm run dev`

### Build

- Type-check and build for production (outputs to `dist`):
  - `npm run build`
  - This runs `tsc -b` first, then `vite build --outDir dist`.

### Linting and formatting

Linting and formatting are handled by Biome and TypeScript, invoked via `bunx` in the scripts. These commands may modify files in place.

- Lint (TypeScript no-emit check + Biome lint with autofix):
  - `npm run lint`
- Format code with Biome:
  - `npm run format`

### Preview production build

- Serve the built `dist` directory locally using Vite preview:
  - `npm run preview`

### Testing

There is currently **no** test runner or `test` script configured (no Jest/Vitest/Playwright/Cypress config is present). To run a single test, you will first need to introduce a test framework and add appropriate `package.json` scripts; until then, there is no standard test command in this repo.

## High-Level Architecture

### Entry points and configuration

- `src/main.tsx`
  - Bootstraps the React app by creating a root with `react-dom/client` and rendering `<App />` into the `#root` element.
  - Imports global styles from `src/index.css`.
- `src/App.tsx`
  - Defines the top-level application layout and routing.
  - Wraps the UI in `BrowserRouter` and sets up `Routes` for the main pages.
- `vite.config.ts`
  - Registers the React plugin and configures a path alias `@` → `./src`.
  - Excludes `same-runtime` JSX runtimes from Vite dependency optimization.
- `tsconfig.json`
  - Sets `jsxImportSource` to `"same-runtime/dist"` and configures bundler-style module resolution.
  - Defines `baseUrl` and the `@/*` path mapping used throughout the codebase.

### Layout and routing

The app uses a simple layout shell with header, sidebar, routed content, and footer.

- `src/App.tsx`
  - Layout structure:
    - `<Header />` at the top.
    - A flex container with `<Sidebar />` on the left and a `<Routes>` outlet on the right.
    - `<Footer />` at the bottom.
  - Routes:
    - `/` → `HomePage` (`src/pages/HomePage.tsx`).
    - `/pripravujeme` → `PripravujemePage` (`src/pages/PripravujemePage.tsx`).
    - `/nabijeni-do-site` → `NabijeniPage` (`src/pages/NabijeniPage.tsx`).
- `src/components/Header.tsx`
  - Top navigation bar with language flags, logo, search bar, and simple login/cart placeholders.
- `src/components/Sidebar.tsx`
  - Vertical category list. Some entries are plain buttons; others with a `path` use `react-router-dom` `Link` to navigate to pages.
- `src/components/Footer.tsx`
  - Static footer with basic informational sections.

When adding new pages or routes, follow this pattern:
- Create a new page component in `src/pages/...`.
- Add a corresponding `<Route>` in `src/App.tsx`.
- Optionally add a `Link` in `Sidebar.tsx` or `Header.tsx`.

### UI components and styling

- Tailwind CSS is initialized in `src/index.css`:
  - Includes `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`.
  - Defines CSS variables for light/dark themes and applies them in `@layer base`.
- `src/lib/utils.ts`
  - Provides a single `cn` helper to merge class names using `clsx` and `tailwind-merge`. This is used in UI components to build Tailwind class strings safely.
- `src/components/ui/*`
  - `button.tsx`:
    - Exposes a polymorphic `Button` component with `variant` (`default`, `outline`, `ghost`) and `size` (`default`, `sm`, `lg`) props.
    - Uses Tailwind and the `cn` helper to compose styles.
  - `card.tsx`:
    - Provides `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` building blocks for card-like UI.
  - `input.tsx`:
    - A styled `Input` wrapper for `<input>` elements with standard Tailwind styling.
  - `select.tsx`:
    - A minimal custom select implementation built on React context (`Select`, `SelectTrigger`, `SelectValue`, `SelectContent`, `SelectItem`).

When building new UI pieces, prefer reusing these primitives (`Button`, `Card`, `Input`, `Select`) and the `cn` helper rather than introducing ad hoc styles.

### Domain-specific components and data

- `src/components/ProductCard.tsx`
  - Displays product information (title, code, description, image, manufacturer, optional "new" badge) inside a `Card`.
  - Used across multiple pages for product listings.
- `src/pages/HomePage.tsx`
  - Defines a `featuredProducts` array of hardcoded product metadata.
  - Renders a hero banner followed by a grid of `ProductCard` entries.
- `src/pages/NabijeniPage.tsx` and `src/pages/PripravujemePage.tsx`
  - Each page defines its own `products` array.
  - Both implement simple filter/sort UIs using the custom `Select`, `Input`, and `Button` components, and render products via `ProductCard`.

Currently, all product and category data is hardcoded in the respective page components and `Sidebar.tsx`. There is no API layer or external data fetching configured.

### Notes for future changes

- Path aliasing:
  - Use `@/` imports for modules under `src` (e.g., `@/components/ProductCard`), as configured in both `tsconfig.json` and `vite.config.ts`.
- JSX runtime:
  - `tsconfig.json` uses `jsxImportSource: "same-runtime/dist"`. Be careful not to remove or break this configuration unless you also adjust the Vite and TypeScript setup accordingly.
- Lint/format:
  - The `lint` and `format` scripts run Biome with `--write`, so invoking them will modify files to conform to the configured style.

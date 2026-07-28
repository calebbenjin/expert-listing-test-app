# Expert Listing — Dashboard

A recreation of the Expert Listing admin dashboard from Figma, built as a frontend take-home assessment.

## Running the project

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The Dashboard is the only fully built page; the other nav items (Listings, Users, Request, Applications, Tasks) render lightweight placeholder pages so the navigation doesn't feel broken.

```bash
pnpm build && pnpm start   # production build
```

## Stack

- **Next.js 16 (App Router) + React 19 + TypeScript**
- **Tailwind CSS v4** with a custom oklch design-token palette (pine green, mint, blue-violet, success/warning/danger, stat-highlight yellow) layered on top of the existing shadcn "base-nova" scaffold
- **shadcn/ui on Base UI** (`@base-ui/react`) for primitives (Button, Card, Avatar, etc.) — this repo's scaffold uses Base UI instead of Radix, so new primitives were pulled via the shadcn CLI to match
- **TanStack Query** for data fetching against real Next.js Route Handlers under `src/app/api/dashboard/*`, rather than importing static mock objects directly into components — this gives genuine loading/error/retry states instead of data that's just always there
- **Recharts** for the Sales Overview bar chart, dynamically imported with `ssr: false` since it depends on the DOM
- **Framer Motion** used sparingly: the shared-layout active-tab indicator in the primary nav, and the mobile drawer's slide/fade transition. Everything else (card hover, buttons, links) is plain CSS transitions — animating everything makes nothing feel important

## Architecture

```
src/
  app/
    (dashboard)/          # layout shell (header + nav + mobile drawer) and all pages
    api/dashboard/        # mock Route Handlers (artificial delay, real JSON responses)
  components/
    ui/                    # shadcn primitives
    layout/                # header, nav, mobile drawer, shared page-placeholder
    dashboard/              # Sales Overview, overview summary cards, spotlight carousel, skeletons
  hooks/queries/            # TanStack Query hooks, one per endpoint
  lib/                      # cn, currency/number formatting, query client
  mock/                     # seed data returned by the API routes
  types/                    # shared dashboard types
```

State management is plain `useState`/URL — Zustand was intentionally **not** added. Nothing in this build needs state shared across more than one parent/child level (the mobile drawer's open state lives in the layout that owns both the trigger and the drawer), so introducing a store would be complexity without benefit.

## Responsive behaviour

There were no tablet/mobile frames in the Figma file, so the breakpoints below are my own design decisions, not a shrink of the desktop layout:

- **Desktop (≥1024px)**: matches Figma — horizontal pill nav, 2-column main grid, 3-up spotlight row.
- **Tablet / mobile (<1024px)**: the horizontal nav is replaced by a hamburger-triggered slide-in drawer (a different interaction, not a squeezed version of the same one); the two-column grid stacks; the spotlight row becomes a horizontal scroll-snap swipe carousel on narrow screens instead of the desktop's chevron-button carousel, since touch users scroll rather than click small arrow buttons.

## Assumptions & trade-offs

- **Scope**: only the Dashboard screen was built out fully, per the brief's own emphasis on depth/quality over breadth. The other five nav destinations get a real (if minimal) page rather than a dead link.
- **Mock data, real async boundary**: all dashboard data is static, but it's served through actual Route Handlers with a simulated network delay, so loading skeletons and error/retry states are real code paths, not decoration.
- **Chart range toggle**: the "1 Week / 1 Month / 1 Year" control is fully interactive (it switches the active pill), but all three ranges render the same year-of-data mock, since there was no source data for week/month granularity and fabricating three internally-consistent datasets didn't seem worth the complexity for a static demo.
- **Spotlight pagination dots**: rendered to match the design but are decorative — each card has a single source image in the mock, so there's nothing to page through yet.
- **Images**: the three spotlight photos are placeholder building/architecture photography from Lorem Picsum (`picsum.photos`), served through `next/image` with explicit `sizes` for responsive loading.
- **Currency formatting**: amounts are formatted as `₦` + `en-NG` locale grouping to match the Figma's Naira figures exactly (e.g. `₦120,000,000.00`).

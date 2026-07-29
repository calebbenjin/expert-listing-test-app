# Expert Listing — Dashboard

A recreation of the Expert Listing admin dashboard from the Figma design, built as a frontend assessment.

## How to run

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). `/` (Dashboard) is the only fully-built page; Listings, Users, Request, Applications, and Tasks are minimal placeholder pages so the nav doesn't dead-end.

```bash
pnpm build && pnpm start   # production build
```

## Technology choices

- **Next.js 16 (App Router) + React 19 + TypeScript**
- **Tailwind CSS v4**, extending the project's shadcn "base-nova" scaffold with the Figma's brand palette (pine green, mint, blue-violet info accent, success/warning/danger, stat-highlight yellow)
- **shadcn/ui on Base UI** (`@base-ui/react`) for primitives — matches the scaffold's existing pattern rather than introducing Radix
- **TanStack Query** against real Next.js Route Handlers (`src/app/api/dashboard/*`), instead of importing mock objects straight into components, so loading/error/retry states are genuine code paths
- **Recharts** for the Sales Overview bar chart, dynamically imported with `ssr: false`
- **Framer Motion** used sparingly: the primary nav's active-tab indicator, the mobile drawer transition, and the spotlight carousel's image crossfade — not layered onto everything
- **Open Runde** (self-hosted via `@fontsource/open-runde`) as the app typeface
- Real icon and logo assets from `public/icons/` (Figma exports) rendered via `next/image`, rather than icon-library stand-ins

## Assumptions & trade-offs

- **Scope**: only the Dashboard screen was built out fully, per the brief's own emphasis on depth over breadth. The other five nav destinations get a real (if minimal) page rather than a dead link.
- **No tablet/mobile Figma frames existed**, so those breakpoints are my own responsive redesign, not a shrink of the desktop layout: the primary nav becomes a slide-in drawer below `lg`, the two-column grid stacks, and the spotlight row becomes a horizontal scroll-snap swipe carousel instead of the desktop's chevron-button controls.
- **Mock data, real async boundary**: all dashboard data is static, but served through actual Route Handlers with a simulated network delay, so loading skeletons and error/retry states are real, not decorative.
- **Chart range toggle**: "1 Week / 1 Month / 1 Year" is fully interactive, but all three ranges render the same year of mock data — there was no source data for week/month granularity, and fabricating three internally-consistent datasets wasn't worth the complexity for a static demo.
- **Spotlight carousel**: each card carries two placeholder images (Lorem Picsum) so the prev/next controls and pagination dots have real images to switch between, with a crossfade transition.
- **Currency formatting**: amounts are formatted as `₦` + `en-NG` locale grouping to match the Figma's Naira figures exactly (e.g. `₦120,000,000.00`).

## SEO & link previews

- **Metadata** (`src/app/layout.tsx`): title template, description, keywords, and `robots: index, follow` via the App Router `Metadata` API. `metadataBase` is set to the Vercel deployment URL so relative OG/Twitter image paths resolve to absolute ones in production.
- **Link preview image** (`src/app/opengraph-image.tsx`): generated at build time with `next/og`'s `ImageResponse` — the real header wordmark (`public/icons/expert-listing-logo.png`) on the app's own brand gradient, rather than a static placeholder graphic. Next.js wires this file into both `og:image` and `twitter:image` automatically, alongside `summary_large_image` Twitter Card metadata.

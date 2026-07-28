import type { SpotlightCard } from "@/types/dashboard";

export const spotlight: SpotlightCard[] = [
  {
    id: "site-visits",
    imageUrl: "https://picsum.photos/id/1067/900/1100",
    imageAlt: "Glass office towers viewed from below",
    eyebrow: "TOTAL SITE VISITS",
    statValue: "11k",
    showCarouselControls: false,
  },
  {
    id: "most-clicked",
    imageUrl: "https://picsum.photos/id/164/900/1100",
    imageAlt: "Modern apartment building facade",
    tabs: [
      { id: "live", label: "Live Listings" },
      { id: "all", label: "All Listings" },
    ],
    activeTabId: "live",
    eyebrow: "MOST CLICKED",
    title: "Urban Prime Plaza Premiere",
    subtitle: "Ikoyi, Lagos",
    statValue: "40k",
    showCarouselControls: true,
  },
  {
    id: "most-watchlisted",
    imageUrl: "https://picsum.photos/id/1076/900/1100",
    imageAlt: "Residential apartment block with balconies",
    tabs: [
      { id: "live", label: "Live Listings" },
      { id: "all", label: "All Listings" },
    ],
    activeTabId: "all",
    eyebrow: "MOST WATCHLISTED",
    title: "Urban Prime Plaza Premiere",
    subtitle: "Ikoyi, Lagos",
    statValue: "20k",
    showCarouselControls: true,
    showChatAction: true,
  },
];

import type { SpotlightCard } from "@/types/dashboard";

export const spotlight: SpotlightCard[] = [
  {
    id: "site-visits",
    images: [
      {
        url: "https://picsum.photos/id/1067/900/1100",
        alt: "Glass office towers viewed from below",
      },
      {
        url: "https://picsum.photos/id/1041/900/1100",
        alt: "City skyline at dusk",
      },
    ],
    eyebrow: "TOTAL SITE VISITS",
    statValue: "11k",
    showCarouselControls: false,
  },
  {
    id: "most-clicked",
    images: [
      {
        url: "https://picsum.photos/id/164/900/1100",
        alt: "Modern apartment building facade",
      },
      {
        url: "https://picsum.photos/id/160/900/1100",
        alt: "Waterfront building exterior",
      },
    ],
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
    images: [
      {
        url: "https://picsum.photos/id/1076/900/1100",
        alt: "Residential apartment block with balconies",
      },
      {
        url: "https://picsum.photos/id/1078/900/1100",
        alt: "Apartment building courtyard view",
      },
    ],
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

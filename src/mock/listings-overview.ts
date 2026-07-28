import type { OverviewSummaryResponse } from "@/types/dashboard";

export const listingsOverview: OverviewSummaryResponse = {
  title: "Listings Overview",
  href: "/listings",
  metrics: [
    { label: "Total", value: "2.2k" },
    { label: "Published", value: "1.2k" },
    { label: "Unpublished", value: "1k" },
  ],
};

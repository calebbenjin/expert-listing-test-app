import type { OverviewSummaryResponse } from "@/types/dashboard";

export const userOverview: OverviewSummaryResponse = {
  title: "User Overview",
  href: "/users",
  metrics: [
    { label: "Total", value: "20.7k" },
    { label: "Riders", value: "8.5k" },
    { label: "Subscribers", value: "7.5k" },
    { label: "Free Users", value: "3.3k" },
    { label: "Agent", value: "8.1k" },
    { label: "Developers", value: "1.5k" },
  ],
};

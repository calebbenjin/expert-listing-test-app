import type { SalesOverviewResponse } from "@/types/dashboard";

export const salesOverview: SalesOverviewResponse = {
  rangeLabel: "Showing overview Jan 2022 - Sep 2022",
  chart: [
    { month: "Jan", inflow: 34_000_000, mrr: 27_000_000, payout: 15_000_000 },
    { month: "Feb", inflow: 26_000_000, mrr: 25_000_000, payout: 8_000_000 },
    { month: "Mar", inflow: 13_000_000, mrr: 6_000_000, payout: 12_000_000 },
    { month: "Apr", inflow: 15_000_000, mrr: 24_000_000, payout: 5_000_000 },
    { month: "May", inflow: 8_000_000, mrr: 4_000_000, payout: 9_000_000 },
    { month: "Jun", inflow: 35_000_000, mrr: 46_000_000, payout: 20_000_000 },
    { month: "Jul", inflow: 22_000_000, mrr: 33_000_000, payout: 15_000_000 },
    { month: "Aug", inflow: 20_000_000, mrr: 12_000_000, payout: 14_000_000 },
    { month: "Sep", inflow: 21_000_000, mrr: 32_000_000, payout: 7_000_000 },
  ],
  stats: [
    {
      id: "total-inflow",
      label: "Total Inflow",
      amount: 120_000_000,
      deltaPercent: 2.5,
      direction: "up",
      color: "info",
    },
    {
      id: "mrr",
      label: "MRR",
      amount: 50_000_000,
      deltaPercent: 2.5,
      direction: "up",
      color: "success",
    },
    {
      id: "payout",
      label: "Payout",
      amount: 200_000_000,
      deltaPercent: 0.5,
      direction: "down",
      color: "warning",
    },
    {
      id: "riders-credit",
      label: "Total Riders' Credit",
      amount: 100_000_000,
      deltaPercent: 0.5,
      direction: "up",
      color: "brand",
    },
  ],
};

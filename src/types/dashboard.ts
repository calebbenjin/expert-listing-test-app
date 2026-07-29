export type DeltaDirection = "up" | "down";

export interface SalesStat {
  id: string;
  label: string;
  amount: number;
  deltaPercent: number;
  direction: DeltaDirection;
  color: "info" | "success" | "warning" | "brand";
}

export type SalesRange = "week" | "month" | "year";

export interface SalesMonthDatum {
  month: string;
  inflow: number;
  mrr: number;
  payout: number;
}

export interface SalesOverviewResponse {
  rangeLabel: string;
  chart: SalesMonthDatum[];
  stats: SalesStat[];
}

export interface SummaryMetric {
  label: string;
  value: string;
}

export interface OverviewSummaryResponse {
  title: string;
  href: string;
  metrics: SummaryMetric[];
}

export interface SpotlightTab {
  id: string;
  label: string;
}

export interface SpotlightImage {
  url: string;
  alt: string;
}

export interface SpotlightCard {
  id: string;
  images: SpotlightImage[];
  tabs?: SpotlightTab[];
  activeTabId?: string;
  eyebrow: string;
  title?: string;
  subtitle?: string;
  statValue: string;
  showCarouselControls: boolean;
  showChatAction?: boolean;
}

export type SpotlightResponse = SpotlightCard[];

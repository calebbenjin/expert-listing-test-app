"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StatTile } from "@/components/dashboard/stat-tile";
import { SalesOverviewSkeleton } from "@/components/dashboard/skeletons";
import { useSalesOverview } from "@/hooks/queries/use-sales-overview";
import { cn } from "@/lib/utils";

const SalesOverviewChart = dynamic(
  () => import("@/components/dashboard/sales-overview-chart"),
  { ssr: false, loading: () => <div className="h-65" /> }
);

const ranges = [
  { id: "week", label: "1 Week" },
  { id: "month", label: "1 Month" },
  { id: "year", label: "1 Year" },
] as const;

export function SalesOverviewCard() {
  const { data, isPending, isError, refetch } = useSalesOverview();
  const [activeRange, setActiveRange] =
    useState<(typeof ranges)[number]["id"]>("year");

  if (isPending) return <SalesOverviewSkeleton />;

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card p-10 text-center">
        <p className="text-sm text-muted-foreground">
          Couldn&apos;t load the sales overview.
        </p>
        <Button size="sm" variant="outline" onClick={() => refetch()}>
          Try again
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-sm sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold sm:text-xl">Sales Overview</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {data.rangeLabel}
          </p>
        </div>
        <Button variant="outline" size="sm" className="rounded-full">
          View Transactions
        </Button>
      </div>

      <div className="mt-4 flex justify-end">
        <div className="inline-flex items-center gap-1 rounded-full bg-muted p-1">
          {ranges.map((range) => (
            <button
              key={range.id}
              type="button"
              onClick={() => setActiveRange(range.id)}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm",
                activeRange === range.id
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_320px] lg:items-center">
        <div className="relative">
          <button
            type="button"
            aria-label="Scroll chart left"
            className="absolute top-1/2 left-0 z-10 hidden size-7 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-sm transition-colors hover:text-foreground sm:flex"
          >
            <ChevronLeft className="size-4" />
          </button>
          <SalesOverviewChart data={data.chart} />
          <button
            type="button"
            aria-label="Scroll chart right"
            className="absolute top-1/2 right-0 z-10 hidden size-7 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-sm transition-colors hover:text-foreground sm:flex"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {data.stats.map((stat) => (
            <StatTile key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </div>
  );
}

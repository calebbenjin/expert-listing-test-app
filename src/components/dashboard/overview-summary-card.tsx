"use client";

import { memo } from "react";
import Link from "next/link";
import { ChevronRight, Home, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { OverviewSummarySkeleton } from "@/components/dashboard/skeletons";
import { useOverviewSummary } from "@/hooks/queries/use-overview-summary";

const icons = {
  "listings-overview": Home,
  "user-overview": Users,
} as const;

function OverviewSummaryCardImpl({
  endpoint,
}: {
  endpoint: "listings-overview" | "user-overview";
}) {
  const { data, isPending, isError, refetch } = useOverviewSummary(endpoint);
  const Icon = icons[endpoint];

  if (isPending) return <OverviewSummarySkeleton />;

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card p-8 text-center">
        <p className="text-sm text-muted-foreground">Couldn&apos;t load.</p>
        <Button size="sm" variant="outline" onClick={() => refetch()}>
          Try again
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="size-5 text-info" />
          <h3 className="font-semibold">{data.title}</h3>
        </div>
        <Link
          href={data.href}
          className="flex items-center gap-0.5 text-sm font-medium text-info transition-colors hover:text-info/80"
        >
          View all
          <ChevronRight className="size-4" />
        </Link>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-x-3 gap-y-4">
        {data.metrics.map((metric) => (
          <div key={metric.label}>
            <p className="text-sm text-muted-foreground">{metric.label}</p>
            <p className="mt-0.5 text-xl font-semibold">{metric.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export const OverviewSummaryCard = memo(OverviewSummaryCardImpl);

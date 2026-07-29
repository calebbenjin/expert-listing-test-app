"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { OverviewSummarySkeleton } from "@/components/dashboard/skeletons";
import { useOverviewSummary } from "@/hooks/queries/use-overview-summary";

const icons = {
  "listings-overview": "/icons/solar_home-linear.png",
  "user-overview": "/icons/profile-icon.png",
} as const;

function OverviewSummaryCardImpl({
  endpoint,
}: {
  endpoint: "listings-overview" | "user-overview";
}) {
  const { data, isPending, isError, refetch } = useOverviewSummary(endpoint);
  const iconSrc = icons[endpoint];

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
    <div className="rounded-2xl border border-border bg-card transition-shadow hover:shadow-sm">
      <div className="flex items-center justify-between bg-foreground/5 p-4 rounded-t-2xl">
        <div className="flex items-center gap-2">
          <Image
            src={iconSrc}
            alt=""
            width={25}
            height={25}
            className="opacity-70"
          />
          <h3 className="font-medium text-base">{data.title}</h3>
        </div>
        <Link
          href={data.href}
          className="flex items-center gap-0.5 text-sm font-medium text-info transition-colors hover:text-info/80"
        >
          View all
          <ChevronRight className="size-4" />
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-x-3 gap-y-4 p-4">
        {data.metrics.map((metric) => (
          <div key={metric.label}>
            <p className="text-sm">{metric.label}</p>
            <p className="mt-1 text-2xl font-semibold">{metric.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export const OverviewSummaryCard = memo(OverviewSummaryCardImpl);

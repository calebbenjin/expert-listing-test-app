"use client";

import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/dashboard/spotlight-card";
import { SpotlightSkeleton } from "@/components/dashboard/skeletons";
import { useSpotlight } from "@/hooks/queries/use-spotlight";

export function SpotlightSection() {
  const { data, isPending, isError, refetch } = useSpotlight();

  if (isPending) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <SpotlightSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card p-10 text-center">
        <p className="text-sm text-muted-foreground">
          Couldn&apos;t load the spotlight listings.
        </p>
        <Button size="sm" variant="outline" onClick={() => refetch()}>
          Try again
        </Button>
      </div>
    );
  }

  return (
    <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3">
      {data.map((card) => (
        <SpotlightCard key={card.id} card={card} />
      ))}
    </div>
  );
}

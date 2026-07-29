import { Skeleton } from "@/components/ui/skeleton";

export function SalesOverviewSkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-2">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-4 w-56" />
        </div>
        <Skeleton className="h-9 w-36 rounded-full" />
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_260px]">
        <Skeleton className="h-64 w-full rounded-xl" />
        <div className="grid grid-cols-2 gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-20 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function OverviewSummarySkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <Skeleton className="h-5 w-36" />
        <Skeleton className="h-4 w-14" />
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-3 w-12" />
            <Skeleton className="h-6 w-14" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function SpotlightSkeleton() {
  return <Skeleton className="aspect-4/5 w-full rounded-2xl sm:aspect-square" />;
}

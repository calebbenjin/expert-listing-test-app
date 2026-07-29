import { memo } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatNaira } from "@/lib/format";
import type { SalesStat } from "@/types/dashboard";

const amountColor: Record<SalesStat["color"], string> = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  brand: "text-brand",
};

function StatTileImpl({ stat }: { stat: SalesStat }) {
  const isUp = stat.direction === "up";

  return (
    <div className="min-w-0 rounded-xl border border-border bg-card p-4">
      <p
        className={cn(
          "wrap-break-word text-xl font-semibold tracking-tight tabular-nums",
          amountColor[stat.color],
        )}
      >
        {formatNaira(stat.amount)}
      </p>
      <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
        <span className="text-xs">{stat.label}</span>
        <span
          className={cn(
            "inline-flex shrink-0 items-center gap-0.5 rounded-full px-1 py-1 text-xs font-medium",
            isUp ? "bg-success/10 text-success" : "bg-danger/10 text-danger",
          )}
        >
          {isUp ? (
            <ArrowUpRight className="size-3" />
          ) : (
            <ArrowDownRight className="size-3" />
          )}
        </span>
        <span
          className={cn(
            "inline-flex shrink-0 items-center gap-0.5 text-xs font-medium",
            isUp ? "text-success" : "text-danger",
          )}
        >
          {stat.deltaPercent}%
        </span>
      </div>
    </div>
  );
}

export const StatTile = memo(StatTileImpl);

"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { SalesMonthDatum } from "@/types/dashboard";
import { formatCompactNumber } from "@/lib/format";

function ChartTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border border-border bg-popover px-3 py-2 text-xs shadow-md">
      <p className="mb-1 font-medium text-popover-foreground">{label}</p>
      {payload.map((entry) => (
        <p key={entry.name} className="flex items-center gap-1.5">
          <span
            className="size-2 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-muted-foreground">{entry.name}:</span>
          <span className="font-medium text-popover-foreground">
            {formatCompactNumber(entry.value)}
          </span>
        </p>
      ))}
    </div>
  );
}

export default function SalesOverviewChart({
  data,
}: {
  data: SalesMonthDatum[];
}) {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <BarChart data={data} barGap={4} barCategoryGap="24%">
        <CartesianGrid vertical={false} stroke="var(--border)" />
        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
          tickFormatter={(value: number) => `${value / 1_000_000}m`}
        />
        <Tooltip
          cursor={{ fill: "var(--muted)" }}
          content={<ChartTooltip />}
        />
        <Bar dataKey="inflow" name="Inflow" fill="var(--info)" radius={0} />
        <Bar dataKey="mrr" name="MRR" fill="var(--success)" radius={0} />
        <Bar dataKey="payout" name="Payout" fill="var(--warning)" radius={0} />
      </BarChart>
    </ResponsiveContainer>
  );
}

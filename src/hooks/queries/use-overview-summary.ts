import { useQuery } from "@tanstack/react-query";

import type { OverviewSummaryResponse } from "@/types/dashboard";

type OverviewSummaryEndpoint = "listings-overview" | "user-overview";

async function fetchOverviewSummary(
  endpoint: OverviewSummaryEndpoint
): Promise<OverviewSummaryResponse> {
  const res = await fetch(`/api/dashboard/${endpoint}`);
  if (!res.ok) throw new Error(`Failed to load ${endpoint}`);
  return res.json();
}

export function useOverviewSummary(endpoint: OverviewSummaryEndpoint) {
  return useQuery({
    queryKey: ["dashboard", endpoint],
    queryFn: () => fetchOverviewSummary(endpoint),
  });
}

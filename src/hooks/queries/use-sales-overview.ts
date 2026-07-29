import { useQuery } from "@tanstack/react-query";

import type { SalesOverviewResponse } from "@/types/dashboard";

async function fetchSalesOverview(): Promise<SalesOverviewResponse> {
  const res = await fetch("/api/dashboard/sales-overview");
  if (!res.ok) throw new Error("Failed to load sales overview");
  return res.json();
}

export function useSalesOverview() {
  return useQuery({
    queryKey: ["dashboard", "sales-overview"],
    queryFn: fetchSalesOverview,
  });
}

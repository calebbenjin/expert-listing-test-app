import { useQuery } from "@tanstack/react-query";

import type { SpotlightResponse } from "@/types/dashboard";

async function fetchSpotlight(): Promise<SpotlightResponse> {
  const res = await fetch("/api/dashboard/spotlight");
  if (!res.ok) throw new Error("Failed to load spotlight");
  return res.json();
}

export function useSpotlight() {
  return useQuery({
    queryKey: ["dashboard", "spotlight"],
    queryFn: fetchSpotlight,
  });
}

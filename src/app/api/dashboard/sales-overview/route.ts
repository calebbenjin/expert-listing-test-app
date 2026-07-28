import { NextResponse } from "next/server";

import { mockDelay } from "@/lib/mock-delay";
import { salesOverview } from "@/mock/sales-overview";

export async function GET() {
  await mockDelay();
  return NextResponse.json(salesOverview);
}

import { NextResponse } from "next/server";

import { mockDelay } from "@/lib/mock-delay";
import { listingsOverview } from "@/mock/listings-overview";

export async function GET() {
  await mockDelay();
  return NextResponse.json(listingsOverview);
}

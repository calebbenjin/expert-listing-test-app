import { NextResponse } from "next/server";

import { mockDelay } from "@/lib/mock-delay";
import { userOverview } from "@/mock/user-overview";

export async function GET() {
  await mockDelay();
  return NextResponse.json(userOverview);
}

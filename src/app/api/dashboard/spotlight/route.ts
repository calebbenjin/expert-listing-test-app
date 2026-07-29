import { NextResponse } from "next/server";

import { mockDelay } from "@/lib/mock-delay";
import { spotlight } from "@/mock/spotlight";

export async function GET() {
  await mockDelay();
  return NextResponse.json(spotlight);
}

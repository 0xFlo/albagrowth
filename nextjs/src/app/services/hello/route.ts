// recipes/nextjs-application/app/services/hello/route.ts
import { NextRequest, NextResponse } from "next/server";

type ResponseData = {
  message: string;
  timestamp: string;
};

export function GET(req: NextRequest) {
  const response: ResponseData = {
    message: "Hello from the App Router API!",
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(response);
}

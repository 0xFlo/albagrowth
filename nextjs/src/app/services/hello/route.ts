// recipes/nextjs-application/app/services/hello/route.ts
import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
  timestamp: string;
};

export function GET(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  // "2024-02-20T23:23:51.873Z"
  return res.json({
    message: "Hello from the App Router API!",
    timestamp: new Date().toISOString(),
  });
}

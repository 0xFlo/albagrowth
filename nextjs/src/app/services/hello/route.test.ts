import { NextApiRequest, NextApiResponse } from "next";
import { createMocks } from "node-mocks-http";
import { GET } from "./route"; // Adjust the import path to your actual file

describe("/api/hello", () => {
  test("returns expected response", async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: "GET",
    });

    await GET(req, res);

    expect(res.statusCode).toBe(200);
  });
});

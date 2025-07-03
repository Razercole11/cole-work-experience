import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);
  return new NextResponse("test", {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}

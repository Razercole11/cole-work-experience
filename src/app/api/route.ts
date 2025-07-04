import { NextRequest, NextResponse } from "next/server";
import { formDataSchema} from "@/schema";
import * as z from "zod/v4";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);
  return new NextResponse("test", {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    }
  );
}
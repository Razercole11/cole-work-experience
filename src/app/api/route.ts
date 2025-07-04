import { NextRequest, NextResponse } from "next/server";
import { formDataSchema } from "@/schema";
import { parseError } from "@/utils";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedBody = formDataSchema.parse(body);
    const fullname = `${validatedBody.foreName} ${validatedBody.surName}`;
    const response = {
      message: `Success - Completion statement for ${fullname} has now been created for ${validatedBody.completionDate}`,
      error: null,
    };
    return new NextResponse(JSON.stringify(response), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    const parsedError = parseError(error);
    const response = { message: null, error: parsedError };
    return new NextResponse(JSON.stringify(response), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}

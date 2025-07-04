import { NextRequest, NextResponse } from "next/server";
import { formDataSchema} from "@/schema";

export async function POST(req: NextRequest) {
  try{
      const body = await req.json();
      const result = formDataSchema.safeParse(body);
      if(!result.success) {
        const errors = result.error.issues;
        return NextResponse.json({ error: {message: "Invalid request", errors}}, {status: 400});
      }
      console.log(body);
    return new NextResponse("test", {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    }
    );
  }catch(error) {
     console.error("Error proccesing POST request:", error);
     return NextResponse.json({error: {message: "Internal Server Error"}}, {status: 500});
  }
} 

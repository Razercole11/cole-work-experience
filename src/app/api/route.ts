import { NextRequest, NextResponse } from "next/server";
import { formDataSchema} from "@/schema";
import { formData } from "../page";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);
  return new NextResponse("test", {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}

export async function checkValidation(){
    return(
    Response.json({ error: 'Invalid Fields!' }, { status: 400 })
  )  
}

const validation = formDataSchema.safeParse(formData);
if (!validation.success) {
  checkValidation()
}
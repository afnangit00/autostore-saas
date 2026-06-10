import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function GET() {
  const cookieStore =
    await cookies();

  const token =
    cookieStore.get("token");

 if (!token) {
   return NextResponse.json({
    success: false,
    message: "No token provided",
   });
 }

 const decoded = verifyToken(token.value);
 
  return NextResponse.json({
    sucess: true,
    token,
    decoded,
  });
}
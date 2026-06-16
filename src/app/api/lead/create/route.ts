import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Lead from "@/models/Lead";

export async function POST(
  request: Request
) {
  try {
    await connectDB();

    const body =
      await request.json();

    const {
      storeId,
      vehicleId,
      name,
      phone,
      message,
    } = body;

    const lead =
      await Lead.create({
        storeId,
        vehicleId,
        name,
        phone,
        message,
      });

    return NextResponse.json({
      success: true,
      lead,
    });
  } catch {
    return NextResponse.json({
      success: false,
      message: "Please create lead",
    });
  }
}

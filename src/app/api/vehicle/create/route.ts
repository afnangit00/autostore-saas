import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Vehicle from "@/models/Vehicle";
import Store from "@/models/Store";
import { getCurrentUserId } from "@/lib/current-user";

export async function POST(request: Request) {
  await connectDB();
  const ownerId = await getCurrentUserId();

  const store = await Store.findOne({ ownerId });
  if (!store) {
    return NextResponse.json(
      {
        success: false,
        message: "Create Store First",
      },
      { status: 400 }
    );
  }

  const body = await request.json();
  const { title, slug, brand, price, year, fuelType, description } = body;

  await Vehicle.create({
    storeId: store._id,
    title,
    slug,
    brand,
    price,
    year,
    fuelType,
    description,
  });

  return NextResponse.json({ success: true });
}


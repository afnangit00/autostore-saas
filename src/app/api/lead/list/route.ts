import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Lead from "@/models/Lead";
import Store from "@/models/Store";
import { getCurrentUserId } from "@/lib/current-user";

export async function GET() {
  await connectDB();

  const ownerId =
    await getCurrentUserId();

  const store =
    await Store.findOne({
      ownerId,
    });

    if (!store) {
  return NextResponse.json({
    success: false,
    leads: [],
  });
}

  const leads =
    await Lead.find({
      storeId:
        store?._id,
    }).sort({
      createdAt: -1,
    });

  return NextResponse.json({
    success: true,
    leads
  });
}
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

import Store from "@/models/Store";
import Vehicle from "@/models/Vehicle";
import Lead from "@/models/Lead";

import { getCurrentUserId } from "@/lib/current-user";


export async function GET() {
  try {
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
      });
    }

       const totalVehicles =
  await Vehicle.countDocuments({
    storeId: store._id,
  });

  const totalLeads =
  await Lead.countDocuments({
    storeId: store._id,
  });

    return NextResponse.json({
      success: true,
      storeName: store.name,

      totalVehicles,
      totalLeads,

    });

  } catch {
    return NextResponse.json({
      success: false,
    });
  }
}
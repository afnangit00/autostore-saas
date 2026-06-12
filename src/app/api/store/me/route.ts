import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Store from "@/models/Store";
import { getCurrentUserId } from "@/lib/current-user";


export async function GET() {
  await connectDB();

  const ownerId =
    await getCurrentUserId();

  if (!ownerId) {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 401,
      }
    );
  }
  

  const store =
    await Store.findOne({
      ownerId,
    });

    if (!store) {
  return NextResponse.json(
    {
      success: false,
      message:
        "No Store Found",
    }
  );
}

  return NextResponse.json({
    success: true,
    store,
  });
}
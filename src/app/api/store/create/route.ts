import { connectDB } from "@/lib/mongodb";
import Store from "@/models/Store";
import { NextResponse } from "next/server";
import { getCurrentUserId } from "@/lib/current-user";

export async function POST(request : Request) {

        try {
              await connectDB();
              const body = await request.json();

              const { name, slug, description } = body;

              const ownerId = await getCurrentUserId();

              if (!ownerId) {
                return NextResponse.json(
                        {
                                success: false,
                                message: "Unauthorized",
                        },
                        { status: 401 }
                );
              }
               //start bones
              const existingStore =
  await Store.findOne({
    ownerId,
  });

if (existingStore) {
  return NextResponse.json(
    {
      success: false,
      message:
        "Store already exists",
    },
    {
      status: 400,
    }
  );
};  

// end bones


              await Store.create({
                 ownerId,
                 name,
                 slug,
                 description,
             });

        } catch (error) {
                return NextResponse.json(
                        {
                                success: false,
                                message: "Failed to create store",
                        },
                        { status: 500 }
                );
        }

  return NextResponse.json({
    success: true,
  });
}
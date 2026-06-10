import { connectDB } from "@/lib/mongodb";
import Store from "@/models/Store";
import { NextResponse }
from "next/server";

export async function POST(request : Request) {

        try {
              await connectDB();
              const body = await request.json();

              const { name, slug, description } = body;

              const ownerId = "afi10"
              
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
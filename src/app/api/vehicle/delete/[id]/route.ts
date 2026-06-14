import { NextResponse } from "next/server";
import Vehicle from "@/models/Vehicle";
import { connectDB } from "@/lib/mongodb";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    console.log("Deleting:", id);

    const deletedVehicle =
      await Vehicle.findByIdAndDelete(id);

    if (!deletedVehicle) {
      return NextResponse.json({
        success: false,
        message: "Vehicle not found",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Vehicle deleted",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Server error",
    });
  }
}
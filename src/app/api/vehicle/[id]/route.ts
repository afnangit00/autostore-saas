import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Vehicle from '@/models/Vehicle';


export async function GET(request: Request,
        { params }: { params: Promise<{ id: string }> }
)  {
        try {
                await connectDB();

                const { id } = await params;

                const vehicle = await Vehicle.findById(id);

                if (!vehicle) {
                        return NextResponse.json({
                                success: false,
                                message: "Vehicle not found",

                        });
                }

                return NextResponse.json({
                        success: true,
                        vehicle,
                });
        } catch (error) {
                return NextResponse.json({
                        success: false,
                        message: "Server error",
                });
        }
};

export async function PUT( request: Request,
        { params } : { params: Promise<{ id: string }> }
 ) {
        try {
                await connectDB();

                const { id } = await params;

                const body = await request.json();
                
                const updatedVehicle = await Vehicle.findByIdAndUpdate(
                        id,
                        body,
                        { new: true, }     
                );

                if (!updatedVehicle) {
  return NextResponse.json({
    success: false,
    message: "Vehicle not found",
  });
   }

                return NextResponse.json({
                        success: true,
                        vehicle: updatedVehicle,
                });                
        } catch (error) {
                return NextResponse.json({
                        success: false,
                        message: "Update failed",
                });
        }
 }
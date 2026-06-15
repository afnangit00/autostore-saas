import Vehicle from "@/models/Vehicle";
import { connectDB } from "@/lib/mongodb";
import Link from "next/link";
import Store from "@/models/Store";

export default async function VehiclePage({
  params,
}: {
  params: Promise<{
    slug: string;
    vehicleSlug: string;
  }>;
}) {
  const {
    slug,
    vehicleSlug,
  } = await params;

  await connectDB();
const vehicle =
  await Vehicle.findOne({
    slug: vehicleSlug,
  });

  if (!vehicle) {
  return (
    <div>
      Vehicle Not Found
    </div>
  );
}

  return (
    
  <div>
 
    <h1>
      {vehicle.title}
    </h1>

    <p>
      Brand:  {vehicle.brand}
    </p>

    <p>
      Price:
      ₹{vehicle.price}
    </p>

    <p>
      Year:
      {vehicle.year}
    </p>

    <p>
      Fuel:
      {vehicle.fuelType}
    </p>

    <p>
      {vehicle.description}
    </p>
  </div>
);
}
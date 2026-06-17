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
    
  <div className="max-w-5xl mx-auto p-6" >
 
    <h1 className="text-4xl font-bold" >
      {vehicle.title}
    </h1>

    <p>
      Brand:  {vehicle.brand}
    </p>

    <p className="text-2xl mt-3" >
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

    <img
    className="w-full rounded-lg mb-6"
    src={vehicle.imageUrl}
    alt={vehicle.title}
    />

    <button>
  Contact Dealer
</button>
  </div>
);
}
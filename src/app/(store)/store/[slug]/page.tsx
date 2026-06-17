import React from "react";
import Store from "@/models/Store";
import Vehicle from "@/models/Vehicle";
import { connectDB } from "@/lib/mongodb";
import Link from "next/link";

export default async function StorePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  await connectDB();


const store = await Store.findOne({ slug });
if (!store) {
 return (
   <div>
     Store Not Found
   </div>
 );
}
  const vehicles = await Vehicle.find({ storeId: store._id }).sort({ createdAt: -1 });

  if( vehicles.length === 0 ) {
    return (
      <div>
        <h1>No vehicles available, pleae create some!</h1>
      </div>
    )
  };

  
  return (
 <div className="max-w-7xl mx-auto p-6" >
 <div className="mb-8">
<h1 className="text-4xl font-bold">
    {store.name}
  </h1>
  <p className="text-gray-600 mt-2">
{store.description}</p>
</div>

   <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {vehicles.map(
   (vehicle:any) => (
    <div className="border rounded-lg overflow-hidden shadow" 
    key={vehicle._id}>

{vehicle.imageUrl && (
        <img
          src={vehicle.imageUrl}
          alt={vehicle.title}
          className="w-full h-52 object-cover"
        />
      )}

      <div className="p-4">
        <h3 className="text-xl font-bold">
          {vehicle.title}
        </h3>

        <p className="mt-2 text-gray-600">
          ₹{vehicle.price}
        </p>

        <Link href={`/store/${store.slug}/${vehicle.slug}`}
          className="inline-block mt-4" >
          View Details →
        </Link>
      </div>
    </div>
   ))}

</div>

 </div>
)
}
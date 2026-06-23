import VehicleList from "@/components/store/VehicleList";
import Store from "@/models/Store";
import Vehicle from "@/models/Vehicle";
import { connectDB } from "@/lib/mongodb";
import Link from "next/link";


export default async function StorePage({ params, }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  console.log("URL SLUG", slug)
  await connectDB();

  

const store = await Store.findOne({ slug });
console.log("Found store:", store);

if (!store) {
 return (
   <div>
     Store Not Found
   </div>
 );
}

  const vehicles = await Vehicle.find({ storeId: store._id }).sort({ createdAt: -1 });

 // option check futuer
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


  <VehicleList vehicles={ JSON.parse( JSON.stringify(vehicles))} storeSlug={ store.slug } />

 </div>
)
}
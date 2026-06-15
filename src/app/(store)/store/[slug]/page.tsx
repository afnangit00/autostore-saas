import Store from "@/models/Store";
import Vehicle from "@/models/Vehicle";
import { connectDB } from "@/lib/mongodb";
import Link from "next/link";

export default async function StorePage(
  {
    params,
  }: {
    params:
      Promise<{ slug:string }>
  }
) {
  const { slug } = await params;
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
 <div>
   
   <h1>{store.name}</h1>
<p>{store.description}</p>

   <div>

  {vehicles.map(
   (vehicle:any) => (

    <div key={vehicle._id}>
      <Link
          href={`/store/${store.slug}/${vehicle.slug}`}
        >
          <h3>
            {vehicle.title}
          </h3>
        </Link>
      <p>₹{vehicle.price}</p>
    </div>
   ))}
</div>
 </div>
)
}
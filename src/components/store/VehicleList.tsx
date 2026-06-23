"use client";

import { useState } from "react";
import Link from "next/link";

export default function VehicleList({
  vehicles,
  storeSlug,
}: {
  vehicles:any[];
  storeSlug:string;
}) {


const [search,setSearch] =
useState("");

const filteredVehicles =
vehicles.filter(
(vehicle)=>
vehicle.title
.toLowerCase()
.includes(
search.toLowerCase()
)
);



return (

<div>


<input placeholder="Search vehicle..."
value={search} onChange={
(e)=> setSearch(e.target.value)}
className="border p-3 w-full mb-6"/>



<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{ filteredVehicles.map((vehicle)=> (
<div
key={vehicle._id}
className="border rounded-xl overflow-hidden">
<img src={vehicle.imageUrl}
alt={vehicle.title}
className="w-full h-52 object-cover"/>
<div className="p-4">
<h2>{vehicle.title}</h2>

<p> ₹{vehicle.price} </p>

<Link

href={`/store/${storeSlug}/${vehicle.slug}`}>
View Details
</Link>

<a href="https://wa.me/7902452718" className="block mt-3">
Contact Dealer </a>
</div>
</div>


)

)

}


</div>


</div>

)

}
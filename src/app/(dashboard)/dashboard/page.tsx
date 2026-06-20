// async function getStats() {
//   const response =
//     await fetch(
//       "http://localhost:3000/api/dashboard/stats",
//       { cache: "no-store",}
//     );

//   return response.json();
// }

import { cookies } from "next/headers";

async function getStats() {

  const cookieStore =
    await cookies();

  const token =
    cookieStore.get("token");


  const response =
    await fetch(
      "http://localhost:3000/api/dashboard/stats",
      {
        cache:"no-store",

        headers:{
          Cookie:
          `token=${token?.value}`
        }
      }
    );


  return response.json();
}


export default async function DashboardPage() {
  const data = await getStats();
  console.log(data)

  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>
      <p>Store: {data.storeName}</p>

      <div className=" border p-4 rounded mt-4">
  <h2> Vehicles </h2>
<p> {data.totalVehicles} </p>
</div>

<div className="border p-4 rounded mt-4">
  <h2> Leads </h2>

  <p>
    {data.totalLeads}
  </p>
</div>
    </div>
  );
}


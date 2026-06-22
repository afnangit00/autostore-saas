"use client";
import { useRouter } from "next/navigation";

export default function LogoutButton(){

 const router =
  useRouter();

 async function logout(){

  await fetch(
    "/api/auth/logout",
    {
      method:"POST"
    }
  );
  router.push("/login");
 }

 return (

  <button
   onClick={logout}
   className="border px-4 py-2 mt-6">
   Logout
  </button>

 );

}
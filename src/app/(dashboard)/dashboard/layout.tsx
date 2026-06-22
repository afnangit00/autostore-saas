import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (

    <div className="min-h-screen">
      <div
        className="
        flex
        flex-col
        md:flex-row
        "
      >


        {/* Sidebar */}

        <aside

          className="w-full md:w-64 border-r p-5"
        >
          <h2 className="text-2xl font-bold mb-6">
            AutoStore
          </h2>



          <nav className="flex md:flex-col gap-4">

            <Link href="/dashboard">
              Dashboard
            </Link>


            <Link href="/dashboard/vehicles">
              Vehicles
            </Link>


            <Link href="/dashboard/leads">
              Leads
            </Link>


            <Link href="/dashboard/settings">
              Settings
            </Link>

            <LogoutButton/>

          </nav>


        </aside>




        {/* Content */}


        <main

          className="
          flex-1
          p-6
          "

        >

          {children}

        </main>



      </div>


    </div>

  );
}
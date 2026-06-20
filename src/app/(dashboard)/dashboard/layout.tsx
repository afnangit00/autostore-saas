import Link from "next/link";

export default function DashboardLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">

      <aside
        className="w-64 border-r p-4">
        <h2
          className="text-2xl font-bold mb-6">
          AutoStore
        </h2>

        <nav
          className=" flex flex-col gap-3">
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
        </nav>
      </aside>

      <main
        className="
          flex-1
          p-6
        "
      >
        {children}
      </main>

    </div>
  );
}
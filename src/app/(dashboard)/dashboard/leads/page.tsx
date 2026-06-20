
async function getLeads() {
  const response =
    await fetch(
      "http://localhost:3000/api/lead/list",
      {
        cache: "no-store",
      }
    );

  return response.json();
}


export default async function LeadsPage() {
  const data = await getLeads();

const leads = data.leads || [];

 return (
  <div>

    <h1>
      Leads
    </h1>

    {leads.map(
      (lead: any) => (
        <div
          key={lead._id}
          className="border p-4 mt-3"
        >
          <h3>
            {lead.name}
          </h3>

          <p>
            {lead.phone}
          </p>

          <p>
            {lead.message}
          </p>
        </div>
      )
    )}

  </div>
);
}
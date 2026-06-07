import { connectDB } from "@/lib/mongodb";

export default async function Home() {
  await connectDB();

  return (
    <main>
      <h1>AutoStore SaaS</h1>
    </main>
  );
}
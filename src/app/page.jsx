import DashboardClient from "./components/DashboardClient";
export default async function Home() {
  
  const response = await fetch('https://groww-intern-assignment.vercel.app/v1/api/order-details', { next: {
    revalidate: 10,
  } });  
  const data = await response.json();
  console.log(data)
  
  return (
    <main className="flex min-h-screen flex-col p-[2rem]">
      <DashboardClient data={data} />
    </main>
  )
}

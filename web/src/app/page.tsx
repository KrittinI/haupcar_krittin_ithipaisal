import Link from "next/link";
import { Car } from "../../types";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ page: string; limit: string; model: string; color: string; brand: string; plate: string }>
}) {
  const search = await searchParams

  const searchQuery = new URLSearchParams();

  Object.entries(search).forEach(([key, value]) => {
    if (value) {
      searchQuery.set(key, value);
    }
  });

  const res = await fetch(`${process.env.API_URL}/api/cars?${searchQuery}`)

  const data = await res.json()

  const [brandRes, modelRes, colorRes] = await Promise.all([
    fetch(`${process.env.API_URL}/api/brands`),
    fetch(`${process.env.API_URL}/api/models`),
    fetch(`${process.env.API_URL}/api/colors`),
  ]);

  const [{ brands }, { models }, { colors }] = await Promise.all([
    brandRes.json(),
    modelRes.json(),
    colorRes.json(),
  ]);

  return (
    <div>
      <Link href={"/cars/create"}>Create car</Link>
      {data.cars.map((car: Car) => <div key={car.id}><div><Link href={`/cars/${car.id}`}>{JSON.stringify(car)}</Link></div><Link href={`/cars/${car.id}/edit`}>Edit</Link></div>)}
    </div>
  );
}

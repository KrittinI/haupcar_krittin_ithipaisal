import Link from "next/link";
import { Car } from "../../types";
import CarRow from "./cars/_components/car-row";

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
    <div className="container">
      <div className="container flex items-center justify-between py-1.5">
        <h1>Car lists</h1>
        <Link
          className="btn btn-primary"
          href={"/cars/create"}>
          Create car
        </Link>
      </div>
      <div className="border rounded-3 overflow-auto">
        <table className="table table-striped mb-0 align-middle">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Plate No.</th>
              <th scope="col">Brand</th>
              <th scope="col">Model</th>
              <th scope="col">Color</th>
              <th scope="col">Chassis No.</th>
              <th scope="col">Note</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.cars.map((car: Car) => <CarRow key={car.id} car={car} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

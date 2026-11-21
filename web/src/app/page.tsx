
export default async function Home() {
  const cars = await fetch(`${process.env.API_URL}/api/cars`)
  // console.log(cars);
  return (
    <div>
      HOME
    </div>
  );
}

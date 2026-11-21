import Link from "next/link"

export default async function CarDetailPage({ params }: PageProps<'/cars/[carId]'>) {
    const { carId } = await params

    const res = await fetch(`${process.env.API_URL}/api/cars/${carId}`)

    const data = await res.json()

    return (
        <div>{carId}{JSON.stringify(data.car)}<Link href={`/cars/${carId}/edit`}>Edit</Link></div>
    )
}

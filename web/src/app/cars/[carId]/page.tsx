import Link from "next/link"
import { notFound } from "next/navigation"
import { deleteCar } from "./actions"

export default async function CarDetailPage({ params }: PageProps<'/cars/[carId]'>) {
    const { carId } = await params

    const res = await fetch(`${process.env.API_URL}/api/cars/${carId}`)

    if (!res.ok) {
        notFound()
    }

    const { car } = await res.json()

    if (!car) {
        notFound()
    }

    return (
        <div>
            {carId}{JSON.stringify(car)}
            <div className="flex gap-1">
                <Link
                    className="btn btn-primary"
                    href={`/cars/${carId}/edit`}>
                    Edit
                </Link>
                <form action={deleteCar} >
                    <input type="hidden" name="id" value={carId} />
                    <button className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </div>
        </div>
    )
}

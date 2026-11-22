import Link from "next/link"
import { notFound } from "next/navigation"
import { deleteCar } from "./actions"
import { colorDic } from "../../../../constants"

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
        <div className="container ">
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">Plate No: {car.plate_no}</h5>
                    <ul>
                        <li>Brand: {car.brand}</li>
                        <li>Model: {car.model}</li>
                        <li className="flex gap-1">Color: <span className="flex gap-1 items-center"><span className="block w-3 h-4 shadow-md" style={{ backgroundColor: car.color }}></span>{colorDic[car.color] || 'Other'}</span></li>
                        <li>Chassis No: {car.chassis_no}</li>
                        <li>Note: {car.note || '-'}</li>
                    </ul>
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
            </div>
        </div>
    )
}

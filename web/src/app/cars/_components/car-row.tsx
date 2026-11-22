import Link from "next/link";
import { Car } from "../../../../types";

export default function CarRow({ car }: { car: Car }) {
    return (
        <tr>
            <th scope="row">
                <Link
                    href={`/cars/${car.id}`}
                    className="text-dark"
                >
                    {car.id}
                </Link>
            </th>
            <td scope="col">{car.plate_no}</td>
            <td scope="col">{car.brand}</td>
            <td scope="col">{car.model}</td>
            <td scope="col">{car.color}</td>
            <td scope="col">{car.chassis_no}</td>
            <td scope="col">{car.note || '-'}</td>
            <td>
                <Link
                    className="btn btn-primary"
                    href={`/cars/${car.id}/edit`}>
                    Edit
                </Link>
            </td>
        </tr>
    )
}

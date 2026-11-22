import Link from "next/link";
import { Car } from "../../../../types";
import { colorDic } from "../../../../constants";

export default function CarRow({ car }: { car: Car; }) {

    return (
        <tr>
            <th scope="row">
                {car.id}
            </th>
            <td scope="col">{car.plate_no}</td>
            <td scope="col">{car.brand}</td>
            <td scope="col">{car.model}</td>
            <td scope="col "><span className="flex gap-1 items-center"><span className="block w-3 h-4 shadow-md" style={{ backgroundColor: car.color }}></span>{colorDic[car.color] || 'Other'}</span></td>
            <td scope="col">{car.chassis_no}</td>
            <td scope="col">{car.note || '-'}</td>
            <td className="flex gap-1">
                <Link
                    className="btn btn-primary"
                    href={`/cars/${car.id}`}>
                    View
                </Link>
                <Link
                    className="btn btn-secondary"
                    href={`/cars/${car.id}/edit`}>
                    Edit
                </Link>
            </td>
        </tr>
    )
}

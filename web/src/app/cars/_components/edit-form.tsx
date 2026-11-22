import Link from "next/link";
import { updateCar } from "../[carId]/edit/actions";
import BrandModelSelect from "./brand-model";
import { notFound } from "next/navigation";

export default async function EditForm({ carId }: { carId: string }) {
    const [carRes, brandRes, modelRes, colorRes] = await Promise.all([
        fetch(`${process.env.API_URL}/api/cars/${carId}`),
        fetch(`${process.env.API_URL}/api/brands`),
        fetch(`${process.env.API_URL}/api/models`),
        fetch(`${process.env.API_URL}/api/colors`),
    ]);

    const [{ car }, { brands }, { models }, { colors }] = await Promise.all([
        carRes.json(),
        brandRes.json(),
        modelRes.json(),
        colorRes.json(),
    ]);

    if (!carRes.ok) {
        notFound()
    }

    if (!car) {
        notFound()
    }
    return (
        <form action={updateCar}>
            <input type="hidden" name="id" value={car.id} />

            <div className="">
                <BrandModelSelect brands={brands} models={models} model={car.model} brand={car.brand} />

                <div className="">
                    <label htmlFor="color" className="">
                        color
                    </label>
                    <div className="">
                        <select
                            id="color"
                            name="color"
                            className=""
                            defaultValue={colors.find(({ color, colorCode }: { color: string, colorCode: string }) => colorCode === car.color)?.color || ''}
                        >
                            <option value="" disabled>
                                Select a color
                            </option>
                            {colors.map(({ color, colorCode }: { color: string, colorCode: string }) => (
                                <option key={color} value={colorCode}>
                                    <span className="h-2 w-2" style={{ backgroundColor: colorCode }}></span> {color}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="">
                    <label htmlFor="plate_no" className="">
                        Plate No.
                    </label>
                    <div className="">
                        <input
                            id="plate_no"
                            name="plate_no"
                            placeholder="Enter plate no"
                            defaultValue={car.plate_no}
                            className=""
                        />
                    </div>
                </div>

                <div className="">
                    <label htmlFor="chassis_no" className="">
                        Chassis No.
                    </label>
                    <div className="">
                        <input
                            id="chassis_no"
                            name="chassis_no"
                            defaultValue={car.chassis_no}
                            placeholder="Enter chassis no"
                            className=""
                        />
                    </div>
                </div>


                {/* Description */}
                <div className="">
                    <label
                        htmlFor="note"
                        className=""
                    >
                        Note
                    </label>
                    <div className="">
                        <textarea
                            id="note"
                            name="note"
                            placeholder="Add note"
                            defaultValue={car.note}
                            className=""
                        />
                    </div>
                </div>
            </div>
            <div className="">
                <Link
                    href={`/cars/${carId}`}
                    className="btn btn-light"
                >
                    Cancel
                </Link>

                <button type="submit" className="btn btn-primary">Update</button>
            </div>
        </form>
    )
}

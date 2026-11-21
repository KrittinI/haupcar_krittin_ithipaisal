import Link from "next/link";
import { updateCar } from "../[carId]/edit/actions";
import BrandModelSelect from "./brand-model";

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
    return (
        <form action={updateCar}>
            <input type="hidden" name="id" value={car.id} />

            <div className="rounded-md bg-gray-50 p-6">
                <BrandModelSelect brands={brands} models={models} model={car.model} brand={car.brand} />

                <div className="mb-4">
                    <label htmlFor="color" className="mb-2 block text-sm font-medium">
                        color
                    </label>
                    <div className="relative">
                        <select
                            id="color"
                            name="color"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue={colors.find(({ color, colorCode }: { color: string, colorCode: string }) => colorCode === car.color).color}
                        >
                            <option value="" disabled>
                                Select a color
                            </option>
                            {colors.map(({ color, colorCode }: { color: string, colorCode: string }) => (
                                <option key={color} value={colorCode}>
                                    {color}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="plate_no" className="mb-2 block text-sm font-medium">
                        Plate No.
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <input
                            id="plate_no"
                            name="plate_no"
                            placeholder="Enter plate no"
                            defaultValue={car.plate_no}
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="chassis_no" className="mb-2 block text-sm font-medium">
                        Chassis No.
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <input
                            id="chassis_no"
                            name="chassis_no"
                            defaultValue={car.chassis_no}
                            placeholder="Enter chassis no"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                    </div>
                </div>


                {/* Description */}
                <div className="mb-4">
                    <label
                        htmlFor="note"
                        className="mb-2 block text-sm font-medium"
                    >
                        Note
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <textarea
                            id="note"
                            name="note"
                            placeholder="Add note"
                            defaultValue={car.note}
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href={`/cars/${carId}`}
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>

                <button className="flex h-10 items-center rounded-lg bg-red-500 px-4 text-sm font-medium text-white transition-colors hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
                    Update
                </button>
            </div>
        </form>
    )
}

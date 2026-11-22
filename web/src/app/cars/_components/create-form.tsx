import Link from "next/link";
import BrandModelSelect from "./brand-model";
import { createCar } from "../create/actions";

export default async function CreateForm() {
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
        <form action={createCar}>
            <div className="">
                <BrandModelSelect brands={brands} models={models} />

                <div className="">
                    <label htmlFor="color" className="">
                        color
                    </label>
                    <div className="">
                        <select
                            id="color"
                            name="color"
                            className=""
                            defaultValue=""
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

                <div className="">
                    <label htmlFor="plate_no" className="">
                        Plate No.
                    </label>
                    <div className="">
                        <input
                            id="plate_no"
                            name="plate_no"
                            placeholder="Enter plate no"
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
                            className=""
                        />
                    </div>
                </div>
            </div>
            <div className="">
                <Link
                    href="/"
                    className=""
                >
                    Cancel
                </Link>

                <button className="">
                    Create
                </button>
            </div>
        </form>
    )
}

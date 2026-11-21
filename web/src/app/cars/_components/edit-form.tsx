
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
        <form>EditForm</form>
    )
}

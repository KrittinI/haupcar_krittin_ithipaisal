
export default async function CreateCarPage() {
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
        <div>create</div>
    )
}

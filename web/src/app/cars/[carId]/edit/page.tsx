
export default async function EditCarPage({ params }: PageProps<'/cars/[carId]/edit'>) {
    const { carId } = await params

    const res = await fetch(`${process.env.API_URL}/api/cars/${carId}`)

    const data = await res.json()

    return (
        <div>{carId}{JSON.stringify(data.car)}</div>
    )
}

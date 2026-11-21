
export default async function EditCarPage({ params }: {
    params: Promise<{ carId: string }>
}) {
    const { carId } = await params
    return (
        <div>{carId}</div>
    )
}

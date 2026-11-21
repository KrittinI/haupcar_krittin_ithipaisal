
export default async function CarDetailPage({ params }: {
    params: Promise<{ carId: string }>
}) {
    const { carId } = await params
    return (
        <div>{carId}</div>
    )
}

import EditForm from "../../_components/edit-form"

export default async function EditCarPage({ params }: PageProps<'/cars/[carId]/edit'>) {
    const { carId } = await params

    return (
        <div>
            Edit CarId: {carId}
            <EditForm carId={carId} />
        </div>
    )
}

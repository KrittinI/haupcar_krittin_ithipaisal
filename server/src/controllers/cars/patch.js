export function setUpPatchCars() {
  const updateCarsRoute = {};

  updateCarsRoute.updateCar = async (req, res, next) => {
    const { carId } = req.params;
    const body = req.body;
  };

  return updateCarsRoute;
}

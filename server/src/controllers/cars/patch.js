export function setUpPatchCars() {
  const updateCarsRoute = {};

  updateCarsRoute.updateCar = async (req, res, next) => {
    try {
      const { carId } = req.params;
      const body = req.body;

      const result = await carsService.updateCar(carId, body);

      return res.status(201).json({ message: "Create car success" });
    } catch (error) {
      return next(error);
    }
  };

  return updateCarsRoute;
}

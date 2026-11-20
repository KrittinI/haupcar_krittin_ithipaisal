export function setUpDeleteCars() {
  const deleteCarsRoute = {};

  deleteCarsRoute.deleteCarById = async (req, res, next) => {
    const { carId } = req.params;
  };

  return deleteCarsRoute;
}

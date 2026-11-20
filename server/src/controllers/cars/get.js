export function setUpGetCars() {
  const getCarsRoute = {};

  getCarsRoute.getAllCars = async (req, res, next) => {
    const { q } = req.query;
  };

  getCarsRoute.getCarsById = async (req, res, next) => {
    const { carId } = req.params;
  };

  return getCarsRoute;
}

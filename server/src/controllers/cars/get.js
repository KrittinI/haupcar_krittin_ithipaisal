import { setUpCarsService } from "../../services/cars";

export function setUpGetCars() {
  const carsService = setUpCarsService();
  const getCarsRoute = {};

  getCarsRoute.getAllCars = async (req, res, next) => {
    try {
      const { q } = req.query;

      const cars = await carsService.getAllCars();

      return res.status(200).json({ cars });
    } catch (error) {
      return next(error);
    }
  };

  getCarsRoute.getCarsById = async (req, res, next) => {
    try {
      const { carId } = req.params;

      const car = await carsService.getCarById(carId);
      return res.status(200).json({ car });
    } catch (error) {
      return next(error);
    }
  };

  return getCarsRoute;
}

import { setUpCarsService } from "../../services/cars";

export function setUpDeleteCars() {
  const carsService = setUpCarsService();

  const deleteCarsRoute = {};

  deleteCarsRoute.deleteCarById = async (req, res, next) => {
    try {
      const { carId } = req.params;

      const cars = await carsService.deleteCar(carId);

      return res.status(204).json({ message: "Delete car successful." });
    } catch (error) {
      return next(error);
    }
  };

  return deleteCarsRoute;
}

import { setUpCarsService } from "../../services/cars";

export function setUpPostCars() {
  const carsService = setUpCarsService();
  const createCarsRoute = {};

  createCarsRoute.createCar = async (req, res, next) => {
    try {
      const body = req.body;

      const result = await carsService.createCar(body);

      return res.status(201).json({ message: "Create car success" });
    } catch (error) {
      return next(error);
    }
  };

  return createCarsRoute;
}

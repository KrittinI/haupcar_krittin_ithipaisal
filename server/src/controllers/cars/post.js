const { setUpCarsService } = require("../../services");
const { createCarsValidator } = require("../../validators/cars-validator");

function setUpPostCars() {
  const carsService = setUpCarsService();
  const createCarsRoute = {};

  createCarsRoute.createCar = async (req, res, next) => {
    try {
      const data = createCarsValidator(req.body); // build and vaidate body

      const result = await carsService.createCar(data);

      return res.status(201).json({ message: "Create car success" });
    } catch (error) {
      return next(error);
    }
  };

  return createCarsRoute;
}

module.exports = {
  setUpPostCars,
};

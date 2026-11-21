const { setUpCarsService } = require("../../services");
const { createError } = require("../../utils");

function setUpGetCars() {
  const carsService = setUpCarsService();
  const getCarsRoute = {};

  getCarsRoute.getAllCars = async (req, res, next) => {
    try {
      const query = req.query;

      const filter = query; // build and validate filter

      const cars = await carsService.getAllCars(filter);

      // createError(400, "topicId does not exist");

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

module.exports = {
  setUpGetCars,
};

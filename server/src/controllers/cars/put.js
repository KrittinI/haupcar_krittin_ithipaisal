const { setUpCarsService } = require("../../services");
const { updateCarsValidator } = require("../../validators/cars-validator");

function setUpPutCars() {
  const carsService = setUpCarsService();
  const updateCarsRoute = {};

  updateCarsRoute.updateCar = async (req, res, next) => {
    try {
      const { carId } = req.params;

      const data = updateCarsValidator(req.body); // build and vaidate body

      const result = await carsService.updateCar(carId, data);

      return res.status(201).json({ message: "Update car success" });
    } catch (error) {
      return next(error);
    }
  };

  return updateCarsRoute;
}

module.exports = {
  setUpPutCars,
};

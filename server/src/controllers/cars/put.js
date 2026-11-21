const { setUpCarsService } = require("../../services");
const { carsValidator } = require("../../validators");

function setUpPutCars() {
  const carsService = setUpCarsService();
  const updateCarsRoute = {};

  updateCarsRoute.updateCar = async (req, res, next) => {
    try {
      const { carId } = req.params;

      const data = carsValidator(req.body); // build and vaidate body

      await carsService.updateCar(carId, data);

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

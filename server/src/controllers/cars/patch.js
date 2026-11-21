const { setUpCarsService } = require("../../services");

function setUpPatchCars() {
  const carsService = setUpCarsService();
  const updateCarsRoute = {};

  updateCarsRoute.updateCar = async (req, res, next) => {
    try {
      const { carId } = req.params;
      const body = req.body;

      const data = body; // build and vaidate body

      const result = await carsService.updateCar(carId, data);

      return res.status(201).json({ message: "Update car success" });
    } catch (error) {
      return next(error);
    }
  };

  return updateCarsRoute;
}

module.exports = {
  setUpPatchCars,
};

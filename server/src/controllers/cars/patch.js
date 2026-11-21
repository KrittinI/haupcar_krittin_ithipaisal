const { setUpCarsService } = require("../../services");

function setUpPatchCars() {
  const carsService = setUpCarsService();
  const updateCarsRoute = {};

  updateCarsRoute.updateCar = async (req, res, next) => {
    try {
      const { carId } = req.params;
      const body = req.body;

      console.log({ carId });

      const result = await carsService.updateCar(carId, body);

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

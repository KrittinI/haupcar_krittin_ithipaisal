const { setUpCarsService } = require("../../services");

function setUpDeleteCars() {
  const carsService = setUpCarsService();

  const deleteCarsRoute = {};

  deleteCarsRoute.deleteCarById = async (req, res, next) => {
    try {
      const { carId } = req.params;

      await carsService.deleteCar(carId);

      return res.status(204).json({ message: "Delete car successful." });
    } catch (error) {
      return next(error);
    }
  };

  return deleteCarsRoute;
}

module.exports = {
  setUpDeleteCars,
};

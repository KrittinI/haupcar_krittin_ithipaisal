const { setUpCarsService } = require("../../services");

function setUpPostCars() {
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

module.exports = {
  setUpPostCars,
};

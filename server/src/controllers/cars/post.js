const { setUpCarsService } = require("../../services");
const { carsValidator } = require("../../validators");

function setUpPostCars() {
  const carsService = setUpCarsService();
  const createCarsRoute = {};

  createCarsRoute.createCar = async (req, res, next) => {
    try {
      const data = carsValidator(req.body); // build and vaidate body

      await carsService.createCar(data);

      return res.status(201).json({ message: "Create car success" });
    } catch (error) {
      console.log(error);
      return next(error);
    }
  };

  return createCarsRoute;
}

module.exports = {
  setUpPostCars,
};

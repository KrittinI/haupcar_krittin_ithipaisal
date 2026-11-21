function setUpCarsService() {
  const carsService = {};

  carsService.getAllCars = async (filter) => {};

  carsService.getCarById = async (carId) => {};

  carsService.createCar = async (body) => {};

  carsService.updateCar = async (carId, body) => {};

  carsService.deleteCar = async (carId) => {};

  return carsService;
}

module.exports = {
  setUpCarsService,
};

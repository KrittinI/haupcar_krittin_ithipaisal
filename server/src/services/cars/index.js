function setUpCarsService() {
  const carsService = {};

  carsService.getAllCars = async (filter) => {};

  carsService.getCarById = async (carId) => {};

  carsService.createCar = async (body) => {
    console.log(body);
    return body;
  };

  carsService.updateCar = async (carId, body) => {};

  carsService.deleteCar = async (carId) => {};

  return carsService;
}

module.exports = {
  setUpCarsService,
};

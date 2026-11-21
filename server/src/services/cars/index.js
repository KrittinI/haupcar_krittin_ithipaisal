const { carsRepo } = require("../../repositories");
const { createError } = require("../../utils");

function setUpCarsService() {
  const carsService = {};

  carsService.getAllCars = async (filter) => {
    return carsRepo.findAllCars(filter);
  };

  carsService.getCarById = async (carId) => {
    const car = await carsRepo.findCarByById(carId);

    if (!car) {
      createError(404, `carId: ${carId} not found.`);
    }

    return car;
  };

  carsService.createCar = async (body) => {
    try {
      const { chassis_no } = body;

      const car = await carsRepo.findCarByChassis(chassis_no);

      if (car) {
        createError(409, "chassis_no already existed");
      }

      return carsRepo.createCar(body);
    } catch (error) {
      throw error;
    }
  };

  carsService.updateCar = async (carId, body) => {
    try {
      const car = await carsRepo.findCarByById(carId);

      if (!car) {
        createError(404, `carId: ${carId} not found.`);
      }
      const { brand, model, plate_no, color, chassis_no } = body;
      const updateData = {};

      if (chassis_no !== car.chassis_no) {
        const chassisNoCar = await carsRepo.findCarByChassis(chassis_no);

        if (chassisNoCar) {
          createError(409, "chassis_no already existed");
        }

        updateData.chassis_no = chassis_no;
      }

      if (brand !== car.brand) {
        updateData.brand = brand;
      }

      if (model !== car.model) {
        updateData.model = model;
      }

      if (plate_no !== car.plate_no) {
        updateData.plate_no = plate_no;
      }

      if (color !== car.color) {
        updateData.color = color;
      }

      if (Object.keys(updateData).length === 0) {
        console.log("nothing to update");
        return;
      }

      return carsRepo.updateCar(carId, updateData);
    } catch (error) {
      throw error;
    }
  };

  carsService.deleteCar = async (carId) => {
    try {
      const car = await carsRepo.findCarByById(carId);

      if (!car) {
        createError(404, `carId: ${carId} not found.`);
      }

      const result = await carsRepo.deleteCar(carId);

      return result;
    } catch (error) {
      throw error;
    }
  };

  return carsService;
}

module.exports = {
  setUpCarsService,
};

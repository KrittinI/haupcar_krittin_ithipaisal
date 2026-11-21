const { Router } = require("express");
const { setUpDeleteCars } = require("./delete");
const { setUpGetCars } = require("./get");
const { setUpPatchCars } = require("./patch");
const { setUpPostCars } = require("./post");
const { setUpPutCars } = require("./put");

function setUpCarRoutes() {
  const carRouter = Router();

  const getRoute = setUpGetCars();
  const deleteRoute = setUpDeleteCars();
  const patchRoute = setUpPatchCars();
  const postRoute = setUpPostCars();
  const putRoute = setUpPutCars();

  carRouter.get("/", getRoute.getAllCars);
  carRouter.get("/:carId", getRoute.getCarsById);
  carRouter.post("/", postRoute.createCar);
  // carRouter.patch("/:carId", patchRoute.updateCar);
  carRouter.put("/:carId", putRoute.updateCar);
  carRouter.delete("/:carId", deleteRoute.deleteCarById);

  return carRouter;
}

module.exports = {
  setUpCarRoutes,
};

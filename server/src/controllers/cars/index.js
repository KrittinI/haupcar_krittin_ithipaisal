import { Router } from "express";
import { setUpDeleteCars } from "./delete";
import { setUpGetCars } from "./get";
import { setUpPatchCars } from "./patch";
import { setUpPostCars } from "./post";
import { setUpPutCars } from "./put";

export function setUpCarRoues() {
  const carRouter = Router();

  const getRoute = setUpGetCars();
  const deleteRoute = setUpDeleteCars();
  const patchRoute = setUpPatchCars();
  const postRoute = setUpPostCars();
  const putRoute = setUpPutCars();

  carRouter.get("/", getRoute.getAllCars);
  carRouter.get("/:carId", getRoute.getCarsById);
  carRouter.post("/", postRoute.createCar);
  carRouter.patch("/:carId", patchRoute.updateCar);
  carRouter.put("/:carId", putRoute.updateCar);
  carRouter.delete("/:carId", deleteRoute.deleteCarById);

  return carRouter;
}

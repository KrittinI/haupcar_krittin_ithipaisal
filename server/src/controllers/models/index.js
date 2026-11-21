const { Router } = require("express");
const { setUpGetModels } = require("./get");

function setUpModelRoutes() {
  const carRouter = Router();

  const getRoute = setUpGetModels();

  carRouter.get("/", getRoute.getAllModels);
  carRouter.get("/:brand", getRoute.getModelByBrand);

  return carRouter;
}

module.exports = {
  setUpModelRoutes,
};

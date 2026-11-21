const { Router } = require("express");
const { setUpGetModels } = require("./get");

function setUpModelRoutes() {
  const modelRouter = Router();

  const getRoute = setUpGetModels();

  modelRouter.get("/", getRoute.getAllModels);
  modelRouter.get("/:brand", getRoute.getModelByBrand);

  return modelRouter;
}

module.exports = {
  setUpModelRoutes,
};

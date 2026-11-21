const { Router } = require("express");
const { setUpGetColors } = require("./get");

function setUpColorRoutes() {
  const colorRouter = Router();

  const getRoute = setUpGetColors();

  colorRouter.get("/", getRoute.getAllColors);

  return colorRouter;
}

module.exports = {
  setUpColorRoutes,
};

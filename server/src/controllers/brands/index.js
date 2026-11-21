const { Router } = require("express");
const { setUpGetBrands } = require("./get");

function setUpBrandRoutes() {
  const brandRouter = Router();

  const getRoute = setUpGetBrands();

  brandRouter.get("/", getRoute.getAllBrands);

  return brandRouter;
}

module.exports = {
  setUpBrandRoutes,
};

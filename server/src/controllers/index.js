const { setUpBrandRoutes } = require("./brands");
const { setUpCarRoutes } = require("./cars");
const { setUpColorRoutes } = require("./colors");
const { setUpModelRoutes } = require("./models");

module.exports = {
  setUpCarRoutes,
  setUpModelRoutes,
  setUpBrandRoutes,
  setUpColorRoutes,
};

const { carModels } = require("../../constants");
const { createError } = require("../../utils");

function setUpGetModels() {
  const getModelsRoute = {};

  getModelsRoute.getAllModels = async (req, res, next) => {
    try {
      return res.status(200).json({ models: carModels });
    } catch (error) {
      return next(error);
    }
  };

  getModelsRoute.getModelByBrand = async (req, res, next) => {
    try {
      const { brand } = req.params;

      if (carModels[brand]) {
        createError(400, "Brand not found");
      }

      return res.status(200).json({ models: carModels[brand] || [] });
    } catch (error) {
      return next(error);
    }
  };

  return getModelsRoute;
}

module.exports = {
  setUpGetModels,
};

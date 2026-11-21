const { carBrands } = require("../../constants");

function setUpGetBrands() {
  const getBrandsRoute = {};

  getBrandsRoute.getAllBrands = async (req, res, next) => {
    try {
      return res.status(200).json({ brands: carBrands });
    } catch (error) {
      return next(error);
    }
  };

  return getBrandsRoute;
}

module.exports = {
  setUpGetBrands,
};

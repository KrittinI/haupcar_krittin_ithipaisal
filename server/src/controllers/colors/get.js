const { carColors } = require("../../constants");
const { createError } = require("../../utils");

function setUpGetColors() {
  const getColorsRoute = {};

  getColorsRoute.getAllColors = async (req, res, next) => {
    try {
      const colors = [];

      for (const color in carColors) {
        colors.push({ color, colorCode: carColors[color] });
      }

      return res.status(200).json({ colors });
    } catch (error) {
      return next(error);
    }
  };

  return getColorsRoute;
}

module.exports = {
  setUpGetColors,
};

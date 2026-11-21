const { carBrands, carModels } = require("../constants");
const { createError } = require("../utils");

function carsValidator(body) {
  const errors = {};
  const { plate_no, brand, model, chassis_no, color, note } = body;

  if (!plate_no) {
    errors.plate_no = "plate_no is required";
  }

  if (!brand) {
    errors.brand = "brand is required";
  } else {
    if (!carBrands.includes(String(brand).toLowerCase())) {
      errors.brand = "brand is not supported";
    }
  }

  if (!model) {
    errors.model = "model is required";
  } else {
    if (!carModels[brand].includes(String(model).toLowerCase())) {
      errors.model = "model is not supported";
    }
  }

  if (!chassis_no) {
    errors.chassis_no = "chassis_no is required";
  } else {
    if (String(chassis_no).length !== 17) {
      errors.chassis_no = "chassis_no is incorrect";
    }
  }

  if (!color) {
    errors.color = "color is required";
  } else {
    const colorCodeRegex = /^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    if (!colorCodeRegex.test(String(color).toLowerCase())) {
      errors.color = "color is incorrect format";
    }
  }

  if (Object.keys(errors).length !== 0) {
    return createError(400, "Bad request", errors);
  }

  return body;
}

function filterCarsValidator(query) {
  return query;
}

module.exports = {
  carsValidator,
  filterCarsValidator,
};

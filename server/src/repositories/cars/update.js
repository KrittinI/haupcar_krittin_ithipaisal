const { postGres } = require("../../configs");

async function updateCar(carId, body) {
  const updateFiled = [];
  const values = [carId];

  for (const key in body) {
    values.push(body[key]);
    updateFiled.push(`${key} = $${values.length}`);
  }

  const updateQuery = updateFiled.join(", ");

  const query = `
    UPDATE cars
        SET ${updateQuery} WHERE id = $1 AND deleted_at IS NOT NULL
  `;

  const result = await postGres.query(query, values);

  return result.rowCount;
}

module.exports = {
  updateCar,
};

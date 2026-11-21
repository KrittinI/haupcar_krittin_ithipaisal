const { postGres } = require("../../configs");

async function deleteCar(carId) {
  const query = `
    UPDATE cars
        SET
        deleted_at = $1
        WHERE id = $2
  `;

  const values = [new Date(), carId];

  const result = await postGres.query(query, values);

  return result.rowCount;
}

module.exports = {
  deleteCar,
};

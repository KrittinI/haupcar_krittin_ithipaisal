const { postGres } = require("../../configs");

async function createCar(body) {
  const query = `
    INSERT INTO cars (
      plate_no,
      color,
      chassis_no,
      model,
      brand
    )
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;

  const values = [
    body.plate_no,
    body.color,
    body.chassis_no,
    body.model,
    body.brand,
  ];

  const result = await postGres.query(query, values);
  return result.rows[0];
}

module.exports = {
  createCar,
};

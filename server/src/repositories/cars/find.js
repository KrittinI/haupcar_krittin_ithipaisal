const { postGres } = require("../../configs");

async function findCarByChassis(chassis_no) {
  const query = `
    SELECT * FROM cars WHERE chassis_no=$1 AND deleted_at IS NULL
  `;

  const values = [chassis_no];

  const result = await postGres.query(query, values);
  return result.rows[0];
}

async function findCarByById(carId) {
  const query = `
    SELECT * FROM cars WHERE id=$1 AND deleted_at IS NULL
  `;

  const values = [carId];

  const result = await postGres.query(query, values);
  return result.rows[0];
}

async function findAllCars(filter) {
  const conditions = ["deleted_at IS NULL"];
  const values = [];

  if (filter.brand) {
    values.push(filter.brand);
    conditions.push(`brand = $${values.length}`);
  }

  if (filter.model) {
    values.push(filter.model);
    conditions.push(`model = $${values.length}`);
  }

  if (filter.color) {
    values.push(filter.color);
    conditions.push(`color = $${values.length}`);
  }

  if (filter.plate_no) {
    values.push(`%${filter.plate_no}%`);
    conditions.push(`plate_no ILIKE $${values.length}`);
  }

  const query = `
      SELECT * FROM cars
      WHERE ${conditions.join(" AND ")}
      ORDER BY created_at DESC;
    `;

  const result = await postGres.query(query, values);

  return result.rows;
}

module.exports = {
  findCarByChassis,
  findCarByById,
  findAllCars,
};

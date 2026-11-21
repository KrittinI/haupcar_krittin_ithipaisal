require("dotenv").config({ path: "../.env" });
const { Pool } = require("pg");

// By default, Pool reads standard environment variables:
// PGUSER, PGHOST, PGPASSWORD, PGDATABASE, PGPORT
const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: "localhost",
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

module.exports = { postGres: pool };

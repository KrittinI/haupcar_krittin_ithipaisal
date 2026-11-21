require("dotenv").config({ path: "../.env" });
const express = require("express");
const cors = require("cors");

const {
  setUpCarRoutes,
  setUpModelRoutes,
  setUpColorRoutes,
} = require("./src/controllers");
const { notFoundMiddleware, errorMiddleware } = require("./src/middlewares");

const app = express();
const port = process.env.SERVER_PORT;

app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ limit: "1mb", extended: false }));

app.use("/cars", setUpCarRoutes());
app.use("/models", setUpModelRoutes());
app.use("/brands", setUpModelRoutes());
app.use("/colors", setUpColorRoutes());

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

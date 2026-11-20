require("dotenv").config({ path: "../.env" });
const express = require("express");
const { notFoundMiddleware, errorMiddleware } = require("./middlewares");
const app = express();
const port = process.env.SERVER_PORT;

app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ limit: "1mb", extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

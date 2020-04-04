const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const logger = require("./middleware/logger");

//loading router file
const bootcamp = require("./routes/bootcamp");

//load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

//Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(logger);

//mount route

app.use("/api/v1/bootcamps", bootcamp);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server runing in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

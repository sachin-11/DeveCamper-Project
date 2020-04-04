const express = require("express");
const dotenv = require("dotenv");

//loading router file
const bootcamp = require("./routes/bootcamp");

//load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

//mount route

app.use("/api/v1/bootcamps", bootcamp);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server runing in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

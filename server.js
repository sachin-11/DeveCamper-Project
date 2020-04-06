const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const color = require("colors");
const errorHandler = require("./middleware/error");
const logger = require("./middleware/logger");
const connectDB = require("./config/db");
//loading router file
const bootcamp = require("./routes/bootcamp");

//load env vars
dotenv.config({ path: "./config/config.env" });

//connect to database
connectDB();

const app = express();

//body-parsar
app.use(express.json());

//Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//mount route

app.use("/api/v1/bootcamps", bootcamp);

app.use(errorHandler);
app.use(logger);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server runing in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

//handle promise rejection

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  //Close server & exit process
  server.close(() => {
    process.exit(1);
  });
});

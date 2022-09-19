require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

//components
const apiRouter = require("./app/router/api-router");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", apiRouter);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, function () {
      console.log(`Connected to DB, hurrrayyy!`);
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

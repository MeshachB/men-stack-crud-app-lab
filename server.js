const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan("dev"));

// View engine
app.set("view engine", "ejs");

//  DEFINE YOUR ROUTER
const producersRouter = require('./routes/producers');

//  USE IT
app.use('/producers', producersRouter);

// Optional test route
app.get("/test", (req, res) => {
  res.send("The Navy Diver is not a fighting man he is a Salvage Expert!");
});

app.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});



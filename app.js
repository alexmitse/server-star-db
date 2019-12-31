require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const db = require("./database/database");

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

const indexRouter = require("./routes/index");
const peopleRouter = require("./routes/people");
const starshipsRouter = require("./routes/starships");
const planetsRouter = require("./routes/planets");
const speciesRouter = require("./routes/species");
const vehiclesRouter = require("./routes/vehicles");
const filmsRouter = require("./routes/films");
const searchRouter = require("./routes/search");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  next();
});

app.use("/", indexRouter);
app.use("/people", peopleRouter);
app.use("/starships", starshipsRouter);
app.use("/vehicles", vehiclesRouter);
app.use("/species", speciesRouter);
app.use("/films", filmsRouter);
app.use("/planets", planetsRouter);
app.use("/search", searchRouter);

module.exports = app;

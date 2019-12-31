"use strict";
const sequelize = require("../database");
const DataTypes = require("sequelize").DataTypes;
const films_planets = sequelize.define(
  "films_planets",
  {
    filmsId: DataTypes.INTEGER,
    planetsId: DataTypes.INTEGER
  },
  {}
);
module.exports = films_planets;

"use strict";
const sequelize = require("../database");
const DataTypes = require("sequelize").DataTypes;
const films_vehicles = sequelize.define(
  "films_vehicles",
  {
    filmsId: DataTypes.INTEGER,
    vehiclesId: DataTypes.INTEGER
  },
  {}
);

module.exports = films_vehicles;

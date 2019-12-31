"use strict";
const sequelize = require("../database");
const DataTypes = require("sequelize").DataTypes;
const people_vehicles = sequelize.define(
  "people_vehicles",
  {
    peopleId: DataTypes.INTEGER,
    vehiclesId: DataTypes.INTEGER
  },
  {}
);

module.exports = people_vehicles;

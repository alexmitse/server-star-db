"use strict";
const sequelize = require("../database");
const DataTypes = require("sequelize").DataTypes;
const vehicles = sequelize.define(
  "vehicles",
  {
    name: DataTypes.STRING,
    model: DataTypes.STRING,
    length: DataTypes.STRING
  },
  {}
);
module.exports = vehicles;

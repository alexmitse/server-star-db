"use strict";
const sequelize = require("../database");
const DataTypes = require("sequelize").DataTypes;

const planets = sequelize.define(
  "planets",
  {
    name: DataTypes.STRING,
    climate: DataTypes.STRING,
    population: DataTypes.STRING
  },
  {}
);

module.exports = planets;

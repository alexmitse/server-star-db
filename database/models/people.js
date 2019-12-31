"use strict";
const sequelize = require("../database");

const DataTypes = require("sequelize").DataTypes;

const people = sequelize.define(
  "people",
  {
    name: DataTypes.STRING,
    height: DataTypes.STRING,
    gender: DataTypes.STRING,
    planetsId: DataTypes.INTEGER,
    speciesId: DataTypes.INTEGER
  },
  {}
);
module.exports = people;

"use strict";
const sequelize = require("../database");
const DataTypes = require("sequelize").DataTypes;

const species = sequelize.define(
  "species",
  {
    name: DataTypes.STRING,
    classification: DataTypes.STRING,
    language: DataTypes.STRING
  },
  {}
);
module.exports = species;

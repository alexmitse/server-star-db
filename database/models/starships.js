"use strict";
const sequelize = require("../database");
const DataTypes = require("sequelize").DataTypes;
const starships = sequelize.define(
  "starships",
  {
    name: DataTypes.STRING,
    model: DataTypes.STRING,
    length: DataTypes.STRING
  },
  {}
);
module.exports = starships;

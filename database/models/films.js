"use strict";
const sequelize = require("../database");
const DataTypes = require("sequelize").DataTypes;
const films = sequelize.define(
  "films",
  {
    title: { type: DataTypes.STRING },
    director: DataTypes.STRING
  },
  {}
);
module.exports = films;

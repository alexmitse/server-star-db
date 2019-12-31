"use strict";
const sequelize = require("../database");
const DataTypes = require("sequelize").DataTypes;
const people_films = sequelize.define(
  "people_films",
  {
    peopleId: DataTypes.INTEGER,
    filmsId: DataTypes.INTEGER
  },
  {}
);
module.exports = people_films;

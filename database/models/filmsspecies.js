"use strict";
const sequelize = require("../database");
const DataTypes = require("sequelize").DataTypes;
const films_species = sequelize.define(
  "films_species",
  {
    filmsId: DataTypes.INTEGER,
    speciesId: DataTypes.INTEGER
  },
  {}
);
module.exports = films_species;

"use strict";
const sequelize = require("../database");
const DataTypes = require("sequelize").DataTypes;
const films_starships = sequelize.define(
  "films_starships",
  {
    filmsId: DataTypes.INTEGER,
    starshipsId: DataTypes.INTEGER
  },
  {}
);
module.exports = films_starships;

"use strict";
const sequelize = require("../database");
const DataTypes = require("sequelize").DataTypes;
const people_starships = sequelize.define(
  "people_starships",
  {
    peopleId: DataTypes.INTEGER,
    starshipsId: DataTypes.INTEGER
  },
  {}
);

module.exports = people_starships;

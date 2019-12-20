"use strict";
module.exports = (sequelize, DataTypes) => {
  const films_planets = sequelize.define(
    "films_planets",
    {
      filmsId: DataTypes.INTEGER,
      planetsId: DataTypes.INTEGER
    },
    {}
  );
  films_planets.associate = function(models) {
    // associations can be defined here
  };
  return films_planets;
};

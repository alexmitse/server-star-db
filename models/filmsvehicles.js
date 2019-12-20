"use strict";
module.exports = (sequelize, DataTypes) => {
  const films_starships = sequelize.define(
    "films_starships",
    {
      filmsId: DataTypes.INTEGER,
      vehiclesId: DataTypes.INTEGER
    },
    {}
  );
  films_starships.associate = function(models) {
    // associations can be defined here
  };
  return films_starships;
};

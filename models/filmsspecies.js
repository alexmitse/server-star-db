"use strict";
module.exports = (sequelize, DataTypes) => {
  const films_species = sequelize.define(
    "films_species",
    {
      filmsId: DataTypes.INTEGER,
      speciesId: DataTypes.INTEGER
    },
    {}
  );
  films_species.associate = function(models) {
    // associations can be defined here
  };
  return films_species;
};

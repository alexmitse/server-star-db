"use strict";
module.exports = (sequelize, DataTypes) => {
  const people_species = sequelize.define(
    "people_species",
    {
      peopleId: DataTypes.INTEGER,
      speciesId: DataTypes.INTEGER
    },
    {}
  );
  people_species.associate = function(models) {
    // associations can be defined here
  };
  return people_species;
};

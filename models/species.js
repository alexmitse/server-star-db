"use strict";
module.exports = (sequelize, DataTypes) => {
  const species = sequelize.define(
    "species",
    {
      average_height: DataTypes.STRING
    },
    {}
  );
  species.associate = function(models) {
    species.hasMany(models.people, {
      as: "people"
    });
    species.belongsToMany(models.films, {
      through: models.films_species,
      as: "films",
      foreignKey: "speciesId"
    });
  };
  return species;
};

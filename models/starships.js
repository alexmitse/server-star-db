"use strict";
module.exports = (sequelize, DataTypes) => {
  const Starships = sequelize.define(
    "Starships",
    {
      name: DataTypes.STRING
    },
    {}
  );
  Starships.associate = function(models) {
    Starships.belongsToMany(models.people, {
      through: models.people_starships,
      as: "people",
      foreignKey: "starshipsId"
    });
    Starships.belongsToMany(models.films, {
      through: models.films_starships,
      as: "films",
      foreignKey: "starshipsId"
    });
  };
  return Starships;
};

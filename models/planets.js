"use strict";
module.exports = (sequelize, DataTypes) => {
  const planets = sequelize.define(
    "planets",
    {
      name: DataTypes.STRING
      // peopleId: DataTypes.INTEGER
    },
    {}
  );
  planets.associate = function(models) {
    planets.hasMany(models.people, {
      as: "people"
      // foreignKey: "planetsId"
    });
    planets.belongsToMany(models.films, {
      through: models.films_planets,
      as: "films",
      foreignKey: "planetsId"
    });
  };
  return planets;
};

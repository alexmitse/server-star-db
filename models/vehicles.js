"use strict";
module.exports = (sequelize, DataTypes) => {
  const vehicles = sequelize.define(
    "vehicles",
    {
      name: DataTypes.STRING
    },
    {}
  );
  vehicles.associate = function(models) {
    vehicles.belongsToMany(models.people, {
      through: models.people_vehicles,
      as: "people",
      foreignKey: "vehiclesId"
    });
    vehicles.belongsToMany(models.films, {
      through: models.films_starships,
      as: "films",
      foreignKey: "vehiclesId"
    });
  };
  return vehicles;
};

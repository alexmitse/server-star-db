"use strict";
module.exports = (sequelize, DataTypes) => {
  const people_vehicles = sequelize.define(
    "people_vehicles",
    {
      peopleId: DataTypes.INTEGER,
      vehiclesId: DataTypes.INTEGER
    },
    {}
  );
  people_vehicles.associate = function(models) {
    // associations can be defined here
  };
  return people_vehicles;
};

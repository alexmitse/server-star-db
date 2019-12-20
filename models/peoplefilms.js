"use strict";
module.exports = (sequelize, DataTypes) => {
  const people_films = sequelize.define(
    "people_films",
    {
      peopleId: DataTypes.INTEGER,
      filmsId: DataTypes.INTEGER
    },
    {}
  );
  people_films.associate = function(models) {
    // associations can be defined here
  };
  return people_films;
};

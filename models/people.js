"use strict";
module.exports = (sequelize, DataTypes) => {
  const people = sequelize.define(
    "people",
    {
      name: DataTypes.STRING,
      speciesId: DataTypes.INTEGER,
      height: DataTypes.STRING,
      gender: DataTypes.STRING,
      planetsId: DataTypes.INTEGER
      // filmsId: [2, 5, 4, 6, 3, 1],
      // species: ["https://swapi.co/api/species/2/"],
      // vehicles: [],
      // starships: [],
      // createdAt: new Date(),
      // edited: "2014-12-20T21:17:50.309000Z",
      // url: "https://swapi.co/api/people/2/"
    },
    {}
  );
  people.associate = function(models) {
    people.belongsToMany(models.films, {
      through: models.people_films,
      as: "films",
      foreignKey: "peopleId"
    });
    people.belongsTo(models.planets, {
      as: "planets",
      foreignKey: "planetsId"
    });
    people.belongsToMany(models.Starships, {
      through: models.people_starships,
      as: "starships",
      foreignKey: "peopleId"
    });
    people.belongsToMany(models.vehicles, {
      through: models.people_vehicles,
      as: "vehicles",
      foreignKey: "peopleId"
    });
    people.belongsTo(models.species, {
      as: "species",
      foreignKey: "speciesId"
    });
  };
  return people;
};

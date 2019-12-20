"use strict";
module.exports = (sequelize, DataTypes) => {
  const films = sequelize.define(
    "films",
    {
      title: { type: DataTypes.STRING },
      director: DataTypes.STRING
    },
    {}
  );
  films.associate = function(models) {
    films.belongsToMany(models.people, {
      through: models.people_films,
      as: "people",
      foreignKey: "filmsId"
    });
    films.belongsToMany(models.species, {
      through: models.films_species,
      as: "species",
      foreignKey: "filmsId"
    });
    films.belongsToMany(models.vehicles, {
      through: models.films_starships,
      as: "vehicles",
      foreignKey: "filmsId"
    });
    films.belongsToMany(models.Starships, {
      through: models.films_starships,
      as: "starships",
      foreignKey: "filmsId"
    });
    films.belongsToMany(models.planets, {
      through: models.films_planets,
      as: "planets",
      foreignKey: "filmsId"
    });
  };
  return films;
};

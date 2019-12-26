"use strict";
const sequelize = require("../service/database");

const DataTypes = require("sequelize").DataTypes;

const people = sequelize.define(
  "people",
  {
    name: DataTypes.STRING,
    height: DataTypes.STRING,
    gender: DataTypes.STRING,
    planetsId: DataTypes.INTEGER,
    speciesId: DataTypes.INTEGER
  },
  {}
);
// people.associate = function(models) {
//   people.belongsToMany(models.films, {
//     through: models.people_films,
//     as: "films",
//     foreignKey: "peopleId"
//   });
// people.belongsTo(planets, {
//   as: "planets",
//   foreignKey: "planetsId",
//   constraints: false
// });
// people.belongsToMany(models.starships, {
//   through: models.people_starships,
//   as: "starships",
//   foreignKey: "peopleId"
// });
// people.belongsToMany(models.vehicles, {
//   through: models.people_vehicles,
//   as: "vehicles",
//   foreignKey: "peopleId"
// });
// people.belongsTo(models.species, {
//   as: "species",
//   foreignKey: "speciesId"
// });
// };
module.exports = people;

// module.exports = (sequelize, DataTypes) => {
//   const people = sequelize.define(
//     "people",
//     {
//       name: DataTypes.STRING,
//       height: DataTypes.STRING,
//       gender: DataTypes.STRING,
//       planetsId: DataTypes.INTEGER,
//       speciesId: DataTypes.INTEGER
//     },
//     {}
//   );
//   console.log("models");
//   people.associate = function(models) {
// people.belongsToMany(models.films, {
//   through: models.people_films,
//   as: "films",
//   foreignKey: "peopleId"
// });
// people.belongsTo(models.planets, {
//   as: "planets",
//   foreignKey: "planetsId"
// });
// people.belongsToMany(models.Starships, {
//   through: models.people_starships,
//   as: "starships",
//   foreignKey: "peopleId"
// });
// people.belongsToMany(models.vehicles, {
//   through: models.people_vehicles,
//   as: "vehicles",
//   foreignKey: "peopleId"
// });
// people.belongsTo(models.species, {
//   as: "species",
//   foreignKey: "speciesId"
// });
//   };
//   return people;
// };

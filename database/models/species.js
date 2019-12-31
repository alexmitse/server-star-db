"use strict";
const sequelize = require("../database");
const DataTypes = require("sequelize").DataTypes;

const species = sequelize.define(
  "species",
  {
    name: DataTypes.STRING,
    classification: DataTypes.STRING,
    language: DataTypes.STRING
  },
  {}
);
module.exports = species;

// module.exports = (sequelize, DataTypes) => {
//   const species = sequelize.define(
//     "species",
//     {
//       name: DataTypes.STRING,
//       classification: DataTypes.STRING,
//       language: DataTypes.STRING
//     },
//     {}
//   );
//   species.associate = function(models) {
//     console.log(models);
//     species.hasMany(models.people, {
//       as: "people"
//     });
//     species.belongsToMany(models.films, {
//       through: models.films_species,
//       as: "films",
//       foreignKey: "speciesId"
//     });
//   };
//   return species;
// };

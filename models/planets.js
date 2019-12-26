"use strict";
const sequelize = require("../service/database");
const DataTypes = require("sequelize").DataTypes;

const planets = sequelize.define(
  "planets",
  {
    name: DataTypes.STRING,
    climate: DataTypes.STRING,
    population: DataTypes.STRING
  },
  {}
);
// planets.associate = function(models) {
// planets.belongsToMany(people, {
//   as: "people",
//   constraints: false
// });
// planets.belongsToMany(models.films, {
//   through: models.films_planets,
//   as: "films",
//   foreignKey: "planetsId"
// });
// };
module.exports = planets;

// "use strict";
// module.exports = (sequelize, DataTypes) => {
//   const planets = sequelize.define(
//     "planets",
//     {
//       name: DataTypes.STRING,
//       climate: DataTypes.STRING,
//       population: DataTypes.STRING
//     },
//     {}
//   );
//   planets.associate = function(models) {
//     planets.belongsToMany(models.people, {
//       as: "people"
//     });
// planets.belongsToMany(models.films, {
//   through: models.films_planets,
//   as: "films",
//   foreignKey: "planetsId"
// });
//   };
//   return planets;
// };

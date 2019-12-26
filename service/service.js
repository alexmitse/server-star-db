const people = require("../models/people");
const planets = require("../models/planets");
const species = require("../models/species");

people.belongsTo(planets, {
  as: "planets",
  foreignKey: "planetsId",
  constraints: false
});
people.belongsTo(species, {
  as: "species",
  foreignKey: "speciesId",
  constraints: false
});
planets.hasMany(people, {
  as: "people",
  constraints: false
});
species.hasMany(people, {
  as: "people",
  constraints: false
});

module.exports = Service = {
  getPeople: () => {
    return people.findAll({
      offset: 5,
      limit: 5,
      attributes: ["id", "name"],
      include: [
        {
          attributes: ["id", "name"],
          model: planets,
          as: "planets"
        },
        {
          attributes: ["id", "name"],
          model: species,
          as: "species"
        }
      ]
    });
  }
};

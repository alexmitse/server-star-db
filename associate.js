module.exports = async () => {
  const people = require("./models/people");
  const planets = require("./models/planets");
  const species = require("./models/species");

  const films = require("./models/films");
  const films_planets = require("./models/filmsplanets");

  const sequelize = require("./service/database");
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

  await people
    .findAll({
      // attributes: ["id", "name"],
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
    })
    .then(res => console.log(res))
    .catch(err => console.log("err", err));

  // await sequelize
  //   .query(
  //     `SELECT planets.id, planets.name, films.id as ids, films.title
  //   FROM planets
  //   JOIN films_planets ON planets.id = films_planets."planetsId"
  //   JOIN films ON films_planets."filmsId" = films.id;`,
  //     {
  //       model: planets,
  //       films,
  //       films_planets
  //     }
  //   )
  //   .then(people => console.log(people[7].dataValues));
  //   await sequelize
  //     .query(
  //       `SELECT planets.name as "names", people."name" FROM planets JOIN people ON planets.id = people."planetsId";`,
  //       {
  //         model: people,
  //         planets
  //       }
  //     )
  //     .then(people => console.log(people));
  // const peoplePlanets = await people.findAll({
  //   include: [{ model: planets }]
  // });
  //   console.log(peoplePlanets.then(res => console.log(res)));
};

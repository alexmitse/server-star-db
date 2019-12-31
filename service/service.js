const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const people = require("../database/models/people");
const planets = require("../database/models/planets");
const species = require("../database/models/species");
const films = require("../database/models/films");
const people_films = require("../database/models/peoplefilms");
const people_vehicles = require("../database/models/peoplevehicles");
const people_starships = require("../database/models/peoplestarships");
const vehicles = require("../database/models/vehicles");
const starships = require("../database/models/starships");
const films_planets = require("../database/models/filmsplanets");
const films_species = require("../database/models/filmsspecies");
const films_starships = require("../database/models/filmsstarships");
const films_vehicles = require("../database/models/filmsvehicles");

people.belongsTo(planets, {
  // as: "planets",
  foreignKey: "planetsId"
  //   constraints: false
});
people.belongsTo(species, {
  as: "species",
  foreignKey: "speciesId"
  //   constraints: false
});
planets.hasMany(people, {
  // as: "people",
  foreignKey: "planetsId"
  //   constraints: false
});
species.hasMany(people, {
  as: "people"
  //   constraints: false
});
films.belongsToMany(people, {
  through: people_films,
  as: "people",
  foreignKey: "filmsId"
  //   constraints: false
});
vehicles.belongsToMany(people, {
  through: people_vehicles,
  as: "people",
  foreignKey: "vehiclesId"
  //   constraints: false
});
starships.belongsToMany(people, {
  through: people_starships,
  as: "people",
  foreignKey: "starshipsId"
  //   constraints: false
});
people.belongsToMany(films, {
  through: people_films,
  as: "films",
  foreignKey: "peopleId"
  //   constraints: false
});
people.belongsToMany(starships, {
  through: people_starships,
  as: "starships",
  foreignKey: "peopleId"
  //   constraints: false
});
people.belongsToMany(vehicles, {
  through: people_vehicles,
  as: "vehicles",
  foreignKey: "peopleId"
  //   constraints: false
});
films.belongsToMany(species, {
  through: films_species,
  as: "species",
  foreignKey: "filmsId"
});
films.belongsToMany(vehicles, {
  through: films_vehicles,
  as: "vehicles",
  foreignKey: "filmsId"
});
films.belongsToMany(starships, {
  through: films_starships,
  as: "starships",
  foreignKey: "filmsId"
});
films.belongsToMany(planets, {
  through: films_planets,
  as: "planets",
  foreignKey: "filmsId"
});
planets.belongsToMany(films, {
  through: films_planets,
  as: "films",
  foreignKey: "planetsId"
});
species.belongsToMany(films, {
  through: films_species,
  as: "films",
  foreignKey: "speciesId"
});
starships.belongsToMany(films, {
  through: films_starships,
  as: "films",
  foreignKey: "starshipsId"
});
vehicles.belongsToMany(films, {
  through: films_vehicles,
  as: "films",
  foreignKey: "vehiclesId"
});

module.exports = Service = {
  getPeople: function(query) {
    const parameters = query[Object.keys(query)];
    if (
      Object.keys(query).map(item => {
        if (item === "page") return true;
        else return false;
      })[0]
    ) {
      return people.findAndCountAll({
        distinct: true,
        limit: 10,
        offset: parameters * 10 - 10,
        attributes: ["id", "name", "height", "gender"],
        include: [
          {
            attributes: ["id", "name"],
            model: planets
            // as: "planets"
          },
          {
            attributes: ["id", "name"],
            model: species,
            as: "species"
          },
          {
            attributes: ["id", "title"],
            model: films,
            as: "films",
            through: { attributes: [] }
          },
          {
            attributes: ["id", "name"],
            model: vehicles,
            as: "vehicles",
            through: { attributes: [] }
          },
          {
            attributes: ["id", "name"],
            model: starships,
            as: "starships",
            through: { attributes: [] }
          }
        ]
      });
    }
    if (
      Object.keys(query).map(item => {
        if (item === "search") return true;
        else return false;
      })[0]
    ) {
      return people.findAll({
        where: { name: { [Sequelize.Op.substring]: `${query.search}` } },
        limit: 10,
        offset: 1 * 10 - 10,
        attributes: ["id", "name", "height", "gender"],
        include: [
          {
            attributes: ["id", "name"],
            model: planets
            // as: "planets"
          },
          {
            attributes: ["id", "name"],
            model: species,
            as: "species"
          },
          {
            attributes: ["id", "title"],
            model: films,
            as: "films",
            through: { attributes: [] }
          },
          {
            attributes: ["id", "name"],
            model: vehicles,
            as: "vehicles",
            through: { attributes: [] }
          },
          {
            attributes: ["id", "name"],
            model: starships,
            as: "starships",
            through: { attributes: [] }
          }
        ]
      });
    } else {
      return people.findAll({
        where: { id: parameters },
        limit: 1,
        attributes: ["id", "name", "height", "gender"],
        include: [
          {
            attributes: ["id", "name"],
            model: planets
            // as: "planets"
          },
          {
            attributes: ["id", "name"],
            model: species,
            as: "species"
          },
          {
            attributes: ["id", "title"],
            model: films,
            as: "films",
            through: { attributes: [] }
          },
          {
            attributes: ["id", "name"],
            model: vehicles,
            as: "vehicles",
            through: { attributes: [] }
          },
          {
            attributes: ["id", "name"],
            model: starships,
            as: "starships",
            through: { attributes: [] }
          }
        ]
      });
    }
  },
  getPlanets: function(query) {
    const parameters = query[Object.keys(query)];
    if (
      Object.keys(query).map(item => {
        if (item === "page") return true;
        else return false;
      })[0]
    ) {
      return planets.findAndCountAll({
        distinct: true,
        limit: 10,
        offset: parameters * 10 - 10,
        attributes: ["id", "name", "climate", "population"],
        include: [
          {
            attributes: ["id", "name"],
            model: people
            // as: "people"
          },
          {
            attributes: ["id", "title"],
            model: films,
            as: "films",
            through: { attributes: [] }
          }
        ]
      });
    }
    if (
      Object.keys(query).map(item => {
        if (item === "search") return true;
        else return false;
      })[0]
    ) {
      return planets.findAll({
        where: { name: { [Sequelize.Op.substring]: `${query.search}` } },
        limit: 10,
        offset: 1 * 10 - 10,
        attributes: ["id", "name", "climate", "population"],
        include: [
          {
            attributes: ["id", "name"],
            model: people
            // as: "people"
          },
          {
            attributes: ["id", "title"],
            model: films,
            as: "films",
            through: { attributes: [] }
          }
        ]
      });
    } else {
      return planets.findAll({
        where: { id: parameters },
        limit: 1,
        attributes: ["id", "name", "climate", "population"],
        include: [
          {
            attributes: ["id", "name"],
            model: people
            // as: "people"
          },
          {
            attributes: ["id", "title"],
            model: films,
            as: "films",
            through: { attributes: [] }
          }
        ]
      });
    }
  },
  getStarships: function(query) {
    const parameters = query[Object.keys(query)];
    if (
      Object.keys(query).map(item => {
        if (item === "page") return true;
        else return false;
      })[0]
    ) {
      return starships.findAndCountAll({
        distinct: true,
        limit: 10,
        offset: parameters * 10 - 10,
        attributes: ["id", "name", "model", "length"],
        include: [
          {
            attributes: ["id", "name"],
            model: people,
            as: "people",
            through: { attributes: [] }
          },
          {
            attributes: ["id", "title"],
            model: films,
            as: "films",
            through: { attributes: [] }
          }
        ]
      });
    }
    if (
      Object.keys(query).map(item => {
        if (item === "search") return true;
        else return false;
      })[0]
    ) {
      return starships.findAll({
        where: { name: { [Sequelize.Op.substring]: `${query.search}` } },
        limit: 10,
        offset: 1 * 10 - 10,
        attributes: ["id", "name", "model", "length"],
        include: [
          {
            attributes: ["id", "name"],
            model: people,
            as: "people",
            through: { attributes: [] }
          },
          {
            attributes: ["id", "title"],
            model: films,
            as: "films",
            through: { attributes: [] }
          }
        ]
      });
    } else {
      return starships.findAll({
        where: { id: parameters },
        limit: 1,
        attributes: ["id", "name", "model", "length"],
        include: [
          {
            attributes: ["id", "name"],
            model: people,
            as: "people",
            through: { attributes: [] }
          },
          {
            attributes: ["id", "title"],
            model: films,
            as: "films",
            through: { attributes: [] }
          }
        ]
      });
    }
  },
  getFilms: function(query) {
    const parameters = query[Object.keys(query)];
    if (
      Object.keys(query).map(item => {
        if (item === "page") return true;
        else return false;
      })[0]
    ) {
      return films.findAndCountAll({
        distinct: true,
        limit: 10,
        offset: parameters * 10 - 10,
        attributes: ["id", "title", "director"],
        include: [
          {
            attributes: ["id", "name"],
            model: planets,
            as: "planets",
            through: { attributes: [] }
          },
          {
            attributes: ["id", "name"],
            model: species,
            as: "species",
            through: { attributes: [] }
          },
          {
            attributes: ["id", "name"],
            model: people,
            as: "people",
            through: { attributes: [] }
          },
          {
            attributes: ["id", "name"],
            model: vehicles,
            as: "vehicles",
            through: { attributes: [] }
          },
          {
            attributes: ["id", "name"],
            model: starships,
            as: "starships",
            through: { attributes: [] }
          }
        ]
      });
    }
    if (
      Object.keys(query).map(item => {
        if (item === "search") return true;
        else return false;
      })[0]
    ) {
      return films.findAll({
        where: { director: { [Sequelize.Op.substring]: `${query.search}` } },
        limit: 10,
        offset: 1 * 10 - 10,
        attributes: ["id", "title", "director"],
        include: [
          {
            attributes: ["id", "name"],
            model: planets,
            as: "planets",
            through: { attributes: [] }
          },
          {
            attributes: ["id", "name"],
            model: species,
            as: "species",
            through: { attributes: [] }
          },
          {
            attributes: ["id", "name"],
            model: people,
            as: "people",
            through: { attributes: [] }
          },
          {
            attributes: ["id", "name"],
            model: vehicles,
            as: "vehicles",
            through: { attributes: [] }
          },
          {
            attributes: ["id", "name"],
            model: starships,
            as: "starships",
            through: { attributes: [] }
          }
        ]
      });
    } else {
      return films.findAll({
        where: { id: parameters },
        limit: 1,
        attributes: ["id", "title", "director"],
        include: [
          {
            attributes: ["id", "name"],
            model: planets,
            as: "planets",
            through: { attributes: [] }
          },
          {
            attributes: ["id", "name"],
            model: species,
            as: "species",
            through: { attributes: [] }
          },
          {
            attributes: ["id", "name"],
            model: people,
            as: "people",
            through: { attributes: [] }
          },
          {
            attributes: ["id", "name"],
            model: vehicles,
            as: "vehicles",
            through: { attributes: [] }
          },
          {
            attributes: ["id", "name"],
            model: starships,
            as: "starships",
            through: { attributes: [] }
          }
        ]
      });
    }
  },
  getSpecies: function(query) {
    const parameters = query[Object.keys(query)];
    if (
      Object.keys(query).map(item => {
        if (item === "page") return true;
        else return false;
      })[0]
    ) {
      return species.findAndCountAll({
        distinct: true,
        limit: 10,
        offset: parameters * 10 - 10,
        attributes: ["id", "name", "classification", "language"],
        include: [
          {
            attributes: ["id", "title"],
            model: films,
            as: "films",
            through: { attributes: [] }
          },
          {
            attributes: ["id", "name"],
            model: people,
            as: "people"
          }
        ]
      });
    }
    if (
      Object.keys(query).map(item => {
        if (item === "search") return true;
        else return false;
      })[0]
    ) {
      return species.findAll({
        where: { name: { [Sequelize.Op.substring]: `${query.search}` } },
        limit: 10,
        offset: 1 * 10 - 10,
        attributes: ["id", "name", "classification", "language"],
        include: [
          {
            attributes: ["id", "title"],
            model: films,
            as: "films",
            through: { attributes: [] }
          },
          {
            attributes: ["id", "name"],
            model: people,
            as: "people"
          }
        ]
      });
    } else {
      return species.findAll({
        where: { id: parameters },
        limit: 1,
        attributes: ["id", "name", "classification", "language"],
        include: [
          {
            attributes: ["id", "title"],
            model: films,
            as: "films",
            through: { attributes: [] }
          },
          {
            attributes: ["id", "name"],
            model: people,
            as: "people"
          }
        ]
      });
    }
  },
  getVehicles: function(query) {
    const parameters = query[Object.keys(query)];
    if (
      Object.keys(query).map(item => {
        if (item === "page") return true;
        else return false;
      })[0]
    ) {
      return vehicles.findAndCountAll({
        distinct: true,
        limit: 10,
        offset: parameters * 10 - 10,
        attributes: ["id", "name", "model", "length"],
        include: [
          {
            attributes: ["id", "name"],
            model: people,
            as: "people",
            through: { attributes: [] }
          },
          {
            attributes: ["id", "title"],
            model: films,
            as: "films",
            through: { attributes: [] }
          }
        ]
      });
    }
    if (
      Object.keys(query).map(item => {
        if (item === "search") return true;
        else return false;
      })[0]
    ) {
      return vehicles.findAll({
        where: { name: { [Sequelize.Op.substring]: `${query.search}` } },
        limit: 10,
        offset: 1 * 10 - 10,
        attributes: ["id", "name", "model", "length"],
        include: [
          {
            attributes: ["id", "name"],
            model: people,
            as: "people",
            through: { attributes: [] }
          },
          {
            attributes: ["id", "title"],
            model: films,
            as: "films",
            through: { attributes: [] }
          }
        ]
      });
    } else {
      return vehicles.findAll({
        where: { id: parameters },
        limit: 1,
        attributes: ["id", "name", "model", "length"],
        include: [
          {
            attributes: ["id", "name"],
            model: people,
            as: "people",
            through: { attributes: [] }
          },
          {
            attributes: ["id", "title"],
            model: films,
            as: "films",
            through: { attributes: [] }
          }
        ]
      });
    }
  }
};

"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "films_species",
      [
        {
          filmsId: 1,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 1,
          speciesId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 1,
          speciesId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 1,
          speciesId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 1,
          speciesId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 2,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 2,
          speciesId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 2,
          speciesId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 3,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 3,
          speciesId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 3,
          speciesId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 4,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 4,
          speciesId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 4,
          speciesId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 4,
          speciesId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          speciesId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          speciesId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          speciesId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          speciesId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          speciesId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          speciesId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          speciesId: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 6,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 6,
          speciesId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 6,
          speciesId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 7,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("films_species");
  }
};

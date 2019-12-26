"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "films_planets",
      [
        {
          filmsId: 1,
          planetsId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 1,
          planetsId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 1,
          planetsId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 2,
          planetsId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 2,
          planetsId: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 2,
          planetsId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 2,
          planetsId: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 2,
          planetsId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 3,
          planetsId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 3,
          planetsId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 3,
          planetsId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 4,
          planetsId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 4,
          planetsId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 4,
          planetsId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 4,
          planetsId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 4,
          planetsId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          planetsId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          planetsId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          planetsId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          planetsId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          planetsId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 6,
          planetsId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 6,
          planetsId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 6,
          planetsId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 7,
          planetsId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("films_planets");
  }
};

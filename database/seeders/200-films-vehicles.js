"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "films_vehicles",
      [
        {
          filmsId: 1,
          vehiclesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 1,
          vehiclesId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 1,
          vehiclesId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 1,
          vehiclesId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 1,
          vehiclesId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 2,
          vehiclesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 2,
          vehiclesId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 2,
          vehiclesId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 3,
          vehiclesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 3,
          vehiclesId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 3,
          vehiclesId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 4,
          vehiclesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 4,
          vehiclesId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 4,
          vehiclesId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 4,
          vehiclesId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          vehiclesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          vehiclesId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          vehiclesId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          vehiclesId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          vehiclesId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          vehiclesId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          vehiclesId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          vehiclesId: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 6,
          vehiclesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 6,
          vehiclesId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 6,
          vehiclesId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 7,
          vehiclesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("films_vehicles");
  }
};

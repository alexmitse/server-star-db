"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "films_planets",
      [
        {
          filmsId: 1,
          planetsId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 1,
          planetsId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 2,
          planetsId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 4,
          planetsId: 2,
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

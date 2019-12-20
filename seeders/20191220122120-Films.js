"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "films",
      [
        {
          filmsId: 1,
          title: "A New Hope",
          director: "George Lucas",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 2,
          title: "Attack of the Clones",
          director: "George Lucas",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 3,
          title: "The Phantom Menace",
          director: "George Lucas",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 4,
          title: "Revenge of the Sith",
          director: "George Lucas",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          title: "Return of the Jedi",
          director: "Richard Marquand",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 6,
          title: "The Empire Strikes Back",
          director: "Irvin Kershner",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 7,
          title: "The Force Awakens",
          director: "J. J. Abrams",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("films");
  }
};

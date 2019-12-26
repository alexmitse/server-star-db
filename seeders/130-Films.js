"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "films",
      [
        {
          title: "A New Hope",
          director: "George Lucas",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Attack of the Clones",
          director: "George Lucas",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "The Phantom Menace",
          director: "George Lucas",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Revenge of the Sith",
          director: "George Lucas",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Return of the Jedi",
          director: "Richard Marquand",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "The Empire Strikes Back",
          director: "Irvin Kershner",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
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

"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "planets",
      [
        {
          planetsId: 1,
          name: "earth",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          planetsId: 2,
          name: "mars",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("planets");
  }
};

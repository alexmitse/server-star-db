"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "planets",
      [
        {
          name: "Tatooine",
          climate: "arid",
          population: "2000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Alderaan",
          climate: "temperate",
          population: "2000000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Yavin IV",
          climate: "temperate, tropical",
          population: "1000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hoth",
          climate: "frozen",
          population: "unknown",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Dagobah",
          climate: "murky",
          population: "unknown",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bespin",
          climate: "temperate",
          population: "6000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Endor",
          climate: "temperate",
          population: "30000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Naboo",
          climate: "temperate",
          population: "4500000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Coruscant",
          climate: "temperate",
          population: "1000000000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Kamino",
          climate: "temperate",
          population: "1000000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Geonosis",
          climate: "temperate, arid",
          population: "100000000000",
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

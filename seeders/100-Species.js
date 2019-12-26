"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "species",
      [
        {
          name: "Hutt",
          classification: "gastropod",
          language: "Huttese",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Yoda's species",
          classification: "mammal",
          language: "Galactic basic",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Trandoshan",
          classification: "reptile",
          language: "Dosh",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Mon Calamari",
          classification: "amphibian",
          language: "Mon Calamarian",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ewok",
          classification: "mammal",
          language: "Ewokese",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sullustan",
          classification: "mammal",
          language: "Sullutese",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Neimodian",
          classification: "unknown",
          language: "Neimoidia",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Gungan",
          classification: "amphibian",
          language: "Gungan basic",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Toydarian",
          classification: "mammal",
          language: "Toydarian",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Dug",
          classification: "mammal",
          language: "Dugese",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("species");
  }
};

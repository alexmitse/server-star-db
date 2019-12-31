"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "species",
      [
        {
          name: "Human",
          classification: "mammal",
          language: "Galactic Basic",
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
        },
        {
          name: "Twi'lek",
          classification: "mammals",
          language: "Twi'leki",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Aleena",
          classification: "reptile",
          language: "Aleena",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Vulptereen",
          classification: "unknown",
          language: "vulpterish",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Xexto",
          classification: "unknown",
          language: "Xextese",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Toong",
          classification: "unknown",
          language: "Tundan",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cerean",
          classification: "mammal",
          language: "Cerean",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nautolan",
          classification: "amphibian",
          language: "Nautila",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Zabrak",
          classification: "mammal",
          language: "Zabraki",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tholothian",
          classification: "mammal",
          language: "unknown",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Iktotchi",
          classification: "unknown",
          language: "Iktotchese",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Quermian",
          classification: "mammal",
          language: "Quermian",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Kel Dor",
          classification: "unknown",
          language: "Kel Dor",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Chagrian",
          classification: "amphibian",
          language: "Chagria",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Geonosian",
          classification: "insectoid",
          language: "Geonosian",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Mirialan",
          classification: "mammal",
          language: "Mirialan",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Clawdite",
          classification: "reptilian",
          language: "Clawdite",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Besalisk",
          classification: "amphibian",
          language: "besalisk",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Kaminoan",
          classification: "amphibian",
          language: "Kaminoan",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Skakoan",
          classification: "mammal",
          language: "Skakoan",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Muun",
          classification: "mammal",
          language: "Muun",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Togruta",
          classification: "mammal",
          language: "Togruti",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Kaleesh",
          classification: "reptile",
          language: "Kaleesh",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Pau'an",
          classification: "mammal",
          language: "Utapese",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Wookiee",
          classification: "mammal",
          language: "Shyriiwook",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Droid",
          classification: "artificial",
          language: "n/a",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hutt",
          classification: "mammal",
          language: "Galactic Basic",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Rodian",
          classification: "gastropod",
          language: "Huttese",
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

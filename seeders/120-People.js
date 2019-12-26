"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "people",
      [
        {
          name: "Luke Skywalker",
          height: "172",
          gender: "male",
          planetsId: 1,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "C-3PO",
          height: "167",
          gender: "n/a",
          planetsId: 1,
          speciesId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "R2-D2",
          height: "96",
          gender: "n/a",
          planetsId: 8,
          speciesId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Darth Vader",
          height: "202",
          gender: "male",
          planetsId: 1,
          speciesId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Leia Organa",
          height: "150",
          gender: "female",
          planetsId: 2,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Owen Lars",
          height: "178",
          gender: "male",
          planetsId: 1,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Beru Whitesun lars",
          height: "165",
          gender: "female",
          planetsId: 1,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "R5-D4",
          height: "97",
          gender: "n/a",
          planetsId: 1,
          speciesId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Biggs Darklighter",
          height: "183",
          gender: "male",
          planetsId: 1,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Obi-Wan Kenobi",
          height: "182",
          gender: "male",
          planetsId: 2,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("people");
  }
};

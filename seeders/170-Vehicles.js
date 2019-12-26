"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "vehicles",
      [
        {
          name: "Sand Crawler",
          model: "Digger Crawler",
          length: "36.8",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "T-16 skyhopper",
          model: "T-16 skyhopper",
          length: "10.4",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "X-34 landspeeder",
          model: "X-34 landspeeder",
          length: "3.4",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "TIE/LN starfighter",
          model: "Twin Ion Engine/Ln Starfighter",
          length: "6.4",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Snowspeeder",
          model: "t-47 airspeeder",
          length: "4.5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "TIE bomber",
          model: "TIE/sa bomber",
          length: "7.8",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "AT-AT",
          model: "All Terrain Armored Transport",
          length: "20",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "AT-ST",
          model: "All Terrain Scout Transport",
          length: "2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Storm IV Twin-Pod cloud car",
          model: "Storm IV Twin-Pod",
          length: "7",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sail barge",
          model: "Modified Luxury Sail Barge",
          length: "30",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("vehicles");
  }
};

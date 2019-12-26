"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "starships",
      [
        {
          name: "Executor",
          model: "Executor-class star dreadnought",
          length: "19000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sentinel-class landing craft",
          model: "Sentinel-class landing craft",
          length: "38",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Death Star",
          model: "DS-1 Orbital Battle Station",
          length: "120000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Millennium Falcon",
          model: "YT-1300 light freighter",
          length: "34.37",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Y-wing",
          model: "BTL Y-wing",
          length: "14",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "X-wing",
          model: "T-65 X-wing",
          length: "12.5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "TIE Advanced x1",
          model: "Twin Ion Engine Advanced x1",
          length: "9.2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Slave 1",
          model: "Firespray-31-class patrol and attack",
          length: "21.5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Imperial shuttle",
          model: "Lambda-class T-4a shuttle",
          length: "20",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "EF76 Nebulon-B escort frigate",
          model: "EF76 Nebulon-B escort frigate",
          length: "300",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("starships");
  }
};

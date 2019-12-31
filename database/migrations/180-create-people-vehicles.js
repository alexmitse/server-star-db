"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("people_vehicles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      peopleId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "people",
          key: "id",
          as: "peopleId"
        }
      },
      vehiclesId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "vehicles",
          key: "id",
          as: "vehiclesId"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("people_vehicles");
  }
};

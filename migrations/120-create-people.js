"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("people", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      height: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      planetsId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "planets",
          key: "id",
          as: "planetsId"
        }
      },
      speciesId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "species",
          key: "id",
          as: "speciesId"
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
    return queryInterface.dropTable("people");
  }
};

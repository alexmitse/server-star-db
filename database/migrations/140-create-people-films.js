"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("people_films", {
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
      filmsId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "films",
          key: "id",
          as: "filmsId"
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
    return queryInterface.dropTable("people_films");
  }
};

"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("films_species", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable("films_species");
  }
};

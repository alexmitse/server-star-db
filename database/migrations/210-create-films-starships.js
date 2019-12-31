"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("films_starships", {
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
      starshipsId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "starships",
          key: "id",
          as: "starshipsId"
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
    return queryInterface.dropTable("films_starships");
  }
};

"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("people_starships", {
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
    return queryInterface.dropTable("people_starships");
  }
};

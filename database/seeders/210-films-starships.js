"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "films_starships",
      [
        {
          filmsId: 1,
          starshipsId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 1,
          starshipsId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 1,
          starshipsId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 1,
          starshipsId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 1,
          starshipsId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 2,
          starshipsId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 2,
          starshipsId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 2,
          starshipsId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 3,
          starshipsId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 3,
          starshipsId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 3,
          starshipsId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 4,
          starshipsId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 4,
          starshipsId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 4,
          starshipsId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 4,
          starshipsId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          starshipsId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          starshipsId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          starshipsId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          starshipsId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          starshipsId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          starshipsId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          starshipsId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 5,
          starshipsId: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 6,
          starshipsId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 6,
          starshipsId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 6,
          starshipsId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          filmsId: 7,
          starshipsId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("films_starships");
  }
};

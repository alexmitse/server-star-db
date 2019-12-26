"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "people_starships",
      [
        {
          starshipsId: 1,
          peopleId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          starshipsId: 1,
          peopleId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          starshipsId: 1,
          peopleId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          starshipsId: 1,
          peopleId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          starshipsId: 1,
          peopleId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          starshipsId: 2,
          peopleId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          starshipsId: 2,
          peopleId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          starshipsId: 2,
          peopleId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          starshipsId: 3,
          peopleId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          starshipsId: 3,
          peopleId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          starshipsId: 3,
          peopleId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          starshipsId: 4,
          peopleId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          starshipsId: 4,
          peopleId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          starshipsId: 4,
          peopleId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          starshipsId: 4,
          peopleId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          starshipsId: 5,
          peopleId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          starshipsId: 5,
          peopleId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          starshipsId: 5,
          peopleId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          starshipsId: 5,
          peopleId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          starshipsId: 5,
          peopleId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          starshipsId: 5,
          peopleId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          starshipsId: 5,
          peopleId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          starshipsId: 5,
          peopleId: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          starshipsId: 6,
          peopleId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          starshipsId: 6,
          peopleId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          starshipsId: 6,
          peopleId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          starshipsId: 7,
          peopleId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("people_starships");
  }
};

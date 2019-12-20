"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "people",
      [
        {
          name: "John",
          planetsId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John2",
          planetsId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
        // {
        //   name: "Luke Skywalker",
        //   height: "172",
        //   gender: "male",
        //   planetsId: 1,
        //   filmsId: [2, 6, 3, 1, 7],
        //   species: ["https://swapi.co/api/species/1/"],
        //   vehicles: [
        //     "https://swapi.co/api/vehicles/14/",
        //     "https://swapi.co/api/vehicles/30/"
        //   ],
        //   starships: [
        //     "https://swapi.co/api/starships/12/",
        //     "https://swapi.co/api/starships/22/"
        //   ],
        //   createdAt: new Date(),
        //   edited: "2014-12-20T21:17:56.891000Z",
        //   url: "https://swapi.co/api/people/1/"
        // },
        // {
        //   name: "C-3PO",
        //   height: "167",
        //   gender: "n/a",
        //   planetsId: 1,
        //   filmsId: [2, 5, 4, 6, 3, 1],
        //   species: ["https://swapi.co/api/species/2/"],
        //   vehicles: [],
        //   starships: [],
        //   createdAt: new Date(),
        //   edited: "2014-12-20T21:17:50.309000Z",
        //   url: "https://swapi.co/api/people/2/"
        // },
        // {
        //   name: "R2-D2",
        //   height: "96",
        //   gender: "n/a",
        //   planetsId: 8,
        //   filmsId: [2, 5, 4, 6, 3, 1, 7],
        //   species: ["https://swapi.co/api/species/2/"],
        //   vehicles: [],
        //   starships: [],
        //   createdAt: new Date(),
        //   edited: "2014-12-20T21:17:50.311000Z",
        //   url: "https://swapi.co/api/people/3/"
        // },
        // {
        //   name: "Darth Vader",
        //   height: "202",
        //   gender: "male",
        //   planetsId: 1,
        //   filmsId: [2, 6, 3, 1],
        //   species: ["https://swapi.co/api/species/1/"],
        //   vehicles: [],
        //   starships: ["https://swapi.co/api/starships/13/"],
        //   createdAt: new Date(),
        //   edited: "2014-12-20T21:17:50.313000Z",
        //   url: "https://swapi.co/api/people/4/"
        // },
        // {
        //   name: "Leia Organa",
        //   height: "150",
        //   gender: "female",
        //   planetsId: 2,
        //   filmsId: [2, 6, 3, 1, 7],
        //   species: ["https://swapi.co/api/species/1/"],
        //   vehicles: ["https://swapi.co/api/vehicles/30/"],
        //   starships: [],
        //   createdAt: new Date(),
        //   edited: "2014-12-20T21:17:50.315000Z",
        //   url: "https://swapi.co/api/people/5/"
        // },
        // {
        //   name: "Owen Lars",
        //   height: "178",
        //   gender: "male",
        //   planetsId: 1,
        //   filmsId: [5, 6, 1],
        //   species: ["https://swapi.co/api/species/1/"],
        //   vehicles: [],
        //   starships: [],
        //   createdAt: new Date(),
        //   edited: "2014-12-20T21:17:50.317000Z",
        //   url: "https://swapi.co/api/people/6/"
        // },
        // {
        //   name: "Beru Whitesun lars",
        //   height: "165",
        //   gender: "female",
        //   planetsId: 1,
        //   filmsId: [5, 6, 1],
        //   species: ["https://swapi.co/api/species/1/"],
        //   vehicles: [],
        //   starships: [],
        //   createdAt: new Date(),
        //   edited: "2014-12-20T21:17:50.319000Z",
        //   url: "https://swapi.co/api/people/7/"
        // },
        // {
        //   name: "R5-D4",
        //   height: "97",
        //   gender: "n/a",
        //   planetsId: 1,
        //   filmsId: [1],
        //   species: ["https://swapi.co/api/species/2/"],
        //   vehicles: [],
        //   starships: [],
        //   createdAt: new Date(),
        //   edited: "2014-12-20T21:17:50.321000Z",
        //   url: "https://swapi.co/api/people/8/"
        // },
        // {
        //   name: "Biggs Darklighter",
        //   height: "183",
        //   gender: "male",
        //   planetsId: 1,
        //   filmsId: [1],
        //   species: ["https://swapi.co/api/species/1/"],
        //   vehicles: [],
        //   starships: ["https://swapi.co/api/starships/12/"],
        //   createdAt: new Date(),
        //   edited: "2014-12-20T21:17:50.323000Z",
        //   url: "https://swapi.co/api/people/9/"
        // },
        // {
        //   name: "Obi-Wan Kenobi",
        //   height: "182",
        //   gender: "male",
        //   planetsId: 2",
        //   filmsId: [2, 5, 4, 6, 3, 1],
        //   species: ["https://swapi.co/api/species/1/"],
        //   vehicles: ["https://swapi.co/api/vehicles/38/"],
        //   starships: [
        //     "https://swapi.co/api/starships/48/",
        //     "https://swapi.co/api/starships/59/",
        //     "https://swapi.co/api/starships/64/",
        //     "https://swapi.co/api/starships/65/",
        //     "https://swapi.co/api/starships/74/"
        //   ],
        //   createdAt: new Date(),
        //   edited: "2014-12-20T21:17:50.325000Z",
        //   url: "https://swapi.co/api/people/10/"
        // }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("people");
  }
};

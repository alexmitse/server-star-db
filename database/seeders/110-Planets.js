"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "planets",
      [
        {
          name: "Tatooine",
          climate: "arid",
          population: "2000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Alderaan",
          climate: "temperate",
          population: "2000000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Yavin IV",
          climate: "temperate, tropical",
          population: "1000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hoth",
          climate: "frozen",
          population: "unknown",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Dagobah",
          climate: "murky",
          population: "unknown",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bespin",
          climate: "temperate",
          population: "6000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Endor",
          climate: "temperate",
          population: "30000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Naboo",
          climate: "temperate",
          population: "4500000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Coruscant",
          climate: "temperate",
          population: "1000000000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Kamino",
          climate: "temperate",
          population: "1000000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Geonosis",
          climate: "temperate, arid",
          population: "100000000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Utapau",
          climate: "temperate, arid, windy",
          population: "95000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Mustafar",
          climate: "hot",
          population: "20000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Kashyyyk",
          climate: "tropical",
          population: "45000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Polis Massa",
          climate: "artificial temperate ",
          population: "1000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Mygeeto",
          climate: "frigid",
          population: "19000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Felucia",
          climate: "hot, humid",
          population: "8500000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cato Neimoidia",
          climate: "temperate, moist",
          population: "10000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Saleucami",
          climate: "hot",
          population: "1400000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Stewjon",
          climate: "temperate",
          population: "unknown",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Eriadu",
          climate: "polluted",
          population: "22000000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Corellia",
          climate: "temperate",
          population: "3000000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Rodia",
          climate: "hot",
          population: "1300000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nal Hutta",
          climate: "temperate",
          population: "7000000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Dantooine",
          climate: "temperate",
          population: "1000",

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bestine IV",
          climate: "temperate",
          population: "62000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ord Mantell",
          climate: "temperate",
          population: "4000000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "unknown",
          climate: "unknown",
          population: "unknown",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Trandosha",
          climate: "arid",
          population: "42000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Socorro",
          climate: "arid",
          population: "300000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Mon Cala",
          climate: "temperate",
          population: "27000000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Chandrila",
          climate: "temperate",
          population: "1200000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sullust",
          climate: "superheated",
          population: "18500000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Toydaria",
          climate: "temperate",
          population: "11000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Malastare",
          climate: "arid, temperate, tropical",
          population: "2000000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Dathomir",
          climate: "temperate",
          population: "5200",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ryloth",
          climate: "temperate, arid, subartic",
          population: "1500000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Aleen Minor",
          climate: "unknown",
          population: "unknown",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Vulpter",
          climate: "temperate, artic",
          population: "421000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Troiken",
          climate: "unknown",
          population: "unknown",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tund",
          climate: "unknown",
          population: "0",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: "Haruun Kal",
          climate: "temperate",
          population: "705300",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cerea",
          climate: "temperate",
          population: "450000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Glee Anselm",
          climate: "tropical, temperate",
          population: "500000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Iridonia",
          climate: "unknown",
          population: "unknown",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tholoth",
          climate: "unknown",
          population: "unknown",

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Iktotch",
          climate: "arid, rocky, windy",
          population: "unknown",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Quermia",
          climate: "unknown",
          population: "unknown",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Dorin",
          climate: "temperate",
          population: "unknown",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Champala",
          climate: "temperate",
          population: "3500000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Mirial",
          climate: "unknown",
          population: "unknown",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Serenno",
          climate: "unknown",
          population: "unknown",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Concord Dawn",
          climate: "unknown",
          population: "unknown",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Zolan",
          climate: "unknown",
          population: "unknown",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ojom",
          climate: "frigid",
          population: "500000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Skako",
          climate: "temperate",
          population: "500000000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Muunilinst",
          climate: "temperate",
          population: "5000000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Shili",
          climate: "temperate",
          population: "unknown",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Kalee",
          climate: "arid, temperate, tropical",
          population: "4000000000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Umbara",
          climate: "unknown",
          population: "unknown",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("planets");
  }
};

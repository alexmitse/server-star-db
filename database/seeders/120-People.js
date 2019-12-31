"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "people",
      [
        {
          name: "Luke Skywalker",
          height: "172",
          gender: "male",
          planetsId: 1,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "C-3PO",
          height: "167",
          gender: "n/a",
          planetsId: 1,
          speciesId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "R2-D2",
          height: "96",
          gender: "n/a",
          planetsId: 8,
          speciesId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Darth Vader",
          height: "202",
          gender: "male",
          planetsId: 1,
          speciesId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Leia Organa",
          height: "150",
          gender: "female",
          planetsId: 2,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Owen Lars",
          height: "178",
          gender: "male",
          planetsId: 1,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Beru Whitesun lars",
          height: "165",
          gender: "female",
          planetsId: 1,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "R5-D4",
          height: "97",
          gender: "n/a",
          planetsId: 1,
          speciesId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Biggs Darklighter",
          height: "183",
          gender: "male",
          planetsId: 1,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Obi-Wan Kenobi",
          height: "182",
          gender: "male",
          planetsId: 2,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Anakin Skywalker",
          height: "188",
          gender: "male",
          planetsId: 1,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Wilhuff Tarkin",
          height: "180",
          gender: "male",
          planetsId: 21,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Chewbacca",
          height: "228",
          gender: "male",
          planetsId: 14,
          speciesId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Han Solo",
          height: "180",
          gender: "male",
          planetsId: 22,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Greedo",
          height: "173",
          gender: "male",
          planetsId: 23,
          speciesId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jabba Desilijic Tiure",
          height: "175",
          gender: "hermaphrodite",
          planetsId: 1,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Beru Whitesun lars",
          height: "165",
          gender: "female",
          planetsId: 24,
          speciesId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Wedge Antilles",
          height: "170",
          gender: "male",
          planetsId: 22,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jek Tono Porkins",
          height: "180",
          gender: "male",
          planetsId: 26,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Yoda",
          height: "66",
          gender: "male",
          planetsId: 28,
          speciesId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Boba Fett",
          height: "183",
          gender: "male",
          planetsId: 10,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "IG-88",
          height: "200",
          gender: "n/a",
          planetsId: 28,
          speciesId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bossk",
          height: "190",
          gender: "male",
          planetsId: 29,
          speciesId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lando Calrissian",
          height: "177",
          gender: "male",
          planetsId: 30,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lobot",
          height: "175",
          gender: "male",
          planetsId: 6,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ackbar",
          height: "180",
          gender: "male",
          planetsId: 31,
          speciesId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Mon Mothma",
          height: "150",
          gender: "female",
          planetsId: 32,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Arvel Crynyd",
          height: "unknown",
          gender: "male",
          planetsId: 28,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Wicket Systri Warrick",
          height: "88",
          gender: "male",
          planetsId: 7,
          speciesId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nien Nunb",
          height: "160",
          gender: "male",
          planetsId: 33,
          speciesId: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Qui-Gon Jinn",
          height: "193",
          gender: "male",
          planetsId: 28,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nute Gunray",
          height: "191",
          gender: "male",
          planetsId: 18,
          speciesId: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Finis Valorum",
          height: "170",
          gender: "male",
          planetsId: 9,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jar Jar Binks",
          height: "196",
          gender: "male",
          planetsId: 8,
          speciesId: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Roos Tarpals",
          height: "224",
          gender: "male",
          planetsId: 8,
          speciesId: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Rugor Nass",
          height: "206",
          gender: "male",
          planetsId: 8,
          speciesId: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ric Olié",
          height: "183",
          gender: "male",
          planetsId: 8,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Watto",
          height: "137",
          gender: "male",
          planetsId: 34,
          speciesId: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sebulba",
          height: "112",
          gender: "male",
          planetsId: 35,
          speciesId: 14,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Quarsh Panaka",
          height: "183",
          gender: "male",
          planetsId: 8,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Shmi Skywalker",
          height: "163",
          gender: "male",
          planetsId: 1,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Darth Maul",
          height: "175",
          gender: "male",
          planetsId: 36,
          speciesId: 22,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bib Fortuna",
          height: "180",
          gender: "male",
          planetsId: 37,
          speciesId: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ayla Secura",
          height: "178",
          gender: "female",
          planetsId: 37,
          speciesId: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Dud Bolt",
          height: "94",
          gender: "male",
          planetsId: 39,
          speciesId: 17,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Gasgano",
          height: "122",
          gender: "male",
          planetsId: 40,
          speciesId: 18,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ben Quadinaros",
          height: "163",
          gender: "male",
          planetsId: 41,
          speciesId: 19,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Mace Windu",
          height: "188",
          gender: "male",
          planetsId: 42,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ki-Adi-Mundi",
          height: "198",
          gender: "male",
          planetsId: 43,
          speciesId: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Kit Fisto",
          height: "196",
          gender: "male",
          planetsId: 44,
          speciesId: 21,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Eeth Koth",
          height: "171",
          gender: "male",
          planetsId: 45,
          speciesId: 22,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Adi Gallia",
          height: "184",
          gender: "female",
          planetsId: 9,
          speciesId: 23,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Saesee Tiin",
          height: "188",
          gender: "male",
          planetsId: 47,
          speciesId: 24,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Yarael Poof",
          height: "264",
          gender: "male",
          planetsId: 48,
          speciesId: 25,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Plo Koon",
          height: "188",
          gender: "male",
          planetsId: 49,
          speciesId: 26,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Mas Amedda",
          height: "196",
          gender: "male",
          planetsId: 50,
          speciesId: 27,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Gregar Typho",
          height: "185",
          gender: "male",
          planetsId: 8,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cordé",
          height: "157",
          gender: "female",
          planetsId: 8,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cliegg Lars",
          height: "183",
          gender: "male",
          planetsId: 1,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Poggle the Lesser",
          height: "183",
          gender: "male",
          planetsId: 11,
          speciesId: 28,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Luminara Unduli",
          height: "170",
          gender: "female",
          planetsId: 51,
          speciesId: 29,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Barriss Offee",
          height: "166",
          gender: "female",
          planetsId: 51,
          speciesId: 29,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Dormé",
          height: "165",
          gender: "female",
          planetsId: 8,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Dooku",
          height: "193",
          gender: "male",
          planetsId: 52,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bail Prestor Organa",
          height: "191",
          gender: "male",
          planetsId: 2,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jango Fett",
          height: "183",
          gender: "male",
          planetsId: 53,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Zam Wesell",
          height: "168",
          gender: "female",
          planetsId: 54,
          speciesId: 30,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Dexter Jettster",
          height: "198",
          gender: "male",
          planetsId: 55,
          speciesId: 31,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lama Su",
          height: "229",
          gender: "male",
          planetsId: 10,
          speciesId: 32,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Taun We",
          height: "213",
          gender: "female",
          planetsId: 10,
          speciesId: 32,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jocasta Nu",
          height: "167",
          gender: "female",
          planetsId: 9,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ratts Tyerell",
          height: "79",
          gender: "male",
          planetsId: 3,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "R4-P17",
          height: "96",
          gender: "female",
          planetsId: 2,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Wat Tambor",
          height: "193",
          gender: "male",
          planetsId: 5,
          speciesId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "San Hill",
          height: "191",
          gender: "male",
          planetsId: 5,
          speciesId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Shaak Ti",
          height: "178",
          gender: "female",
          planetsId: 5,
          speciesId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Grievous",
          height: "216",
          gender: "male",
          planetsId: 5,
          speciesId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tarfful",
          height: "234",
          gender: "male",
          planetsId: 1,
          speciesId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Raymus Antilles",
          height: "188",
          gender: "male",
          planetsId: 2,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sly Moore",
          height: "178",
          gender: "female",
          planetsId: 6,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tion Medon",
          height: "206",
          gender: "male",
          planetsId: 12,
          speciesId: 37,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Finn",
          height: "unknown",
          gender: "male",
          planetsId: 28,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Rey",
          height: "unknown",
          gender: "female",
          planetsId: 28,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Poe Dameron",
          height: "unknown",
          gender: "male",
          planetsId: 28,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "BB8",
          height: "unknown",
          gender: "none",
          planetsId: 28,
          speciesId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Captain Phasma",
          height: "unknown",
          gender: "female",
          planetsId: 28,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Padmé Amidala",
          height: "165",
          gender: "female",
          planetsId: 8,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("people");
  }
};

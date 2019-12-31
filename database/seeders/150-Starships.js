"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "starships",
      [
        {
          name: "Executor",
          model: "Executor-class star dreadnought",
          length: "19000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sentinel-class landing craft",
          model: "Sentinel-class landing craft",
          length: "38",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Death Star",
          model: "DS-1 Orbital Battle Station",
          length: "120000",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Millennium Falcon",
          model: "YT-1300 light freighter",
          length: "34.37",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Y-wing",
          model: "BTL Y-wing",
          length: "14",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "X-wing",
          model: "T-65 X-wing",
          length: "12.5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "TIE Advanced x1",
          model: "Twin Ion Engine Advanced x1",
          length: "9.2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Slave 1",
          model: "Firespray-31-class patrol and attack",
          length: "21.5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Imperial shuttle",
          model: "Lambda-class T-4a shuttle",
          length: "20",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "EF76 Nebulon-B escort frigate",
          model: "EF76 Nebulon-B escort frigate",
          length: "300",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Calamari Cruiser",
          model: "MC80 Liberty type Star Cruiser",
          length: "1200",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "A-wing",
          model: "RZ-1 A-wing Interceptor",
          length: "9.6",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "B-wing",
          model: "A/SF-01 B-wing starfighter",
          length: "16.9",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Republic Cruiser",
          model: "Consular-class cruiser",
          length: "115",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Naboo fighter",
          model: "N-1 starfighter",
          length: "11",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Naboo Royal Starship",
          model: "J-type 327 Nubian royal starship",
          length: "76",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Scimitar",
          model: "Star Courier",
          length: "26.5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "J-type diplomatic barge",
          model: "J-type diplomatic barge",
          length: "39",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "AA-9 Coruscant freighter",
          model: "Botajef AA-9 Freighter-Liner",
          length: "390",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jedi starfighter",
          model: "Delta-7 Aethersprite-class interceptor",
          length: "8",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "H-type Nubian yacht",
          model: "H-type Nubian yacht",
          length: "47.9",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Star Destroyer",
          model: "Imperial I-class Star Destroyer",
          length: "1,600",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Trade Federation cruiser",
          model: "Providence-class carrier/destroyer",
          length: "1088",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Theta-class T-2c shuttle",
          model: "Theta-class T-2c shuttle",
          length: "18.5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "T-70 X-wing fighter",
          model: "T-70 X-wing fighter",
          length: "unknown",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Rebel transport",
          model: "GR-75 medium transport",
          length: "90",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Droid control ship",
          model: "Lucrehulk-class Droid Control Ship",
          length: "3170",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Republic Assault ship",
          model: "Acclamator I-class assault ship",
          length: "752",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Solar Sailer",
          model: "Punworcca 116-class interstellar sloop",
          length: "15.2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Republic attack cruiser",
          model: "Senator-class Star Destroyer",
          length: "1137",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Naboo star skiff",
          model: "J-type star skiff",
          length: "29.2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jedi Interceptor",
          model: "Eta-2 Actis-class light interceptor",
          length: "5.47",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "arc-170",
          model: "Aggressive Reconnaissance-170 starfighte",
          length: "14.5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Belbullab-22 starfighter",
          model: "Belbullab-22 starfighter",
          length: "6.71",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "V-wing",
          model: "Alpha-3 Nimbus-class V-wing starfighter",
          length: "7.9",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "CR90 corvette",
          model: "CR90 corvette",
          length: "150",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Banking clan frigate",
          model: "Munificent-class star frigate",
          length: "825",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("starships");
  }
};

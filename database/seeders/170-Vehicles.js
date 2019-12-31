"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "vehicles",
      [
        {
          name: "Sand Crawler",
          model: "Digger Crawler",
          length: "36.8",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "T-16 skyhopper",
          model: "T-16 skyhopper",
          length: "10.4",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "X-34 landspeeder",
          model: "X-34 landspeeder",
          length: "3.4",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "TIE/LN starfighter",
          model: "Twin Ion Engine/Ln Starfighter",
          length: "6.4",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Snowspeeder",
          model: "t-47 airspeeder",
          length: "4.5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "TIE bomber",
          model: "TIE/sa bomber",
          length: "7.8",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "AT-AT",
          model: "All Terrain Armored Transport",
          length: "20",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "AT-ST",
          model: "All Terrain Scout Transport",
          length: "2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Storm IV Twin-Pod cloud car",
          model: "Storm IV Twin-Pod",
          length: "7",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sail barge",
          model: "Modified Luxury Sail Barge",
          length: "30",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bantha-II cargo skiff",
          model: "Bantha-II",
          length: "9.5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "TIE/IN interceptor",
          model: "Twin Ion Engine Interceptor",
          length: "9.6",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Imperial Speeder Bike",
          model: "74-Z speeder bike",
          length: "3",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Vulture Droid",
          model: "Vulture-class droid starfighter",
          length: "3.5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Multi-Troop Transport",
          model: "Multi-Troop Transport",
          length: "31",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Armored Assault Tank",
          model: "Armoured Assault Tank",
          length: "9.75",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Single Trooper Aerial Platform",
          model: "Single Trooper Aerial Platform",
          length: "2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "C-9979 landing craft",
          model: "C-9979 landing craft",
          length: "210",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tribubble bongo",
          model: "Tribubble bongo",
          length: "15",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sith speeder",
          model: "FC-20 speeder bike",
          length: "1.5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Zephyr-G swoop bike",
          model: "Zephyr-G swoop bike",
          length: "3.68",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Koro-2 Exodrive airspeeder",
          model: "Koro-2 Exodrive airspeeder",
          length: "6.6",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "XJ-6 airspeeder",
          model: "XJ-6 airspeeder",
          length: "6.23",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "LAAT/i",
          model: "Low Altitude Assault Transport/infrantry",
          length: "17.4",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "LAAT/c",
          model: "Low Altitude Assault Transport/carrier",
          length: "28.82",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tsmeu-6 personal wheel bike",
          model: "Tsmeu-6 personal wheel bike",
          length: "3.5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Emergency Firespeeder",
          model: "Fire suppression speeder",
          length: "unknown",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Droid tri-fighter",
          model: "tri-fighter",
          length: "5.4",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Oevvaor jet catamaran",
          model: "Oevvaor jet catamaran",
          length: "15.1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Raddaugh Gnasp fluttercraft",
          model: "Raddaugh Gnasp fluttercraft",
          length: "7",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Clone turbo tank",
          model: "HAVw A6 Juggernaut",
          length: "49.4",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Corporate Alliance tank droid",
          model: "NR-N99 Persuader-class droid enforcer",
          length: "10.96",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Droid gunship",
          model: "HMP droid gunship",
          length: "12.3",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "AT-RT",
          model: "All Terrain Recon Transport",
          length: "3.2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "AT-TE",
          model: "All Terrain Tactical Enforcer",
          length: "13.2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "SPHA",
          model: "Self-Propelled Heavy Artillery",
          length: "140",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Flitknot speeder",
          model: "Flitknot speeder",
          length: "2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Neimoidian shuttle",
          model: "Sheathipede-class transport shuttle",
          length: "20",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Geonosian starfighter",
          model: "Nantex-class territorial defense",
          length: "9.8",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("vehicles");
  }
};

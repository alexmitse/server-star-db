"use strict";
module.exports = (sequelize, DataTypes) => {
  const people_starships = sequelize.define(
    "people_starships",
    {
      peopleId: DataTypes.INTEGER,
      starshipsId: DataTypes.INTEGER
    },
    {}
  );
  people_starships.associate = function(models) {
    // associations can be defined here
  };
  return people_starships;
};

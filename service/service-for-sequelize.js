require("dotenv").config();
const axios = require("axios");
// const Sequelize = require("sequelize");

const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: true
  }
});
const authenticateDB = () => {};
sequelize.close();
module.exports = authenticateDB;

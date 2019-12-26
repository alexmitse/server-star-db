require("dotenv").config();

const { Sequelize } = require("sequelize");

module.exports = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: true
  },
  pool: {
    max: 10,
    min: 0,
    acquire: 3000,
    idle: 10000
  }
});

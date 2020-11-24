const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_SCHEMA,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: "postgres",
    host: "localhost",
  }
);

module.exports = sequelize;

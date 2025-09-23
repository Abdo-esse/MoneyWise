require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST || 'db',
    dialect: process.env.DB_SGBD || 'mysql',
    port: process.env.DB_PORT || 3306,
    logging: false,
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST || 'db',
    dialect: process.env.DB_SGBD || 'mysql',
    port: process.env.DB_PORT || 3306,
    logging: false,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST || 'db',
    dialect: process.env.DB_SGBD || 'mysql',
    port: process.env.DB_PORT || 3306,
    logging: false,
  },
};

const mysql = require("mysql");

require("dotenv").config();

const pool = mysql.createPool({
  connectionLimit: 10,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.HOST,
});

const queryProcessor = (query) => {
  return new Promise((resolve, reject) => {
    pool.query(query, (error, eleme) => {
      if (error) {
        return reject(error);
      }
      console.log(eleme);
      return resolve(eleme);
    });
  });
};

module.exports = queryProcessor;

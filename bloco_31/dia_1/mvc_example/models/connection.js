const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Adidas05!',
  database: 'mvc_example'});

module.exports = connection;

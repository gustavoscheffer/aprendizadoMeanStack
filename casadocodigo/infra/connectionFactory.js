//connectionFactory.js

//imports
var mysql = require('mysql');

function createDBConnection() {

  return mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "G@l1l3u2017",
    database: "casadocodigo_nodejs",

  });
};

//wrapper
module.exports = function(){
  return createDBConnection;
};

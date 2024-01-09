const mysql = require("mysql");
const config = require("config");

const conexao = mysql.createConnection({
    host: "localhost",
    port:3306,
    user:"root",
    password: "sousa007",
    database: "dbApiShopSport"
});

module.exports= conexao;
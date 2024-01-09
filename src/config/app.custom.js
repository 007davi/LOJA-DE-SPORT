const router = require("../routes");
const conexao = require("../services/db");
const tabelas = require("../services/table");

module.exports = (app, express) => {
  router(app, express);
  tabelas.init(conexao);
};
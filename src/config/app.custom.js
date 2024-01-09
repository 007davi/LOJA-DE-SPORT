const router = require("../routers/routes");
const conexao = require("../services/db");
const table = require("../services/table");


module.exports = (app, express) => {
  router(app, express);
  table.init(conexao);
};
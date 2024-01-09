const express = require("express");
const app = express();
const config= require('./src/config/config.json'); 
const port = 3000;
const appCustom= require('./src/config/app.custom')


appCustom(app, express);

app.listen(config.get("port"), (error) => {
  if (error) {
    console.log("Deu erro");
    return;
  }
  console.log("Rodando que e uma belezinha...");
});

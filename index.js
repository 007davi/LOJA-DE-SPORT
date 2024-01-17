const express = require("express");
const app = express();
const config = require("config");
const port = 3000;
const appCustom = require("./config/appCustom");
const cors= require('cors')



app.use(cors({
  origin: "*",
  header: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  methods: "GET,OPTIONS,PATH,DELETE,POST,PUT",
  credentials: true
})) 

appCustom(app, express);

app.listen(config.get("port"), (error) => {
  if (error) {
    console.log("Deu erro");
    return;
  }
  console.log("Rodando que e uma belezinha...");
});

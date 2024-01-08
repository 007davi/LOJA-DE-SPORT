const express = require("express");
const app = express();
const port = 3000;
const router= require('./src/exports') 
const conexao= require("./src/db");
const table = require("./src/services/table");

router(app, express);
table.init(conexao);


app.listen(port, (error) => {
    if (error) {
        console.log("falhou")
        return
    }
    console.log("rodando liso")
})

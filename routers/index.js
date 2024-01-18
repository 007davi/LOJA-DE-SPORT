const http = require("http");
const routerAtendimento = require("./atendimentoRoute");
const express= require("express");
const cors= require('cors')

module.exports = (app, express) => {
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(routerAtendimento);
 
  
};

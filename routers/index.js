const http = require("http");
const routerAtendimento = require("./atendimentoRoute");
const express= require("express");
const cors= require('cors')

module.exports = (app, express) => {
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(routerAtendimento);
  app.use(cors({
    
    origin: "http://127.0.0.1:5500/",
    header: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    methods: "GET,OPTIONS,PATH,DELETE,POST,PUT",
    credentials: true
  }))  
  
};

const { Router } = require("express");
const router= Router();
const shopController= require('./controllers/shopcontroller')

router.get("/shopSport", (req, res)=>{
    const listaShop= shopController.buscar();
    listaShop
    .then((listaShop)=> res.status(200).json(listaShop))
    .catch((error)=> res.status(400).json(error.massage))
         
});
router.post("/shopSport", (req, res)=>{
    const novoProduto= req.body;
    const Produto= shopController.criar(novoProduto);
    Produto
    .then((Produto => res.status(201).json(Produto) ))
    .catch((error)=> res.status(400).json(error.massage))
}); 

router.put("/shopSport/:id", (req, res)=>{
    const { id } = req.params;
    const resposta= shopController.alterar(id);
    res.send(resposta)
}); 

router.delete("/shopSport/:id", (req, res)=>{
    const { id } = req.params;
    const resposta= shopController.excluir(id)
    res.send(resposta)
}); 

module.exports= router;
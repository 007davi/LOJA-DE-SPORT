const shopModel= require("../models/model")
class shopController {
    buscar(){
        return shopModel.listar()
    }

    criar(novoProduto){
        return shopModel.criar(novoProduto)
    }

    alterar(id){
        return 'alterando produto' + id
    }

    excluir(id){
        return 'apagando produto' + id 
    }
}

module.exports= new shopController();
const shopModel= require("../models/model")
class shopController {
    buscar(req, res) {
      const listaProdutos = shopModel.listar();
      return listaProdutos
        .then((produtos) => res.status(200).json(produtos))
        .catch((error) => res.status(400).json(error.message));
    }
    criar(req, res) {
      const novoProduto = req.body;
      const produtos = shopModel.criar(novoProduto);
      return produtos
        .then((produtoCriado) => res.status(201).json(produtoCriado))
        .catch((error) => res.status(400).json(error.message));
    }
    atualizar(req, res) {
      const { id } = req.params;
      const produtoAtualizado = req.body;
      const produto = atendimentoModel.atualizar(produtoAtualizado, id);
      return produto
        .then((resultProdutoAtualizado) =>
          res.status(200).json(resultProdutoAtualizado)
        )
        .catch((error) => res.status(400).json(error.message));
    }
    deletar(req, res) {
      const { id } = req.params;
      const produto = shopModel.delete(id);
      return produto
        .then((resultAtendimentoDeletado) =>
          res.status(200).json(resultProdutoDeletado)
        )
        .catch((error) => res.status(400).json(error.message));
    }
  }
  
  module.exports = new shopController();
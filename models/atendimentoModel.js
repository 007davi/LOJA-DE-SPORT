const conexao = require("../infraestrutura/conexao");
class AtendimentoModel {
  executaQuery(sql, parametros = "") {
    return new Promise((resolve, reject) => {
      conexao.query(sql, parametros, (error, resposta) => {
        if (error) {
          return reject(error);
        }
        return resolve(resposta);
      });
    });
  }
  listar() {
    const sql = "SELECT * FROM shop";
    return this.executaQuery(sql);
  }

  criar(novoAtendimento) {
    const sql = "INSERT INTO shop SET ?";
    return this.executaQuery(sql, novoAtendimento);
  }

  atualizar(atendimentoAtualizado, id) {
    const sql = "UPDATE shop SET ? WHERE id = ?";
    return this.executaQuery(sql, [atendimentoAtualizado, id]);
  }

  delete(id) {
    const sql = "DELETE FROM shop WHERE id = ?";
    return this.executaQuery(sql, id);
  }
}

module.exports = new AtendimentoModel();

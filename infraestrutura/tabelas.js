class Tabelas {
    init(conexao) {
      this.conexao = conexao;
      this.criarTabelaAtendimentos();
    }
  
    criarTabelaAtendimentos() {
      const sql = `
      create table  IF not EXISTS shop (
        id int primary key auto_increment,
        nome varchar(50),
        descricao varchar(100),
        codigo varchar(15),
        preco varchar(10)
        );
        `;
      this.conexao.query(sql, (error) => {
        if (error) {
          console.log("Eita deu erro na hora de criar a tabela atendimentos");
          console.log(error.message);
          return;
        }
        console.log("Show criou a tabela com sucesso...");
      });
    }
  }
  
  module.exports = new Tabelas();
  
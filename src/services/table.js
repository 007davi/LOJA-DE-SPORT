class table {
    init(conexao){
        this.conexao= conexao;
        this.criarDbApiShopSport();

    }

    criarDbApiShopSport(){
        const sql = `
            create table IF not EXISTS shop (
                id int primary key auto_increment,
                nome varchar(50),
                descricao varchar(100),
                codigo varchar(15),
                preco varchar(10)
            );
        `;

    this.conexao.query(sql, (error)=>{
        if (error){
            console.log('fudeo deu erro')
            console.log(error.message);
            return;
        }

        console.log('ok ta rodando eu acho')
    })
    }
}

module.exports= new table();
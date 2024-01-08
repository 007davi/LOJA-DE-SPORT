const conexao= require('../db')
class shopModel {
    listar(){
        const sql= "select * from shop"
        return new Promise((resolve, reject)=> {
            conexao.query(sql, {}, (error, resposta) => {
                if (error){
                    console.log('deu erro no lista')
                    reject(error);
                }
                console.log('ta pegando show')
                resolve(resposta)
            })
        })
    }

    criar(novoProduto){
        const sql = "INSERT INTO shop SET ?";
        return new Promise((resolve, reject)=>{
            conexao.query(sql, novoProduto, (error, resposta) => {
            if (error){
                console.log('deu erro no lista produto')
                reject(error);
            }
            console.log('ta pegando produto');
            resolve(resposta);
        })
    })
        

}
}
 

module.exports= new shopModel(); 
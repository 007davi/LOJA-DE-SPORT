class Produto  {
    constructor (){
        this.id = 1
        this.arrayProdutos =[]
        this.editId= null
    }



    listaTabela(){
        const tbody= document.getElementById('tbody')
        tbody.innerText= ''

        for (let i = 0; i < this.arrayProdutos.length; i++){
            let tr = tbody.insertRow()

            let td_id = tr.insertCell()
            let td_produto = tr.insertCell()
            let td_descricao = tr.insertCell()
            let td_codigo = tr.insertCell()
            let td_preco= tr.insertCell()
            let td_acoes = tr.insertCell()

            td_id.innerText= this.arrayProdutos[i].id
            td_produto.innerText= this.arrayProdutos[i].nomeProduto
            td_descricao.innerText= this.arrayProdutos[i].descricao 
            td_codigo.innerText= this.arrayProdutos[i].codigo
            td_preco.innerText= this.arrayProdutos[i].valor 
            
            td_id.classList.add('center')

            let imgEdit = document.createElement('img')
            imgEdit.src='img/edit.svg'

            imgEdit.setAttribute("onclick", "produto.PrepararEdicao("+ JSON.stringify(this.arrayProdutos[i])+")")

            let imgDelete = document.createElement('img')
            imgDelete.src= 'img/delete.svg'

            imgDelete.setAttribute("onclick", "produto.deletar("+ this.arrayProdutos[i].id +")")

            td_acoes.appendChild(imgEdit)
            td_acoes.appendChild(imgDelete)


        }
    }
    Salvar(){
      let produto =  this.lerDados()

      if(this.validaCampos(produto)){
       if (this.editId == null){
        this.adicionar(produto)
        }else{
            this.atualizar(this.editId, produto)
        }
      }

      this.listaTabela()
      this.Cancelar()
    }
    adicionar(produto){
        this.arrayProdutos.push(produto)
        this.id ++
    }

    atualizar(id, produto){
        for(let i = 0; i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos[i].nomeProduto= produto.nomeProduto
                this.arrayProdutos[i].descricao= produto.descricao
                this.arrayProdutos[i].codigo= produto.codigo
                this.arrayProdutos[i].valor= produto.valor
            }
        }
    }

    PrepararEdicao(dados){

       this.editId = dados.id

       document.getElementById('produto').value= dados.nomeProduto
       document.getElementById('descricao').value= dados.descricao
       document.getElementById('codigo').value= dados.codigo
       document.getElementById('valor').value= dados.valor
       
       document.getElementById('btn1').innerText= 'Atualizar'
       
    }

    lerDados(){
        let produto={}

        produto.id= this.id
        produto.nomeProduto = document.getElementById('produto').value
        produto.descricao = document.getElementById('descricao').value
        produto.codigo = document.getElementById('codigo').value
        produto.valor = document.getElementById('valor').value

        return produto
    }

    validaCampos(produto){
      let msg= ''
     

        if (produto.nomeProduto == ''){
            msg += 'Por Favor Informe o Nome do Produto \n'
        }
        if(produto.descricao == ''){
            msg += 'Por Favor Informe a Descriçãodo Produto \n'
        }
        if(produto.codigo == ''){
            msg += 'Por Favor Informe o Codigo do Produto \n'
        }
        if(produto.valor == ''){
            msg += 'Por Favor Informe o Valor do Produto \n'

        }
        if(msg != ''){
            alert(msg)
            return false
        }

        return true
    }

    Cancelar(){
        document.getElementById('produto').value = ''
        document.getElementById('descricao').value = ''
        document.getElementById('codigo').value =''
        document.getElementById('valor').value =''

        document.getElementById('btn1').innerText= 'salvar'
        this.editId= null
    }

    deletar(id){
        if(confirm('Deseja realmente deletar o iten do ID' +  id)){
        const tbody= document.getElementById('tbody')

        for(let i = 0; i < this.arrayProdutos.length; i++){
        if(this.arrayProdutos[i].id == id){
            this.arrayProdutos.splice(i, 1)
            tbody.deleteRow(i)
        }
       }}
    }
}

var produto= new Produto()
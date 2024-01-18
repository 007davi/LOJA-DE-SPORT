const url = "http://localhost:3000/atendimentos"

const tbodyGet= document.getElementById('tbody')

async function getAllPosts(){

    const response = await fetch(url);
    const produto= await response.json()

    bodyPrint(produto);
}

function bodyPrint(produtos){
produtos.forEach(produto => {
    const ProdutoHTML= `
    <tr>
        <td>${produto.id}</td>
        <td>${produto.nome}</td>
        <td>${produto.descricao}</td>
        <td>${produto.codigo}</td>
        <td>${produto.preco}</td>
        <td><img src="img/edit.svg" onclick="produto.PrepararEdicao({&quot;id&quot;:1,&quot;nomeProduto&quot;:&quot;A&quot;,&quot;descricao&quot;:&quot;sa&quot;,&quot;codigo&quot;:&quot;23&quot;,&quot;valor&quot;:&quot;113&quot;})">
             <img src="img/delete.svg" onclick="produto.deletar(1)"></td>
    </tr>
    ` 

    tbodyGet.innerHTML= tbodyGet.innerHTML + ProdutoHTML
});
}

getAllPosts()
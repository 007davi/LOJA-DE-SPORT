document.addEventListener('DOMContentLoaded', (event) => {
    const produtoGet = document.getElementById('produto');
    const descricaoGet = document.getElementById('descricao');
    const codigoGet = document.getElementById('codigo');
    const valorGet = document.getElementById('valor');
    const buttonSave = document.getElementById('btn1');


buttonSave.addEventListener('click', () => {
    const produto = {
        nome: produtoGet.value,
        descricao: descricaoGet.value,
        codigo: codigoGet.value,
        preco: valorGet.value
    };

    console.log(produto); // Para verificar os valores coletados
    APIProductSend(produto);
})

})

async function APIProductSend(produto){
    try{
    const response= await fetch('http://localhost:3000/atendimentos', {
        method: 'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
    })

    if (response.status === 201){
        const produtoAdicionado = await response.json(); // Se a API retornar o produto criado
        adicionarProdutoNaTabela(produto);
    } else {
        console.log('Erro ao adicionar produto');
    }
} catch (erro) {
    console.error(erro.message);
}

}

function adicionarProdutoNaTabela(produto) {
    const novaLinha = `<tr>
        <td>${produto.nome}</td>
        <td>${produto.descricao}</td>
        <td>${produto.codigo}</td>
        <td>${produto.preco}</td>
    </tr>`;
    tbodyGet.innerHTML += novaLinha;
}


   
 

const buttonSave = document.getElementById('btn1');

buttonSave.addEventListener('click', () => {
    // Captura dos valores dentro do evento de clique
    const produtoGet = document.getElementById("produto").value;
    const descricaoGet = document.getElementById('descricao').value;
    const codigoGet = document.getElementById('codigo').value;
    const valorGet = document.getElementById('valor').value;

    const produtos = {
        nome: produtoGet,
        descricao: descricaoGet,
        codigo: codigoGet,
        preco: valorGet
    };
  
    APIProductSend(produtos);
});

function adicionarProdutoNaTabela(produtos) {
    const tbodyGet = document.querySelector('tbody'); 
    const produtoPrint = 
    `<tr>
        <td>${produtos.nome}</td>
        <td>${produtos.descricao}</td>
        <td>${produtos.codigo}</td>
        <td>${produtos.preco}</td>
    </tr>`;
    tbodyGet.innerHTML += produtoPrint; 
}

async function APIProductSend(produto){
    try {
        const response = await fetch('http://localhost:3000/atendimentos', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produto)
        });

        if (response.status === 201) {
            const produtoAdicionado = await response.json();
            CleanCamp(); // Limpar campos após sucesso
            adicionarProdutoNaTabela(produtoAdicionado);
        } else {
            console.log('Erro ao adicionar produto');
        }
    } catch (erro) {
        console.error(erro);
    }
}

function CleanCamp() {
    document.getElementById("produto").value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('codigo').value = '';
    document.getElementById('valor').value = '';
}

 

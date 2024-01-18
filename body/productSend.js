const produtoGet=  document.getElementById('produto')
const descricaoGet=  document.getElementById('descricao')
const codigoGet=  document.getElementById('codigo')
const valorGet=  document.getElementById('valor')
const buttonCan= document.getElementById('btn1')
const buttonSave= document.getElementById('btn2')

buttonSave.addEventListener('click', () => {
    const produto= getProdutos()

    APIProductSend()
})

function getProdutos(){
    const inputNome= produtoGet
    const inputDescricao=descricaoGet
    const inputCodigo=codigoGet
    const inputValor=valorGet


    const produto= {
        nome: inputNome.value,
        descricao: inputDescricao,
        codigo: inputCodigo,
        valor: inputValor
    }
    return produto
}

async function APIProductSend(){
    const response= await fetch('http://localhost:3000/atendimentos', {
        method: 'POST',
        headers:{
            Acecept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(curso)
    })

    if (response.status===201){
        campClean ()
        //window.location.href= ''
    }else{
        console.log('erro ao adicionar produto')
    }

    function campClean (){
        document.getElementById('produto').value=''
        document.getElementById('descricao').value=''
        document.getElementById('codigo').value=''
        document.getElementById('valor').value=''


    }
}
const url = "http://localhost:3000/atendimentos"

async function getAllPosts(){

    const response = await fetch(url);
    const produto= await response.json()

    console.log(produto);
}

getAllPosts()
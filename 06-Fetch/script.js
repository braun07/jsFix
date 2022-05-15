fetch("https://ranekapi.origamid.dev/wp-json/api/produto")
    .then(response => response.json()) 
    .then(jsonBody => {
    document.querySelector("#app").innerHTML = jsonBody[0].nome;
    // dentro do documento .app na resolução do html mostrar o nome do resultado jsonBody
    console.log(jsonBody);
});


// toda vez que colocar .then() significa que apos concluir a primeira etapa, sera realizada uma segunda
// response.json() transformara a resposta em json para facilitar a leitura



const data = {
    id: "reste",
    nome: "Andre",
    email: "andrerafa@origamid.com",
    senha: "123456",
    cep: "39876-555",
    rua: "quase chegando",
    numero: "123",
    bairro: "centro",
    cidade: "BH",
    estado: "Minas Gerais",
}

fetch ("https://ranekapi.origamid.dev/wp-json/api/usuario", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
})
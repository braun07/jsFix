const precos = [
    "Crédito",
    "R$ 200",
    "R$ 400",
    "Contas Pagar",
    "R$ 300",
    "R$ 400",
    "Meus dados",
];

const precosFiltro = precos.filter(preco => preco.includes("R$")); /*Filtrar a array de preco deixando somente os precos UTILIZANDO FILTER*/ 

const precoNumeros = precosFiltro.map(preco => 
    Number(preco.replace("R$ ", ""))
); /* Utilizando o map para mapear as unidades de numero existentes e redefinir-las tirando o R$ e transformando-as em numero*/


const total = precoNumeros.reduce((acc, item) => acc + item); /*reduce retorna sempre um valor unico*/

console.log(total);
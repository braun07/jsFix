const grupoA = 100;
const grupoB = 300;

// if(grupoA > grupoB) {
//     console.log("Teste");
// } nao funciona dentro de uma expressao por ser um bloco

// classificam-se como uma expressao
const vencedor = grupoA > grupoB ? "Grupo A Ganhou" : "Grupo B Ganhou";

const areaQuadrado = (l) => l * l;

const numeros = [2, 3, 4, 5, 6];
const total = numeros.filter(numero => numero > 4);

// const novoVencedor = grupoA >50 && "Grupo A vencedor"; ou
const novoVencedor = grupoA > 50 && true;
console.log(novoVencedor);
// -------------------*-------------------

// console.log(vencedor);
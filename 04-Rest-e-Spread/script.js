// Ex REST
// function showList (empresa, ...clients) { 
//     console.log(empresa);
//     console.log(clients);
// }

// showList("Origamid", "Joao", "Aline");



// EX Spread
// const numeros = [1, 2, 4, 12 , 321, 5454, 54812];
// console.log(Math.max(...numeros));



// Selecionar items sem array
// const items = document.querySelectorAll("li");



// selecionar e exibir items com array 
// const items = Array.from(document.querySelectorAll("li"));

// items.map(item => {
//     console.log(item)
// })

// console.log(items);



// selecionar items com array espalhando
// const items = document.querySelectorAll("li");

// [...items].map(item => {
//     console.log(item)
// })

// console.log(items);


// Clonar um objeto sem fazer referencia
// const carro = {cor: "Azul", portas: 4, ano: 2020};

// const cloneCarro = { ...carro, turbo: true};


// Criando um transporte
class Transporte {
    constructor() {
        this.terrestre = true;
    }
    andar() {
        console.log("andou");
    }
}

class Carro extends Transporte {
    constructor(cor, portas) {
        super();
        this.cor = cor;
        this.portas = portas;
    }
}


const carro = new Carro("vermelho", 4);

const cloneCarro = {...carro};

console.log(carro);
console.log(cloneCarro);
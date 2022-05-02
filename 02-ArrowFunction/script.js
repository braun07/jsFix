// function upperName(name) {
//     return name.toUpperCase();
// }

// ou

// const upperName = function(name) {
//     return name.toUpperCase();
// }

// ou

// const upperName = (name, lastName) => {
//     return name.toUpperCase();
// }

// ou

// const upperName = (name) => name.toUpperCase();
// const countLetters = text => text.length;

// console.log(countLetters("joao"));


// colocar uma class ao clicar em um botao

// class Menu {
//     constructor(menu){
//         this.menuElement = document.querySelector(menu);
//     }
//     addActiveEvent() {
//         this.menuElement.addEventListener("click", function(event){
//             event.target.classList.add("active");
//         });
//     }
// }

// const menu = new Menu(".principal");
// menu.addActiveEvent();

// console.log(menu);

// melhor opção

class Menu {
    constructor(menu){
        this.menuElement = document.querySelector(menu);
        this.activeClass = "active"
    }
    addActiveEvent() {
        this.menuElement.addEventListener("click", (event) =>{
            event.target.classList.add(this.activeClass);
        });
    }
}

const menu = new Menu(".principal");
menu.addActiveEvent();

console.log(menu);
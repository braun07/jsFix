// function handleMouseMove(event) {
//     const clientX = event.clientX;
//     const clientY = event.clientY; 
//     console.log(clientX, clientY);
// }

// ou

// function handleMouseMove(event) { 
//     const { clientX, clientY } = event;
//     console.log(clientX, clientY);
// }

// ou

function handleMouseMove({ clientX, clientY }) {
    console.log(clientX, clientY);
}

// document.documentElement.addEventListener("mousemove", handleMouseMove);



// const frutas = ["Banana", "Uva"];
// const fruta1 = frutas[0];
// console.log(fruta1)

// ou

const frutas = ["Banana", "Uva"];
const [fruta1, fruta2] = frutas;
console.log(fruta1, fruta2);
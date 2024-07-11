const DELAY_CREACION = 3000;
const DELAY_CONSUMO = 5000;
setInterval(crearTarea, DELAY_CREACION);
setInterval(consumirTarea, DELAY_CONSUMO);
let cola = [];
let contador = 0;

function crearTarea(){
    console.log("Creando tarea...");
    contador++;
    cola.push(`"Tarea ${contador}"`);
    mostrarCola();
}
function mostrarCola(){
    let textoHTML = "";
    cola.map( tarea=> {
        console.log(tarea);
        textoHTML+=`<div class='tarea'>${tarea}</div>`;
    });
    document.querySelector("body").innerHTML=textoHTML;
}

function consumirTarea(){
    //cola.pop();
    cola.shift();
    mostrarCola();
}
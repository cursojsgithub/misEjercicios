let pais1 = {
    nombre : "EEUU",
    continente : "América"
};
let pais2 = {
    nombre : "Italia",
    continente : "Europa"
}
let actor1 = {
    nombre : "Brad Pitt",
    pais: pais1
}
let actor2 = {
    nombre : "Roberto Benigni",
    pais : pais2
}
let actor3 = {
    nombre : "Morgan Freeman",
    pais : pais1
}

let listaActores=[actor1,actor3];


let pelicula1 = {
    titulo : "Seven",
    director : "David Fincher",
    listadoDeActores : listaActores
}
let pelicula2 = {
    titulo : "La vida es Bella",
    director: actor2.nombre,
    listadoDeActores: actor2.nombre
}

let catalogo =[];
catalogo.push(pelicula1, pelicula2);
console.log(catalogo);
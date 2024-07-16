const alumnos = new Map([
    ["Alberto", 38],
    ["Óscar", 40],
    ["Lara", 29]
]);

console.log(alumnos.get("Óscar"));


//Definir un Map que tenga por clave el título de la pélicula y por valor un objeto con los atributos: 
//director, genero, año y diración. El map tendrá tres películas. 

let pelicula1 = {
    director : "Quentin Tarantino",
    genero : "Accion",
    año : "1992",
    duracion : 100
};
let pelicula2 = {
    director : "Damien Chazelle",
    genero : "Suspense",
    año : "2014",
    duracion : 110
};
let pelicula3 = {
    director : "Jonathan Demme",
    genero : "Intriga",
    año : "1991",
    duracion : 115
};

const peliculas = new Map([
    ["Reservoir Dogs", pelicula1],
    ["Whiplash", pelicula2],
    ["El silencio de los corderos", pelicula3]
]);

//console.log(peliculas.get("Whiplash"));

for (pelicula of peliculas){
    console.log(pelicula.director);
}
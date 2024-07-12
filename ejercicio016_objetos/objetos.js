/*
Atributos
- sprite
- posicion
- estado
Métodos:
- disparar
- explotar
- mover
*/

/*
Creación de un objeto
*/

let enemigo1 = {
    sprite: "imagen.jpg",
    x: 0,
    y: 0,
    estado: "formacion",
    saludar(nombre){
        console.log("Hola " + nombre);
    }
};

/*
Creación de una clase con funciones
*/

function Enemigo(sprite, x, y, estado){
    this.sprite= sprite;
    this.x= x;
    this.y= y;
    this.estado= estado;
    this.saludar= function(nombre){
        console.log("Hola " + nombre);
    }
};

let enemigo2 = new Enemigo("imagen.jpg", 1, 0, "enformacion");

/*
Creación de una clase con class
*/

class Superenemigo{
    constructor(sprite, x, y){
        this.sprite= sprite;
        this.x= x;
        this.y= y;
        this.estado= "enformacion";
    }
    saludar(nombre){
        console.log("Hola " + nombre);
    }
}
let superenemigo = new Superenemigo("imagen.jpg", 1, 1);
class Pelicula {

    constructor(titulo, duracion, genero, clasificacion){
        this.titulo = titulo;
        this.duracion = duracion;
        this.genero= genero;
        this.clasificacion= clasificacion;
    }
    toString()
    {
        return(`${this.titulo}:${this.genero}`);
    }
}

let peliculaUno = new Pelicula("Matrix", 120, "Acción", 3);
let peliculaDos = new Pelicula("Toy Story", 90, "Animación", 4);
let peliculaTres = new Pelicula("Seven", 130, "Acción", 5);

let listaPeliculas = [];
listaPeliculas.push(peliculaUno, peliculaDos, peliculaTres);

let arrayAccion = listaPeliculas.filter( (peli) => peli.genero == "Acción");

arrayAccion.sort((p1,p2) => p1.clasificacion-p2.clasificacion);
//console.log(arrayAccion);

//console.log(listaPeliculas.concat(arrayAccion));
//console.log(listaPeliculas.join("///////"));

let calificaciones = [];
calificaciones.map(calificacion => listaPeliculas.clasificacion)
console.log(calificaciones);


function getPeliculas() {
    console.log("Getting peliculas...");


    fetch("https://www.omdbapi.com/?apikey=138da4b6&s=toy+story")
        .then(response => response.text())
        .then(data => {
            mostrarDatos(data);
        });
}


function mostrarDatos(datos) {
    console.log(datos);
    let peliculas = JSON.parse(datos);

    peliculas.Search.forEach(pelicula => {
        let textoHTML =

        `<div id="ficha">
            <div id="portada">
                <img src=${pelicula.Poster} alt="">
             </div>
            <div id="informacion">
                <div class="texto" id="titulo">${pelicula.Title}</div>
                <div class="texto" id="year">${pelicula.Year}</div>
                <div class="texto" id="tipo">${pelicula.Type}</div>
            </div>
        </div>`;
        document.querySelector("#fichaPelicula").innerHTML += textoHTML;

    });



}

getPeliculas();
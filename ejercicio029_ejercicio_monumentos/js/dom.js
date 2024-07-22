function crearFicha(imagen, titulo, direccion, descripcion){
    //<div class="ficha">
    let divFicha = document.createElement("div");
    divFicha.classList.add("ficha")
    document.querySelector("#monumentos").appendChild(divFicha);
    
    //<div class="imagen">
    let divImagen = document.createElement("div");
    divImagen.classList.add("imagen")
    divFicha.appendChild(divImagen);
    
    //<img src="http://www.turismodevigo.org/sites/turismodevigo/files/lug274.jpg">
    let divIMG = document.createElement("img");
    divIMG.setAttribute("src", imagen);
    divImagen.appendChild(divIMG);
    
    //<div class="informacion">
    let divInfo = document.createElement("div");
    divInfo.classList.add("informacion");
    divFicha.appendChild(divInfo);
    
    
    //<div class="datos">
    let divNombre = document.createElement("div");
    divNombre.classList.add("datos");
    divInfo.appendChild(divNombre);
    divNombre.innerHTML=titulo;

    let divDireccion = document.createElement("div");
    divDireccion.classList.add("datos");
    divInfo.appendChild(divDireccion);
    divDireccion.innerHTML = direccion;

    let divDescripcion = document.createElement("div");
    divDescripcion.classList.add("datos");
    divInfo.appendChild(divDescripcion);
    divDescripcion.innerHTML=descripcion;

}
console.log("Hola");
let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
console.log(dias[0]);
console.log(dias.length);
console.log(dias[dias.length-1]);
console.log(dias[7]);
dias[7]="otro";
console.log(dias[7]);
dias[20]="veinte";
console.log(dias[20]);
console.log(dias[19]);
console.log(dias.length);
/*for(let i=0; i<dias.length; i++){
    console.log(`Dia: ${dias[i]}`);
}*/
dias.forEach(dia => console.log(`Dia: ${dia}`))


























let nombres = ["Pedro", "Ana", "Arturo", "Susana"];

nombres[nombres.length]="Victor";
nombres.push("Nía");

nombres.forEach(nombre => {console.log(nombre)});
let mayorDeCuatro = nombres.filter((nombre) => nombre.length >4 && nombre.toLowerCase().includes('a'));
console.log(mayorDeCuatro);

let arroba = nombres.map((nombre) => nombre.replaceAll('a', '@'));
console.log(arroba);

let mapFilter = nombres.map((nombre) => nombre.replaceAll('n', 'N')).filter((nombre) => nombre.length<5);
console.log(mapFilter);

let colores = ["Azul", "Rojo", "Verde", "Amarillo", "Negro"];

console.log(colores.find((color) => color.includes("Ro")));
console.log(colores.sort());

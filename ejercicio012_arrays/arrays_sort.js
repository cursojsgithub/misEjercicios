class Vehiculo {
    constructor(nombre, precio, consumo){
        this.nombre = nombre;
        this.precio = precio;
        this.consumo = consumo;
    }
}
let jcCar = new Vehiculo ("Seat Ibiza", 10000, 5.3);
let fpCar = new Vehiculo ("Kia Ceed", 9500, 6.4);
let laraCar = new Vehiculo ("Mercedes", 35000, 8.5);
let vehiculos = [];
vehiculos.push(jcCar);
vehiculos.push(fpCar);
vehiculos.push(laraCar);
console.log(vehiculos)

vehiculos.sort((v1, v2) => v1.precio-v2.precio);
console.log(vehiculos);

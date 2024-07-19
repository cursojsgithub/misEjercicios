const PAISES = ["España", "Portugal", "Italia", "Eslovenia", "Jamaica"];
const VIAJEROS_MINIMOS=1;
const VIAJEROS_MAXIMOS=4
const DIAS_MINIMOS=5;
const DIAS_MAXIMOS=10;

function organizarViaje(pais, viajeros, dias){
    if(!(PAISES.map(pais => pais.toUpperCase).includes(pais.toUpperCase))) {
        throw new Error ("El pais no es correcto");
    }
    if(viajeros <VIAJEROS_MINIMOS || viajeros >VIAJEROS_MAXIMOS){
        throw new Error ("El número de viajeros no es correcto");
    }
    if ((dias <DIAS_MINIMOS || dias>DIAS_MAXIMOS)){
        throw new Error ("El número de días no es correcto");
    }
    return console.log(`Se ha reservado un viaje a ${pais} de ${dias} dias para ${viajeros} personas`);
}

try {
    organizarViaje("PORtugal", 3, 8);
}
catch (e){
    console.error("El error es " + e);
};
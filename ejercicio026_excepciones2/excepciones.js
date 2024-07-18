let paises = ["España", "Portugal", "Italia", "Eslovenia", "Jamaica"];

function organizarViaje(pais, viajeros, dias){
    if(!(paises.includes(pais)) || (viajeros <1 || viajeros >4) || (dias <5 || dias>10)){
        
        throw new Error ("Los argumentos no son validos")
    }
    else{
    return console.log(`Se ha reservado un viaje a ${pais} de ${dias} dias para ${viajeros} personas`);
    }
}

try {
    organizarViaje("España", 3, 7)
}
catch (e){
    console.error("El error es " + e)
}
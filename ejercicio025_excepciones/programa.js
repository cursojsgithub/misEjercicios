const fs = require('node:fs');
function writeLog (logLine){
    fs.appendFile('./log.txt', `${logLine}\n`, err =>{
        if (err){
            console.log(err);
        }else{
            console.log("Log escrito satisfactoriamente")
        }
    });
}


function sumar(sumando1, sumando2){
    //1. Que recibamos 2 argumentos
    if(sumando1==undefined || sumando2==undefined){
        throw new Error("Los dos sumandos son obligatorios");
    }
    //2. Que los dos sean números
    if(!(typeof sumando1=='number') || !(typeof sumando2=='number')){
        throw new Error("Los dos sumandos deben ser números");
    }
    return sumando1+sumando2;
}

console.log(sumar(1, 8));

try{
    console.log("Paso 1");
    let resultado = sumar(8);
    console.log("Paso 2");
}
catch(e){
    console.error("El error es " + e);
    writeLog(e);
} finally{
    console.log("Hemos terminado el proceso")
}
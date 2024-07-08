
const VALOR_MINIMO=10;
function comprobarSensor1(){
    let sensor1 = document.querySelector("#sensor1").value;
    let esMayor = true;
    if(sensor1<VALOR_MINIMO){
        document.querySelector("#marcador1").style.backgroundColor="red";
        esMayor = false;
    }
    else{
        document.querySelector("#marcador1").style.backgroundColor="green";
        esMayor = true;
    }
    return esMayor;
}
function comprobarSensor2(){
    let sensor2 = document.querySelector("#sensor2").value;
    let esMayor = true;
    if(sensor2<VALOR_MINIMO){
        document.querySelector("#marcador2").style.backgroundColor="red";
        esMayor = false;
    }
    else{
        document.querySelector("#marcador2").style.backgroundColor="green";
        esMayor = true;
    }
    return esMayor;
}

function comprobacion(){
    if(comprobarSensor1() & comprobarSensor2()){
        alert("Ok");
    }
    else{
        alert("Error");
    }
}
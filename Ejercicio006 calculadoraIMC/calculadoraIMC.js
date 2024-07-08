
function calcular(){

    let nombre = document.querySelector("#iNombre").value;
    let edad = document.querySelector("#iEdad").value;
    let peso = document.querySelector("#iPeso").value;
    let altura = document.querySelector("#iAltura").value;
    
    if (valida()){
        let peso = document.getElementById("iPeso").value;
        //let IMC = peso/Math.pow((altura)/100,2);
        document.getElementById("resultado").innerHTML=calculaIMC(peso, altura);
}
}


function calculaIMC(peso,altura){
    let IMC = peso/Math.pow((altura)/100,2);
    return IMC;
}
function valida(){
    let nombre = document.querySelector("#iNombre").value;
    let edad = document.querySelector("#iEdad").value;
    let peso = document.querySelector("#iPeso").value;
    let altura = document.querySelector("#iAltura").value;
    let validado = true;

    if(nombre.length<3){
        document.querySelector("#errorNombre").innerHTML="El nombre es demasiado corto";
        validado = false;
    }
    else{
        document.querySelector("#errorNombre").innerHTML="";
        validado = true;
    }
    if(edad<18){
        document.querySelector("#errorEdad").innerHTML="Edad incorrecta";
        validado = false;
    }
    else{
        document.querySelector("#errorEdad").innerHTML="";
        validado = true;
    }
    if(peso<40 || peso>200){
        document.querySelector("#errorPeso").innerHTML="Peso incorrecto";
        validado = false;
    }
    else{
        document.querySelector("#errorPeso").innerHTML="";
        validado = true;
    }
    if(altura<100 || altura>250){
        document.querySelector("#errorAltura").innerHTML="Atura incorrecto";
        validado = false
    }
    else{
        document.querySelector("#errorAltura").innerHTML="";
        validado = true
    }
    return validado;

}
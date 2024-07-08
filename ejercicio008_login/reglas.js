function reglasUsuario(){
    let email = document.getElementById("usuario").value;
    if(email.indexOf("@")>0 && email.indexOf(".")>0 && email.length>5){
        escribirError(" ","#errorEmail")
        return true;
    }
    else{
        if(email.indexOf("@")<=0){
            escribirError("Falta el símbolo @","#errorEmail")
        }
        else if(email.indexOf(".")<=0){
            escribirError("Falta el símbolo .","#errorEmail")
        }
        return false;
    }
}

function reglasPassword(){
    let password = document.getElementById("password").value;
    let a = "a";
    let ibm = "ibm";
    if(password.length<=6 || password.toLowerCase().indexOf(a)>0 || password.toLowerCase().indexOf(ibm)>0){
        if(password.toLowerCase().indexOf(a)>0){
            escribirError("No puede contener la letra a o A","#errorPassword")
        }
        else if(password.toLowerCase().indexOf(ibm)>0){
            escribirError("No puede contener IBM","#errorPassword")
        }
        return false;
    }
    else{
        escribirError(" ", "#errorPassword")
        return true;
    }
}

function validar(){
    if(reglasUsuario() == true & reglasPassword() == true){
        alert("Usuario Correcto");
    }
}

function escribirError(mensaje,identificador){
    document.querySelector(identificador).innerHTML=mensaje;
}
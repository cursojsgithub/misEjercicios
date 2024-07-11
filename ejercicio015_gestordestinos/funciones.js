let participantes =[];

document.querySelector("#bAgregar").addEventListener("click", (event) =>{
    let corredor = document.querySelector("#iCorredor").value;
    let dorsal = document.querySelector("#iDorsal").value;
    let fotografia = document.querySelector("#iFotografia").value;

    let ciclista = {
        corredor : corredor,
        dorsal : dorsal,
        fotografia : fotografia
    };
    participantes.push(ciclista);
    crearFicha(participantes);   
})

function crearFicha(participantes){
    let fichaCiclista= "";
    participantes.map((ciclista) =>{
        fichaCiclista+= `<div id="ficha">
                            <div> ${ciclista.corredor}</div>
                            <div> ${ciclista.dorsal}</div>
                            <div class="foto">  <img src="${ciclista.fotografia}" class="foto"></div>
                        </div>`

    })
    document.querySelector("#fichas").innerHTML=fichaCiclista;
    document.querySelector("#iCorredor").value="";
    document.querySelector("#iDorsal").value="";
    document.querySelector("#iFotografia").value="";
}
let participantes =[];

let participantesAlmacenados = localStorage.getItem("participantes");
if (participantesAlmacenados!=null){
    participantes = JSON.parse(participantesAlmacenados);
    crearFicha(participantes);
}

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
                            <div id="nombre"> ${ciclista.corredor}</div>
                            <div class="foto">  <img src="${ciclista.fotografia}" class="foto"></div>
                            <div id="dorsal" > 
                            <div id="franja">
                            ${ciclista.corredor}
                            </div>
                            ${ciclista.dorsal}
                            </div>
                        </div>`

    })
    document.querySelector("#fichas").innerHTML=fichaCiclista;
    document.querySelector("#iCorredor").value="";
    document.querySelector("#iDorsal").value="";
    document.querySelector("#iFotografia").value="";
}
document.querySelector("#bGuardar").addEventListener("click", guardar);
function guardar(){
    let strParticipantes = JSON.stringify(participantes);
    localStorage.setItem("participantes", strParticipantes);
}
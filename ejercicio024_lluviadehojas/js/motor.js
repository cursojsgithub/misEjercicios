const RATIO = 0.016;
const VELOCIDAD = 1;
var y = -62;
var x = 200;

setInterval(()=> {
    y += VELOCIDAD;
    document.querySelector("#gato1").style.top= `${y}px`;
    document.querySelector("#gato1").style.left=`${x}px`;
    if(y> window.innerHeight){
        y = -62;
        x = Math.random() * window.innerWidth;
        
    }
}, RATIO);

document.querySelector("#bCerrar").addEventListener("click", ()=>{
    document.querySelector("footer").style.bottom="-100px";
    document.querySelector("footer").style.opacity="0";
})
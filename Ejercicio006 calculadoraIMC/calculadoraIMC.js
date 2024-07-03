function calculaIMC(peso,altura){
    let IMC = peso/Math.pow((altura)/100,2);
    return IMC;
}